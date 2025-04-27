'use client';

import React, { useEffect, useState } from 'react';
import InputAutoComplete from './inputAutoComplete';
import SuggestionList from './suggestionList';

interface AutoCompleteInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    inputRef?: React.RefObject<HTMLInputElement>;
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
    value,
    onChange,
    placeholder = 'Pergunte alguma coisa',
    onKeyDown,
    inputRef
}) => {
    const [query, setQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [manualClose, setManualClose] = useState(false); // 👈 Controle de fechamento manual

    useEffect(() => {
        setSuggestions([
            'api', 'orders', 'api orders', 'api orders 1', 'api orders 2',
            'api orders 3', 'api orders 4', 'api orders 5', 'api orders 6',
            'api orders 7', 'api orders 8', 'api orders 9', 'api orders 10', 'achou', 'carro 1', 'carro 2'
        ]);
    }, []);

    useEffect(() => {
        setQuery(value);
    }, [value]);

    useEffect(() => {
        if (manualClose) {
            return; // 👈 Se foi fechado manualmente, não reabre a lista
        }

        if (query === '') {
            setFilteredSuggestions([]);
            setActiveIndex(-1);
            return;
        }

        const filtered = suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredSuggestions(filtered);
        setActiveIndex(-1);
    }, [query, suggestions, manualClose]);

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (filteredSuggestions.length > 0) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActiveIndex((prev) => (prev + 1) % filteredSuggestions.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActiveIndex((prev) => (prev - 1 + filteredSuggestions.length) % filteredSuggestions.length);
            } else if (e.key === 'Enter') {
                if (activeIndex >= 0 && activeIndex < filteredSuggestions.length) {
                    const selected = filteredSuggestions[activeIndex];

                    // Se o input já é igual à sugestão, apenas fecha
                    if (query === selected) {
                        setFilteredSuggestions([]);
                        setActiveIndex(-1);
                        setManualClose(true); // 👈 Marca fechamento manual
                        e.preventDefault();
                        return;
                    }

                    // Se é diferente, atualiza o input e fecha
                    const fakeEvent = {
                        target: { value: selected }
                    } as React.ChangeEvent<HTMLInputElement>;
                    onChange(fakeEvent);
                    setQuery(selected);
                    setFilteredSuggestions([]);
                    setActiveIndex(-1);
                    setManualClose(true); // 👈 Marca fechamento manual
                    e.preventDefault();
                } else {
                    onKeyDown?.(e);
                }
            } else if (e.key === 'Escape') {
                e.preventDefault();
                setFilteredSuggestions([]);
                setActiveIndex(-1);
                setManualClose(true); // 👈 Marca fechamento manual
            }
        } else {
            if (e.key === 'Enter') {
                onKeyDown?.(e);
            }
        }
    };

    return (
        <div className="relative flex-1">
            <InputAutoComplete
                ref={inputRef}
                value={query}
                onChange={(e) => {
                    setManualClose(false); // 👈 Teclou algo? Libera a reabertura
                    setQuery(e.target.value);
                    onChange(e);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder={placeholder}
            />

            {filteredSuggestions.length > 0 && inputRef && (
                <SuggestionList
                    suggestions={filteredSuggestions}
                    activeIndex={activeIndex}
                    onSelect={(value) => {
                        const fakeEvent = {
                            target: { value }
                        } as React.ChangeEvent<HTMLInputElement>;
                        onChange(fakeEvent);
                        setQuery(value);
                        setFilteredSuggestions([]);
                        setActiveIndex(-1);
                        setManualClose(true); // 👈 Marca fechamento manual ao clicar
                    }}
                    onHover={(index) => setActiveIndex(index)}
                    inputRef={inputRef}
                />
            )}
        </div>
    );
};

export default AutoCompleteInput;
