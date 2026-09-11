import React from 'react';
import { X, ShieldCheck, Award, FileText, CheckCircle2, Building2, Calendar, MapPin, Hash } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface TrademarkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrademarkModal: React.FC<TrademarkModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900 leading-tight">
                Government Registered Trademark Verification
              </h3>
              <p className="text-xs text-stone-500 font-medium">
                Trade Marks Registry, Government of India (Class 16)
              </p>
            </div>
          </div>
          <button
            id="close-trademark-modal"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Certificate Header Stamp */}
          <div className="rounded-xl border border-amber-200/80 bg-linear-to-b from-amber-50/70 to-stone-50 p-5 text-center relative overflow-hidden">
            <div className="absolute top-2 right-3 opacity-10 text-amber-900 pointer-events-none">
              <Award className="w-28 h-28" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              STATUS: OFFICIALLY REGISTERED & ACTIVE
            </div>

            <h4 className="text-lg font-bold text-stone-900 tracking-tight">
              Certificate of Registration of Trade Mark
            </h4>
            <p className="text-xs text-stone-600 mt-1 max-w-lg mx-auto">
              Section 23 (2), Rule 56 (1) of The Trade Marks Act, 1999 — Trade Marks Registry MUMBAI
            </p>

            <div className="mt-4 pt-3 border-t border-amber-200/60 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-700 font-medium">
              <span className="flex items-center gap-1">
                <Hash className="w-3.5 h-3.5 text-amber-700" />
                <strong>TM No:</strong> {COMPANY_DETAILS.trademarkNo}
              </span>
              <span className="text-stone-300">•</span>
              <span className="flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-amber-700" />
                <strong>Form:</strong> RG-2 (Cert #{COMPANY_DETAILS.certificateNo})
              </span>
              <span className="text-stone-300">•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                <strong>Valid Through:</strong> {COMPANY_DETAILS.validUpto}
              </span>
            </div>
          </div>

          {/* Legal Registry Key Data */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Official Registry Record Extract
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="text-xs text-stone-500">Registered Wordmark & Device</div>
                <div className="font-bold text-stone-900 text-base mt-0.5">{COMPANY_DETAILS.brandName}™</div>
                <div className="text-xs text-emerald-700 font-medium mt-1">Class 16 (Paper Tissues & Wrapping)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="text-xs text-stone-500">Proprietorship Firm</div>
                <div className="font-semibold text-stone-900 mt-0.5">{COMPANY_DETAILS.firmName}</div>
                <div className="text-xs text-stone-500 mt-1">Single Firm Proprietorship</div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="text-xs text-stone-500">Principal Place of Business</div>
                <div className="font-medium text-stone-800 text-xs mt-1 leading-relaxed">
                  {COMPANY_DETAILS.officeAddress}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="text-xs text-stone-500">Statutory Goods & Services</div>
                <div className="font-medium text-stone-800 text-xs mt-1 leading-relaxed">
                  {COMPANY_DETAILS.goodsDescription}
                </div>
              </div>
            </div>
          </div>

          {/* Why this matters for B2B procurement */}
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-stone-700 space-y-1.5">
            <div className="font-bold text-emerald-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              Direct Legal Accountability for B2B Clients
            </div>
            <p className="leading-relaxed text-stone-600">
              Unlike anonymous commodity resellers, IdealKraft operates under an authorized Government of India Class 16 registered trademark. All institutional contracts, bills, and GST shipments carry legal warranty and guaranteed specifications.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between flex-wrap gap-3">
          <div className="text-xs text-stone-500 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" />
            <span>Govt. of India Certified Record No. 6240316</span>
          </div>
          <div>
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors cursor-pointer"
            >
              Close Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
