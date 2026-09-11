export interface ProductSpec {
  id: string;
  name: string;
  category: 'napkin' | 'roll' | 'towel';
  shortTag: string;
  bulkRate: number;
  rateUnit: string;
  perItemDetail: string;
  specifications: string;
  dimensions: string;
  ply: string;
  gsm?: string;
  pulls?: string;
  minMonthlyOrder: string;
  cities: string;
  material: string;
  bestFor: string;
  features: string[];
  recommendedUse: string[];
  referenceImage?: string;
  referenceCaption?: string;
}

export const REFERENCE_GALLERY_IMAGES = [
  {
    id: 'ref-1ply-napkin',
    url: 'https://i.ibb.co/VY3DQrWb/Whats-App-Image-2026-09-11-at-11-26-08-AM.jpg',
    title: '1-Ply Serviette Napkin Stack',
    category: '1-Ply Economy Serviette',
    description: 'Actual visual reference showing pure white Orient Virgin Pulp, clean cut edges, and embossed waffle texture. Dispatched in bulk without retail packaging.',
    badge: 'Bulk Supply (Unpackaged)'
  },
  {
    id: 'ref-2ply-napkin',
    url: 'https://i.ibb.co/Mk28mbbL/Whats-App-Image-2026-09-11-at-11-26-39-AM.jpg',
    title: '2-Ply Premium Dining Napkin Fold',
    category: '2-Ply Hospitality Grade',
    description: 'Actual visual reference of dual-layer bonded virgin pulp, luxurious soft hand-feel, and border embossing. Bulk delivery without retail wrappers.',
    badge: 'Bulk Supply (Unpackaged)'
  },
  {
    id: 'ref-towel-roll',
    url: 'https://i.ibb.co/M5y0ftd7/Whats-App-Image-2026-09-11-at-11-27-28-AM.jpg',
    title: 'High-Density Kitchen Towel Roll',
    category: '22 GSM Towel Weave',
    description: 'Visual reference of thick 22 GSM heavy-duty virgin roll, laser perforation, and core winding. Delivered in bulk cartons without retail wrappers.',
    badge: 'Bulk Supply (Unpackaged)'
  },
  {
    id: 'ref-roll-core',
    url: 'https://i.ibb.co/FLJtc3qp/Whats-App-Image-2026-09-11-at-11-27-05-AM.jpg',
    title: 'Sanitation & Washroom Roll Structure',
    category: 'Precision Core & Perforation',
    description: 'Visual reference displaying uniform roll diameter, soft touch multi-ply sheet, and standard commercial dispenser core. Bulk master pack only.',
    badge: 'Bulk Supply (Unpackaged)'
  }
];

