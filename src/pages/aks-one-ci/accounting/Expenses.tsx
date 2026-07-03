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
import { CiButton } from '../../../components/aks-one-ci/CiButton';
import {
  CreditCard,
  Plus,
  ArrowUpRight,
  ShoppingBag,
  Truck,
  Zap,
  Coffee,
  MoreVertical,
  Calendar
} from 'lucide-react';

export const Expenses: React.FC = () => {
  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-900">Suivi des Dépenses</h2>
          <p className="text-gray-500 font-medium">Contrôlez vos sorties d'argent et gérez vos justificatifs.</p>
        </div>
        <CiButton variant="orange"><Plus size={18} className="mr-2" /> Enregistrer une Dépense</CiButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total ce mois</p>
          <p className="text-3xl font-black text-gray-900">452,000 F</p>
          <div className="flex items-center text-red-500 text-xs font-bold mt-2">
            <ArrowUpRight size={14} className="mr-1" /> +8% vs mois dernier
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">En attente de validation</p>
          <p className="text-3xl font-black text-gray-900">85,000 F</p>
          <p className="text-xs text-gray-400 font-medium mt-2">3 notes de frais à vérifier</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Budget restant</p>
          <p className="text-3xl font-black text-ci-green">148,000 F</p>
          <p className="text-xs text-gray-400 font-medium mt-2">Catégorie: Fournitures</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h3 className="font-black text-gray-900">Dépenses Récentes</h3>
          <CiButton variant="outline" size="sm" className="bg-white"><Calendar size={14} className="mr-2" /> Ce mois-ci</CiButton>
        </div>
        <div className="divide-y divide-gray-50">
          {[
            { label: 'Achat de matières premières', cat: 'Stock', icon: ShoppingBag, date: 'Aujourd\'hui', amount: '120,000 F', color: 'text-blue-500', bg: 'bg-blue-50' },
            { label: 'Livraison client Abobo', cat: 'Logistique', icon: Truck, date: 'Hier', amount: '5,000 F', color: 'text-orange-500', bg: 'bg-orange-50' },
            { label: 'Facture Électricité (CIE)', cat: 'Charges', icon: Zap, date: '22 Mai 2024', amount: '45,800 F', color: 'text-yellow-500', bg: 'bg-yellow-50' },
            { label: 'Déjeuner client d\'affaires', cat: 'Repas', icon: Coffee, date: '20 Mai 2024', amount: '15,000 F', color: 'text-red-500', bg: 'bg-red-50' },
          ].map((exp, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${exp.bg} ${exp.color}`}>
                  <exp.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{exp.label}</p>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-tighter">{exp.cat} • {exp.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm font-black text-gray-900">{exp.amount}</p>
                <button className="p-1 text-gray-300 hover:text-gray-500"><MoreVertical size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
