/*
  Product catalog (simple static list).
  Using SVG placeholder assets in public/assets/ for quick local preview.
*/
const products = [
  {
    id: 'owl',
    title: 'Amigurumi Owl',
    price: 28.0,
    currency: 'USD',
    image: '/assets/product-owl.svg',
    thumbnail: '/assets/product-owl-thumb.svg',
    short: 'Soft and squishy owl plush. Multiple colors.',
    description: 'Handmade amigurumi owl crafted with soft acrylic yarn. Approximately 8" tall.',
    sku: 'BB-OWL-001'
  },
  {
    id: 'pouf',
    title: 'Cozy Pouf',
    price: 65.0,
    currency: 'USD',
    image: '/assets/product-cozy.svg',
    thumbnail: '/assets/product-cozy-thumb.svg',
    short: 'Chunky crochet pouf — comfy living room accent.',
    description: 'Hand-crocheted chunky pouf. Durable and cushy; comes in several colors.',
    sku: 'BB-POUF-001'
  },
  {
    id: 'beanie',
    title: 'Chunky Beanie',
    price: 22.0,
    currency: 'USD',
    image: '/assets/product-hat.svg',
    thumbnail: '/assets/product-hat-thumb.svg',
    short: 'Warm hand-crocheted beanie.',
    description: 'Cozy chunky beanie with a soft fit. One size fits most.',
    sku: 'BB-BEANIE-001'
  }
];

export default products;
