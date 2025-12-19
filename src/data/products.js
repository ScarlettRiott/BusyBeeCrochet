// products data updated to reference local assets in public/assets
// Public assets are served from /assets when using create-react-app / static servers

const products = [
  {
    id: 'owl-blanket',
    name: 'Owl Blanket',
    price: 45,
    image: '/assets/owl.svg',
    description: 'Handmade owl-themed crochet blanket.'
  },
  {
    id: 'pouf',
    name: 'Crochet Pouf',
    price: 60,
    image: '/assets/pouf.svg',
    description: 'Soft and squishy handmade pouf for home decor.'
  },
  {
    id: 'beanie',
    name: 'Cozy Beanie',
    price: 25,
    image: '/assets/beanie.svg',
    description: 'Warm crochet beanie for chilly days.'
  }
];

export default products;
