/*
 * Copyright © 2026 AKS ONE CI
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import React, { useState } from 'react';
import { CiButton } from '../../components/aks-one-ci/CiButton';
import { Mail, Lock, User, Phone, ArrowRight, Globe } from 'lucide-react';

export const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-aks-blue-dark p-8 text-white text-center space-y-2 relative">
          <div className="absolute top-4 left-4 opacity-20">
            <Globe size={48} />
          </div>
          <h2 className="text-3xl font-black italic">AKS ONE CI</h2>
          <p className="text-blue-200 text-sm font-medium">
            {isLogin ? 'Bon retour parmi nous !' : 'Rejoignez la révolution locale'}
          </p>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isLogin ? 'bg-white text-aks-blue shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Connexion
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${!isLogin ? 'bg-white text-aks-blue shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Inscription
            </button>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Nom complet</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="John Doe" className="w-full pl-10 pr-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-aks-blue/20 rounded-xl outline-none transition-all" />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email ou Téléphone</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" placeholder="exemple@mail.ci" className="w-full pl-10 pr-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-aks-blue/20 rounded-xl outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-aks-blue/20 rounded-xl outline-none transition-all" />
              </div>
            </div>

            {isLogin && (
              <div className="text-right">
                <button className="text-xs font-bold text-aks-blue hover:underline">Mot de passe oublié ?</button>
              </div>
            )}

            <CiButton variant="orange" className="w-full py-4 text-base shadow-lg shadow-ci-orange/20">
              {isLogin ? 'Se connecter' : 'Créer mon compte'} <ArrowRight size={18} className="ml-2" />
            </CiButton>
          </form>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400 font-bold">Ou continuer avec</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <CiButton variant="outline" className="flex items-center justify-center space-x-2">
              <Phone size={16} /> <span>Mobile Money</span>
            </CiButton>
            <CiButton variant="outline" className="flex items-center justify-center space-x-2">
              <Globe size={16} /> <span>Google</span>
            </CiButton>
          </div>
        </div>
      </div>
    </div>
  );
};
