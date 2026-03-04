import { useCallback, useEffect, useState } from 'react';
import { IUseChipClickProps, IUseChipClickReturn } from '@features/chip-List';

export const useChipClick = ({
  multiple,
  onSelectionChange,
  selectedValues,
}: IUseChipClickProps): IUseChipClickReturn => {
  const [localSelected, setLocalSelected] = useState<Set<string | number>>(new Set(selectedValues));
  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(Array.from(localSelected));
    }
  }, [localSelected]);

  const handleChipClick = useCallback(
    (value: string | number) => {
      setLocalSelected((prev) => {
        const newSet = new Set(prev);

        if (multiple) {
          if (newSet.has(value)) {
            newSet.delete(value);
          } else {
            newSet.add(value);
          }
        } else {
          newSet.clear();
          newSet.add(value);
        }
        return newSet;
      });
    },
    [multiple],
  );
  return { localSelected, handleChipClick };
};
