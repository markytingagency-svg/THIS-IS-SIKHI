import React from 'react';
import { ShieldCheck, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenTrademark: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrademark }) => {
  const generalWhatsAppUrl = createWhatsAppUrl(
    `Hello IdealKraft Team, I am looking for B2B wholesale supply of Virgin Orient tissue products. Can you please share your catalog and wholesale quotation?`
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top micro-banner for statutory trust */}
      <div className="bg-stone-900 text-stone-200 text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-stone-300">
              Export Grade 100% Virgin Pulp (Orient Material) • Pan-India Factory Dispatch
            </span>
          </div>
          <button
            id="top-trademark-verify-link"
            onClick={onOpenTrademark}
            className="hidden sm:inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Govt. TM Reg. #{COMPANY_DETAILS.trademarkNo} (Class 16)</span>
            <span className="underline ml-0.5 text-emerald-400 font-semibold">Verify</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
          {/* Stylized IdealKraft Origami Leaf Logo */}
          <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center shadow-xs group-hover:bg-emerald-900 transition-colors">
            <svg 
              viewBox="0 0 40 40" 
              className="w-6 h-6 fill-current text-emerald-400"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Origami fold leaf symbol */}
              <path d="M20 4 C24 10, 32 14, 34 22 C35 28, 29 35, 21 35 C15 35, 12 30, 14 24 C16 18, 20 12, 20 4 Z" opacity="0.9" />
              <path d="M19 14 C15 18, 8 22, 6 28 C5 33, 10 36, 17 35 C14 29, 15 22, 19 14 Z" opacity="0.65" fill="#ffffff" />
              <circle cx="21" cy="23" r="2.5" fill="#34d399" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-stone-900 font-['Outfit',sans-serif]">
                IdealKraft
              </span>
              <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 rounded-sm">
                TM
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
              Virgin Tissue B2B Wholesale
            </p>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <a href="#catalog" className="hover:text-emerald-800 transition-colors">
            Wholesale Products
          </a>
          <a href="#calculator" className="hover:text-emerald-800 transition-colors">
            Rate Calculator
          </a>
          <a href="#why-virgin" className="hover:text-emerald-800 transition-colors">
            Why Virgin Pulp?
          </a>
          <a href="#usp" className="hover:text-emerald-800 transition-colors">
            Zero Deviation USP
          </a>
          <button
            id="nav-trademark-trigger"
            onClick={onOpenTrademark}
            className="hover:text-emerald-800 transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Trademark Proof</span>
          </button>
        </nav>

        {/* Right CTA Button: Direct WhatsApp Negotiation */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            id="nav-whatsapp-cta"
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-98 group"
          >
            <div className="w-5 h-5 rounded-full bg-emerald-700/50 flex items-center justify-center">
              <MessageCircle className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <span className="hidden xs:inline">Negotiate on WhatsApp</span>
            <span className="xs:hidden">WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};
