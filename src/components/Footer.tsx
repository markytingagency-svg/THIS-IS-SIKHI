import React from 'react';
import { ShieldCheck, MessageCircle, Phone, MapPin, Building, Award, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onOpenTrademark: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrademark }) => {
  const directWAUrl = createWhatsAppUrl(
    `Hello IdealKraft Team, I am contacting you through the website regarding B2B bulk tissue order inquiries.`
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-stone-950 flex items-center justify-center font-bold">
                <svg viewBox="0 0 40 40" className="w-5 h-5 fill-current text-stone-950" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4 C24 10, 32 14, 34 22 C35 28, 29 35, 21 35 C15 35, 12 30, 14 24 C16 18, 20 12, 20 4 Z" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
                IdealKraft
              </span>
              <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-1.5 py-0.5 rounded-sm">
                TM Registered
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed">
              Export-Quality 100% Virgin Pulp tissue products manufactured with genuine Orient material. Serving luxury hospitality chains, corporate campuses, QSRs, and institutional distributors across India.
            </p>

            <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 text-xs text-stone-300 max-w-md">
              <span className="text-emerald-400 font-bold block text-[11px] uppercase tracking-wider mb-0.5">
                Statutory Trademark
              </span>
              <span>
                Registered under Trade Marks Act 1999, Govt. of India (Class 16 - #6240316) by <strong>{COMPANY_DETAILS.firmName}</strong>.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Product Catalog
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#catalog" className="hover:text-white transition-colors">1-Ply Serviette Napkins (30×30)</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">2-Ply Luxury Napkins (30×30)</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">22 GSM Heavy Kitchen Towels</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">17 GSM Sanitation Toilet Rolls</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Interactive Rate Estimator</a></li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Direct Negotiation
            </h4>
            
            <a
              id="footer-whatsapp-link"
              href={directWAUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp: {COMPANY_DETAILS.whatsappFormatted}</span>
            </a>

            <div className="space-y-2 text-stone-400 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {COMPANY_DETAILS.officeAddress}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <button
                  id="footer-verify-trademark-btn"
                  onClick={onOpenTrademark}
                  className="text-emerald-400 hover:underline cursor-pointer"
                >
                  Verify Official Trademark Certificate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} IdealKraft (Saba Khan Trading). All rights reserved. GST & Freight at actuals.
          </div>
          <div className="flex items-center gap-4">
            <span>USP: True To Words, Zero Deviations</span>
            <button
              id="scroll-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
