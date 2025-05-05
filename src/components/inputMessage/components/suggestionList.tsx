/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useSession } from '@/contexts/sessionContext';
import { useTheme } from '@/themes/themeContext';
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
  const { isLoggedIn } = useSession();
  const [position, setPosition] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 });
  const { themeSelected } = useTheme();

  useEffect(() => {
    if (!isLoggedIn) return;
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
  }, [inputRef.current, suggestions.length, isLoggedIn]);

  if (typeof window === 'undefined') {
    return null;
  }

  const itemHeight = 48; // altura de cada sugestão
  const maxItems = 5;
  const visibleItems = Math.min(suggestions.length, maxItems);
  const dynamicHeight = itemHeight * visibleItems;
  
  if (!isLoggedIn) return <></>;

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
        backgroundColor: themeSelected.colors.backgroundSuggestionPrimary,
      }}
    >
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          onMouseEnter={() => onHover(index)}
          onClick={() => onSelect(suggestion)}
          className={`
            cursor-pointer select-none py-3 px-3 justify-center 
            ${themeSelected.typography.fontSize.medium}
            ${themeSelected.borders.suggestions}
            ${index === activeIndex ? `
                  ${themeSelected.colors.backgroundSuggestionSecondary} ${themeSelected.colors.colorSuggestionSecondary}
              ` : `
                  ${themeSelected.colors.backgroundSuggestionPrimary} ${themeSelected.colors.colorSuggestionPrimary}
              `}
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
