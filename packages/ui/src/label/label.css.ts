import { componentStyle } from "../theme/helpers/component-style";

const label = componentStyle({
  ":disabled": {
    cursor: "not-allowed",
    opacity: "70%",
  },
  fontSize: ".875rem",
  fontWeight: 500,
  lineHeight: 1,
});

export { label };
