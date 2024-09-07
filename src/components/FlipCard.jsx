const FlipCard = () => {
  return (
    <div className="flip-card">
      <div className="bg-transparent w-[240px] h-[200px] [perspective:260px] group/flipCard bx">
        <div className="relative w-full h-full text-center transition-transform duration-500 [transform-style:preserve-3d] group-hover/flipCard:[transform:rotateY(180deg)]">
          <div className="absolute flex items-center justify-center w-full h-full rounded-xl [backface-visibility:hidden] [transform-style:preserve-3d] bg-gradient-to-t from-[#0a0b1a] to-slate-800 shadow-[inset_0_4px_15px_#617aff14,_inset_3px_3px_20px_rgba(60,_60,_60,_0.55)] text-slate-100">
            <div className="[transform:translateZ(30px)] [filter:drop-shadow(#1c1c1c_0_0_10px)]">
              <p className="text-xl font-extrabold font-sans">Hover me</p>
            </div>
          </div>
          <div className="absolute flex items-center justify-center w-full h-full rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] [transform-style:preserve-3d] bg-gradient-to-t from-[#0a0b1a] to-slate-800 shadow-[inset_0_4px_15px_#617aff14,_inset_3px_3px_20px_rgba(60,_60,_60,_0.55)] text-white">
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
