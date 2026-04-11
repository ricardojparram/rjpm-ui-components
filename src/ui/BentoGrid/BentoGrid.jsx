import React from "react";

export default function BentoGrid({ children, className = "" }) {
  return (
    <div
      className={`grid w-full h-full grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr ${className}`}
    >
      {children || (
        <>
          <article className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Featured
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-100">
              Build bento layouts faster
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              The wrapper controls structure while each child defines its own
              col-span and row-span classes.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm">
            <h3 className="text-base font-semibold text-slate-100">Stats</h3>
            <p className="mt-2 text-sm text-slate-400">Flexible by default.</p>
          </article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm">
            <h3 className="text-base font-semibold text-slate-100">Insights</h3>
            <p className="mt-2 text-sm text-slate-400">Drop in any content.</p>
          </article>
          <article className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm">
            <h3 className="text-base font-semibold text-slate-100">Expandable</h3>
            <p className="mt-2 text-sm text-slate-400">
              Perfect for dashboard tiles, features, and mixed media cards.
            </p>
          </article>
        </>
      )}
    </div>
  );
}
