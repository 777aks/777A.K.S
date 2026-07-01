import React, { useState } from 'react';
import { Network as NetworkIcon, Wifi, Globe, Terminal, CheckCircle2, XCircle } from 'lucide-react';
import { invoke } from '@tauri-apps/api/core';

export const Network: React.FC = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const [result, setResult] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  const handleAction = async (id: string, command: string, args: any = {}) => {
    setLoading(id);
    setResult(null);
    try {
      const res = await invoke<string>(command, args);
      setResult({ msg: res, type: 'success' });
    } catch (err) {
      setResult({ msg: String(err), type: 'error' });
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Network & Internet</h2>
        <p className="text-gray-500 mt-1">Manage and diagnose your network connectivity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-lg bg-blue-50 text-aks-blue">
              <Wifi size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Flush DNS Cache</h3>
              <p className="text-sm text-gray-500 mt-1">Clears the DNS resolver cache to fix connection issues.</p>
            </div>
          </div>
          <button
            onClick={() => handleAction('dns', 'flush_dns')}
            disabled={loading !== null}
            className="mt-6 w-full py-2 bg-aks-blue text-white rounded-lg font-medium hover:bg-aks-blue-dark transition-colors disabled:opacity-50"
          >
            {loading === 'dns' ? 'Flushing...' : 'Flush DNS'}
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-lg bg-green-50 text-aks-green">
              <Globe size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Ping Test</h3>
              <p className="text-sm text-gray-500 mt-1">Test connectivity to Google (8.8.8.8).</p>
            </div>
          </div>
          <button
            onClick={() => handleAction('ping', 'ping_host', { host: '8.8.8.8' })}
            disabled={loading !== null}
            className="mt-6 w-full py-2 bg-aks-blue text-white rounded-lg font-medium hover:bg-aks-blue-dark transition-colors disabled:opacity-50"
          >
            {loading === 'ping' ? 'Pinging...' : 'Run Ping'}
          </button>
        </div>
      </div>

      {result && (
        <div className={`p-4 rounded-lg flex items-center space-x-3 ${
          result.type === 'success' ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'
        }`}>
          {result.type === 'success' ? <CheckCircle2 size={20} className="shrink-0" /> : <XCircle size={20} className="shrink-0" />}
          <pre className="text-xs font-mono whitespace-pre-wrap">{result.msg}</pre>
        </div>
      )}

      <div className="bg-gray-900 rounded-xl p-6 text-blue-400 font-mono text-sm overflow-x-auto">
        <div className="flex items-center space-x-2 mb-4 text-gray-400 border-b border-gray-800 pb-2">
          <Terminal size={16} />
          <span>Network Console</span>
        </div>
        <p>$ ipconfig /all</p>
        <p className="text-gray-500 mt-2">IP Configuration details will appear here after a scan.</p>
      </div>
    </div>
  );
};

export default Network;
