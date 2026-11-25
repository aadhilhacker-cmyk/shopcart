export interface Product {
  id: number;
  name: string;
  category: 'Audio' | 'Home' | 'Carry' | 'Accessories';
  price: number;
  image: string;
  description: string;
  featured: boolean;
}

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Studio Wireless Headphones',
    category: 'Audio',
    price: 4999,
    image: '/src/assets/images/product_wireless_headphones_1795584317086.jpg',
    description: 'Comfortable over-ear wireless headphones with clear, balanced sound.',
    featured: true,
  },
  {
    id: 2,
    name: 'Cobalt Ceramic Mug',
    category: 'Home',
    price: 799,
    image: '/src/assets/images/product_ceramic_mug_1795584317201.jpg',
    description: 'Hand-glazed stoneware mug built to keep morning coffee warm.',
    featured: true,
  },
  {
    id: 3,
    name: 'Commuter Canvas Backpack',
    category: 'Carry',
    price: 3499,
    image: '/src/assets/images/product_everyday_backpack_1795584317908.jpg',
    description: 'Water-resistant navy backpack with padded 15-inch laptop sleeve.',
    featured: true,
  },
  {
    id: 4,
    name: 'Minimalist Steel Watch',
    category: 'Accessories',
    price: 5999,
    image: '/src/assets/images/product_minimal_watch_1795584318076.jpg',
    description: 'Brushed stainless steel watch with a clean dial and leather strap.',
    featured: false,
  },
  {
    id: 5,
    name: 'Architectural Desk Lamp',
    category: 'Home',
    price: 2899,
    image: '/src/assets/images/product_desk_lamp_1795584318928.jpg',
    description: 'Adjustable aluminum task lamp with warm, glare-free LED lighting.',
    featured: false,
  },
  {
    id: 6,
    name: 'Insulated Steel Bottle',
    category: 'Accessories',
    price: 1199,
    image: '/src/assets/images/product_insulated_bottle_1795584318595.jpg',
    description: 'Double-walled bottle that keeps drinks cold for 24 hours.',
    featured: false,
  },
];
