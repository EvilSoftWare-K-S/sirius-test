import React, { useState, useRef } from 'react';
import './ChipList.css';
import { Chip } from '@shared/chip';
import { Popup } from '@shared/pop-up';
import { IChipListProps, useChipsVisibility, useChipClick } from '@features/chips';

export const ChipList: React.FC<IChipListProps> = ({
  chips,
  selectedValues = [],
  onSelectionChange,
  maxWidth = '100%',
  className = '',
  multiple = true,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  const { localSelected, handleChipClick } = useChipClick({
    multiple,
    onSelectionChange,
    selectedValues,
  });

  const { visibleChips, hiddenChips } = useChipsVisibility({ chips, containerRef, setIsPopupOpen });

  return (
    <div ref={containerRef} className={`chip-list-container ${className}`} style={{ maxWidth }}>
      <div className='chip-list'>
        {visibleChips.map((chip) => (
          <Chip
            key={chip.value}
            {...chip}
            selected={localSelected.has(chip.value)}
            onClick={handleChipClick}
          />
        ))}

        {hiddenChips.length > 0 && (
          <>
            <button
              ref={moreButtonRef}
              className='chip-more-button'
              onClick={() => setIsPopupOpen(!isPopupOpen)}
              aria-label={`Показать еще ${hiddenChips.length} элементов`}
            >
              +{hiddenChips.length}
            </button>

            <Popup
              chips={hiddenChips}
              isOpen={isPopupOpen}
              onClose={() => setIsPopupOpen(false)}
              anchorEl={moreButtonRef.current}
              onChipClick={handleChipClick}
              selectedValues={localSelected}
            />
          </>
        )}
      </div>
    </div>
  );
};
