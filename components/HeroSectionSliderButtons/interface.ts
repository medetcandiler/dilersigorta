export interface IDataSliceItem {
  id: number;
  title: string;
  description: string;
  bg: string;
}

export interface IHeroSectionSliderButtons {
  currentSlice: number;
  setCurrentSlice: React.Dispatch<React.SetStateAction<number>>;
  dataSlice: IDataSliceItem[];
}
