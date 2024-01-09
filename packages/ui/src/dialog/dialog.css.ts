import { vars } from "../theme";
import { mediaQueries } from "../theme/breakpoints";
import {
  animateIn,
  animateOut,
  transitionProperties,
} from "../theme/helpers/animation.css";
import { color } from "../theme/helpers/color";
import { componentStyle } from "../theme/helpers/component-style";
import { focusRing } from "../theme/helpers/focus-ring.css";

const dialogOverlay = componentStyle({
  backgroundColor: color(vars.color.overlay),
  inset: 0,
  position: "fixed",
  selectors: {
    "&[data-state='closed']": animateOut({ opacity: "0" }),
    "&[data-state='open']": animateIn({ opacity: "0" }),
  },
  zIndex: vars.elevation.dialog,
});

const dialogContent = componentStyle({
  "@media": {
    [mediaQueries.sm]: {
      borderRadius: vars.radii.lg,
    },
  },
  backgroundColor: color(vars.color.background),
  borderWidth: "1px",
  boxShadow: vars.shadow.lg,
  display: "grid",
  gap: vars.space[4],
  left: "50%",
  maxWidth: "32rem",
  padding: vars.space[6],
  position: "fixed",
  selectors: {
    "&[data-state='closed']": animateOut({
      duration: "200ms",
      opacity: "0",
      scale: "95%",
      translateX: "-50%",
      translateY: "-48%",
    }),
    "&[data-state='open']": animateIn({
      duration: "200ms",
      opacity: "0",
      scale: "95%",
      translateX: "-50%",
      translateY: "-48%",
    }),
  },
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  zIndex: vars.elevation.dialog,
});

const dialogClose = componentStyle([
  focusRing(),
  {
    ":disabled": { pointerEvents: "none" },
    ":hover": { opacity: 1 },
    borderRadius: vars.radii.sm,
    opacity: 0.7,
    position: "absolute",
    right: vars.space[4],
    selectors: {
      "&[data-state='open']": {
        backgroundColor: color(vars.color.accent),
        color: color(vars.color.mutedForeground),
      },
    },
    top: vars.space[4],
    ...transitionProperties(["opacity"]),
  },
]);

const dialogHeader = componentStyle({
  "@media": {
    [mediaQueries.sm]: {
      textAlign: "left",
    },
  },
  display: "flex",
  flexDirection: "column",
  rowGap: vars.space[1.5],
  textAlign: "center",
});

const dialogFooter = componentStyle({
  "@media": {
    [mediaQueries.sm]: {
      flexDirection: "row",
      justifyItems: "end",
      rowGap: vars.space[2],
    },
  },
  display: "flex",
  flexDirection: "column-reverse",
});

const dialogTitle = componentStyle({
  fontSize: "1.125rem",
  fontWeight: 600,
  letterSpacing: "-.025em",
  lineHeight: 1,
});

const dialogDescription = componentStyle({
  color: color(vars.color.mutedForeground),
  fontSize: "0.75rem",
  lineHeight: "1rem",
});

export {
  dialogClose,
  dialogContent,
  dialogDescription,
  dialogFooter,
  dialogHeader,
  dialogOverlay,
  dialogTitle,
};
