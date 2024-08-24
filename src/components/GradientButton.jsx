const GradientButton = ({ title = "Example", shadow = false, ...props }) => {
  return (
    <button
      className="relative inline-flex group/gradientBtn"
      onClick={props.onClick}
    >
      {shadow && (
        <div className="absolute transition-all duration-1000 opacity-70 inset-1 bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 rounded-xl blur-xl group-hover/gradientBtn:opacity-100 group-hover/gradientBtn:duration-200"></div>
      )}
      <div className="relative inline-flex rounded-full p-[2px] overflow-hidden transition-transform group-hover/gradientBtn:scale-95">
        <div className="absolute transition-all duration-1000 -inset-[300%] animate-[spin_2s_linear_infinite] hover:scale-95 bg-[conic-gradient(from_90deg_at_50%_50%,#05b8e3_50%,#00a1b0_50%,#ccffda_100%)] blur-lg group-hover/gradientBtn:duration-200"></div>
        <span
          className={`relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 backdrop-blur-3xl bg-slate-900 rounded-3xl focus:outline-none focus:ring-2 focus:ring-cyan-400`}
        >
          {title}
        </span>
      </div>
    </button>
  );
};
export default GradientButton;
