import React, { useState } from 'react';
import { PRODUCTS, POPULAR_CITIES, COMPANY_DETAILS } from '../data/products';
import { getCustomQuoteWhatsAppUrl, getSampleKitWhatsAppUrl } from '../utils/whatsapp';
import { Calculator, MessageCircle, Truck, CheckCircle2, RefreshCw, Copy, Check, Sparkles, Building, MapPin } from 'lucide-react';

interface RateCalculatorProps {
  selectedProductId?: string;
}

export const RateCalculator: React.FC<RateCalculatorProps> = ({ selectedProductId }) => {
  // State for quantities per product - starts clean at Rs 0
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    PRODUCTS.forEach(p => {
      initial[p.id] = 0;
    });
    return initial;
  });

  const [city, setCity] = useState<string>('Mumbai');
  const [customCity, setCustomCity] = useState<string>('');
  const [businessType, setBusinessType] = useState<string>('Hotels / Hospitality');
  const [copied, setCopied] = useState<boolean>(false);

  // If a user clicks "Estimate Order in Calculator" from a specific card
  React.useEffect(() => {
    if (selectedProductId) {
      setQuantities(prev => {
        const current = prev[selectedProductId] || 0;
        if (current === 0) {
          const product = PRODUCTS.find(p => p.id === selectedProductId);
          const defaultBenchmark = product?.category === 'napkin' ? 20000 : 50000;
          return { ...prev, [selectedProductId]: defaultBenchmark };
        }
        return prev;
      });
    }
  }, [selectedProductId]);

  const handleQuantityChange = (id: string, value: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, value)
    }));
  };

  const finalCity = city === 'Other City' ? (customCity || 'Pan India') : city;

  // Calculate totals
  const lineItems = PRODUCTS.map(p => {
    const qty = quantities[p.id] || 0;
    const unitRate = p.bulkRate;
    const total = qty * unitRate;
    const unitLabel = p.category === 'napkin' ? 'Packets (50 pcs)' : 'Rolls';
    return {
      product: p,
      quantity: qty,
      unitRate,
      estimatedTotal: total,
      unitLabel
    };
  });

  const activeItems = lineItems.filter(item => item.quantity > 0);
  const totalBaseValue = activeItems.reduce((acc, item) => acc + item.estimatedTotal, 0);
  const totalPiecesOrRolls = activeItems.reduce((acc, item) => {
    return acc + (item.product.category === 'napkin' ? item.quantity * 50 : item.quantity);
  }, 0);

  // WhatsApp negotiation link
  const formattedItemsForWA = activeItems.map(i => ({
    name: i.product.name,
    quantity: i.quantity,
    unit: i.unitLabel,
    estimatedTotal: i.estimatedTotal
  }));

  const whatsappNegotiateUrl = getCustomQuoteWhatsAppUrl(
    formattedItemsForWA,
    finalCity,
    businessType
  );

  const handleCopySummary = () => {
    const summaryText = `IdealKraft B2B Order Estimate:
City: ${finalCity}
Industry: ${businessType}
Items:
${activeItems.map(i => `• ${i.product.name}: ${i.quantity.toLocaleString('en-IN')} ${i.unitLabel} @ ₹${i.unitRate} = ₹${i.estimatedTotal.toLocaleString('en-IN')}`).join('\n')}
Estimated Base Value: ₹${totalBaseValue.toLocaleString('en-IN')}
Contact IdealKraft WhatsApp: +91 90227 86000`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="calculator" className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden p-6 sm:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Wholesale Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-['Outfit',sans-serif]">
            Estimate Your Wholesale Order & Negotiate on WhatsApp
          </h2>
          <p className="text-stone-600 text-sm mt-2 max-w-xl mx-auto">
            Input your estimated monthly quantities to view baseline factory costs. Then initiate a direct WhatsApp chat with our management to negotiate contract pricing and logistics.
          </p>
        </div>

        {/* Form Controls: City & Business Sector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              Delivery Destination City
            </label>
            <select
              id="calc-city-select"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full text-sm font-medium bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {POPULAR_CITIES.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {city === 'Other City' && (
              <input
                id="calc-custom-city-input"
                type="text"
                placeholder="Enter your city name..."
                value={customCity}
                onChange={(e) => setCustomCity(e.target.value)}
                className="mt-2 w-full text-sm bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            )}
            <span className="text-[11px] text-stone-500 mt-1 block">
              Pan-India road transport dispatched from Mumbai plant.
            </span>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-stone-400" />
              Your Industry / Business Type
            </label>
            <select
              id="calc-industry-select"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full text-sm font-medium bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="Hotels / Hospitality">Hotels / Luxury Resorts / Stays</option>
              <option value="Restaurants / Cafes / QSR">Restaurants, Cafes & Cloud Kitchens</option>
              <option value="Facility Management / Janitorial">Facility Management & Cleaning Services</option>
              <option value="Corporate Office / Tech Park">Corporate Office / IT Park / Coworking</option>
              <option value="Hospitals & Healthcare">Hospitals, Clinics & Healthcare</option>
              <option value="Paper Wholesaler / Distributor">Paper Wholesaler / Regional Distributor</option>
              <option value="Other Commercial Enterprise">Other Commercial Enterprise</option>
            </select>
            <span className="text-[11px] text-stone-500 mt-1 block">
              Helps us provide customized bulk packing and credit terms.
            </span>
          </div>
        </div>

        {/* Product Items Quantities */}
        <div className="space-y-4 mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500 flex justify-between items-center">
            <span>Select Quantities (Standard MOQ applied)</span>
            <button
              id="reset-calculator-btn"
              onClick={() => {
                const initial: Record<string, number> = {};
                PRODUCTS.forEach(p => initial[p.id] = 0);
                setQuantities(initial);
              }}
              className="text-[11px] font-semibold text-stone-500 hover:text-stone-800 flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              Reset
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PRODUCTS.map(p => {
              const currentQty = quantities[p.id] || 0;
              const subtotal = currentQty * p.bulkRate;
              const unitText = p.category === 'napkin' ? 'pkts (50 pcs/pkt)' : 'rolls';
              const step = p.category === 'napkin' ? 5000 : 2500;
              const minSuggest = p.category === 'napkin' ? 20000 : 50000;

              return (
                <div 
                  key={p.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    currentQty > 0 
                      ? 'border-emerald-300 bg-emerald-50/20 shadow-xs' 
                      : 'border-stone-200 bg-stone-50/40 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">{p.name}</h4>
                      <span className="text-xs text-stone-500 font-medium">
                        Rate: <strong className="text-stone-800">{p.rateUnit}</strong> ({p.dimensions})
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                      ₹{subtotal.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Quantity input & quick buttons */}
                  <div className="mt-3 flex items-center gap-2">
                    <input
                      id={`qty-input-${p.id}`}
                      type="number"
                      min="0"
                      step={step}
                      value={currentQty === 0 ? '' : currentQty}
                      onChange={(e) => handleQuantityChange(p.id, parseInt(e.target.value) || 0)}
                      placeholder="0"
                      className="w-28 text-sm font-semibold bg-white border border-stone-300 rounded-lg px-3 py-1.5 text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                    <span className="text-xs text-stone-500">{unitText}</span>

                    <div className="ml-auto flex items-center gap-1.5">
                      <button
                        id={`btn-preset-moq-${p.id}`}
                        onClick={() => handleQuantityChange(p.id, minSuggest)}
                        className="text-[10px] font-semibold px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-md transition-colors"
                        title={`Set to standard benchmark order (${minSuggest.toLocaleString('en-IN')})`}
                      >
                        +{minSuggest >= 1000 ? `${minSuggest / 1000}k` : minSuggest}
                      </button>
                      <button
                        id={`btn-clear-${p.id}`}
                        onClick={() => handleQuantityChange(p.id, 0)}
                        className="text-[10px] font-semibold px-2 py-1 text-stone-400 hover:text-stone-700 rounded-md transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Calculation Summary & Direct WhatsApp Action */}
        <div className="p-6 rounded-2xl bg-stone-900 text-white shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estimated Wholesale Contract Baseline</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-white">
                  ₹{totalBaseValue.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-stone-400">
                  (Base ex-factory rate for {finalCity})
                </span>
              </div>
              <p className="text-xs text-stone-400 mt-1 max-w-md">
                {activeItems.length > 0 
                  ? `Includes ${activeItems.length} selected product lines. Rates are subject to negotiated volume tiering & transportation freight at actuals.`
                  : 'Select any product quantities above to calculate your bulk estimate, or click below to chat directly with our sales team.'}
              </p>

              {activeItems.length > 0 && (
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/70 border border-emerald-800/80 text-[11px] text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>WhatsApp message is auto-configured with your {activeItems.length} items & ₹{totalBaseValue.toLocaleString('en-IN')} estimate</span>
                </div>
              )}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                id="btn-copy-calc-quote"
                onClick={handleCopySummary}
                className="px-4 py-3 rounded-xl border border-stone-700 hover:border-stone-600 bg-stone-800 text-stone-200 text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
              </button>

              <a
                id="btn-whatsapp-negotiate-quote"
                href={whatsappNegotiateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-98 group"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-white" />
                </div>
                <span>Negotiate on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-[11px] text-stone-400">
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-stone-400" />
              <span>Doorstep delivery available to any Indian industrial hub or city via verified logistics partners.</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Instant Response on {COMPANY_DETAILS.whatsappFormatted}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
