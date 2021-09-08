const palette = {
  coral: '#f73a52',
  darkBlue: '#05001e',
  darkBlueAlt: '#0f0d34',
  lightBlue: '#3F51B5',
  midBlue: '#18174a',
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
