import React from 'react';
import { Scale, CheckCircle2, ShieldAlert, Award, FileCheck, Layers, Hash } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

export const ZeroDeviationGuarantee: React.FC = () => {
  return (
    <section id="usp" className="py-16 sm:py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background ambient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Official Factory Promise</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-['Outfit',sans-serif] text-white">
            "{COMPANY_DETAILS.usp}"
          </h2>

          <p className="text-stone-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            In the institutional paper market, hidden dilution is rife — vendors bill for 22 GSM but supply 17 GSM, or label 100 pulls while packing 75 pulls. At IdealKraft, what is written on the contract is what reaches your loading bay.
          </p>
        </div>

        {/* 4 Pillars of Zero Deviation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 backdrop-blur-xs">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white mb-1">Guaranteed GSM Density</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              22 GSM Kitchen Towels and 17 GSM Sanitation Rolls are strictly monitored. We never thin down paper parent reels to undercut rates.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 backdrop-blur-xs">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Hash className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white mb-1">True Pull Counts</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Calibrated laser counters guarantee true 100 pulls (Kitchen) and 200 pulls (Sanitation). Zero deceptive core bulk or loose winding.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 backdrop-blur-xs">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white mb-1">Precise Sheet Dimensions</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Exact 30×30 cm napkin cut, 20×20 cm kitchen towel sheets, and 10×10 cm washroom squares. Clean laser perforations that tear effortlessly.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 backdrop-blur-xs">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white mb-1">Batch Traceability</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Every dispatched corrugated master carton features production inspection timestamps, gross weight checks, and QA seal of approval.
            </p>
          </div>
        </div>

        {/* B2B Assurance Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-emerald-950/50 border border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 text-stone-300 text-center sm:text-left">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 hidden sm:block" />
            <span>
              <strong>Contractual Replacement Warranty:</strong> If any batch fails our declared GSM or dimension specs by more than manual inspection tolerance, we replace or refund the affected quantity immediately.
            </span>
          </div>
          <span className="font-mono text-emerald-400 font-bold tracking-wider shrink-0 bg-emerald-900/60 px-3 py-1.5 rounded-lg border border-emerald-700/60">
            QA AUDIT PASS
          </span>
        </div>
      </div>
    </section>
  );
};
