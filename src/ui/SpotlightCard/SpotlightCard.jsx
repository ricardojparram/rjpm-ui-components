import React, { useRef } from "react";

export default function SpotlightCard({ children, className = "" }) {
  const divRef = useRef(null);
  const overlayRef = useRef(null);
  const innerOverlayRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current || !overlayRef.current || !innerOverlayRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // The outer overlay handles the border glow (brighter)
    overlayRef.current.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.6), transparent 40%)`;
    // The inner overlay handles the subtle background glow (darker)
    innerOverlayRef.current.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.05), transparent 40%)`;
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative flex flex-col w-full max-w-lg overflow-hidden rounded-xl bg-slate-800 p-[1px] group ${className}`}
    >
      <div
        ref={overlayRef}
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
      />
      <div className="relative z-10 flex flex-1 flex-col justify-center rounded-[11px] bg-slate-950 p-8 overflow-hidden">
        <div
          ref={innerOverlayRef}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        />
        <div className="relative z-20">
          {children || (
            <>
              <h3 className="text-xl font-bold text-slate-200 mb-2">Smart Suggestions</h3>
            <p className="text-slate-400">
              Unlock AI-powered insights to optimize your daily workflows and boost productivity.
            </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

