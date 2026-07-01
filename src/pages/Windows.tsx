import React, { useState } from 'react';
import { Trash2, Shield, Wrench, CheckCircle2, XCircle } from 'lucide-react';
import { invoke } from '@tauri-apps/api/core';

export const Windows: React.FC = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const [result, setResult] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  const handleAction = async (id: string, command: string) => {
    setLoading(id);
    setResult(null);
    try {
      const res = await invoke<string>(command);
      setResult({ msg: res, type: 'success' });
    } catch (err) {
      setResult({ msg: String(err), type: 'error' });
    } finally {
      setLoading(null);
    }
  };

  const tools = [
    {
      id: 'clean',
      label: 'System Cleanup',
      desc: 'Remove temporary files and free up space.',
      icon: Trash2,
      command: 'clean_temp_files',
      color: 'text-aks-red'
    },
    {
      id: 'sfc',
      label: 'SFC Scan',
      desc: 'Scan and repair corrupted system files.',
      icon: Shield,
      command: 'run_sfc',
      color: 'text-aks-blue'
    },
    {
      id: 'dism',
      label: 'DISM Repair',
      desc: 'Repair Windows image and components.',
      icon: Wrench,
      command: 'run_dism',
      color: 'text-aks-orange'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Windows Maintenance</h2>
        <p className="text-gray-500 mt-1">Tools to keep your Windows installation healthy and fast.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <div key={tool.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg bg-gray-50 ${tool.color}`}>
                <tool.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{tool.label}</h3>
                <p className="text-sm text-gray-500 mt-1">{tool.desc}</p>
              </div>
            </div>
            <button
              onClick={() => handleAction(tool.id, tool.command)}
              disabled={loading !== null}
              className="mt-6 w-full py-2 bg-aks-blue text-white rounded-lg font-medium hover:bg-aks-blue-dark transition-colors disabled:opacity-50"
            >
              {loading === tool.id ? 'Running...' : 'Run Tool'}
            </button>
          </div>
        ))}
      </div>

      {result && (
        <div className={`p-4 rounded-lg flex items-center space-x-3 ${
          result.type === 'success' ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'
        }`}>
          {result.type === 'success' ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
          <p className="text-sm font-medium">{result.msg}</p>
        </div>
      )}
    </div>
  );
};

export default Windows;
