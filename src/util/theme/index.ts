import tinycolor from "tinycolor2";

const base = tinycolor("#FFFF");

export const OUTLINE_STANDARD = base.setAlpha(0.2).toRgbString();
export const OUTLINE_HOVER = base.setAlpha(0).toRgbString();
export const OUTLINE_FOCUS = base.setAlpha(0.6).toRgbString();

export const ICON_COLOUR = base.toRgbString();

export const BACKGROUND_STANDARD = base.setAlpha(0.2).toRgbString();
export const BACKGROUND_HOVER = base.setAlpha(0.4).toRgbString();
export const BACKGROUND_FOCUS = base.setAlpha(0.2).darken(30).toRgbString();