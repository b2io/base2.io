const palette = {
  coral: '#f73a52',
  darkBlue: '#05001e',
  darkBlueAlt: '#0f0d34',
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

//  export const gradient = {
//   gradient:  'background-image=linear-gradient(322deg, rgba(15, 13, 52)83%, rgba(246, 58, 82) -31%)}',
// }

export type ThemeColor = keyof typeof colors;
