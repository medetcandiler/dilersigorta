export interface IMobileNavLinkChild {
  desktopNavChild?: string[]
  isClicked?: boolean;
  onclick: () => void;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}


