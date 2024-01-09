import { vars } from "../theme.css";

const color = (themeColor: string) => `hsl(${themeColor})`;

const backgroundColor = (themeColor: string) =>
  `hsl(${themeColor} / ${vars.opacity.background})`;

const foregroundColor = (themeColor: string) =>
  `hsl(${themeColor} / ${vars.opacity.foreground})`;

export { backgroundColor, color, foregroundColor };
