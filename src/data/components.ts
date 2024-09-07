import GradientBorderButton from "../components/GradientBorderButton.jsx";
import GradientHoverButton from "../components/GradientHoverButton.jsx";
import AnimatedBackgroundButton from "../components/AnimatedBackgroundButton.jsx";
import GradientLoader from "../components/GradientLoader.jsx";
import ThemeSwitch from "../components/ThemeSwitch.astro";
import GradientText from "../components/GradientText.jsx";
import FlipCard from "../components/FlipCard.jsx";
import InfiniteCarousel from "../components/InfiniteCarousel.astro";
import { getFileContent } from "../util/getFileContent.js";

const components_dir = "/src/components/";
export const COMPONENTS = [
  {
    title: "Gradient border button",
    component: GradientBorderButton,
    page: "gradient-border-button",
    files: [
      {
        framework: "React",
        code: await getFileContent(components_dir + "GradientBorderButton.jsx"),
      },
      {
        framework: "Astro",
        code: await getFileContent(
          components_dir + "GradientBorderButton.astro"
        ),
      },
    ],
  },
  {
    title: "Gradient hover button",
    component: GradientHoverButton,
    page: "gradient-hover-button",
    files: [
      {
        framework: "React",
        code: await getFileContent(components_dir + "GradientHoverButton.jsx"),
      },
      {
        framework: "Astro",
        code: await getFileContent(
          components_dir + "GradientHoverButton.astro"
        ),
      },
    ],
  },
  {
    title: "Animated background button",
    component: AnimatedBackgroundButton,
    page: "animated-background-button",
    files: [
      {
        framework: "React",
        code: await getFileContent(
          components_dir + "AnimatedBackgroundButton.jsx"
        ),
      },
      {
        framework: "Astro",
        code: await getFileContent(
          components_dir + "AnimatedBackgroundButton.astro"
        ),
      },
    ],
  },
  {
    title: "Gradient Loader",
    component: GradientLoader,
    page: "gradient-loader",
    files: [
      {
        framework: "React",
        code: await getFileContent(components_dir + "GradientLoader.jsx"),
      },
      {
        framework: "Astro",
        code: await getFileContent(components_dir + "GradientLoader.astro"),
      },
    ],
  },
  {
    title: "Theme switch",
    component: ThemeSwitch,
    page: "theme-switch",
    files: [
      {
        framework: "React",
        code: await getFileContent(components_dir + "ThemeSwitch.jsx"),
      },
      {
        framework: "Astro",
        code: await getFileContent(components_dir + "ThemeSwitch.astro"),
      },
    ],
    tailwind: `export default {
  // content: [...]
  darkMode: "selector"
  // plugins: [...]
}`,
  },
  {
    title: "Gradient text",
    component: GradientText,
    page: "gradient-text",
    files: [
      {
        framework: "React",
        code: await getFileContent(components_dir + "GradientText.jsx"),
      },
      {
        framework: "Astro",
        code: await getFileContent(components_dir + "GradientText.astro"),
      },
    ],
  },
  {
    title: "Flip card",
    component: FlipCard,
    page: "flip-card",
    files: [
      {
        framework: "React",
        code: await getFileContent(components_dir + "FlipCard.jsx"),
      },
      {
        framework: "Astro",
        code: await getFileContent(components_dir + "FlipCard.astro"),
      },
    ],
  },
  {
    title: "Infinite carousel",
    component: InfiniteCarousel,
    page: "infinite-carousel",
    files: [
      {
        framework: "React",
        code: await getFileContent(components_dir + "InfiniteCarousel.jsx"),
      },
      {
        framework: "Astro",
        code: await getFileContent(components_dir + "InfiniteCarousel.astro"),
      },
    ],
    tailwind: `theme: {
  extend: {
    animation: {
      scroll: "scroll 25s linear infinite",
    },
    keyframes: {
      scroll: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
  },
},
`,
  },
];
