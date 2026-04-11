import React from "react";

const DEFAULT_ITEMS = [
  {
    title: "Is there a free trial available?",
    content: "Yes, you can try our platform for free for 14 days. No credit card required.",
  },
  {
    title: "Can I upgrade my plan later?",
    content: "Of course. You can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    title: "Do you offer technical support?",
    content: "All plans include access to our community forum and standard email support.",
  },
];

export default function SmoothAccordion({ items = DEFAULT_ITEMS, className = "" }) {
  return (
    <div className={`w-full max-w-2xl space-y-3 ${className}`}>
      const baseId = React.useId();
      {items.map((item, index) => {
        const id = `${baseId}-accordion-item-${index}`;
        return (
          <div
            key={id}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-1"
          >
            <input type="checkbox" id={id} className="peer sr-only" />
            <label
              htmlFor={id}
              className="flex cursor-pointer items-center justify-between gap-4 rounded-lg px-4 py-3 text-left focus-within:ring-2 focus-within:ring-slate-400 focus-within:ring-offset-2 focus-within:ring-offset-slate-950"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  document.getElementById(id)?.click();
                }
              }}
            >
              <span className="text-sm font-semibold text-slate-100">{item.title}</span>
              <svg
                className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 peer-checked:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 011.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <div className="grid grid-rows-[0fr] transition-all duration-300 peer-checked:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="px-4 pb-4 text-sm leading-relaxed text-slate-400">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
