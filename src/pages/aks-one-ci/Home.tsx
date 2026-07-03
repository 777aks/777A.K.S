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
import { useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Users,
  Briefcase,
  Home as HomeIcon,
  Smartphone,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { CiButton } from '../../components/aks-one-ci/CiButton';
import { CiSearch } from '../../components/aks-one-ci/CiSearch';
import { CiCard } from '../../components/aks-one-ci/CiCard';
import aksOneLogo from '../../assets/aks_one_logo.png';

export const AksOneHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-ci-orange via-white to-ci-green p-1 group">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
        <div className="relative bg-white/90 backdrop-blur-md rounded-[22px] px-8 py-16 text-center space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-aks-blue/10 text-aks-blue rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Zap size={14} className="mr-2" />
            Révolution Numérique en Côte d'Ivoire
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src={aksOneLogo} alt="AKS ONE CI Logo" className="h-32 w-auto object-contain mb-2" />
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              AKS ONE <span className="text-ci-orange">CI</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Le portail tout-en-un pour les citoyens, artisans et entreprises ivoiriennes.
            Découvrez le futur du commerce et des services locaux.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <CiButton size="lg" variant="orange" onClick={() => navigate('/aks-one/marketplace')}>
              Explorer le Marché
            </CiButton>
            <CiButton size="lg" variant="outline" onClick={() => navigate('/aks-one/auth')}>
              Devenir Partenaire
            </CiButton>
          </div>
        </div>
      </section>

      {/* Search Bar Integration */}
      <CiSearch />

      {/* Categories Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Marketplace', icon: ShoppingBag, color: 'bg-blue-50 text-blue-600', path: '/aks-one/marketplace' },
          { label: 'Artisans', icon: Users, color: 'bg-orange-50 text-orange-600', path: '/aks-one/directory' },
          { label: 'Emploi', icon: Briefcase, color: 'bg-green-50 text-green-600', path: '/aks-one/jobs' },
          { label: 'Immobilier', icon: HomeIcon, color: 'bg-purple-50 text-purple-600', path: '/aks-one/real-estate' },
        ].map((cat) => (
          <button
            key={cat.label}
            onClick={() => navigate(cat.path)}
            className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-aks-blue/30 hover:shadow-lg transition-all group"
          >
            <div className={`p-4 rounded-xl ${cat.color} mb-4 group-hover:scale-110 transition-transform`}>
              <cat.icon size={28} />
            </div>
            <span className="font-bold text-gray-900">{cat.label}</span>
          </button>
        ))}
      </section>

      {/* Featured Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Artisans à la Une</h2>
              <p className="text-gray-500">Les professionnels les plus recommandés cette semaine</p>
            </div>
            <CiButton variant="outline" size="sm" onClick={() => navigate('/aks-one/directory')}>
              Voir tout <ArrowRight size={14} className="ml-2" />
            </CiButton>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CiCard
              title="Moussa Menuiserie"
              subtitle="Menuisier Professionnel"
              description="Spécialiste en meubles sur mesure et aménagement d'intérieur à Abidjan."
              location="Abidjan, Cocody"
              rating={4.9}
              badge="Vérifié"
            />
            <CiCard
              title="Awa Couture Luxe"
              subtitle="Styliste Modéliste"
              description="Créations originales de pagnes et vêtements de cérémonie."
              location="Bouaké, Centre"
              rating={4.8}
              badge="Top Vendeur"
            />
          </div>
        </div>

        <div className="bg-aks-blue-dark rounded-3xl p-8 text-white space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
          <h3 className="text-xl font-bold">Pourquoi AKS ONE CI ?</h3>
          <div className="space-y-4">
            {[
              { icon: ShieldCheck, title: 'Confiance', desc: 'Profils vérifiés par nos soins' },
              { icon: Zap, title: 'Rapidité', desc: 'Trouvez ce qu\'il vous faut en 2 clics' },
              { icon: TrendingUp, title: 'Croissance', desc: 'Boostez votre activité locale' },
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <feature.icon size={18} className="text-ci-orange" />
                </div>
                <div>
                  <p className="font-bold text-sm">{feature.title}</p>
                  <p className="text-xs text-blue-200">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <CiButton variant="orange" className="w-full mt-4">
            En savoir plus
          </CiButton>
        </div>
      </div>
    </div>
  );
};
