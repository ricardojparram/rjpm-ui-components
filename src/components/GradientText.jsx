const GradientText = ({ text = "Sample text" }) => {
  return (
    <p class="bg-gradient-to-tr font-bold text-xl from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent hover:bg-gradient-to-tl z-10">
      {text}
    </p>
  );
};
export default GradientText;
