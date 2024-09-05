import GradientBorderButton from "../components/GradientBorderButton.jsx";
import GradientHoverButton from "../components/GradientHoverButton.jsx";
import AnimatedBackgroundButton from "../components/AnimatedBackgroundButton.jsx";
import GradientLoader from "../components/GradientLoader.jsx";
import ThemeSwitch from "../components/ThemeSwitch.astro";
import GradientText from "../components/GradientText.jsx";
import FlipCard from "../components/FlipCard.astro";
import InfiniteCarousel from "../components/InfiniteCarousel.astro";

export const COMPONENTS = [
  {
    title: "Gradient border button",
    component: GradientBorderButton,
    page: "gradient-border-button",
    filename: "GradientBorderButton.jsx",
  },
  {
    title: "Gradient hover button",
    component: GradientHoverButton,
    page: "gradient-hover-button",
    filename: "GradientHoverButton.jsx",
  },
  {
    title: "Animated background button",
    component: AnimatedBackgroundButton,
    page: "animated-background-button",
    filename: "AnimatedBackgroundButton.jsx",
  },
  {
    title: "Gradient Loader",
    component: GradientLoader,
    page: "gradient-loader",
    filename: "GradientLoader.jsx",
  },
  {
    title: "Theme switch",
    component: ThemeSwitch,
    page: "theme-switch",
    filename: "ThemeSwitch.jsx",
  },
  {
    title: "Gradient text",
    component: GradientText,
    page: "gradient-text",
    filename: "GradientText.jsx",
  },
  {
    title: "Flip card",
    component: FlipCard,
    page: "flip-card",
    filename: "FlipCard.jsx",
  },
  {
    title: "Infinite carousel",
    component: InfiniteCarousel,
    page: "infinite-carousel",
    filename: "InfiniteCarousel.jsx",
    tailwind: `{
  animation: {
    scroll: "scroll 25s linear infinite",
  },
  keyframes: {
    scroll: {
      from: { transform: "translateX(0)" },
      to: { transform: "translateX(-100%)" },
    },
  },
}
`,
  },
];
