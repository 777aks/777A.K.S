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
import { CiButton } from '../../components/aks-one-ci/CiButton';
import {
  ShoppingBag,
  MessageSquare,
  Heart,
  Settings,
  Plus,
  ChevronRight,
  TrendingUp,
  Clock,
  CheckCircle2
} from 'lucide-react';

export const UserDashboard: React.FC = () => {
  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-900">Tableau de Bord</h2>
          <p className="text-gray-500 font-medium italic">Akwaba, Bakary ! Voici l'état de votre compte.</p>
        </div>
        <CiButton variant="orange">
          <Plus size={18} className="mr-2" /> Publier une annonce
        </CiButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Mes Commandes', value: '12', icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Messages', value: '5', icon: MessageSquare, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: 'Favoris', value: '24', icon: Heart, color: 'text-red-600', bg: 'bg-red-50' },
          { label: 'Portefeuille', value: '45,000 F', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-black text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
              <h3 className="font-black text-gray-900">Activités Récentes</h3>
              <button className="text-sm font-bold text-aks-blue hover:underline">Voir tout</button>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { type: 'order', msg: 'Votre commande #3421 a été expédiée', time: 'Il y a 2h', status: 'success' },
                { type: 'message', msg: 'Nouveau message de Koffi Plomberie', time: 'Il y a 5h', status: 'info' },
                { type: 'system', msg: 'Votre annonce "Attiéké" est en ligne', time: 'Hier', status: 'success' },
                { type: 'payment', msg: 'Paiement reçu : 15,000 FCFA', time: 'Il y a 2 jours', status: 'success' },
              ].map((item, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Clock size={16} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{item.msg}</p>
                      <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">{item.time}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-gray-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-ci-orange to-orange-600 rounded-2xl p-6 text-white space-y-4 shadow-lg shadow-ci-orange/20">
            <h3 className="text-lg font-black">Devenir Vendeur Pro</h3>
            <p className="text-sm text-orange-50/80 leading-relaxed">
              Boostez votre visibilité et vendez plus rapidement sur AKS ONE CI avec le badge "Vérifié".
            </p>
            <CiButton className="w-full bg-white text-ci-orange hover:bg-orange-50">
              En savoir plus
            </CiButton>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="font-black text-gray-900 mb-4">Statut du compte</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">Vérification ID</span>
                <CheckCircle2 size={16} className="text-ci-green" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">Téléphone</span>
                <CheckCircle2 size={16} className="text-ci-green" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">Email</span>
                <span className="text-xs font-bold text-aks-blue">Vérifier</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
