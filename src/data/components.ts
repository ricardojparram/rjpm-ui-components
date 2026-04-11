import GradientBorderButton from "../ui/GradientBorderButton/GradientBorderButton.jsx";
import gradientBorderReactCode from "../ui/GradientBorderButton/GradientBorderButton.jsx?raw";
import gradientBorderAstroCode from "../ui/GradientBorderButton/GradientBorderButton.astro?raw";

import GradientHoverButton from "../ui/GradientHoverButton/GradientHoverButton.jsx";
import gradientHoverReactCode from "../ui/GradientHoverButton/GradientHoverButton.jsx?raw";
import gradientHoverAstroCode from "../ui/GradientHoverButton/GradientHoverButton.astro?raw";

import AnimatedBackgroundButton from "../ui/AnimatedBackgroundButton/AnimatedBackgroundButton.jsx";
import animatedBgReactCode from "../ui/AnimatedBackgroundButton/AnimatedBackgroundButton.jsx?raw";
import animatedBgAstroCode from "../ui/AnimatedBackgroundButton/AnimatedBackgroundButton.astro?raw";

import GradientLoader from "../ui/GradientLoader/GradientLoader.jsx";
import gradientLoaderReactCode from "../ui/GradientLoader/GradientLoader.jsx?raw";
import gradientLoaderAstroCode from "../ui/GradientLoader/GradientLoader.astro?raw";

import ThemeSwitch from "../ui/ThemeSwitch/ThemeSwitch.astro";
import themeSwitchReactCode from "../ui/ThemeSwitch/ThemeSwitch.jsx?raw";
import themeSwitchAstroCode from "../ui/ThemeSwitch/ThemeSwitch.astro?raw";

import GradientText from "../ui/GradientText/GradientText.jsx";
import gradientTextReactCode from "../ui/GradientText/GradientText.jsx?raw";
import gradientTextAstroCode from "../ui/GradientText/GradientText.astro?raw";

import FlipCard from "../ui/FlipCard/FlipCard.jsx";
import flipCardReactCode from "../ui/FlipCard/FlipCard.jsx?raw";
import flipCardAstroCode from "../ui/FlipCard/FlipCard.astro?raw";

import InfiniteCarousel from "../ui/InfiniteCarousel/InfiniteCarousel.astro";
import infiniteCarouselReactCode from "../ui/InfiniteCarousel/InfiniteCarousel.jsx?raw";
import infiniteCarouselAstroCode from "../ui/InfiniteCarousel/InfiniteCarousel.astro?raw";

import SpotlightCard from "../ui/SpotlightCard/SpotlightCard.astro";
import spotlightCardReactCode from "../ui/SpotlightCard/SpotlightCard.jsx?raw";
import spotlightCardAstroCode from "../ui/SpotlightCard/SpotlightCard.astro?raw";

import BentoGrid from "../ui/BentoGrid/BentoGrid.astro";
import bentoGridReactCode from "../ui/BentoGrid/BentoGrid.jsx?raw";
import bentoGridAstroCode from "../ui/BentoGrid/BentoGrid.astro?raw";

import AnimatedSegmentedTabs from "../ui/AnimatedSegmentedTabs/AnimatedSegmentedTabs.astro";
import animatedSegmentedTabsReactCode from "../ui/AnimatedSegmentedTabs/AnimatedSegmentedTabs.jsx?raw";
import animatedSegmentedTabsAstroCode from "../ui/AnimatedSegmentedTabs/AnimatedSegmentedTabs.astro?raw";

import SmoothAccordion from "../ui/SmoothAccordion/SmoothAccordion.astro";
import smoothAccordionReactCode from "../ui/SmoothAccordion/SmoothAccordion.jsx?raw";
import smoothAccordionAstroCode from "../ui/SmoothAccordion/SmoothAccordion.astro?raw";

export const COMPONENTS = [
{
    title: "Bento Grid",
    className: "md:col-span-2",
    component: BentoGrid,
    page: "bento-grid",
    files: [
      { framework: "React", code: bentoGridReactCode },
      { framework: "Astro", code: bentoGridAstroCode },
    ],
  },
{
    title: "Animated Segmented Tabs",
    component: AnimatedSegmentedTabs,
    page: "animated-segmented-tabs",
    files: [
      { framework: "React", code: animatedSegmentedTabsReactCode },
      { framework: "Astro", code: animatedSegmentedTabsAstroCode },
    ],
  },
{
    title: "Spotlight Card",
    component: SpotlightCard,
    page: "spotlight-card",
    files: [
      { framework: "React", code: spotlightCardReactCode },
      { framework: "Astro", code: spotlightCardAstroCode },
    ],
  },
{
    title: "Infinite carousel",
    component: InfiniteCarousel,
    page: "infinite-carousel",
    className: "md:col-span-2",
    files: [
      { framework: "React", code: infiniteCarouselReactCode },
      { framework: "Astro", code: infiniteCarouselAstroCode },
    ],
    css: `@theme {
  --animate-scroll: scroll 25s linear infinite;

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
}
`,
  },
{
    title: "Smooth Accordion",
    component: SmoothAccordion,
    page: "smooth-accordion",
    files: [
      { framework: "React", code: smoothAccordionReactCode },
      { framework: "Astro", code: smoothAccordionAstroCode },
    ],
  },
{
    title: "Flip card",
    component: FlipCard,
    page: "flip-card",
    files: [
      { framework: "React", code: flipCardReactCode },
      { framework: "Astro", code: flipCardAstroCode },
    ],
  },
{
    title: "Animated background button",
    component: AnimatedBackgroundButton,
    page: "animated-background-button",
    files: [
      { framework: "React", code: animatedBgReactCode },
      { framework: "Astro", code: animatedBgAstroCode },
    ],
  },
{
    title: "Gradient border button",
    component: GradientBorderButton,
    page: "gradient-border-button",
    files: [
      { framework: "React", code: gradientBorderReactCode },
      { framework: "Astro", code: gradientBorderAstroCode },
    ],
  },
{
    title: "Gradient hover button",
    component: GradientHoverButton,
    page: "gradient-hover-button",
    files: [
      { framework: "React", code: gradientHoverReactCode },
      { framework: "Astro", code: gradientHoverAstroCode },
    ],
  },
{
    title: "Gradient text",
    component: GradientText,
    page: "gradient-text",
    files: [
      { framework: "React", code: gradientTextReactCode },
      { framework: "Astro", code: gradientTextAstroCode },
    ],
  },
{
    title: "Gradient Loader",
    component: GradientLoader,
    page: "gradient-loader",
    files: [
      { framework: "React", code: gradientLoaderReactCode },
      { framework: "Astro", code: gradientLoaderAstroCode },
    ],
  },
{
    title: "Theme switch",
    component: ThemeSwitch,
    page: "theme-switch",
    files: [
      { framework: "React", code: themeSwitchReactCode },
      { framework: "Astro", code: themeSwitchAstroCode },
    ],
    css: `@custom-variant dark (&:where(.dark, .dark *));`,
  }
];
