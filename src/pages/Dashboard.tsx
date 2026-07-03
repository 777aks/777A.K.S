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
import {
  Monitor,
  Cpu,
  Database,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock
} from 'lucide-react';

const stats = [
  { label: 'CPU Usage', value: '12%', icon: Cpu, color: 'text-aks-blue' },
  { label: 'RAM Usage', value: '4.2 GB / 16 GB', icon: Activity, color: 'text-aks-orange' },
  { label: 'Disk Health', value: 'Good', icon: Database, color: 'text-aks-green' },
  { label: 'System Uptime', value: '2d 4h 12m', icon: Clock, color: 'text-aks-blue' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-500 mt-1">Welcome to AKS Control Center Ultimate. System is running optimally.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Recent System Logs</h3>
          <div className="space-y-4">
            {[
              { type: 'success', msg: 'System backup completed successfully', time: '10 mins ago' },
              { type: 'warning', msg: 'High disk I/O detected on Drive C:', time: '1 hour ago' },
              { type: 'info', msg: 'New Android device connected: Pixel 7', time: '3 hours ago' },
              { type: 'success', msg: 'SFC scan completed: No integrity violations', time: 'Yesterday' },
            ].map((log, i) => (
              <div key={i} className="flex items-start space-x-3 text-sm">
                {log.type === 'success' && <CheckCircle2 size={18} className="text-aks-green mt-0.5" />}
                {log.type === 'warning' && <AlertTriangle size={18} className="text-aks-orange mt-0.5" />}
                {log.type === 'info' && <Monitor size={18} className="text-aks-blue mt-0.5" />}
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">{log.msg}</p>
                  <p className="text-gray-400 text-xs">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Diagnostics</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 rounded-lg bg-blue-50 border border-blue-100 text-aks-blue hover:bg-blue-100 transition-colors text-left group">
              <p className="font-bold">Fast Scan</p>
              <p className="text-xs text-blue-600 mt-1">Check critical services</p>
            </button>
            <button className="p-4 rounded-lg bg-orange-50 border border-orange-100 text-aks-orange hover:bg-orange-100 transition-colors text-left">
              <p className="font-bold">Temp Check</p>
              <p className="text-xs text-orange-600 mt-1">CPU/GPU thermals</p>
            </button>
            <button className="p-4 rounded-lg bg-green-50 border border-green-100 text-aks-green hover:bg-green-100 transition-colors text-left">
              <p className="font-bold">Network Ping</p>
              <p className="text-xs text-green-600 mt-1">Latency test</p>
            </button>
            <button className="p-4 rounded-lg bg-red-50 border border-red-100 text-aks-red hover:bg-red-100 transition-colors text-left">
              <p className="font-bold">Clear Cache</p>
              <p className="text-xs text-red-600 mt-1">Free up disk space</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
