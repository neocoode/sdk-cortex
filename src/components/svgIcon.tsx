/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';

interface SvgIconProps {
  name: string; // ex: "send", "edit", "magic"
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onClick?: (e?:any) => void;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  width = 42,
  height = 42,
  className = '',
  alt = '',
  onClick,
}) => {
  return (
    <img
      onClick={onClick && onClick}
      src={`/assets/svg/${name}.svg`}
      alt={alt || name}
      width={width}
      height={height}
      className={`rounded-full p-1 ${className}`}
      loading="lazy"
      draggable={false}
    />
  );
};

export default SvgIcon;
