import { COMPANY_DETAILS } from '../data/products';

export function createWhatsAppUrl(message: string): string {
  const cleanPhone = COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, '');
  const fullPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
  return `https://wa.me/${fullPhone}?text=${encodeURIComponent(message)}`;
}

export function getProductNegotiationUrl(productName: string, specs: string, rate: string, volume: string): string {
  const msg = `Hello IdealKraft Team,

I saw your bulk catalog on your website and would like to negotiate pricing for:
• Product: ${productName}
• Specifications: ${specs}
• Listed Rate: ${rate}
• Target Volume: ${volume}

Could you please share your best wholesale deal and dispatch timeline?

Looking forward to your quick response.`;

  return createWhatsAppUrl(msg);
}

export function getCustomQuoteWhatsAppUrl(
  items: { name: string; quantity: number; unit: string; estimatedTotal: number }[],
  city: string,
  businessType: string
): string {
  const activeItems = items.filter(i => i.quantity > 0);
  const totalBase = activeItems.reduce((sum, i) => sum + i.estimatedTotal, 0);

  if (activeItems.length === 0) {
    const msg = `Hello IdealKraft Wholesale Team,

I visited your website and would like to discuss wholesale supply of 100% Virgin Orient tissue products:
• Delivery City: ${city || 'India'}
• Business Category: ${businessType || 'Commercial Enterprise'}

Could you please share your volume tier discounts and dispatch terms?

Looking forward to connecting with your sales desk.`;
    return createWhatsAppUrl(msg);
  }

  const itemList = activeItems
    .map(i => `• ${i.name}: ${i.quantity.toLocaleString('en-IN')} ${i.unit} (Subtotal: ₹${i.estimatedTotal.toLocaleString('en-IN')})`)
    .join('\n');

  const msg = `Hello IdealKraft Wholesale Team,

I configured an order estimate on your website and would like to negotiate contract rates:
• Delivery City: ${city || 'India'}
• Business Category: ${businessType || 'Commercial Enterprise'}

Requested Bulk Items:
${itemList}

Estimated Baseline Value: ₹${totalBase.toLocaleString('en-IN')}

Please share your best wholesale price quote including freight and dispatch timeline.`;

  return createWhatsAppUrl(msg);
}

export function getSampleKitWhatsAppUrl(): string {
  const msg = `Hello IdealKraft Team,

We are interested in evaluating your 100% Virgin Orient tissue paper quality for institutional procurement.

Please guide us on how to receive an IdealKraft B2B Sample Kit (Napkins, Kitchen Towel, Washroom Rolls) at our business address.

Thank you.`;

  return createWhatsAppUrl(msg);
}
