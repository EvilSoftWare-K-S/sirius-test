import { IChipProps } from '@shared/chip';

export type TChip = Omit<IChipProps, 'selected' | 'onClick'>;

export interface IUseChipsVisibilityProps {
  chips: TChip[];
  containerRef: React.RefObject<HTMLElement>;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IUseChipsVisibilityReturn {
  visibleChips: TChip[];
  hiddenChips: TChip[];
}
