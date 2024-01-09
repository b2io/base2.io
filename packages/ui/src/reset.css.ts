import { globalStyle } from "@vanilla-extract/css";

import { layers } from "./theme/layers.css";

globalStyle("*, ::before, ::after", {
  "@layer": {
    [layers.settings]: { border: "0 solid #e5e7eb", boxSizing: "border-box" },
  },
});

globalStyle(":host, html", {
  "@layer": {
    [layers.settings]: {
      fontFamily:
        "var(--font-sans), ui-sans-serif,system-ui,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
      fontFeatureSettings: "normal",
      fontVariationSettings: "normal",
      lineHeight: 1.5,
      MozTabSize: 4,
      tabSize: 4,
      WebkitTapHighlightColor: "transparent",
      WebkitTextSizeAdjust: "100%",
    },
  },
});

globalStyle("body", {
  "@layer": {
    [layers.settings]: { lineHeight: "inherit", margin: 0 },
  },
});

globalStyle("hr", {
  "@layer": {
    [layers.settings]: { borderTopWidth: "1px", color: "inherit", height: 0 },
  },
});

globalStyle("abbr:where([title])", {
  "@layer": {
    [layers.settings]: {
      textDecoration: "underline dotted",
      WebkitTextDecorationColor: "underline dotted",
    },
  },
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  "@layer": {
    [layers.settings]: { fontSize: "inherit", fontWeight: "inherit" },
  },
});

globalStyle("a", {
  "@layer": {
    [layers.settings]: { color: "inherit", textDecoration: "inherit" },
  },
});

globalStyle("b, strong", {
  "@layer": {
    [layers.settings]: { fontWeight: "bolder" },
  },
});

globalStyle("code, kbd, samp, pre", {
  "@layer": {
    [layers.settings]: {
      fontFamily:
        "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;",
      fontFeatureSettings: "normal",
      fontSize: "1em",
      fontVariationSettings: "normal",
    },
  },
});

globalStyle("small", {
  "@layer": {
    [layers.settings]: { fontSize: "80%" },
  },
});

globalStyle("sub, sup", {
  "@layer": {
    [layers.settings]: {
      fontSize: "75%",
      lineHeight: 0,
      position: "relative",
      verticalAlign: "baseline",
    },
  },
});

globalStyle("sub", {
  "@layer": {
    [layers.settings]: { bottom: "-.25em" },
  },
});

globalStyle("sup", {
  "@layer": {
    [layers.settings]: { top: "-.5em" },
  },
});

globalStyle("table", {
  "@layer": {
    [layers.settings]: {
      borderCollapse: "collapse",
      borderColor: "inherit",
      textIndent: 0,
    },
  },
});

globalStyle("button, input, optgroup, select, textarea", {
  "@layer": {
    [layers.settings]: {
      color: "inherit",
      fontFamily: "inherit",
      fontFeatureSettings: "inherit",
      fontSize: "100%",
      fontVariationSettings: "inherit",
      fontWeight: "inherit",
      lineHeight: "inherit",
      margin: 0,
      padding: 0,
    },
  },
});

globalStyle("button, select", {
  "@layer": {
    [layers.settings]: { textTransform: "none" },
  },
});

globalStyle("button, [type='button'], [type='reset'], [type='submit']", {
  "@layer": {
    [layers.settings]: {
      backgroundColor: "transparent",
      backgroundImage: "none",
      WebkitAppearance: "button",
    },
  },
});

globalStyle(":moz-focusring", {
  "@layer": {
    [layers.settings]: { outline: "auto" },
  },
});

globalStyle(":-moz-ui-invalid", {
  "@layer": {
    [layers.settings]: { boxShadow: "none" },
  },
});

globalStyle("legend", {
  "@layer": {
    [layers.settings]: { padding: 0 },
  },
});

globalStyle("progress", {
  "@layer": {
    [layers.settings]: { verticalAlign: "baseline" },
  },
});

globalStyle("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
  "@layer": {
    [layers.settings]: { height: "auto" },
  },
});

globalStyle("[type='search']", {
  "@layer": {
    [layers.settings]: { outlineOffset: "-2px", WebkitAppearance: "textfield" },
  },
});

globalStyle("::-webkit-search-decoration", {
  "@layer": {
    [layers.settings]: { WebkitAppearance: "none" },
  },
});

globalStyle("::-webkit-file-upload-button", {
  "@layer": {
    [layers.settings]: { font: "inherit", WebkitAppearance: "button" },
  },
});

globalStyle("summary", {
  "@layer": {
    [layers.settings]: { display: "list-item" },
  },
});

globalStyle("blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre", {
  "@layer": {
    [layers.settings]: { margin: 0 },
  },
});

globalStyle("fieldset", {
  "@layer": {
    [layers.settings]: { margin: 0 },
  },
});

globalStyle("fieldset, legend", {
  "@layer": {
    [layers.settings]: { padding: 0 },
  },
});

globalStyle("menu, ol, ul", {
  "@layer": {
    [layers.settings]: { listStyle: "none", margin: 0, padding: 0 },
  },
});

globalStyle("dialog", {
  "@layer": {
    [layers.settings]: { padding: 0 },
  },
});

globalStyle("textarea", {
  "@layer": {
    [layers.settings]: { resize: "vertical" },
  },
});

globalStyle("input::-moz-placeholder, textarea::-moz-placeholder", {
  "@layer": {
    [layers.settings]: { color: "#9ca3af", opacity: 1 },
  },
});

globalStyle("input::placeholder, textarea::placeholder", {
  "@layer": {
    [layers.settings]: { color: "#9ca3af", opacity: 1 },
  },
});

globalStyle("button, [role=button]", {
  "@layer": {
    [layers.settings]: { cursor: "pointer" },
  },
});

globalStyle(":disabled", {
  "@layer": {
    [layers.settings]: { cursor: "default" },
  },
});

globalStyle("audio, canvas, embed, iframe, img, object, svg, video", {
  "@layer": {
    [layers.settings]: { display: "block", verticalAlign: "middle" },
  },
});

globalStyle("img, video", {
  "@layer": {
    [layers.settings]: { height: "auto", maxWidth: "100%" },
  },
});

globalStyle("[hidden]", {
  "@layer": {
    [layers.settings]: { display: "none" },
  },
});
