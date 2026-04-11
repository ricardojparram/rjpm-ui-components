import { useRef } from "react";

const MagneticButton = ({ title = "Magnetic Hover Button" }) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;

    buttonRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="px-7 py-3 rounded-full font-bold text-slate-900 bg-slate-100 hover:bg-white transition-all duration-300 ease-out shadow-lg"
    >
      {title}
    </button>
  );
};

export default MagneticButton;
