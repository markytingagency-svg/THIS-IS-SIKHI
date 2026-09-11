import React from 'react';
import { Package, MessageCircle, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { getSampleKitWhatsAppUrl } from '../utils/whatsapp';
import { COMPANY_DETAILS } from '../data/products';

export const SampleKitBanner: React.FC = () => {
  const sampleKitUrl = getSampleKitWhatsAppUrl();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-emerald-200 bg-linear-to-br from-emerald-50/70 via-stone-50 to-white p-6 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold mb-3">
              <Package className="w-3.5 h-3.5 text-emerald-700" />
              <span>Institutional Procurement Program</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-['Outfit',sans-serif]">
              Test Paper GSM & Absorbency in Your Own Facility
            </h3>

            <p className="text-stone-600 text-sm mt-2 leading-relaxed">
              We understand you cannot purchase 50,000 units blindly. Order an <strong>IdealKraft B2B Evaluation Sample Pack</strong> containing 1-Ply & 2-Ply Napkins, 22 GSM Kitchen Towel, and Sanitation Rolls delivered to your purchase office.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-stone-700 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                No Obligation To Buy
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Complete Spec Sheet Included
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Dispatched via Express Courier
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center sm:items-end w-full md:w-auto">
            <a
              id="btn-request-sample-whatsapp"
              href={sampleKitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 active:scale-98 group"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-700/50 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 fill-white" />
              </div>
              <span>Request Sample Kit via WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-[11px] text-stone-500 mt-2">
              Instant coordination on {COMPANY_DETAILS.whatsappFormatted}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
