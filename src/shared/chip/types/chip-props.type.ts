export interface IChipProps {
  label: string;
  value: string | number;
  selected?: boolean;
  onClick?: (value: string | number) => void;
  className?: string;
  disabled?: boolean;
}