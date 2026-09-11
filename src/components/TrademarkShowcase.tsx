import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2, Building, MapPin, Calendar } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface TrademarkShowcaseProps {
  onOpenModal: () => void;
}

export const TrademarkShowcase: React.FC<TrademarkShowcaseProps> = ({ onOpenModal }) => {
  return (
    <section id="trademark" className="py-16 sm:py-20 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle background seal */}
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none hidden md:block">
            <Award className="w-64 h-64 text-stone-900" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Statutory Compliance & Legal Brand Registration</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-['Outfit',sans-serif]">
              Officially Registered Trademark with the Government of India
            </h2>

            <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
              IdealKraft is not an unverified trading intermediary. Our brand identity, logo device, and paper goods manufacturing class are registered under the Trade Marks Act, 1999 with the Trade Marks Registry Mumbai.
            </p>

            {/* Official Registry Badges */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                  Registration No.
                </span>
                <span className="font-extrabold text-base text-stone-900 font-mono mt-0.5 block">
                  #{COMPANY_DETAILS.trademarkNo}
                </span>
                <span className="text-[11px] text-emerald-700 font-medium">Status: Active & Valid</span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                  Goods Classification
                </span>
                <span className="font-extrabold text-base text-stone-900 mt-0.5 block">
                  {COMPANY_DETAILS.classNo}
                </span>
                <span className="text-[11px] text-stone-500 font-medium">Paper Tissues & Wrapping</span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                  Statutory Certificate
                </span>
                <span className="font-extrabold text-base text-stone-900 font-mono mt-0.5 block">
                  Cert #{COMPANY_DETAILS.certificateNo}
                </span>
                <span className="text-[11px] text-stone-500 font-medium">Form RG-2 (Section 23(2))</span>
              </div>
            </div>

            {/* Registered Details Snippet */}
            <div className="mt-4 p-4 rounded-xl bg-stone-50/80 border border-stone-200/80 text-xs text-stone-600 space-y-1">
              <div className="flex items-center gap-2 font-semibold text-stone-800">
                <Building className="w-3.5 h-3.5 text-stone-500" />
                <span>Proprietor: {COMPANY_DETAILS.firmName}</span>
              </div>
              <div className="flex items-start gap-2 text-stone-500 text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <span>Registered Address: {COMPANY_DETAILS.officeAddress}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                id="btn-view-full-trademark-cert"
                onClick={onOpenModal}
                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Registry Certificate Summary</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
