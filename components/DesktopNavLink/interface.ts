export interface IDesktopNavLink {
  label: string;
  hasChild: boolean;
  child?: string[];
  isVisibleOnMd?: boolean;
  href: string;
}
