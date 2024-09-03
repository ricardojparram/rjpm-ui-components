const FlipCard = () => {
  return (
    <div className="flip-card">
      <div className="bg-transparent w-[240px] h-[200px] [perspective:260px] group/flipCard bx">
        <div className="relative w-full h-full text-center transition-transform duration-500 [transform-style:preserve-3d] group-hover/flipCard:[transform:rotateY(180deg)]">
          <div className="absolute flex items-center justify-center w-full h-full rounded-xl [backface-visibility:hidden] [transform-style:preserve-3d] border-2 border-slate-700 bg-gradient-to-b from-slate-900 to-slate-800 bg-slate-900 text-slate-100">
            <div className="[transform:translateZ(30px)] [filter:drop-shadow(#1c1c1c_0_0_10px)]">
              <p className="text-xl font-extrabold font-sans">Hover me</p>
            </div>
          </div>
          <div className="absolute flex items-center justify-center w-full h-full rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] [transform-style:preserve-3d] border-2 border-slate-700 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            <div className="[transform:translateZ(30px)] text-6xl [filter:drop-shadow(#1c1c1c_0_0_10px)]">
              😉
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
