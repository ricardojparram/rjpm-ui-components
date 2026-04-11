import AstroComponent from "./GradientLoader.astro";
import ReactComponent from "./GradientLoader.jsx";
import astroRawCode from "./GradientLoader.astro?raw";
import reactRawCode from "./GradientLoader.jsx?raw";

export const component = ReactComponent;
export const astro = AstroComponent;
export const react = ReactComponent;
export { astroRawCode, reactRawCode };