export const PRODUCTS: ProductSpec[] = [
  {
    id: '1ply-napkin',
    name: '1-Ply Serviette Napkin',
    category: 'napkin',
    shortTag: 'High Volume Economy',
    bulkRate: 13,
    rateUnit: '₹13 per 50 pcs',
    perItemDetail: '₹0.26 / napkin',
    specifications: '(SIZE 30*30) cms / serviette',
    dimensions: '30 cm × 30 cm',
    ply: '1-Ply',
    minMonthlyOrder: '20,000 Packets',
    cities: 'Pan India (Any City, freight at actuals)',
    material: '100% Virgin Pulp – Orient Material',
    bestFor: 'Cafes, fast-casual dining, catering, banquet services, food trucks',
    referenceImage: 'https://i.ibb.co/VY3DQrWb/Whats-App-Image-2026-09-11-at-11-26-08-AM.jpg',
    referenceCaption: 'Actual Orient virgin paper reference. Dispatched in bulk without outer retail packaging.',
    features: [
      '100% Virgin Orient Grade pulp — pure white with zero grey tint',
      'Food-contact certified, odorless & skin friendly',
      'Subtle waffle micro-emboss for increased liquid absorption',
      'Guaranteed 30×30 cm square sheet cutting with zero misfolds'
    ],
    recommendedUse: ['Food Courts & Cafes', 'QSR Chains', 'Event Caterers', 'Corporate Pantries']
  },
  {
    id: '2ply-napkin',
    name: '2-Ply Premium Dining Napkin',
    category: 'napkin',
    shortTag: 'Hospitality Grade',
    bulkRate: 25,
    rateUnit: '₹25 per 50 pcs',
    perItemDetail: '₹0.50 / napkin',
    specifications: '(SIZE 30*30) cms / serviette',
    dimensions: '30 cm × 30 cm',
    ply: '2-Ply Double Layer',
    minMonthlyOrder: '20,000 Packets',
    cities: 'Pan India (Any City, freight at actuals)',
    material: '100% Virgin Pulp – Orient Material',
    bestFor: 'Fine dining restaurants, luxury hotels, clubhouses, wedding banquets',
    referenceImage: 'https://i.ibb.co/Mk28mbbL/Whats-App-Image-2026-09-11-at-11-26-39-AM.jpg',
    referenceCaption: 'Actual 2-ply premium virgin dining napkin fold & emboss reference. Dispatched in bulk without outer retail packaging.',
    features: [
      'Dual-ply bonded layers for luxurious hand-feel and superior strength',
      'High-absorbency weave traps moisture without disintegrating',
      'Lint-free finish — leaves zero paper residue on hands or dark clothing',
      'Food grade & gentle on sensitive skin'
    ],
    recommendedUse: ['4 & 5 Star Hotels', 'Fine Dining Bistros', 'Corporate Executive Dining', 'VIP Lounges']
  },
  {
    id: 'kitchen-towel',
    name: 'Kitchen Towel Heavy Duty Roll',
    category: 'towel',
    shortTag: '22 GSM Extra Strength',
    bulkRate: 40,
    rateUnit: '₹40 per pc',
    perItemDetail: '₹40 / roll (100 pulls)',
    specifications: '(SIZE 20*20) cms / pull (100 PULLS, 22GSM, 2PLY)',
    dimensions: '20 cm × 20 cm per pull',
    ply: '2-Ply Reinforced',
    gsm: '22 GSM',
    pulls: '100 Pulls per roll',
    minMonthlyOrder: '50,000 Rolls',
    cities: 'Pan India (Any City, freight at actuals)',
    material: '100% Virgin Pulp – Orient Material',
    bestFor: 'Commercial kitchens, cloud kitchens, hotel galleys, food processing plants',
    referenceImage: 'https://i.ibb.co/M5y0ftd7/Whats-App-Image-2026-09-11-at-11-27-28-AM.jpg',
    referenceCaption: 'Actual 22 GSM heavy-duty virgin roll reference. Dispatched in bulk without outer retail packaging.',
    features: [
      'Heavy 22 GSM high-density virgin fibres for rapid grease & oil absorption',
      'True 100 pulls per roll with clear laser perforation every 20 cm',
      'Tear-resistant even when soaking wet — no paper flakes in food preparation',
      'Safe for hot cookware wipedowns and food surface sanitation'
    ],
    recommendedUse: ['Commercial Cloud Kitchens', 'Hotel Kitchens', 'Bakeries & Sweet Shops', 'Food Packaging Lines']
  },
  {
    id: 'sanitation-roll',
    name: 'Sanitation & Washroom Roll',
    category: 'roll',
    shortTag: '200 Pulls Precision Core',
    bulkRate: 17,
    rateUnit: '₹17 per pc',
    perItemDetail: '₹17 / roll (200 pulls)',
    specifications: '(SIZE 10*10) cms / pull (200 PULLS, 17GSM, 2PLY)',
    dimensions: '10 cm × 10 cm per pull',
    ply: '2-Ply Soft Touch',
    gsm: '17 GSM',
    pulls: '200 Pulls per roll',
    minMonthlyOrder: '50,000 Rolls',
    cities: 'Pan India (Any City, freight at actuals)',
    material: '100% Virgin Pulp – Orient Material',
    bestFor: 'Corporate offices, airport restrooms, hospital sanitations, malls, hotel washrooms',
    referenceImage: 'https://i.ibb.co/FLJtc3qp/Whats-App-Image-2026-09-11-at-11-27-05-AM.jpg',
    referenceCaption: 'Actual 200 pulls washroom roll reference. Dispatched in bulk without outer retail packaging.',
    features: [
      'Optimal 17 GSM softness balance for comfort and zero clog risk',
      'True 200 precision pulls — no short-roll shrinkage',
      'Rapid-dissolve flushable virgin fibres (100% septic tank safe)',
      'Tight uniform winding with robust standard core fitting all standard B2B dispensers'
    ],
    recommendedUse: ['Corporate IT Parks', 'Hospitals & Medical Centers', 'Shopping Centers', 'Hotel Restrooms']
  }
];

export const COMPANY_DETAILS = {
  brandName: 'IdealKraft',
  tagline: 'Export Quality 100% Virgin Orient Tissue Paper',
  usp: 'TRUE TO WORDS, ZERO DEVIATIONS, EXCEPT MANUAL ERRORS',
  whatsappNumber: '9022786000',
  whatsappFormatted: '+91 90227 86000',
  phoneDisplay: '+91 90227 86000',
  trademarkNo: '6240316',
  classNo: 'Class 16',
  certificateNo: '3606420',
  regDate: '29 December 2023',
  validUpto: '29 December 2033',
  firmName: 'SABA KHAN TRADING AS IDEALKRAFT',
  officeAddress: '219, Shop No. 1, Ansari Estate Compound, Opp. Chota Sonapur, Maulana Shaukat Ali Road, Mumbai - 400008, Maharashtra',
  govRegistry: 'Trade Marks Registry, Government of India (MUMBAI Office)',
  goodsDescription: 'Paper tissues, Printing paper, Paper for wrapping and packaging.'
};

export const POPULAR_CITIES = [
  'Mumbai',
  'Delhi NCR',
  'Bengaluru',
  'Pune',
  'Hyderabad',
  'Ahmedabad',
  'Chennai',
  'Kolkata',
  'Surat',
  'Jaipur',
  'Indore',
  'Goa',
  'Chandigarh',
  'Lucknow',
  'Other City'
];
