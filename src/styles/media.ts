import { css, CSSObject } from "styled-components";

type DeviceType = "desktop" | "tablet" | "phone";

const sizes: Record<DeviceType, number> = {
  desktop: 1920,
  tablet: 1279,
  phone: 767,
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: CSSObject[]
    ) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<DeviceType, any>;

export { media };
