import { globalLayer } from "@vanilla-extract/css";

const utilities = globalLayer("utilities");
const components = globalLayer({ parent: utilities }, "components");
const settings = globalLayer({ parent: components }, "settings");

export const layers = { components, settings, utilities };
