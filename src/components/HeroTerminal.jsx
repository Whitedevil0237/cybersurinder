import React, { useState } from 'react';
import { Terminal, Shield, Command, ArrowRight } from 'lucide-react';

export default function HeroTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Surinder Singh v2.6.0 [Security & Full-Stack Node]' },
    { type: 'output', text: 'Type "help" or click quick commands below to explore.' }
  ]);

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let response = '';

    switch (cleanCmd) {
      case 'whoami':
        response = 'Surinder Singh — Biometric Integration Intern @ Shivsoft & Cybersecurity / Red Team Enthusiast.';
        break;
      case 'skills':
        response = 'Core: Penetration Testing, Red Teaming, React/Vite, Docker, Elasticsearch, Kibana, n8n Automation.';
        break;
      case 'projects':
        response = 'Active Projects: HoneyPort Analyzer, Cowrie Honeypot Pipeline, FollowU Manager.';
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'help':
        response = 'Available commands: whoami, skills, projects, clear';
        break;
      default:
        response = `Command not recognized: "${cmd}". Type "help" for a list of commands.`;
    }

    setHistory(prev => [...prev, { type: 'input', text: `$ ${cmd}` }, { type: 'output', text: response }]);
    setInput('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto cyber-card my-8">
      {/* Terminal Window Header */}
      <div className="terminal-header">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
        </div>
        <div className="flex items-center space-x-1 text-emerald-400">
          <Terminal size={14} />
          <span>surinder@kali-sec:~</span>
        </div>
        <div></div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm space-y-4 min-h-[260px] max-h-[350px] overflow-y-auto">
        {history.map((item, idx) => (
          <div key={idx} className={item.type === 'input' ? 'text-emerald-400 font-semibold' : 'text-slate-300'}>
            {item.text}
          </div>
        ))}

        <form onSubmit={(e) => { e.preventDefault(); if(input) handleCommand(input); }} className="flex items-center space-x-2 pt-2 border-t border-slate-800/80">
          <span className="text-emerald-500">guest@cybersurinder:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type 'whoami' or 'skills'..."
            className="bg-transparent focus:outline-none text-emerald-300 flex-1 placeholder:text-slate-600"
          />
        </form>
      </div>

      {/* Quick Action Chips */}
      <div className="px-6 py-3 bg-slate-950/50 border-t border-slate-800 rounded-b-xl flex flex-wrap gap-2 items-center text-xs">
        <span className="text-slate-500">Quick run:</span>
        {['whoami', 'skills', 'projects', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 bg-slate-800 hover:bg-emerald-500/20 hover:text-emerald-300 text-slate-300 rounded border border-slate-700 transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
