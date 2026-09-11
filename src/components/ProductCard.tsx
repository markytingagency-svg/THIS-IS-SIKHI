import React from 'react';
import { ProductSpec } from '../data/products';
import { getProductNegotiationUrl } from '../utils/whatsapp';
import { Check, MessageCircle, Layers, Ruler, Box, Sparkles, ArrowRight, Shield, Eye, Package } from 'lucide-react';

interface ProductCardProps {
  product: ProductSpec;
  onSelectForCalculator?: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectForCalculator }) => {
  const whatsappUrl = getProductNegotiationUrl(
    product.name,
    `${product.specifications} | ${product.material}`,
    product.rateUnit,
    product.minMonthlyOrder
  );

  return (
    <div 
      id={`product-card-${product.id}`}
      className="bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-emerald-300"
    >
      <div>
        {/* Visual Reference Photo with Explicit Packaging Disclaimer */}
        {product.referenceImage && (
          <div className="relative h-44 w-full bg-stone-100 overflow-hidden border-b border-stone-100">
            <img 
              src={product.referenceImage} 
              alt={`${product.name} visual reference`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Overlay B2B Reference Pill */}
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-900/85 text-white backdrop-blur-xs shadow-xs">
                Visual Reference
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500 text-white shadow-xs">
                Unpackaged Bulk
              </span>
            </div>

            {/* Bottom translucent disclaimer bar */}
            <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-stone-950/85 via-stone-900/60 to-transparent px-3 py-1.5">
              <p className="text-[10.5px] text-stone-200 font-medium leading-tight">
                Product available • Delivered without retail packaging
              </p>
            </div>
          </div>
        )}

        {/* Card Header & Badges */}
        <div className="p-6 border-b border-stone-100 bg-linear-to-b from-stone-50/50 to-white flex flex-col justify-between h-[236px]">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                {product.shortTag}
              </span>
              <span className="text-[11px] font-medium text-stone-500 flex items-center gap-1">
                <Shield className="w-3 h-3 text-emerald-600" />
                100% Virgin Orient
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight h-14 flex items-start leading-snug">
              {product.name}
            </h3>

            <p className="text-xs text-stone-500 mt-1 line-clamp-1">
              Best for: {product.bestFor}
            </p>
          </div>

          {/* Pricing Highlight - Standardized Height & Aligned */}
          <div className="mt-4 p-4 rounded-xl bg-stone-900 text-white flex items-center justify-between h-[76px]">
            <div>
              <span className="text-[11px] font-medium text-stone-400 block leading-none">Wholesale Contract Rate</span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight font-['Outfit',sans-serif] text-white">
                  {product.rateUnit.split(' ')[0]}
                </span>
                <span className="text-xs text-stone-300 font-medium">
                  {product.rateUnit.substring(product.rateUnit.indexOf(' '))}
                </span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[11px] uppercase tracking-wide text-emerald-400 font-semibold block">
                Direct Factory
              </span>
              <span className="text-xs text-stone-400">
                {product.perItemDetail}
              </span>
            </div>
          </div>
        </div>

        {/* Technical Specifications Grid */}
        <div className="p-6 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
            Certified Specifications
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100">
              <span className="text-stone-500 block text-[11px]">Dimensions</span>
              <span className="font-semibold text-stone-800 flex items-center gap-1 mt-0.5">
                <Ruler className="w-3.5 h-3.5 text-stone-400" />
                {product.dimensions}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100">
              <span className="text-stone-500 block text-[11px]">Ply Construction</span>
              <span className="font-semibold text-stone-800 flex items-center gap-1 mt-0.5">
                <Layers className="w-3.5 h-3.5 text-stone-400" />
                {product.ply}
              </span>
            </div>

            {product.gsm ? (
              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100">
                <span className="text-stone-500 block text-[11px]">Paper Density</span>
                <span className="font-semibold text-emerald-800 mt-0.5 block">
                  {product.gsm} (Guaranteed)
                </span>
              </div>
            ) : (
              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100">
                <span className="text-stone-500 block text-[11px]">Pack Quantity</span>
                <span className="font-semibold text-emerald-800 mt-0.5 block">
                  50 pcs / pack
                </span>
              </div>
            )}

            {product.pulls ? (
              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100">
                <span className="text-stone-500 block text-[11px]">Pull Count</span>
                <span className="font-semibold text-emerald-800 mt-0.5 block">
                  {product.pulls}
                </span>
              </div>
            ) : (
              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100">
                <span className="text-stone-500 block text-[11px]">Sheet Texture</span>
                <span className="font-semibold text-emerald-800 mt-0.5 block">
                  Waffle Embossed
                </span>
              </div>
            )}

            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100 col-span-2">
              <span className="text-stone-500 block text-[11px]">Standard Monthly Batch</span>
              <span className="font-semibold text-stone-800 flex items-center gap-1 mt-0.5">
                <Box className="w-3.5 h-3.5 text-stone-400" />
                {product.minMonthlyOrder} (Flexible on negotiation)
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/60 col-span-2">
              <span className="text-amber-800 block text-[11px] font-medium">B2B Packaging Format</span>
              <span className="font-semibold text-stone-800 flex items-center gap-1 mt-0.5">
                <Package className="w-3.5 h-3.5 text-amber-700" />
                Bulk Institutional Pack (Delivered unpackaged)
              </span>
            </div>
          </div>

          {/* Quality Features List */}
          <div className="pt-2 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Quality Assurance
            </div>
            <ul className="space-y-1.5 text-xs text-stone-600">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-6 pt-0 space-y-2">
        <a
          id={`btn-negotiate-whatsapp-${product.id}`}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-98"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Negotiate on WhatsApp</span>
        </a>

        {onSelectForCalculator && (
          <button
            id={`btn-add-calc-${product.id}`}
            onClick={() => onSelectForCalculator(product.id)}
            className="w-full py-2 px-3 text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Estimate Order in Calculator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
