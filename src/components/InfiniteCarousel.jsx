const Icons = [
  { src: "/icons/Astro.svg", alt: "Astro framework logo" },
  { src: "/icons/React.svg", alt: "React framework logo" },
  { src: "/icons/Tailwind.svg", alt: "Tailwind logo" },
  { src: "/icons/Vue.svg", alt: "Vue framework logo" },
  { src: "/icons/PHP.svg", alt: "PHP logo" },
  { src: "/icons/MySQL.svg", alt: "MySQL logo" },
  { src: "/icons/Nuxt.svg", alt: "Nuxt framework logo" },
  { src: "/icons/Laravel.svg", alt: "Laravel framework logo" },
];
const InfiniteCarousel = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] text-3xl21">
      {[0, 1].map((ul) => (
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
          {Icons.map((i) => (
            <li>
              <img src={i.src} alt={i.alt} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
export default InfiniteCarousel;
