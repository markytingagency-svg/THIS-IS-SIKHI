import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { RateCalculator } from './components/RateCalculator';
import { VisualReferenceSection } from './components/VisualReferenceSection';
import { WhyVirginSection } from './components/WhyVirginSection';
import { ZeroDeviationGuarantee } from './components/ZeroDeviationGuarantee';
import { TrademarkShowcase } from './components/TrademarkShowcase';
import { Footer } from './components/Footer';
import { TrademarkModal } from './components/TrademarkModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PRODUCTS, COMPANY_DETAILS } from './data/products';
import { createWhatsAppUrl } from './utils/whatsapp';
import { 
  ShieldCheck, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Truck, 
  Layers, 
  Building2, 
  UtensilsCrossed, 
  FileCheck2 
} from 'lucide-react';

export default function App() {
  const [isTrademarkModalOpen, setIsTrademarkModalOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'napkin' | 'roll' | 'towel'>('all');
  const [calcSelectedProduct, setCalcSelectedProduct] = useState<string | undefined>();

  const filteredProducts = selectedCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const heroWhatsAppUrl = createWhatsAppUrl(
    `Hello IdealKraft Wholesale Desk,

I'm interested in wholesale supply of 100% Virgin Orient tissue products for our business.

Could you please share the current factory price list and discuss volume terms?`
  );

  const handleSelectProductForCalculator = (productId: string) => {
    setCalcSelectedProduct(productId);
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navigation */}
      <Navbar onOpenTrademark={() => setIsTrademarkModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-18 sm:pb-24 overflow-hidden border-b border-stone-200 bg-linear-to-b from-white via-stone-50/50 to-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Export Quality 100% Virgin Pulp (Orient Material)</span>
              <span className="text-emerald-300">|</span>
              <button
                id="hero-trademark-pill-btn"
                onClick={() => setIsTrademarkModalOpen(true)}
                className="hover:underline flex items-center gap-1 cursor-pointer text-emerald-900 font-bold"
              >
                <span>Govt TM #6240316</span>
              </button>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight font-['Outfit',sans-serif] leading-[1.15]">
              Pure Virgin Tissue Paper. <br className="hidden sm:inline" />
              <span className="text-emerald-700">Direct B2B Factory Pricing.</span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Supply your hotels, restaurants, corporate facilities, and distribution hubs with 
              100% genuine Orient virgin tissue. 
              <strong> Zero deviation guarantee</strong> on GSM, pull counts, and dimensions.
            </p>

            {/* WhatsApp Negotiation Focused CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                id="hero-primary-whatsapp-btn"
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 active:scale-98 group"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-700/60 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                </div>
                <span>Negotiate on WhatsApp</span>
                <span className="text-xs bg-emerald-800/60 px-2 py-0.5 rounded-md font-mono">
                  {COMPANY_DETAILS.whatsappFormatted}
                </span>
              </a>

              <a
                id="hero-view-rates-btn"
                href="#catalog"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-stone-100 text-stone-800 font-bold text-sm border border-stone-300 shadow-2xs transition-colors flex items-center justify-center gap-2"
              >
                <span>View Products & Price List</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </a>
            </div>

            {/* Micro Credibility Notes */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-stone-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Rates Starting at ₹13 / 50 pcs
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Dispatched to Any City Pan-India
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                No Middlemen Markups
              </span>
            </div>
          </div>
        </div>

        {/* Highlight Trust Bar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
            <div className="p-3 text-center border-r border-stone-100 last:border-0">
              <div className="text-xl sm:text-2xl font-extrabold font-['Outfit',sans-serif] text-stone-900">
                100% Virgin
              </div>
              <div className="text-[11px] text-stone-500 font-medium mt-0.5">
                Genuine Orient Material
              </div>
            </div>

            <div className="p-3 text-center border-r border-stone-100 last:border-0">
              <div className="text-xl sm:text-2xl font-extrabold font-['Outfit',sans-serif] text-emerald-700">
                Zero Deviation
              </div>
              <div className="text-[11px] text-stone-500 font-medium mt-0.5">
                Contractual GSM & Pulls
              </div>
            </div>

            <div className="p-3 text-center border-r border-stone-100 last:border-0">
              <div className="text-xl sm:text-2xl font-extrabold font-['Outfit',sans-serif] text-stone-900">
                Class 16 TM
              </div>
              <div className="text-[11px] text-stone-500 font-medium mt-0.5">
                Govt. Registry #6240316
              </div>
            </div>

            <div className="p-3 text-center">
              <div className="text-xl sm:text-2xl font-extrabold font-['Outfit',sans-serif] text-stone-900">
                All India
              </div>
              <div className="text-[11px] text-stone-500 font-medium mt-0.5">
                Direct Transport Dispatch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Catalog Section */}
      <main className="flex-1">
        <section id="catalog" className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Direct Manufacturer Catalog</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-['Outfit',sans-serif]">
                  Product Specifications & Wholesale Rates
                </h2>
                <p className="text-stone-600 text-sm mt-1 max-w-xl">
                  Official bulk pricing for contract procurement. All rates are ex-factory with pan-India transport at actuals.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-200/70 text-xs font-semibold">
                <button
                  id="filter-all"
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    selectedCategory === 'all' 
                      ? 'bg-white text-stone-900 shadow-2xs' 
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  All Products
                </button>
                <button
                  id="filter-napkins"
                  onClick={() => setSelectedCategory('napkin')}
                  className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    selectedCategory === 'napkin' 
                      ? 'bg-white text-stone-900 shadow-2xs' 
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Napkins (1P & 2P)
                </button>
                <button
                  id="filter-towels"
                  onClick={() => setSelectedCategory('towel')}
                  className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    selectedCategory === 'towel' 
                      ? 'bg-white text-stone-900 shadow-2xs' 
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Kitchen Towel (22 GSM)
                </button>
                <button
                  id="filter-rolls"
                  onClick={() => setSelectedCategory('roll')}
                  className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    selectedCategory === 'roll' 
                      ? 'bg-white text-stone-900 shadow-2xs' 
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Sanitation Rolls (200P)
                </button>
              </div>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectForCalculator={handleSelectProductForCalculator}
                />
              ))}
            </div>

            {/* Prompt to Negotiate */}
            <div className="mt-8 p-4 rounded-2xl bg-stone-100 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3 text-stone-700">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>
                  <strong>Need custom branding, private label embossing, or distributor master carton volumes?</strong>
                </span>
              </div>
              <a
                id="btn-custom-branding-whatsapp"
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 shrink-0"
              >
                <span>Inquire on WhatsApp (+91 90227 86000)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Visual Material Reference & B2B Packaging Format */}
        <VisualReferenceSection />

        {/* Interactive Order Calculator Section */}
        <section id="calculator" className="py-12 bg-stone-100/60 border-t border-stone-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <RateCalculator selectedProductId={calcSelectedProduct} />
          </div>
        </section>

        {/* Why Virgin Material Comparison Section */}
        <WhyVirginSection />

        {/* Zero Deviation USP Guarantee Section */}
        <ZeroDeviationGuarantee />

        {/* Trademark & Legal Verification Section */}
        <TrademarkShowcase onOpenModal={() => setIsTrademarkModalOpen(true)} />
      </main>

      {/* Website Footer */}
      <Footer onOpenTrademark={() => setIsTrademarkModalOpen(true)} />

      {/* Persistent Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Government Trademark Details Modal */}
      <TrademarkModal
        isOpen={isTrademarkModalOpen}
        onClose={() => setIsTrademarkModalOpen(false)}
      />
    </div>
  );
}
