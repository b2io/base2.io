export const palette = {
  coral: '#f73a52',
  darkBlue: '#05001e',
  offWhite: '#ecf0f4',
  workThumbnailBg: '#30308a',
};
export const colors = {
  ...palette,
  action: palette.coral,
  background: palette.darkBlue,
  text: palette.offWhite,
};

export type ThemeColor = keyof typeof colors;
