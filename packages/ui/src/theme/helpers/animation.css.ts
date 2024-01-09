import {
  assignVars,
  createVar,
  fallbackVar,
  keyframes,
  type StyleRule,
} from "@vanilla-extract/css";

const enterVars = {
  opacity: createVar(),
  rotate: createVar(),
  scale: createVar(),
  translateX: createVar(),
  translateY: createVar(),
};

const enter = keyframes({
  from: {
    opacity: fallbackVar(enterVars.opacity, "1"),
    transform: `translate3d(${fallbackVar(
      enterVars.translateX,
      "0"
    )}, ${fallbackVar(enterVars.translateY, "0")}, 0) scale3d(${fallbackVar(
      enterVars.scale,
      "1"
    )}, ${fallbackVar(enterVars.scale, "1")}, ${fallbackVar(
      enterVars.scale,
      "1"
    )}) rotate(${fallbackVar(enterVars.rotate, "0")})`,
  },
});

const exitVars = {
  opacity: createVar(),
  rotate: createVar(),
  scale: createVar(),
  translateX: createVar(),
  translateY: createVar(),
};

const exit = keyframes({
  to: {
    opacity: fallbackVar(exitVars.opacity, "1"),
    transform: `translate3d(${fallbackVar(
      exitVars.translateX,
      "0"
    )}, ${fallbackVar(exitVars.translateY, "0")}, 0) scale3d(${fallbackVar(
      exitVars.scale,
      "1"
    )}, ${fallbackVar(exitVars.scale, "1")}, ${fallbackVar(
      exitVars.scale,
      "1"
    )}) rotate(${fallbackVar(exitVars.rotate, "0")})`,
  },
});

type AnimationSettings = Partial<
  Record<keyof typeof exitVars, string> & {
    duration: StyleRule["animationDuration"];
  }
>;

function animateIn(settings?: AnimationSettings): StyleRule {
  1;
  return {
    animationDuration: settings?.duration ?? "150ms",
    animationName: enter,
    vars: assignVars(enterVars, {
      opacity: settings?.opacity ?? "initial",
      rotate: settings?.rotate ?? "initial",
      scale: settings?.scale ?? "initial",
      translateX: settings?.translateX ?? "initial",
      translateY: settings?.translateY ?? "initial",
    }),
  };
}

function animateOut(settings?: AnimationSettings): StyleRule {
  return {
    animationDuration: settings?.duration ?? "150ms",
    animationName: exit,
    vars: assignVars(exitVars, {
      opacity: settings?.opacity ?? "initial",
      rotate: settings?.rotate ?? "initial",
      scale: settings?.scale ?? "initial",
      translateX: settings?.translateX ?? "initial",
      translateY: settings?.translateY ?? "initial",
    }),
  };
}

function transitionProperties(properties: string[]): StyleRule {
  return {
    transitionDuration: "150ms",
    transitionProperty: properties.join(", "),
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  };
}

export { animateIn, animateOut, transitionProperties };
