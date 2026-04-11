import AstroComponent from "./SpotlightCard.astro";
import ReactComponent from "./SpotlightCard.jsx";
import astroRawCode from "./SpotlightCard.astro?raw";
import reactRawCode from "./SpotlightCard.jsx?raw";

export const component = AstroComponent;
export const astro = AstroComponent;
export const react = ReactComponent;
export { astroRawCode, reactRawCode };
