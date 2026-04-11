const GradientHoverButton = ({ title = "Hover me", shadow = false }) => {
  return (
    <button
      className={`bg-[size:200%_200%] bg-[position:20%_0%] hover:bg-[position:100%_100%] bg-gradient-to-br from-slate-900 via-slate-600 to-slate-700 border-2 border-slate-600 transition-all duration-200 focus:ring-2 focus:ring-slate-400 rounded-full z-10
        ${shadow && "[filter:drop-shadow(0.01px_0.01px_20px_#ffffff2f)]"}`}
    >
      <span className="flex justify-center items-center text-slate-200 text-base leading-none font-bold px-6 py-4">
        {title}
      </span>
    </button>
  );
};
export default GradientHoverButton;
