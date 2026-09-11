import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultUrl = createWhatsAppUrl(
    `Hello IdealKraft Team, I visited your website and would like to negotiate wholesale prices for tissue paper products.`
  );

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Floating Mini Prompt */}
      {showTooltip && (
        <div className="mb-2 relative bg-white border border-stone-200 text-stone-900 rounded-2xl p-3 shadow-lg max-w-xs text-xs flex items-start gap-2.5 animate-in slide-in-from-bottom-2 duration-300">
          <button
            id="close-floating-whatsapp-tooltip"
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center text-[10px] cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1 animate-pulse" />
          <div>
            <p className="font-bold text-stone-900 leading-snug">
              Negotiate Directly on WhatsApp
            </p>
            <p className="text-[11px] text-stone-500 mt-0.5">
              Get custom bulk tier pricing on <strong>{COMPANY_DETAILS.whatsappFormatted}</strong>
            </p>
            <a
              id="floating-tooltip-chat-link"
              href={defaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 mt-1"
            >
              <span>Chat with Wholesale Desk</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Main WhatsApp Fab Button */}
      <a
        id="floating-whatsapp-btn"
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 group focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-emerald-500 animate-ping" />
        </div>
        <div className="text-left pr-1 hidden sm:block">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-100 leading-tight">
            Direct Factory Line
          </span>
          <span className="text-xs font-bold leading-tight font-mono">
            {COMPANY_DETAILS.whatsappFormatted}
          </span>
        </div>
      </a>
    </aside>
  );
};
