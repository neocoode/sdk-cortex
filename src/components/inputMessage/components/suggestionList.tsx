'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface SuggestionListProps {
  suggestions: string[];
  activeIndex: number;
  onSelect: (value: string) => void;
  onHover: (index: number) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const SuggestionList: React.FC<SuggestionListProps> = ({
  suggestions,
  activeIndex,
  onSelect,
  onHover,
  inputRef,
}) => {
  const [position, setPosition] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();

      const itemHeight = 48; // altura de cada item
      const maxItems = 5;
      const visibleItems = Math.min(suggestions.length, maxItems);
      const height = itemHeight * visibleItems;

      setPosition({
        top: rect.top - height - 8, // 8px de margem acima do input
        left: rect.left,
        width: rect.width,
      });
    }
  }, [inputRef.current, suggestions.length]);

  if (typeof window === 'undefined') {
    return null;
  }

  const itemHeight = 48; // altura de cada sugestão
  const maxItems = 5;
  const visibleItems = Math.min(suggestions.length, maxItems);
  const dynamicHeight = itemHeight * visibleItems;

  return createPortal(
    <div
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        width: position.width,
        zIndex: 9999,
        height: dynamicHeight, // 👈 altura ajustada dinamicamente
        overflowY: suggestions.length > maxItems ? 'auto' : 'hidden', // scroll só se ultrapassar
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          onMouseEnter={() => onHover(index)}
          onClick={() => onSelect(suggestion)}
          className={`
            cursor-pointer select-none py-2 px-3
            ${index === activeIndex ? 'bg-blue-600 text-white' : 'text-gray-900'}
          `}
          style={{ height: itemHeight }}
        >
          {suggestion}
        </div>
      ))}
    </div>,
    document.body
  );
};

export default SuggestionList;
