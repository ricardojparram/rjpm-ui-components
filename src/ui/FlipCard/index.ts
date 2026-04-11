import AstroComponent from "./FlipCard.astro";
import ReactComponent from "./FlipCard.jsx";
import astroRawCode from "./FlipCard.astro?raw";
import reactRawCode from "./FlipCard.jsx?raw";

export const component = ReactComponent;
export const astro = AstroComponent;
export const react = ReactComponent;
export { astroRawCode, reactRawCode };
