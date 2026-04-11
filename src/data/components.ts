import {
  component as GradientBorderButton,
  reactRawCode as gradientBorderReactCode,
  astroRawCode as gradientBorderAstroCode,
} from "../ui/GradientBorderButton";
import {
  component as GradientHoverButton,
  reactRawCode as gradientHoverReactCode,
  astroRawCode as gradientHoverAstroCode,
} from "../ui/GradientHoverButton";
import {
  component as AnimatedBackgroundButton,
  reactRawCode as animatedBgReactCode,
  astroRawCode as animatedBgAstroCode,
} from "../ui/AnimatedBackgroundButton";
import {
  component as GradientLoader,
  reactRawCode as gradientLoaderReactCode,
  astroRawCode as gradientLoaderAstroCode,
} from "../ui/GradientLoader";
import {
  component as ThemeSwitch,
  reactRawCode as themeSwitchReactCode,
  astroRawCode as themeSwitchAstroCode,
} from "../ui/ThemeSwitch";
import {
  component as GradientText,
  reactRawCode as gradientTextReactCode,
  astroRawCode as gradientTextAstroCode,
} from "../ui/GradientText";
import {
  component as FlipCard,
  reactRawCode as flipCardReactCode,
  astroRawCode as flipCardAstroCode,
} from "../ui/FlipCard";
import {
  component as InfiniteCarousel,
  reactRawCode as infiniteCarouselReactCode,
  astroRawCode as infiniteCarouselAstroCode,
} from "../ui/InfiniteCarousel";
import {
  component as SpotlightCard,
  reactRawCode as spotlightCardReactCode,
  astroRawCode as spotlightCardAstroCode,
} from "../ui/SpotlightCard";
import {
  component as BentoGrid,
  reactRawCode as bentoGridReactCode,
  astroRawCode as bentoGridAstroCode,
} from "../ui/BentoGrid";
import {
  component as AnimatedSegmentedTabs,
  reactRawCode as animatedSegmentedTabsReactCode,
  astroRawCode as animatedSegmentedTabsAstroCode,
} from "../ui/AnimatedSegmentedTabs";
import {
  component as SmoothAccordion,
  reactRawCode as smoothAccordionReactCode,
  astroRawCode as smoothAccordionAstroCode,
} from "../ui/SmoothAccordion";
import {
  component as MagneticButton,
  reactRawCode as magneticButtonReactCode,
  astroRawCode as magneticButtonAstroCode,
} from "../ui/MagneticButton";

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
    title: "Magnetic Hover Button",
    component: MagneticButton,
    page: "magnetic-hover-button",
    files: [
      { framework: "React", code: magneticButtonReactCode },
      { framework: "Astro", code: magneticButtonAstroCode },
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
