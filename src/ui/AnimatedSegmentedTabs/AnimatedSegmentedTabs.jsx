import React, { useEffect, useRef, useState } from "react";

const DEFAULT_TABS = ["Overview", "Analytics", "Settings"];

export default function AnimatedSegmentedTabs({ tabs = DEFAULT_TABS, className = "" }) {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: "0px", transform: "translateX(0px)" });
  const containerRef = useRef(null);

  useEffect(() => {
    const updateIndicator = () => {
      if (!containerRef.current) return;

      const buttons = containerRef.current.querySelectorAll("button[data-tab-index]");
      const activeButton = buttons[activeTab];

      if (!activeButton) return;

      setIndicatorStyle({
        width: `${activeButton.offsetWidth}px`,
        transform: `translateX(${activeButton.offsetLeft}px)`,
      });
    };

    updateIndicator();
    
    // ResizeObserver ensures we catch container resizing
    const observer = new ResizeObserver(updateIndicator);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    // Handle late font loads
    if (document.fonts) {
      document.fonts.ready.then(updateIndicator);
    }
    // Fallback timer
    const timeout = setTimeout(updateIndicator, 50);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [activeTab, tabs]);

  return (
    <div className={`w-full max-w-xl ${className}`}>
      <div
        ref={containerRef}
        role="tablist"
        aria-label="Segmented tabs"
        className="relative inline-flex w-full rounded-xl border border-slate-700/80 bg-slate-900/70 p-1 shadow-inner"
      >
        <div
          aria-hidden="true"
          style={indicatorStyle}
          className="absolute top-1 left-0 h-[calc(100%-0.5rem)] rounded-lg bg-slate-100 shadow-sm transition-all duration-300 ease-out"
        />

        {tabs.map((tab, index) => {
          const isActive = index === activeTab;

          return (
            <button
              key={tab}
              type="button"
              role="tab"
              data-tab-index={index}
              aria-selected={isActive}
              aria-controls={`segmented-panel-${index}`}
              id={`segmented-tab-${index}`}
              onClick={() => setActiveTab(index)}
              className={`relative z-10 flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive ? "text-slate-900" : "text-slate-300 hover:text-slate-100"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <section
        role="tabpanel"
        id={`segmented-panel-${activeTab}`}
        aria-labelledby={`segmented-tab-${activeTab}`}
        className="mt-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-300"
      >
        <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-slate-700 bg-slate-800/50">
          <p className="text-slate-400">Content for <span className="font-semibold text-slate-200">{tabs[activeTab]}</span></p>
        </div>
      </section>
    </div>
  );
}
