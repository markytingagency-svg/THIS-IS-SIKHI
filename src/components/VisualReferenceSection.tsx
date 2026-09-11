import React, { useState } from 'react';
import { REFERENCE_GALLERY_IMAGES, COMPANY_DETAILS } from '../data/products';
import { getSampleKitWhatsAppUrl } from '../utils/whatsapp';
import { Eye, Info, PackageCheck, ShieldCheck, Sparkles, MessageCircle, X, ZoomIn } from 'lucide-react';

export const VisualReferenceSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof REFERENCE_GALLERY_IMAGES[0] | null>(null);

  const sampleKitUrl = getSampleKitWhatsAppUrl();

  return (
    <section id="visual-reference" className="py-12 sm:py-16 bg-stone-100/60 border-y border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header & Prominent B2B Packaging Policy */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-semibold mb-2">
            <Eye className="w-3.5 h-3.5 text-stone-700" />
            <span>Actual Material Inspection</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-['Outfit',sans-serif]">
            Genuine Paper Texture & Bulk Supply Format
          </h2>
          
          {/* Explicit B2B Packaging Notice Box */}
          <div className="mt-4 p-4 rounded-xl bg-amber-50/90 border border-amber-200/80 text-amber-950 flex flex-col sm:flex-row sm:items-start gap-3 text-xs leading-relaxed">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900">
                Institutional Bulk Supply Notice: Product Available — Retail Consumer Packaging Not Included
              </p>
              <p className="text-amber-800 mt-1">
                These photographs show actual factory production runs of our 100% Virgin Orient tissue paper. Because our products are manufactured for high-volume B2B institutional buyers, hotels, and caterers, <strong className="font-semibold text-amber-950">all orders are supplied in bulk institutional master cartons without individual retail consumer packaging</strong>. This eliminates unnecessary packaging overhead and guarantees the direct manufacturer contract rate.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Reference Photo Cards for All 4 Catalog Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REFERENCE_GALLERY_IMAGES.map((item, idx) => (
            <div 
              key={item.id}
              id={`visual-ref-card-${idx}`}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Zoom Trigger */}
                <div 
                  className="relative h-48 w-full bg-stone-100 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-stone-900/85 text-white backdrop-blur-xs shadow-xs">
                      Reference Only
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-500 text-white shadow-xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-3 py-1.5 rounded-lg bg-stone-900/80 text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-xs">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to Inspect Weave</span>
                    </div>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5">
                  <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-stone-900 mt-0.5 font-['Outfit',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Verification Note */}
              <div className="p-4 pt-0">
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-[11px] text-stone-500 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <PackageCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Naked bulk bundles / master cartons</span>
                  </span>
                  <button 
                    onClick={() => setSelectedImage(item)}
                    className="text-stone-700 hover:text-emerald-700 font-semibold cursor-pointer"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner for Bulk Buyers */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                Need physical verification before placing container / bulk orders?
              </h4>
              <p className="text-xs text-stone-500">
                Request physical samples of all product lines sent directly to your corporate or procurement office.
              </p>
            </div>
          </div>

          <a
            id="btn-sample-verification-wa"
            href={sampleKitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Request Sample Kit on WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Lightbox / Close-up Inspection Modal */}
      {selectedImage && (
        <div 
          id="visual-ref-lightbox"
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-700 animate-in fade-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative max-h-[65vh] overflow-hidden bg-stone-100 flex items-center justify-center">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[65vh]" 
              />
              <button
                id="btn-close-lightbox"
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="text-[11px] font-bold px-3 py-1 rounded-md bg-stone-900/90 text-white backdrop-blur-xs">
                  Production Reference
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-amber-500 text-white">
                  Bulk Dispatched (Unpackaged)
                </span>
              </div>
            </div>

            <div className="p-6">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="text-lg font-bold text-stone-900 mt-1 font-['Outfit',sans-serif]">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                {selectedImage.description}
              </p>

              <div className="mt-4 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-stone-500">
                  Material: 100% Virgin Pulp (Orient Paper Mills)
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold cursor-pointer transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
