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
    path: "/src/components/GradientBorderButton.jsx",
  },
  {
    title: "Gradient hover button",
    component: GradientHoverButton,
    page: "gradient-hover-button",
    path: "/src/components/GradientHoverButton.jsx",
  },
  {
    title: "Animated background button",
    component: AnimatedBackgroundButton,
    page: "animated-background-button",
    path: "/src/components/AnimatedBackgroundButton.jsx",
  },
  {
    title: "Gradient Loader",
    component: GradientLoader,
    page: "gradient-loader",
    path: "/src/components/GradientLoader.jsx",
  },
  {
    title: "Theme switch",
    component: ThemeSwitch,
    page: "theme-switch",
    path: "/src/components/ThemeSwitch.jsx",
  },
  {
    title: "Gradient text",
    component: GradientText,
    page: "gradient-text",
    path: "/src/components/GradientText.jsx",
  },
  {
    title: "Flip card",
    component: FlipCard,
    page: "flip-card",
    path: "/src/components/FlipCard.jsx",
  },
  {
    title: "Infinite carousel",
    component: InfiniteCarousel,
    page: "infinite-carousel",
    path: "/src/components/InfiniteCarousel.jsx",
  },
];
