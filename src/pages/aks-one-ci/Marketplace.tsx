/*
 * Copyright © 2026 AKS ONE CI
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import React from 'react';
import { CiSearch } from '../../components/aks-one-ci/CiSearch';
import { CiCard } from '../../components/aks-one-ci/CiCard';
import { CiButton } from '../../components/aks-one-ci/CiButton';
import { Filter, ChevronDown } from 'lucide-react';

export const Marketplace: React.FC = () => {
  const products = [
    { title: 'Attiéké Frais Premium', price: '500 FCFA', location: 'Abidjan', rating: 4.5, badge: 'Nouveau' },
    { title: 'Huile de Palme Bio', price: '1,500 FCFA', location: 'San Pedro', rating: 4.2 },
    { title: 'Pagne Kita Authentique', price: '25,000 FCFA', location: 'Yamoussoukro', rating: 4.9, badge: 'Artisanal' },
    { title: 'Café de Côte d\'Ivoire 500g', price: '3,500 FCFA', location: 'Man', rating: 4.7 },
    { title: 'Savon Noir Artisanal', price: '1,000 FCFA', location: 'Bouaké', rating: 4.4 },
    { title: 'Chocolat 70% Cacao CI', price: '2,000 FCFA', location: 'Abidjan', rating: 4.8, badge: 'Top' },
  ];

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Le Grand Marché</h2>
          <p className="text-gray-500">Découvrez les meilleurs produits de nos terroirs.</p>
        </div>
        <div className="flex items-center space-x-3">
          <CiButton variant="outline" size="sm" className="bg-white">
            <Filter size={14} className="mr-2" /> Filtrer
          </CiButton>
          <CiButton variant="outline" size="sm" className="bg-white">
            Trier par <ChevronDown size={14} className="ml-2" />
          </CiButton>
        </div>
      </div>

      <CiSearch placeholder="Rechercher un produit (ex: Pagne, Café, Attiéké)..." />

      <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar">
        {['Tous', 'Alimentation', 'Mode', 'Artisanat', 'Électronique', 'Maison', 'Cosmétique'].map((cat, i) => (
          <button
            key={cat}
            className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
              i === 0 ? 'bg-ci-orange text-white' : 'bg-white text-gray-600 border border-gray-100 hover:border-ci-orange/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <CiCard key={i} {...p} />
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <CiButton variant="outline" className="px-12">
          Charger plus de produits
        </CiButton>
      </div>
    </div>
  );
};
