export interface IUsePopupProps {
  popupRef: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}
