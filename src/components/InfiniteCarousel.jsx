import { React, Vue, PgSQL, Nuxt, MySQL, PHP, Tailwind, Nest, Docker, } from "./icons/Icons";
const Icons = [React, Vue, PgSQL, Nuxt, MySQL, PHP, Tailwind, Nest, Docker];
const InfiniteCarousel = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] text-3xl21">
      {[0, 1].map((ul) => (
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
          {Icons.map((Icon) => (
            <li>
              <Icon className="w-12 h-12" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
export default InfiniteCarousel;
