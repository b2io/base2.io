export type ImageSource = {
  xs?: string;
  smMobile?: string;
  mobile?: string;
  sm?: string;
  tablet?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
  desktop?: string;
  largeDesktop?: string;
  xlDesktop?: string;
};

export type ImageProps = {
  alt: string;
  src: string | ImageSource;
};
