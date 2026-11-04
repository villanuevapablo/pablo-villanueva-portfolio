import React from 'react';
import { TrendingUp, Cpu, Database, Server, BarChart3, LineChart, ShieldCheck, Activity } from 'lucide-react';

export const BtcForecastVisual: React.FC = () => {
  return (
    <div className="w-full h-48 bg-[#0B0F19] rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono relative overflow-hidden select-none">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px]" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-800/60 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold text-slate-200">BTC / USD Technical Forecast</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
          <Activity className="w-3 h-3" />
          <span>yfinance OHLCV + Sentiment</span>
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
          <span className="text-slate-500 block">Baseline Model</span>
          <span className="text-slate-300 font-semibold">Random Forest</span>
        </div>
        <div>
          <span className="text-slate-500 block">Cross-Validation</span>
          <span className="text-slate-300 font-semibold">TimeSeriesSplit</span>
        </div>
        <div>
          <span className="text-slate-500 block">Sentiment Signal</span>
          <span className="text-emerald-400 font-semibold">Positive [Mock]</span>
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
          <span className="text-[11px] font-semibold text-slate-200">Decoupled Multi-Tier System</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
          <ShieldCheck className="w-3 h-3" />
          <span>RESTful Standard</span>
        </div>
      </div>

      {/* Architecture Flow Simulation */}
      <div className="relative z-10 flex items-center justify-between gap-1.5 my-2">
        {/* Tier 1: Frontend */}
        <div className="flex-1 p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[9px] text-slate-500 uppercase block">Client Layer</span>
          <span className="text-[11px] font-bold text-blue-400">React UI</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">State & Views</span>
        </div>

        <span className="text-slate-600 text-xs font-bold">⇄</span>

        {/* Tier 2: API Gateway */}
        <div className="flex-1 p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[9px] text-slate-500 uppercase block">Service API</span>
          <span className="text-[11px] font-bold text-cyan-400">Node / REST</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">Auth & Logic</span>
        </div>

        <span className="text-slate-600 text-xs font-bold">⇄</span>

        {/* Tier 3: Database */}
        <div className="flex-1 p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[9px] text-slate-500 uppercase block">Persistence</span>
          <span className="text-[11px] font-bold text-indigo-400">SQL Schema</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">ACID Tables</span>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/60 text-[10px]">
        <div>
          <span className="text-slate-500 block">API Endpoints</span>
          <span className="text-slate-300 font-semibold">Structured CRUD</span>
        </div>
        <div>
          <span className="text-slate-500 block">Security Layer</span>
          <span className="text-slate-300 font-semibold">Validation Guards</span>
        </div>
        <div>
          <span className="text-slate-500 block">Testing Scope</span>
          <span className="text-cyan-400 font-semibold">Unit & Integration</span>
        </div>
      </div>
    </div>
  );
};

export const DataAnalyticsVisual: React.FC = () => {
  return (
    <div className="w-full h-48 bg-[#0B0F19] rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono relative overflow-hidden select-none">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px]" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-800/60 pb-2">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[11px] font-semibold text-slate-200">Data Analytics Pipeline</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-indigo-400 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-800/40">
          <LineChart className="w-3 h-3" />
          <span>Pandas & Power BI</span>
        </div>
      </div>

      {/* Simulated Data Bar Chart */}
      <div className="relative z-10 flex items-end justify-between gap-2 h-16 px-2 my-1">
        <div className="w-full flex items-end gap-2 h-full">
          <div className="flex-1 bg-blue-500/30 rounded-t h-[45%] hover:bg-blue-500/50 transition-colors" />
          <div className="flex-1 bg-blue-500/40 rounded-t h-[65%] hover:bg-blue-500/60 transition-colors" />
          <div className="flex-1 bg-cyan-500/50 rounded-t h-[80%] hover:bg-cyan-500/70 transition-colors" />
          <div className="flex-1 bg-cyan-500/70 rounded-t h-[55%] hover:bg-cyan-500/90 transition-colors" />
          <div className="flex-1 bg-blue-500/50 rounded-t h-[75%] hover:bg-blue-500/70 transition-colors" />
          <div className="flex-1 bg-indigo-500/60 rounded-t h-[95%] hover:bg-indigo-500/80 transition-colors" />
          <div className="flex-1 bg-emerald-500/60 rounded-t h-[70%] hover:bg-emerald-500/80 transition-colors" />
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/60 text-[10px]">
        <div>
          <span className="text-slate-500 block">ETL Processing</span>
          <span className="text-slate-300 font-semibold">Pandas Cleaned</span>
        </div>
        <div>
          <span className="text-slate-500 block">Query Engine</span>
          <span className="text-slate-300 font-semibold">SQL Aggregation</span>
        </div>
        <div>
          <span className="text-slate-500 block">Reporting Target</span>
          <span className="text-cyan-400 font-semibold">BI Visual Summaries</span>
        </div>
      </div>
    </div>
  );
};
