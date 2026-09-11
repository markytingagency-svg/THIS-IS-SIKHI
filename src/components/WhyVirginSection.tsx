import React from 'react';
import { ShieldCheck, Check, X, Sparkles, Droplets, HeartHandshake, Utensils } from 'lucide-react';

export const WhyVirginSection: React.FC = () => {
  return (
    <section id="why-virgin" className="py-16 sm:py-24 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Material Benchmark</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-['Outfit',sans-serif]">
            Why Virgin Pulp (Orient Material) Outperforms Common Recycled Paper
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Smart procurement managers know that cheap recycled paper ends up costing more. 
            Virgin wood pulp absorbs more liquid per sheet, leaves zero lint on dark dining wear, 
            and delivers an uncompromised luxury feel.
          </p>
        </div>

        {/* Head-to-Head Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-xs mb-12">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50">
                <th className="p-4 sm:p-5 font-bold text-stone-700 w-1/3">Quality Factor</th>
                <th className="p-4 sm:p-5 font-bold text-emerald-900 bg-emerald-50/70 border-x border-emerald-200/80 w-1/3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span>IdealKraft Virgin Orient Pulp</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 font-bold text-stone-500 w-1/3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-400"></span>
                    <span>Standard Market Recycled Tissue</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-stone-900">
                  Liquid & Oil Absorbency
                  <span className="block text-xs font-normal text-stone-500 mt-0.5">Real-world consumption in dining/kitchen</span>
                </td>
                <td className="p-4 sm:p-5 bg-emerald-50/30 border-x border-emerald-100 text-stone-800">
                  <div className="flex items-start gap-2 text-xs font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>High Capillary Retention:</strong> 1 napkin handles a complete meal; saves 40% overall volume.</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 text-stone-600 text-xs">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Low absorbency; guests use 3 to 4 sheets per seating, inflating total monthly spend.</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-4 sm:p-5 font-semibold text-stone-900">
                  Wet Tensile Strength
                  <span className="block text-xs font-normal text-stone-500 mt-0.5">Resistance to tearing when wet</span>
                </td>
                <td className="p-4 sm:p-5 bg-emerald-50/30 border-x border-emerald-100 text-stone-800">
                  <div className="flex items-start gap-2 text-xs font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>No Disintegration:</strong> Intact long-grain wood fibres maintain structural integrity when damp.</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 text-stone-600 text-xs">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Shreds into wet mush; sticks to wet skin, glassware, and kitchen countertops.</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-4 sm:p-5 font-semibold text-stone-900">
                  Food Contact & Chemical Safety
                  <span className="block text-xs font-normal text-stone-500 mt-0.5">Direct contact with hot food and lips</span>
                </td>
                <td className="p-4 sm:p-5 bg-emerald-50/30 border-x border-emerald-100 text-stone-800">
                  <div className="flex items-start gap-2 text-xs font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>100% Food-Grade:</strong> Zero recycled waste chemicals, no toxic optical brighteners, 100% odorless.</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 text-stone-600 text-xs">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Chemical de-inking residues, bleach smells, and potential heavy metals from scrap paper.</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-4 sm:p-5 font-semibold text-stone-900">
                  Visual Finish & Color
                  <span className="block text-xs font-normal text-stone-500 mt-0.5">Brand perception in hospitality</span>
                </td>
                <td className="p-4 sm:p-5 bg-emerald-50/30 border-x border-emerald-100 text-stone-800">
                  <div className="flex items-start gap-2 text-xs font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Snow White Radiance:</strong> Pure uniform aesthetic with subtle micro-embossing.</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 text-stone-600 text-xs">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Dull grayish/yellowish hue with visible recycled pulp speckles.</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-4 sm:p-5 font-semibold text-stone-900">
                  Plumbing & Septic Safety
                  <span className="block text-xs font-normal text-stone-500 mt-0.5">For sanitation & washroom rolls</span>
                </td>
                <td className="p-4 sm:p-5 bg-emerald-50/30 border-x border-emerald-100 text-stone-800">
                  <div className="flex items-start gap-2 text-xs font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Rapid Dissolve:</strong> Dissolves seamlessly in turbulent water; zero drain blockages or pipe damage.</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 text-stone-600 text-xs">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Slow-breakdown binders frequently cause expensive commercial drain clogs.</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-stone-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-stone-900 mb-2">Hospitality & Food Safe</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Safe for hot rotis, baked items, and fried food oil soaking. Never transfers ink, synthetic dye, or paper taste to food.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-stone-900 mb-2">Heavy 22 & 17 GSM Fibres</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Engineered with genuine Orient mill parent reels. Calibrated tensile strength means each pull feels substantial and performs reliably.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-stone-900 mb-2">Guaranteed B2B Savings</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              By cutting down excessive multi-sheet usage by hotel guests and corporate staff, virgin tissue yields lower net cost per guest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
