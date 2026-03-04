import { useCallback, useEffect, useState } from 'react';
import { IUseChipsVisibilityProps, IUseChipsVisibilityReturn, TChip } from '@features/chips';

export const useChipsVisibility = ({
  chips,
  containerRef,
  setIsPopupOpen,
}: IUseChipsVisibilityProps): IUseChipsVisibilityReturn => {
  const [visibleChips, setVisibleChips] = useState<TChip[]>([]);
  const [hiddenChips, setHiddenChips] = useState<TChip[]>([]);

  const calculateVisibleChips = useCallback(() => {
    if (!containerRef.current || !chips.length) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;

    const visible: TChip[] = [];
    let hidden: TChip[] = [];

    const tempMoreButton = document.createElement('button');
    tempMoreButton.className = 'chip-more-button';
    tempMoreButton.style.visibility = 'hidden';
    tempMoreButton.style.position = 'absolute';
    tempMoreButton.textContent = `+${chips.length}`;
    document.body.appendChild(tempMoreButton);
    const moreButtonWidth = tempMoreButton.offsetWidth + 16;
    document.body.removeChild(tempMoreButton);

    let currentWidth = 0;
    const chipGap = 8;

    for (let i = 0; i < chips.length; i++) {
      const chip = chips[i];
      const tempChip = document.createElement('div');
      tempChip.className = 'chip';
      tempChip.style.visibility = 'hidden';
      tempChip.style.position = 'absolute';
      tempChip.textContent = chip.label;
      document.body.appendChild(tempChip);
      const chipWidth = tempChip.offsetWidth + 16;
      document.body.removeChild(tempChip);

      if (currentWidth + chipWidth + (i > 0 ? chipGap : 0) <= containerWidth - moreButtonWidth) {
        visible.push(chip);
        currentWidth += chipWidth + (i > 0 ? chipGap : 0);
      } else {
        hidden = chips.slice(i);
        break;
      }
    }

    setVisibleChips(visible);
    setHiddenChips(hidden);
  }, [chips]);

  useEffect(() => {
    calculateVisibleChips();

    const handleResize = () => {
      calculateVisibleChips();
      setIsPopupOpen(false);
    };

    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [calculateVisibleChips]);

  return {
    visibleChips,
    hiddenChips,
  };
};
