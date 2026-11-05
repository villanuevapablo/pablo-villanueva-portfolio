import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Lock, 
  KeyRound, 
  CheckCircle2, 
  Cpu, 
  Brain, 
  FolderSync, 
  BarChart2,
  Database,
  Radio,
  Wifi,
  Waves
} from 'lucide-react';

export const BtcForecastVisual: React.FC = () => {
  return (
    <div className="w-full h-48 bg-[#0B0F19] rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px]" />

      <div className="relative z-10 flex items-center justify-between border-b border-slate-800/60 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-semibold text-slate-200">BTC / USD ML Forecast + Edge AI</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
          <Activity className="w-3 h-3" />
          <span>Grade: 9.0/10 (TFG)</span>
        </div>
      </div>

      <div className="relative z-10 my-1 h-20 w-full">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 320 80" preserveAspectRatio="none">
          <defs>
            <linearGradient id="btc-glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.25" />
              <stop offset="100%" stop-color="#3B82F6" stop-opacity="0.0" />
            </linearGradient>
          </defs>
          
          <path
            d="M 0 65 Q 40 50, 80 58 T 160 38 T 240 25 T 300 15 L 300 80 L 0 80 Z"
            fill="url(#btc-glow)"
          />

          <path
            d="M 0 65 Q 40 50, 80 58 T 160 38 T 240 25 T 300 15"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M 0 60 Q 50 55, 100 52 T 200 40 T 300 24"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />

          <circle cx="300" cy="15" r="4" fill="#10B981" />
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/60 text-[10px]">
        <div>
          <span className="text-slate-500 block">Processing Model</span>
          <span className="text-slate-300 font-semibold">Decentralized Edge AI</span>
        </div>
        <div>
          <span className="text-slate-500 block">Feature Pipeline</span>
          <span className="text-slate-300 font-semibold">Technical Analysis</span>
        </div>
        <div>
          <span className="text-slate-500 block">Dissertation</span>
          <span className="text-emerald-400 font-semibold">BSc (Hons) TFG</span>
        </div>
      </div>
    </div>
  );
};

export const IotEdgeVisual: React.FC = () => {
  return (
    <div className="w-full h-48 bg-[#0B0F19] rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px]" />

      <div className="relative z-10 flex items-center justify-between border-b border-slate-800/60 pb-2">
        <div className="flex items-center gap-2">
          <Radio className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[11px] font-semibold text-slate-200">IoT Security • Arduino UNO R4 WiFi</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
          <Wifi className="w-3 h-3" />
          <span>Real-Time AJAX</span>
        </div>
      </div>

      {/* Ultrasonic Sensing & Edge Inference simulation */}
      <div className="relative z-10 grid grid-cols-3 gap-2 my-2">
        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-blue-400 font-bold mb-0.5">
            <Waves className="w-3 h-3" />
            <span>Ultrasonic</span>
          </div>
          <span className="text-[11px] text-white font-bold block">42 cm</span>
          <span className="text-[9px] text-slate-400 block">Distance Scan</span>
        </div>

        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-cyan-400 font-bold mb-0.5">
            <Cpu className="w-3 h-3" />
            <span>Edge AI</span>
          </div>
          <span className="text-[11px] text-emerald-400 font-bold block">Intrusion</span>
          <span className="text-[9px] text-slate-400 block">On-Device Rule</span>
        </div>

        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-emerald-400 font-bold mb-0.5">
            <Database className="w-3 h-3" />
            <span>M2M & CSV</span>
          </div>
          <span className="text-[11px] text-slate-200 font-bold block">Logged</span>
          <span className="text-[9px] text-slate-400 block">Audit Stream</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/60 text-[10px]">
        <div>
          <span className="text-slate-500 block">Hardware Platform</span>
          <span className="text-slate-300 font-semibold">UNO R4 WiFi (C++)</span>
        </div>
        <div>
          <span className="text-slate-500 block">Cloud Dependency</span>
          <span className="text-emerald-400 font-semibold">Zero (On-Device)</span>
        </div>
        <div>
          <span className="text-slate-500 block">UI Dashboard</span>
          <span className="text-cyan-400 font-semibold">Embedded AJAX</span>
        </div>
      </div>
    </div>
  );
};

