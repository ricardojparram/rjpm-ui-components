const GradientLoader = () => {
  return (
    <div className="relative inline-flex rounded-full p-1 overflow-hidden max-w-fit">
      <div className="absolute -inset-[900%] animate-spin bg-[conic-gradient(from_90deg_at_30%_50%,#009cc4_0%,#00b8e6_80%,#ccffda_100%)] blur-lg"></div>
      <span className="relative p-5 bg-slate-950 rounded-full"></span>
    </div>
  );
};

export default GradientLoader;
