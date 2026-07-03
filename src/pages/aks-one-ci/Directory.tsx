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
import { Users, ShieldCheck, MapPin, Star } from 'lucide-react';

export const Directory: React.FC = () => {
  const artisans = [
    { title: 'Koffi Plomberie', subtitle: 'Plombier Sanitaire', location: 'Abidjan, Marcory', rating: 4.8, badge: 'Vérifié' },
    { title: 'Yao Électricité', subtitle: 'Électricien Bâtiment', location: 'Yamoussoukro', rating: 4.6, badge: 'Vérifié' },
    { title: 'Soro Mécanique', subtitle: 'Mécanicien Auto', location: 'Korhogo', rating: 4.7 },
    { title: 'Traoré Froid', subtitle: 'Frigoriste', location: 'San Pedro', rating: 4.5, badge: 'Vérifié' },
    { title: 'Bamba Peinture', subtitle: 'Peintre en bâtiment', location: 'Abidjan, Yopougon', rating: 4.9, badge: 'Top' },
    { title: 'Kouamé Maçonnerie', subtitle: 'Maçon Professionnel', location: 'Bouaké', rating: 4.3 },
  ];

  return (
    <div className="space-y-8 pb-20">
      <div className="bg-gradient-to-br from-aks-blue to-aks-blue-dark rounded-3xl p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
            <Users size={14} className="mr-2" /> Annuaire des Professionnels
          </div>
          <h2 className="text-4xl font-black mb-4">Trouvez l'Artisan de Confiance</h2>
          <p className="text-blue-100 text-lg">
            Plus de 10,000 artisans qualifiés et vérifiés à travers toute la Côte d'Ivoire.
          </p>
        </div>
      </div>

      <CiSearch placeholder="Quel métier recherchez-vous ? (ex: Plombier, Électricien)..." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artisans.map((artisan, i) => (
          <CiCard key={i} {...artisan} description="Disponible immédiatement pour vos travaux et dépannages urgents." />
        ))}
      </div>

      <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="p-4 bg-ci-green/10 rounded-full text-ci-green">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900">Vous êtes un professionnel ?</h4>
            <p className="text-gray-500">Inscrivez-vous gratuitement et développez votre clientèle.</p>
          </div>
        </div>
        <CiButton variant="green" size="lg">
          Rejoindre le Réseau
        </CiButton>
      </div>
    </div>
  );
};
