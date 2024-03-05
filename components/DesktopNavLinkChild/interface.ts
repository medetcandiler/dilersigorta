export interface IDesktopNavLinkChild {
  isClicked?: boolean;
  desktopNavChild?: string[];
  onclick: () => void;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
