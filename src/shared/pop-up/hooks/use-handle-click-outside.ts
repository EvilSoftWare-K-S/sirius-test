import { useEffect } from 'react';
import { IUsePopupProps } from '@shared/pop-up';

export const useHandleClickOutside = ({
  popupRef,
  isOpen,
  onClose,
  anchorEl,
}: IUsePopupProps): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, anchorEl]);
};
