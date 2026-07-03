import React from 'react';
import { CiButton } from '../../../components/aks-one-ci/CiButton';
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus
} from 'lucide-react';

export const AccountingDashboard: React.FC = () => {
  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-900">Gestion Comptable</h2>
          <p className="text-gray-500 font-medium">Suivez la santé financière de votre entreprise.</p>
        </div>
        <div className="flex space-x-3">
          <CiButton variant="outline" className="bg-white">Exporter PDF</CiButton>
          <CiButton variant="orange"><Plus size={18} className="mr-2" /> Nouvelle Facture</CiButton>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <div className="p-3 bg-green-50 text-ci-green rounded-xl"><TrendingUp size={24} /></div>
            <span className="text-xs font-bold text-ci-green">+12% ce mois</span>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Chiffre d'Affaires</p>
            <p className="text-3xl font-black text-gray-900">2,450,000 F</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <div className="p-3 bg-red-50 text-aks-red rounded-xl"><TrendingDown size={24} /></div>
            <span className="text-xs font-bold text-aks-red">-5% ce mois</span>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Dépenses</p>
            <p className="text-3xl font-black text-gray-900">850,000 F</p>
          </div>
        </div>

        <div className="bg-aks-blue-dark p-8 rounded-2xl text-white space-y-4 shadow-xl">
          <div className="flex justify-between items-center">
            <div className="p-3 bg-white/10 text-white rounded-xl"><Wallet size={24} /></div>
          </div>
          <div>
            <p className="text-xs font-bold text-blue-200 uppercase tracking-wider">Bénéfice Net</p>
            <p className="text-3xl font-black text-white">1,600,000 F</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-black text-gray-900">Factures Récentes</h3>
            <CiButton variant="outline" size="sm">Voir tout</CiButton>
          </div>
          <div className="divide-y divide-gray-50">
            {[
              { client: 'Moussa S.', amount: '150,000 F', date: '24/05/2024', status: 'Payé' },
              { client: 'Awa C.', amount: '45,000 F', date: '23/05/2024', status: 'En attente' },
              { client: 'Général Services', amount: '800,000 F', date: '20/05/2024', status: 'Payé' },
              { client: 'Koffi P.', amount: '12,500 F', date: '18/05/2024', status: 'En retard' },
            ].map((inv, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gray-100 rounded-lg"><FileText size={16} className="text-gray-400" /></div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{inv.client}</p>
                    <p className="text-[10px] text-gray-400 font-medium uppercase">{inv.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-gray-900">{inv.amount}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    inv.status === 'Payé' ? 'bg-green-50 text-ci-green' :
                    inv.status === 'En attente' ? 'bg-orange-50 text-ci-orange' : 'bg-red-50 text-aks-red'
                  }`}>
                    {inv.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-black text-gray-900 mb-6">Répartition des Dépenses</h3>
          <div className="space-y-6">
            {[
              { label: 'Fournitures', value: 45, color: 'bg-ci-orange' },
              { label: 'Logistique', value: 30, color: 'bg-aks-blue' },
              { label: 'Marketing', value: 15, color: 'bg-ci-green' },
              { label: 'Autres', value: 10, color: 'bg-gray-200' },
            ].map((exp, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-gray-500">{exp.label}</span>
                  <span className="text-gray-900">{exp.value}%</span>
                </div>
                <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                  <div className={`h-full ${exp.color}`} style={{ width: `${exp.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
