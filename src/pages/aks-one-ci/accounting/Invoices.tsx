import React from 'react';
import { CiButton } from '../../../components/aks-one-ci/CiButton';
import {
  FileText,
  Plus,
  Search,
  Filter,
  Download,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';

export const Invoices: React.FC = () => {
  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-900">Factures & Devis</h2>
          <p className="text-gray-500 font-medium">Gérez vos documents commerciaux en toute simplicité.</p>
        </div>
        <div className="flex space-x-3">
          <CiButton variant="outline" className="bg-white"><Plus size={18} className="mr-2" /> Nouveau Devis</CiButton>
          <CiButton variant="orange"><Plus size={18} className="mr-2" /> Nouvelle Facture</CiButton>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input type="text" placeholder="Rechercher une facture, un client..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-aks-blue/20 rounded-xl outline-none text-sm" />
        </div>
        <div className="flex gap-2">
          <CiButton variant="outline" size="sm" className="bg-white font-bold"><Filter size={14} className="mr-2" /> Filtrer</CiButton>
          <CiButton variant="outline" size="sm" className="bg-white font-bold"><Download size={14} className="mr-2" /> Export</CiButton>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">N° Facture</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Client</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Date</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Montant</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Statut</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { id: 'FAC-2024-001', client: 'Moussa S.', date: '24 Mai 2024', amount: '150,000 F', status: 'Payé' },
              { id: 'FAC-2024-002', client: 'Awa C.', date: '23 Mai 2024', amount: '45,000 F', status: 'En attente' },
              { id: 'DEV-2024-005', client: 'Soro M.', date: '22 Mai 2024', amount: '250,000 F', status: 'Devis' },
              { id: 'FAC-2024-003', client: 'Koffi P.', date: '18 Mai 2024', amount: '12,500 F', status: 'En retard' },
              { id: 'FAC-2024-004', client: 'Bamba B.', date: '15 Mai 2024', amount: '300,000 F', status: 'Payé' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors cursor-pointer group">
                <td className="px-6 py-4 text-sm font-bold text-aks-blue">{row.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.client}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{row.date}</td>
                <td className="px-6 py-4 text-sm font-black text-gray-900">{row.amount}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    row.status === 'Payé' ? 'bg-green-50 text-ci-green' :
                    row.status === 'En attente' ? 'bg-orange-50 text-ci-orange' :
                    row.status === 'Devis' ? 'bg-blue-50 text-aks-blue' : 'bg-red-50 text-aks-red'
                  }`}>
                    {row.status === 'Payé' && <CheckCircle2 size={10} className="mr-1" />}
                    {row.status === 'En attente' && <Clock size={10} className="mr-1" />}
                    {row.status === 'En retard' && <AlertCircle size={10} className="mr-1" />}
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-400 group-hover:text-gray-600">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
