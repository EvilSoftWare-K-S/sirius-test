import React from 'react';
import './Chip.css';
import { IChipProps } from '@shared/chip';

export const Chip: React.FC<IChipProps> = ({
  label,
  value,
  selected = false,
  onClick,
  className = '',
  disabled = false,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(value);
    }
  };

  return (
    <div
      className={`chip ${selected ? 'chip-selected' : ''} ${disabled ? 'chip-disabled' : ''} ${className}`}
      onClick={handleClick}
      role='button'
      tabIndex={disabled ? -1 : 0}
      aria-pressed={selected}
      aria-disabled={disabled}
      aria-label={`Выбрать элемент ${label}`}
    >
      <span className='chip-label'>{label}</span>
      {selected && <span className='chip-checkmark'>+</span>}
    </div>
  );
};
