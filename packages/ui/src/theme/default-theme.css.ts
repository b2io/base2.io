import { assignVars, style } from "@vanilla-extract/css";

import { layers } from "./layers.css";
import { vars } from "./theme.css";

const defaultTheme = style({
  "@layer": {
    [layers.settings]: {
      fontFamily: vars.text.family.sans,
      vars: assignVars(vars, {
        border: {
          0: "0px",
          1: "1px",
          2: "2px",
          3: "4px",
          4: "8px",
        },
        color: {
          accent: "240 4.8% 95.9%",
          accentForeground: "240 5.9% 10%",
          background: "0 0% 100%",
          border: "240 5.9% 90%",
          card: "0 0% 100%",
          cardForeground: "240 10% 3.9%",
          destructive: "0 72.22% 50.59%",
          destructiveForeground: "0 0% 98%",
          foreground: "240 10% 3.9%",
          input: "240 5.9% 90%",
          muted: "240 4.8% 95.9%",
          mutedForeground: "240 3.8% 46.1%",
          overlay: "0 0% 0% / .8",
          popover: "0 0% 100%",
          popoverForeground: "240 10% 3.9%",
          primary: "240 5.9% 10%",
          primaryForeground: "0 0% 98%",
          ring: "240 5% 64.9%",
          secondary: "240 4.8% 95.9%",
          secondaryForeground: "240 5.9% 10%",
        },
        elevation: {
          dialog: "50",
        },
        opacity: {
          background: "1",
          foreground: "1",
        },
        radii: {
          /* eslint-disable sort-keys */
          none: "0px",
          sm: "0.125rem",
          default: "0.25rem",
          md: "0.375rem",
          lg: "0.5rem",
          xl: "0.75rem",
          "2xl": "1rem",
          "3xl": "1.5rem",
          full: "9999px",
          /* eslint-enable sort-keys */
        },
        shadow: {
          /* eslint-disable sort-keys */
          sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          default:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
          md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
          inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
          none: "0 0 #0000",
          /* eslint-enable sort-keys */
        },
        space: {
          0: "0px",
          0.5: "0.125rem",
          1: "0.25rem",
          1.5: "0.375rem",
          2: "0.5rem",
          2.5: "0.625rem",
          3: "0.75rem",
          3.5: "0.875rem",
          4: "1rem",
          5: "1.25rem",
          6: "1.5rem",
          7: "1.75rem",
          8: "2rem",
          9: "2.25rem",
          10: "2.5rem",
          11: "2.75rem",
          12: "3rem",
          14: "3.5rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          28: "7rem",
          32: "8rem",
          36: "9rem",
          40: "10rem",
          44: "11rem",
          48: "12rem",
          52: "13rem",
          56: "14rem",
          60: "15rem",
          64: "16rem",
          72: "18rem",
          80: "20rem",
          96: "24rem",
          px: "1px",
        },
        text: {
          family: {
            mono: "var(--font-mono)",
            sans: "var(--font-sans)",
          },
          leading: {
            /* eslint-disable sort-keys */
            3: ".75rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            none: "1",
            tight: "1.25",
            snug: "1.375",
            normal: "1.5",
            relaxed: "1.625",
            loose: "2",
            /* eslint-enable sort-keys */
          },
          size: {
            /* eslint-disable sort-keys */
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem",
            /* eslint-enable sort-keys */
          },
          tracking: {
            /* eslint-disable sort-keys */
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0em",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em",
            /* eslint-enable sort-keys */
          },
          weight: {
            /* eslint-disable sort-keys */
            thin: "100",
            extralight: "200",
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900",
            /* eslint-enable sort-keys */
          },
        },
      }),
    },
  },
});

export { defaultTheme };