export const SrmsSecurityVisual: React.FC = () => {
  return (
    <div className="w-full h-48 bg-[#0B0F19] rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px]" />

      <div className="relative z-10 flex items-center justify-between border-b border-slate-800/60 pb-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-semibold text-slate-200">Go SRMS • OWASP Top 10 Guard</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
          <Lock className="w-3 h-3" />
          <span>Security Hardened</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 my-2">
        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-cyan-400 font-bold mb-0.5">
            <KeyRound className="w-3 h-3" />
            <span>RBAC & CSRF</span>
          </div>
          <span className="text-[9px] text-slate-400 block">Role Separation</span>
        </div>

        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-emerald-400 font-bold mb-0.5">
            <CheckCircle2 className="w-3 h-3" />
            <span>bcrypt Salt</span>
          </div>
          <span className="text-[9px] text-slate-400 block">Password Hashing</span>
        </div>

        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-blue-400 font-bold mb-0.5">
            <ShieldCheck className="w-3 h-3" />
            <span>IP Limiting</span>
          </div>
          <span className="text-[9px] text-slate-400 block">Lockout on Fails</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/60 text-[10px]">
        <div>
          <span className="text-slate-500 block">Core Language</span>
          <span className="text-slate-300 font-semibold">Go (net/http)</span>
        </div>
        <div>
          <span className="text-slate-500 block">Database</span>
          <span className="text-slate-300 font-semibold">SQLite (SQLi Safe)</span>
        </div>
        <div>
          <span className="text-slate-500 block">Vulnerability</span>
          <span className="text-emerald-400 font-semibold">XSS / SQLi Prevented</span>
        </div>
      </div>
    </div>
  );
};

export const SmartOrganizerVisual: React.FC = () => {
  return (
    <div className="w-full h-48 bg-[#0B0F19] rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px]" />

      <div className="relative z-10 flex items-center justify-between border-b border-slate-800/60 pb-2">
        <div className="flex items-center gap-2">
          <FolderSync className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[11px] font-semibold text-slate-200">Local AI Daemon • File Organizer</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
          <Brain className="w-3 h-3" />
          <span>Ollama LLM REST</span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between gap-1.5 my-2">
        <div className="flex-1 p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[9px] text-slate-500 uppercase block">Watchdog</span>
          <span className="text-[11px] font-bold text-blue-400">FS Events</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">Lock Verified</span>
        </div>

        <span className="text-slate-600 text-xs font-bold">➔</span>

        <div className="flex-1 p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[9px] text-slate-500 uppercase block">Extractor</span>
          <span className="text-[11px] font-bold text-cyan-400">pypdf / Text</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">Sanitized</span>
        </div>

        <span className="text-slate-600 text-xs font-bold">➔</span>

        <div className="flex-1 p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[9px] text-slate-500 uppercase block">Local LLM</span>
          <span className="text-[11px] font-bold text-emerald-400">JSON Schema</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">Auto-Sorted</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/60 text-[10px]">
        <div>
          <span className="text-slate-500 block">AI Backend</span>
          <span className="text-slate-300 font-semibold">Ollama (Zero Cost)</span>
        </div>
        <div>
          <span className="text-slate-500 block">UI Interface</span>
          <span className="text-slate-300 font-semibold">Tkinter + Daemon</span>
        </div>
        <div>
          <span className="text-slate-500 block">Data Privacy</span>
          <span className="text-emerald-400 font-semibold">100% Local Device</span>
        </div>
      </div>
    </div>
  );
};

export const PreflopHeroVisual: React.FC = () => {
  return (
    <div className="w-full h-48 bg-[#0B0F19] rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px]" />

      <div className="relative z-10 flex items-center justify-between border-b border-slate-800/60 pb-2">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[11px] font-semibold text-slate-200">Preflop Hero • GTO Strategy Auditor</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-indigo-400 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-800/40">
          <Database className="w-3 h-3" />
          <span>SQLite Indexed</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 my-2">
        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[9px] text-slate-500 uppercase block">VPIP Target</span>
          <span className="text-[12px] font-bold text-emerald-400">22.4%</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">6-Max GTO</span>
        </div>

        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[9px] text-slate-500 uppercase block">PFR Rate</span>
          <span className="text-[12px] font-bold text-blue-400">18.6%</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">Aggressive Init</span>
        </div>

        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[9px] text-slate-500 uppercase block">Profile</span>
          <span className="text-[11px] font-bold text-cyan-300">Optimal TAG</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">Gap: 3.8 pp</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/60 text-[10px]">
        <div>
          <span className="text-slate-500 block">Parser Engine</span>
          <span className="text-slate-300 font-semibold">Winamax & 888</span>
        </div>
        <div>
          <span className="text-slate-500 block">Storage</span>
          <span className="text-slate-300 font-semibold">SQLite Indexed DB</span>
        </div>
        <div>
          <span className="text-slate-500 block">Dashboard</span>
          <span className="text-cyan-400 font-semibold">Dark-Mode Web UI</span>
        </div>
      </div>
    </div>
  );
};
