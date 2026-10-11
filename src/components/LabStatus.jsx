import React from 'react';
import { Activity } from 'lucide-react';

export default function LabStatus() {
  return (
    <div className="max-w-3xl mx-auto px-4 my-6">
      <div className="bg-slate-900/60 border border-emerald-500/20 rounded-lg p-4 flex items-center justify-between text-xs sm:text-sm">
        <div className="flex items-center space-x-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300 font-medium">Active Lab Focus:</span>
          <span className="text-emerald-400 font-mono">Cowrie Honeypot Log Pipeline & Red Team Tactics</span>
        </div>
        <div className="hidden sm:flex items-center space-x-1 text-slate-500">
          <Activity size={16} />
          <span>Status: Operational</span>
        </div>
      </div>
    </div>
  );
}
