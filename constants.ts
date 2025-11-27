
import { House, Amenity, TrustPoint } from './types';

export const HOUSES: House[] = [
  {
    id: 'edna',
    model: 'Modelo Edna',
    tagline: 'A Clássica Moderna',
    specs: '3 Quartos | 3 Banheiros | 230m² (Total)',
    price: 'U$ 280,000',
    image: 'http://wmbustamanteinvestments.com/wp-content/uploads/2025/11/5bf7bbbfc68aeddc691e9918164e9bc1-uncropped_scaled_within_1344_1008.webp',
    features: ['Design Minimalista', 'Cores Aconchegantes']
  },
  {
    id: 'felipe',
    model: 'Modelo Felipe & Gustavo',
    tagline: 'A Joia da Coroa',
    specs: '4 Quartos | 4 Banheiros | 236m² (Total)',
    price: 'U$ 288,000',
    image: 'http://wmbustamanteinvestments.com/wp-content/uploads/2025/11/modelo-felipe-scaled.jpg',
    features: ['Maior Metragem', 'Espaço Imponente']
  },
  {
    id: 'loris',
    model: 'Modelo Loris',
    tagline: 'Sofisticação Aberta',
    specs: '3 Quartos | 3 Banheiros | 273m² (Total)',
    price: 'U$ 245,000',
    image: 'http://wmbustamanteinvestments.com/wp-content/uploads/2025/11/modelo-loris-scaled.jpg',
    features: ['Comodidades de Ponta', 'Design Fluido']
  },
  {
    id: 'karina',
    model: 'Modelo Karina',
    tagline: 'O Refúgio Perfeito',
    specs: '3 Quartos | 2 Banheiros | 201m² (Total)',
    price: 'U$ 200,008',
    image: 'http://wmbustamanteinvestments.com/wp-content/uploads/2025/11/modelo-karina.png',
    features: ['Acabamento Sofisticado', 'Eficiência Inteligente']
  }
];

export const AMENITIES: Amenity[] = [
  { 
    icon: 'MapPin', 
    title: 'Localização', 
    desc: '84 milhas de Orlando. O refúgio perfeito longe do caos, perto da magia.' 
  },
  { 
    icon: 'TrendingUp', 
    title: 'Valorização', 
    desc: 'Crescimento populacional de 3.8%. Região em plena ascensão.' 
  },
  { 
    icon: 'Palmtree', 
    title: 'Lazer Completo', 
    desc: 'Golfe particular, Quadras de Pickleball, Tênis e Pesca.' 
  }
];

export const TRUST_POINTS: TrustPoint[] = [
  { id: 1, text: "Acesso 24h às câmeras da obra (Transparência Total)" },
  { id: 2, text: "Garantia de 1º ano de aluguel pago pela Construtora" },
  { id: 3, text: "Abertura de conta PJ nos EUA com depósito de apenas U$100" },
  { id: 4, text: "Estruturação de LLC para eficiência fiscal e sucessória" }
];