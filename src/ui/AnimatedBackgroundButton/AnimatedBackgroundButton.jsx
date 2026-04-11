const AnimatedBackgroundButton = ({ title = "Click me" }) => {
  return (
    <button className="flex items-center justify-center px-7 py-3 relative overflow-hidden rounded-full transition-all duration-100 font-bold cursor-pointer text-slate-200 [box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);] active:scale-90 hover:scale-95 ring-slate-200 bg-slate-900 border-2 border-slate-600 focus:ring-2 focus:ring-slate-400">
      <span className="z-20">{title}</span>
      <div className="absolute">
        <div className="bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 rounded-full inset-10 w-[10rem] h-[10rem] transition-all blur-xl animate-[spin_5s_linear_infinite] opacity-80 border-2 border-sky-900"></div>
      </div>
    </button>
  );
};

export default AnimatedBackgroundButton;
