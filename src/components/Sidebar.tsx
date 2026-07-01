import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Zap,
  Monitor,
  Smartphone,
  Network,
  Settings,
  Users,
  ShieldCheck,
  Terminal,
  Phone,
  Facebook,
  Youtube
} from 'lucide-react';
import { cn } from '../lib/utils';
import logo from '../assets/logo.png';
import { TikTokIcon } from './TikTokIcon';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Zap, label: 'Quick Actions', path: '/quick-actions' },
  { icon: Monitor, label: 'Windows', path: '/windows' },
  { icon: Smartphone, label: 'Android', path: '/android' },
  { icon: Network, label: 'Network', path: '/network' },
  { icon: Terminal, label: 'Consoles', path: '/consoles' },
  { icon: ShieldCheck, label: 'Diagnostics', path: '/diagnostics' },
  { icon: Users, label: 'Clients', path: '/clients' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-aks-blue-dark text-white flex flex-col h-screen shadow-xl">
      <div className="p-6 flex flex-col items-center border-b border-aks-blue/30">
        <img src={logo} alt="AKS Logo" className="w-20 h-20 mb-4 object-contain" />
        <h1 className="text-lg font-bold tracking-wider text-aks-yellow text-center">
          AKS CONTROL CENTER
          <span className="block text-[10px] text-aks-orange uppercase tracking-[0.2em] mt-1">
            Ultimate Edition
          </span>
        </h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 group",
              isActive
                ? "bg-aks-blue text-white shadow-md"
                : "text-blue-100 hover:bg-aks-blue-light hover:text-white"
            )}
          >
            <item.icon className={cn(
              "mr-3 h-5 w-5",
              "group-hover:scale-110 transition-transform duration-150"
            )} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-aks-blue space-y-4">
        <div className="flex items-center space-x-3 px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-aks-green animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
            System Online
          </span>
        </div>

        <div className="px-4 py-3 bg-aks-blue-light/30 rounded-lg space-y-3">
          <div>
            <div className="flex items-center space-x-2 text-aks-yellow mb-1">
              <Phone size={14} />
              <span className="text-xs font-bold uppercase">Support Tech</span>
            </div>
            <p className="text-[10px] text-blue-100 font-mono">
              +225 01 01 52 19 47
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-aks-blue/50">
            <a
              href="https://www.facebook.com/share/1HMyjtZ3AU/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-aks-yellow transition-colors"
              title="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.youtube.com/@NEWTECHNOLOGY-AKS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-aks-yellow transition-colors"
              title="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@aksnewtechnology?_r=1&_t=ZN-97euV2psbV0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-aks-yellow transition-colors"
              title="TikTok"
            >
              <TikTokIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
