import React, { useState, useEffect } from 'react';
import { Cpu, Monitor, Database, RefreshCw, HardDrive } from 'lucide-react';
import { invoke } from '@tauri-apps/api/core';

export const Diagnostics: React.FC = () => {
  const [info, setInfo] = useState<string>('Loading system information...');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchInfo = async () => {
    setLoading(true);
    try {
      const res = await invoke<string>('get_extended_hardware_info');
      setInfo(res);
    } catch (err) {
      setInfo(`Error: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">System Diagnostics</h2>
          <p className="text-gray-500 mt-1">Detailed hardware and software specifications.</p>
        </div>
        <button
          onClick={fetchInfo}
          disabled={loading}
          className="flex items-center space-x-2 px-4 py-2 bg-aks-blue text-white rounded-lg hover:bg-aks-blue-dark transition-colors disabled:opacity-50"
        >
          <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
          <span>Refresh</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Monitor className="mr-2 text-aks-blue" size={20} />
            System Summary
          </h3>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700 whitespace-pre-wrap">
            {info}
          </pre>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-md font-bold text-gray-900 mb-4 flex items-center">
              <Cpu className="mr-2 text-aks-orange" size={18} />
              Processors
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Utilization</span>
                <span className="font-bold">12%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-aks-orange h-2 rounded-full" style={{ width: '12%' }} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-md font-bold text-gray-900 mb-4 flex items-center">
              <Database className="mr-2 text-aks-green" size={18} />
              Memory
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Usage</span>
                <span className="font-bold">4.2 / 16 GB</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-aks-green h-2 rounded-full" style={{ width: '26%' }} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-md font-bold text-gray-900 mb-4 flex items-center">
              <HardDrive className="mr-2 text-aks-blue" size={18} />
              Storage
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Drive C:</span>
                <span className="font-bold">78% Full</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-aks-red h-2 rounded-full" style={{ width: '78%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnostics;
