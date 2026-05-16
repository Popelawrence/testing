import type { Product } from '../features/catalog/types/catalogTypes'

const mockProducts: Product[] = [
  {
    id: 'bloom-001',
    name: 'Dried Lavender Bundle',
    category: 'Nature',
    price: 28,
    description: 'A hand-tied bundle of dried lavender with soft purple tones and a delicate fragrance.',
    image: 'https://images.unsplash.com/photo-1516910817561-8d658f4d7d2c?auto=format&fit=crop&w=900&q=80',
    sold: false,
  },
  {
    id: 'vintage-rose',
    name: 'Vintage Floral Dress',
    category: 'Vintage',
    price: 98,
    description: 'A one-of-a-kind floral dress with a soft silhouette and vintage-inspired details.',
    image: 'https://images.unsplash.com/photo-1520975917594-7d47bb8da8c6?auto=format&fit=crop&w=900&q=80',
    sold: false,
  },
  {
    id: 'prints-003',
    name: 'Nature Print Trio',
    category: 'Photography',
    price: 65,
    description: 'A curated set of three botanical prints ready for framing and styling in your space.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    sold: true,
  },
  {
    id: 'vintage-journal',
    name: 'Vintage Leather Journal',
    category: 'Vintage',
    price: 52,
    description: 'A small leather journal with hand-stitched binding and antique-inspired paper.',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80',
    sold: false,
  },
  {
    id: 'nature-bouquet',
    name: 'Botanical Bouquet',
    category: 'Nature',
    price: 49,
    description: 'A seasonal bouquet arranged with dried botanicals, wild stems, and textural foliage.',
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1d4d6?auto=format&fit=crop&w=900&q=80',
    sold: false,
  },
  {
    id: 'portrait-session',
    name: 'Portrait Session Gift Card',
    category: 'Photography',
    price: 150,
    description: 'A gift card for a curated portrait session that captures natural light and authentic movement.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    sold: false,
  },
]

export default mockProducts
