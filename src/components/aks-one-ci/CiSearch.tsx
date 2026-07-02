import React from 'react';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';
import { CiButton } from './CiButton';

interface CiSearchProps {
  placeholder?: string;
  onSearch?: (term: string, city: string) => void;
}

const CITIES = [
  'Toutes les villes',
  'Abidjan',
  'Bouaké',
  'Daloa',
  'Yamoussoukro',
  'Korhogo',
  'San-Pédro',
  'Man',
  'Gagnoa',
];

export const CiSearch: React.FC<CiSearchProps> = ({ placeholder = "Rechercher un artisan, un produit...", onSearch }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 w-full max-w-4xl mx-auto -mt-8 relative z-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-aks-blue/20 rounded-xl transition-all outline-none text-sm"
          />
        </div>

        <div className="md:w-64 relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <select
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-aks-blue/20 rounded-xl transition-all outline-none text-sm appearance-none cursor-pointer"
          >
            {CITIES.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <CiButton variant="orange" className="md:w-32 shadow-lg shadow-ci-orange/20">
          Rechercher
        </CiButton>

        <button className="p-3 text-gray-400 hover:text-aks-blue transition-colors">
          <SlidersHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};
