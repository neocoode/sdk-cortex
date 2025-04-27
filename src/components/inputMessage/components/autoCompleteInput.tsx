'use client';

import React, { useEffect, useState } from 'react';
import InputAutoComplete from './inputAutoComplete';
import SuggestionList from './suggestionList';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

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

    const suggestionsState = useSelector((state: RootState) => state.suggestions);

    useEffect(() => {
        setSuggestions(suggestionsState.response);
    }, [suggestionsState]);

    useEffect(() => {
        setQuery(value);
    }, [value]);

    useEffect(() => {
        if (manualClose) {
            return; 
          }
        
          if (query.length < 7) { // 👈 Agora exige 7 ou mais caracteres
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
