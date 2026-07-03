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
import { User, Mail, Phone, MapPin, Camera, Shield, Bell, CreditCard, ChevronRight } from 'lucide-react';

export const Profile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-ci-orange to-ci-green rounded-3xl" />
        <div className="absolute -bottom-12 left-8 flex items-end space-x-6">
          <div className="relative group">
            <div className="w-32 h-32 rounded-3xl bg-white p-1 shadow-lg overflow-hidden">
              <div className="w-full h-full bg-gray-100 rounded-[22px] flex items-center justify-center text-gray-300">
                <User size={64} />
              </div>
            </div>
            <button className="absolute bottom-2 right-2 p-2 bg-aks-blue text-white rounded-lg shadow-md hover:scale-110 transition-transform">
              <Camera size={16} />
            </button>
          </div>
          <div className="pb-4">
            <h2 className="text-3xl font-black text-gray-900">Bakary Traoré</h2>
            <p className="text-gray-500 font-medium">Membre depuis Mars 2024</p>
          </div>
        </div>
      </div>

      <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-1">
            {[
              { label: 'Informations personnelles', icon: User, active: true },
              { label: 'Sécurité & Mot de passe', icon: Shield },
              { label: 'Notifications', icon: Bell },
              { label: 'Paiements & Mobile Money', icon: CreditCard },
            ].map((item, i) => (
              <button
                key={i}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  item.active ? 'bg-aks-blue text-white' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <CiButton variant="outline" className="w-full text-red-500 border-red-100 hover:bg-red-50 hover:text-red-600">
            Déconnexion
          </CiButton>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-6">
            <h3 className="text-xl font-black text-gray-900 border-b border-gray-50 pb-4">Informations du profil</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Prénom</label>
                <input type="text" defaultValue="Bakary" className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-aks-blue/20 rounded-xl outline-none transition-all text-sm font-medium" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Nom</label>
                <input type="text" defaultValue="Traoré" className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-aks-blue/20 rounded-xl outline-none transition-all text-sm font-medium" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Email</label>
                <input type="email" defaultValue="bakary@mail.ci" className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-aks-blue/20 rounded-xl outline-none transition-all text-sm font-medium" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Téléphone</label>
                <input type="text" defaultValue="+225 07 00 00 00 00" className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-aks-blue/20 rounded-xl outline-none transition-all text-sm font-medium" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase">Ville</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <select className="w-full pl-10 pr-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-aks-blue/20 rounded-xl outline-none transition-all text-sm font-medium appearance-none">
                  <option>Abidjan</option>
                  <option>Bouaké</option>
                  <option>Yamoussoukro</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <CiButton variant="green">Sauvegarder les modifications</CiButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
