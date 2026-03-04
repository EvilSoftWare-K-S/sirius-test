import { IChipProps } from '@shared/chip';

export interface IChipListProps {
  chips: Omit<IChipProps, 'selected' | 'onClick'>[];
  selectedValues?: (string | number)[];
  onSelectionChange?: (selectedValues: (string | number)[]) => void;
  maxWidth?: string | number;
  className?: string;
  multiple?: boolean;
}