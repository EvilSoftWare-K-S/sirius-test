export interface IUseChipClickProps {
  multiple: boolean;
  onSelectionChange?: ((selectedValues: (string | number)[]) => void) | undefined;
  selectedValues?: (string | number)[];
}
export interface IUseChipClickReturn {
  localSelected: Set<string | number>;
  handleChipClick: (value: string | number) => void;
}
