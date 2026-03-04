import { IChipProps } from '@shared/chip';

export interface IPopupProps {
  chips: IChipProps[];
  isOpen: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
  onChipClick?: (value: string | number) => void;
  selectedValues?: Set<string | number>;
}
