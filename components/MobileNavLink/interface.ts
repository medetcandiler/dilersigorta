export interface IMobileNavLink {
  label: string;
  hasChild?: boolean;
  child?: string[];
  href: string;
  onclick: () => void;
}
