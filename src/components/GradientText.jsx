const GradientText = ({ text = "Sample text" }) => {
  return (
    <p class="bg-gradient-to-tr bg-[size:100%_200%] bg-[position:20%_0%] hover:bg-[position:90%_80%] transition-all duration-300 font-bold text-2xl from-blue-600 via-sky-400 to-indigo-600 bg-clip-text text-transparent z-10">
      {text}
    </p>
  );
};
export default GradientText;
