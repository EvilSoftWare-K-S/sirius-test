import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';
import { Chip } from '@shared/chip';
import { IPopupProps, useHandleClickOutside } from '@shared/pop-up';

export const Popup: React.FC<IPopupProps> = ({
  chips,
  isOpen,
  onClose,
  anchorEl,
  onChipClick,
  selectedValues = new Set(),
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  useHandleClickOutside({ popupRef, isOpen, onClose, anchorEl });

  if (!isOpen || !anchorEl) return null;

  const rect = anchorEl.getBoundingClientRect();
  const style: React.CSSProperties = {
    position: 'absolute',
    top: rect.bottom + window.scrollY + 8,
    left: rect.right - 200,
    zIndex: 1000,
  };

  return ReactDOM.createPortal(
    <div ref={popupRef} className='popup' style={style}>
      <div className='popup-arrow' />
      <div className='popup-content'>
        {chips.map((chip) => (
          <Chip
            key={chip.value}
            {...chip}
            selected={selectedValues.has(chip.value)}
            onClick={onChipClick}
          />
        ))}
      </div>
    </div>,
    document.body,
  );
};
