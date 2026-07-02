import React from 'react';
import { CiButton } from '../../../components/aks-one-ci/CiButton';
import {
  Package,
  Plus,
  Search,
  ArrowUpRight,
  ArrowDownLeft,
  AlertTriangle,
  MoreVertical,
  BarChart3
} from 'lucide-react';

export const Inventory: React.FC = () => {
  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-900">Gestion de Stock</h2>
          <p className="text-gray-500 font-medium">Suivez vos produits et soyez alerté en cas de stock bas.</p>
        </div>
        <CiButton variant="orange"><Plus size={18} className="mr-2" /> Ajouter un Produit</CiButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-blue-50 text-aks-blue rounded-xl"><Package size={24} /></div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Articles</p>
            <p className="text-2xl font-black text-gray-900">124</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4 border-l-4 border-l-aks-orange">
          <div className="p-3 bg-orange-50 text-aks-orange rounded-xl"><AlertTriangle size={24} /></div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Rupture imminente</p>
            <p className="text-2xl font-black text-gray-900">8</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-green-50 text-ci-green rounded-xl"><BarChart3 size={24} /></div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Valeur Stock</p>
            <p className="text-2xl font-black text-gray-900">1,250,000 F</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Rechercher une référence, un nom..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-aks-blue/20 rounded-xl outline-none text-sm" />
          </div>
          <CiButton variant="outline" size="sm" className="bg-white font-bold">Imprimer Inventaire</CiButton>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Produit</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Référence</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Prix Unitaire</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Quantité</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Statut</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { name: 'Pagne Kita 6 yards', ref: 'PK-001', price: '25,000 F', stock: 12, status: 'En stock' },
              { name: 'Attiéké Déshydraté 1kg', ref: 'AT-102', price: '1,500 F', stock: 4, status: 'Bas' },
              { name: 'Huile de Coco Vierge', ref: 'HC-050', price: '3,000 F', stock: 25, status: 'En stock' },
              { name: 'Savon Noir Artisanal', ref: 'SN-022', price: '1,000 F', stock: 0, status: 'Rupture' },
              { name: 'Café Arabica CI 250g', ref: 'CF-008', price: '2,500 F', stock: 42, status: 'En stock' },
            ].map((item, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors cursor-pointer group">
                <td className="px-6 py-4 text-sm font-bold text-gray-900">{item.name}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-400 font-mono">{item.ref}</td>
                <td className="px-6 py-4 text-sm font-black text-gray-900">{item.price}</td>
                <td className="px-6 py-4 text-sm font-bold text-gray-700">{item.stock} unités</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    item.status === 'En stock' ? 'bg-green-50 text-ci-green' :
                    item.status === 'Bas' ? 'bg-orange-50 text-ci-orange' : 'bg-red-50 text-aks-red'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="p-1 hover:bg-green-50 text-ci-green rounded-lg transition-colors"><ArrowDownLeft size={16} /></button>
                    <button className="p-1 hover:bg-red-50 text-aks-red rounded-lg transition-colors"><ArrowUpRight size={16} /></button>
                    <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-400"><MoreVertical size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
