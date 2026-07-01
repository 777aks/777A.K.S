import React from 'react';
import {
  Power,
  RefreshCcw,
  ArrowUpRight,
  ShieldAlert,
  Moon,
  Monitor
} from 'lucide-react';
import { invoke } from '@tauri-apps/api/core';

const actions = [
  { id: 'shutdown', label: 'Shutdown', icon: Power, color: 'bg-aks-red', desc: 'Power off the system immediately' },
  { id: 'reboot', label: 'Restart', icon: RefreshCcw, color: 'bg-aks-orange', desc: 'Reboot the system' },
  { id: 'uefi', label: 'BIOS/UEFI', icon: ArrowUpRight, color: 'bg-aks-blue', desc: 'Restart into UEFI settings' },
  { id: 'recovery', label: 'Recovery', icon: ShieldAlert, color: 'bg-aks-yellow', desc: 'Restart into recovery mode' },
  { id: 'sleep', label: 'Sleep', icon: Moon, color: 'bg-gray-600', desc: 'Put system into sleep mode' },
  { id: 'display_off', label: 'Display Off', icon: Monitor, color: 'bg-aks-blue-dark', desc: 'Turn off connected displays' },
];

export const QuickActions: React.FC = () => {
  const handleAction = async (id: string) => {
    try {
      console.log(`Executing action: ${id}`);
      if (id === 'shutdown' || id === 'reboot') {
        await invoke(id);
      } else {
        alert(`Action "${id}" is not yet implemented in the Rust backend.`);
      }
    } catch (err) {
      console.error('Failed to execute action:', err);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
        <p className="text-gray-500 mt-1">Common system operations at your fingertips.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => handleAction(action.id)}
            className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-aks-blue transition-all group text-left"
          >
            <div className={`p-4 rounded-xl ${action.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
              <action.icon size={24} />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-aks-blue transition-colors">
                {action.label}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{action.desc}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-aks-orange/10 border border-aks-orange/20 p-4 rounded-lg flex items-center space-x-3">
        <ShieldAlert className="text-aks-orange" />
        <p className="text-sm text-aks-orange-dark font-medium">
          Warning: Some actions like Shutdown or Restart will close all applications without saving.
        </p>
      </div>
    </div>
  );
};
