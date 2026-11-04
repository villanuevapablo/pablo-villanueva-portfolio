import React from 'react';
import { TrendingUp, Cpu, ShieldCheck, Activity, Lock, KeyRound, AlertTriangle, CheckCircle2, Server, Terminal } from 'lucide-react';

export const BtcForecastVisual: React.FC = () => {
  return (
    <div className="w-full h-48 bg-[#0B0F19] rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono relative overflow-hidden select-none">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px]" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-800/60 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold text-slate-200">BTC / USD ML Forecast + Edge AI</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
          <Activity className="w-3 h-3" />
          <span>Grade: 9.0/10 (TFG)</span>
        </div>
      </div>

      {/* Visual Chart Graphic (SVG Time-series with MA) */}
      <div className="relative z-10 my-1 h-20 w-full">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 320 80" preserveAspectRatio="none">
          <defs>
            <linearGradient id="btc-glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.25" />
              <stop offset="100%" stop-color="#3B82F6" stop-opacity="0.0" />
            </linearGradient>
          </defs>
          
          {/* Price area fill */}
          <path
            d="M 0 65 Q 40 50, 80 58 T 160 38 T 240 25 T 300 15 L 300 80 L 0 80 Z"
            fill="url(#btc-glow)"
          />

          {/* Historical Price line */}
          <path
            d="M 0 65 Q 40 50, 80 58 T 160 38 T 240 25 T 300 15"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* 30-day SMA trend line */}
          <path
            d="M 0 60 Q 50 55, 100 52 T 200 40 T 300 24"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />

          {/* Forecast Horizon point */}
          <circle cx="300" cy="15" r="4" fill="#10B981" />
          <circle cx="300" cy="15" r="7" fill="none" stroke="#10B981" strokeWidth="1.5" className="animate-ping" opacity="0.6" />
        </svg>
      </div>

      {/* Bottom Metrics Bar */}
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

export const SrmsSecurityVisual: React.FC = () => {
  return (
    <div className="w-full h-48 bg-[#0B0F19] rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono relative overflow-hidden select-none">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px]" />

      {/* Top Header */}
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

      {/* Interactive Security Gates */}
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

      {/* Bottom Metrics Bar */}
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

export const FullstackArchVisual: React.FC = () => {
  return (
    <div className="w-full h-48 bg-[#0B0F19] rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono relative overflow-hidden select-none">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px]" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-800/60 pb-2">
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[11px] font-semibold text-slate-200">Decoupled Architecture</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
          <ShieldCheck className="w-3 h-3" />
          <span>REST & Testing</span>
        </div>
      </div>

      {/* Architecture Flow Simulation */}
      <div className="relative z-10 flex items-center justify-between gap-1.5 my-2">
        {/* Tier 1: Frontend */}
        <div className="flex-1 p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[9px] text-slate-500 uppercase block">Client Layer</span>
          <span className="text-[11px] font-bold text-blue-400">React UI</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">TypeScript</span>
        </div>

        <span className="text-slate-600 text-xs font-bold">⇄</span>

        {/* Tier 2: API Gateway */}
        <div className="flex-1 p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[9px] text-slate-500 uppercase block">Services</span>
          <span className="text-[11px] font-bold text-cyan-400">Spring / Node</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">REST APIs</span>
        </div>

        <span className="text-slate-600 text-xs font-bold">⇄</span>

        {/* Tier 3: Database */}
        <div className="flex-1 p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[9px] text-slate-500 uppercase block">Persistence</span>
          <span className="text-[11px] font-bold text-indigo-400">JDBC / SQL</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">Relational</span>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/60 text-[10px]">
        <div>
          <span className="text-slate-500 block">Integration</span>
          <span className="text-slate-300 font-semibold">Third-Party APIs</span>
        </div>
        <div>
          <span className="text-slate-500 block">Quality</span>
          <span className="text-slate-300 font-semibold">Unit & Integration</span>
        </div>
        <div>
          <span className="text-slate-500 block">Target</span>
          <span className="text-cyan-400 font-semibold">Production Stable</span>
        </div>
      </div>
    </div>
  );
};
