import AstroComponent from "./BentoGrid.astro";
import ReactComponent from "./BentoGrid.jsx";
import astroRawCode from "./BentoGrid.astro?raw";
import reactRawCode from "./BentoGrid.jsx?raw";

export const component = AstroComponent;
export const astro = AstroComponent;
export const react = ReactComponent;
export { astroRawCode, reactRawCode };
