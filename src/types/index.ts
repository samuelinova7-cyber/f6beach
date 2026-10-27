export interface Surfboard {
  id: string;
  name: string;
  type: 'Funboard' | 'Longboard' | 'Shortboard' | 'Bodyboard' | 'Fish' | 'Softboard' | 'Iniciante';
  size: string; // e.g. "6'2\"", "7'2\"", "9'0\""
  volume: string; // e.g. "34L", "52L", "68L"
  tail: string; // e.g. "Round Squash", "Swallow", "Pin Tail", "Diamond"
  finSystem: string; // e.g. "Tri-quilha FCS II", "Single Fin + Stabs", "Quad Fin Futures"
  condition: 'Nova' | 'Seminova' | 'Usada Revisada';
  level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Todos os níveis';
  material: 'PU / Poliéster' | 'Epóxi EPS' | 'Soft Top Reforçado';
  description: string;
  features: string[];
  image: string;
  available: boolean;
  rentalAvailable: boolean;
  priceBuy?: number;
  priceRentPerDay?: number;
  priceRentPerHour?: number;
}

export interface SurfGear {
  id: string;
  name: string;
  category: 'Bermudas' | 'Dry Fit & UV' | 'Parafinas' | 'Leashes & Decks' | 'Acessórios & Quilhas';
  brand: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
  highlight?: boolean;
}

export interface LessonPackage {
  id: string;
  track: 'aprender' | 'evoluir';
  title: string;
  subtitle: string;
  level: string;
  duration: string;
  includes: string[];
  price: number;
  tag: string;
  popular?: boolean;
}

export interface RepairService {
  id: string;
  title: string;
  iconName: string;
  description: string;
  estimatedTime: string;
  startingPrice: string;
  commonCases: string[];
}

export interface CommunityPhoto {
  id: string;
  author: string;
  handle: string;
  spot: string;
  date: string;
  image: string;
  caption: string;
  likes: number;
  category: 'Barrels' | 'Longboard' | 'Aulas' | 'Lifestyle' | 'Corais';
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  type: 'photo' | 'reel';
  url: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
  helpfulCount: number;
  userType: 'Turista' | 'Surfista Local' | 'Aluno de Surf' | 'Cliente Locação';
}

export interface SurfForecast {
  updatedAt: string;
  waveHeight: string; // e.g. "1.2m - 1.5m"
  wavePeriod: string; // e.g. "11s"
  swellDirection: string; // e.g. "SSE (160°)"
  windSpeed: string; // e.g. "12 nós ENE"
  windQuality: 'Terral (Offshore)' | 'Maral Suave (Side-on)' | 'Sem Vento (Glassy)';
  waterTemp: string; // e.g. "28°C"
  uvIndex: string; // e.g. "Extremo (10)"
  tideLow: string;
  tideHigh: string;
  bestTime: string; // e.g. "06:00 às 09:30 (Maré Enchendo / Coral e Beach Break)"
  rating: 'Excelente' | 'Muito Bom' | 'Bom' | 'Regular';
  dailyForecast: {
    day: string;
    date: string;
    wave: string;
    period: string;
    wind: string;
    rating: 'Excelente' | 'Muito Bom' | 'Bom' | 'Regular';
  }[];
}
