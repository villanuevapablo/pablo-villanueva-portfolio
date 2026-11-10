import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

/* ============================================================================
 * 01 — BTC FORECASTING VISUAL: TimeSeriesSplit & Benchmark Switcher
 * ============================================================================ */
export const BtcForecastVisual: React.FC = () => {
  const { language } = useLanguage();
  const [tab, setTab] = useState<'folds' | 'metrics'>('folds');

  const folds = [
    { fold: 'Fold 1', trainPct: 16, testStart: 16, testWidth: 16 },
    { fold: 'Fold 2', trainPct: 32, testStart: 32, testWidth: 16 },
    { fold: 'Fold 3', trainPct: 48, testStart: 48, testWidth: 16 },
    { fold: 'Fold 4', trainPct: 64, testStart: 64, testWidth: 16 },
    { fold: 'Fold 5', trainPct: 80, testStart: 80, testWidth: 20 },
  ];

  return (
    <div className="bg-[#171918] text-[#F3F0E9] border border-[#B9B7AF]/30 p-4 sm:p-5 flex flex-col justify-between">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#B9B7AF]/20">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#D97745] block">
            {language === 'en' ? 'ML PIPELINE ARCHITECTURE' : 'ARQUITECTURA DEL PIPELINE ML'}
          </span>
          <span className="font-mono text-xs text-[#F3F0E9]">
            BTC-USD · 8 Engineered Features
          </span>
        </div>

        <div className="flex border border-[#B9B7AF]/30 font-mono text-[10px]">
          <button
            type="button"
            onClick={() => setTab('folds')}
            className={`px-2.5 py-1 transition-colors ${
              tab === 'folds'
                ? 'bg-[#F3F0E9] text-[#171918] font-semibold'
                : 'text-[#B9B7AF] hover:text-[#F3F0E9]'
            }`}
          >
            TimeSeriesSplit
          </button>
          <button
            type="button"
            onClick={() => setTab('metrics')}
            className={`px-2.5 py-1 border-l border-[#B9B7AF]/30 transition-colors ${
              tab === 'metrics'
                ? 'bg-[#F3F0E9] text-[#171918] font-semibold'
                : 'text-[#B9B7AF] hover:text-[#F3F0E9]'
            }`}
          >
            {language === 'en' ? 'Benchmarks' : 'Métricas'}
          </button>
        </div>
      </div>

      {tab === 'folds' ? (
        <div className="space-y-3">
          <p className="font-mono text-[10px] text-[#B9B7AF]">
            {language === 'en'
              ? 'Chronological walk-forward validation (zero future leakage):'
              : 'Validación cronológica hacia adelante (sin filtración futura):'}
          </p>

          <div className="space-y-2 py-1">
            {folds.map((item) => (
              <div key={item.fold} className="grid grid-cols-12 items-center gap-2 font-mono text-[10px]">
                <span className="col-span-2 text-[#B9B7AF]">{item.fold}</span>
                <div className="col-span-10 h-3.5 bg-[#252826] relative flex">
                  <div
                    className="h-full bg-[#526B9B]"
                    style={{ width: `${item.trainPct}%` }}
                    title="Chronological Training Window"
                  />
                  <div
                    className="h-full bg-[#D97745]"
                    style={{ width: `${item.testWidth}%` }}
                    title="Out-of-Sample Test Fold"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-[10px] text-[#B9B7AF]">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#526B9B] inline-block" />
              {language === 'en' ? 'Training History' : 'Historial de Entrenamiento'}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#D97745] inline-block" />
              {language === 'en' ? 'Out-of-Sample Fold' : 'Evaluación Out-of-Sample'}
            </span>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-mono text-[11px]">
            <thead>
              <tr className="border-b border-[#B9B7AF]/30 text-[#B9B7AF]">
                <th className="py-1.5 pr-2 font-normal">Model</th>
                <th className="py-1.5 px-2 font-normal">MAE</th>
                <th className="py-1.5 px-2 font-normal">RMSE</th>
                <th className="py-1.5 pl-2 font-normal text-right">R²</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#B9B7AF]/15">
              <tr>
                <td className="py-2 pr-2 font-semibold text-[#F3F0E9]">Linear Regression</td>
                <td className="py-2 px-2 text-[#D97745]">~$1,684</td>
                <td className="py-2 px-2 text-[#B9B7AF]">~$2,317</td>
                <td className="py-2 pl-2 text-right font-semibold text-[#F3F0E9]">0.9830</td>
              </tr>
              <tr>
                <td className="py-2 pr-2 font-semibold text-[#F3F0E9]">Random Forest</td>
                <td className="py-2 px-2 text-[#526B9B]">~$3,550</td>
                <td className="py-2 px-2 text-[#B9B7AF]">~$4,564</td>
                <td className="py-2 pl-2 text-right font-semibold text-[#F3F0E9]">0.9342</td>
              </tr>
            </tbody>
          </table>
          <p className="font-mono text-[10px] text-[#B9B7AF] mt-2">
            {language === 'en'
              ? 'Note: Measured on unshuffled 80/20 chronological test holdout.'
              : 'Nota: Métricas medidas sobre partición cronológica 80/20 sin barajar.'}
          </p>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-[#B9B7AF]/20 grid grid-cols-3 gap-2 font-mono text-[10px]">
        <div>
          <span className="text-[#B9B7AF] block">INGESTION</span>
          <span className="text-[#F3F0E9]">yfinance 4yr</span>
        </div>
        <div>
          <span className="text-[#B9B7AF] block">SERVING UI</span>
          <span className="text-[#F3F0E9]">Streamlit + Plotly</span>
        </div>
        <div>
          <span className="text-[#B9B7AF] block">DAEMON</span>
          <span className="text-[#D97745]">Telegram /predict</span>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
 * 02 — SRMS SECURITY VISUAL: Request Defense Inspector
 * ============================================================================ */
export const SrmsSecurityVisual: React.FC = () => {
  const { language } = useLanguage();
  const [selectedLayer, setSelectedLayer] = useState(0);

  const layers = [
    {
      step: '01',
      name: 'IP Sliding Rate Limit',
      code: 'rateLimitMax = 5 / 1 min (rateMu sync.Mutex)',
      detail: {
        en: 'Tracks timestamps per client IP cleanly inside memory before database authentication executes, rejecting flood attempts cleanly.',
        es: 'Controla timestamps por IP mediante ventana deslizante protegida por mutex antes de consultar contraseñas en base de datos.',
      },
    },
    {
      step: '02',
      name: 'One-Time CSRF & Cookies',
      code: '32-byte random token · HttpOnly · SameSite=Strict',
      detail: {
        en: 'Each state-changing POST requires a hidden token deleted immediately after first use from a mutex-guarded map (30m TTL).',
        es: 'Cada formulario POST exige un token único de 32 bytes que se elimina de forma atómica tras validarse (TTL de 30 min).',
      },
    },
    {
      step: '03',
      name: 'bcrypt + Account Lockout',
      code: 'bcryptCost = 12 · maxFailedLogins = 5 -> 15m lock',
      detail: {
        en: 'Slow adaptive password verification paired with persistent failed_attempts & locked_until fields in SQLite users table.',
        es: 'Hashing adaptativo con coste 12 junto a bloqueo persistente de 15 minutos en la tabla users al alcanzar 5 intentos fallidos.',
      },
    },
    {
      step: '04',
      name: 'SQLite WAL & RBAC Schema',
      code: 'journal_mode=WAL · CHECK(role IN ("admin","regular"))',
      detail: {
        en: 'Pure-Go modernc.org/sqlite with strict ? placeholders, foreign keys ON, and audit columns (last_updated_by / at).',
        es: 'SQLite sin CGO en modo WAL con consultas preparadas ? estrictas, claves foráneas activas y columnas de auditoría.',
      },
    },
  ];

  const active = layers[selectedLayer];

  return (
    <div className="bg-[#F3F0E9] border border-[#171918] p-4 sm:p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#B9B7AF] pb-3 mb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#526B9B] font-semibold">
          {language === 'en' ? 'GO STDLIB DEFENSE PIPELINE (SRMS)' : 'CADENA DE DEFENSA GO ESTÁNDAR (SRMS)'}
        </span>
        <span className="font-mono text-[10px] text-[#5D605C]">net/http · schema.sql</span>
      </div>

      {/* Interactive Defense Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-l border-[#B9B7AF] mb-4">
        {layers.map((layer, idx) => (
          <button
            key={layer.step}
            type="button"
            onClick={() => setSelectedLayer(idx)}
            className={`p-2.5 text-left border-r border-b border-[#B9B7AF] transition-colors ${
              selectedLayer === idx
                ? 'bg-[#171918] text-[#F3F0E9]'
                : 'bg-[#EAE6DC]/50 text-[#171918] hover:bg-[#EAE6DC]'
            }`}
          >
            <span className="font-mono text-[10px] text-[#D97745] block">L{layer.step}</span>
            <span className="text-[11px] font-bold block leading-tight mt-0.5">{layer.name}</span>
          </button>
        ))}
      </div>

      {/* Active Layer Technical Dossier Output */}
      <div className="bg-[#171918] text-[#F3F0E9] p-4 mb-3">
        <div className="font-mono text-[11px] text-[#D97745] mb-1.5 break-words">
          {active.code}
        </div>
        <p className="text-xs text-[#F3F0E9]/90 leading-relaxed">
          {active.detail[language]}
        </p>
      </div>

      <div className="font-mono text-[10px] text-[#5D605C] flex flex-wrap items-center justify-between gap-2">
        <span>TABLES: users · patient_records · sessions · login_attempts</span>
        <span className="text-[#171918] font-medium">3 B-Tree Indexes</span>
      </div>
    </div>
  );
};

/* ============================================================================
 * 03 — SMART FILE ORGANIZER VISUAL: Deterministic Watchdog & Fallback Flow
 * ============================================================================ */
export const SmartOrganizerVisual: React.FC = () => {
  const { language } = useLanguage();
  const [mode, setMode] = useState<'online' | 'fallback'>('online');

  return (
    <div className="bg-[#EAE6DC] border border-[#171918] p-4 sm:p-5 flex flex-col justify-between">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#B9B7AF]">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#171918] font-semibold">
          watcher.py → extractor.py → ai_classifier.py
        </span>

        <div className="flex border border-[#171918] font-mono text-[10px]">
          <button
            type="button"
            onClick={() => setMode('online')}
            className={`px-2 py-1 transition-colors ${
              mode === 'online' ? 'bg-[#171918] text-[#F3F0E9]' : 'text-[#171918]'
            }`}
          >
            Ollama Online
          </button>
          <button
            type="button"
            onClick={() => setMode('fallback')}
            className={`px-2 py-1 border-l border-[#171918] transition-colors ${
              mode === 'fallback' ? 'bg-[#D97745] text-[#171918] font-semibold' : 'text-[#171918]'
            }`}
          >
            Offline Fallback
          </button>
        </div>
      </div>

      {/* Horizontal State Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 font-mono text-[11px]">
        <div className="bg-[#F3F0E9] border border-[#171918] p-3">
          <span className="text-[10px] text-[#5D605C] block">01 / WATCHDOG</span>
          <span className="font-bold text-[#171918] block mt-0.5">Filter & Lock Poll</span>
          <span className="text-[10px] text-[#5D605C] block mt-1">
            Skip .crdownload / .* <br /> Poll st_size + open("rb")
          </span>
        </div>

        <div className="bg-[#F3F0E9] border border-[#171918] p-3">
          <span className="text-[10px] text-[#5D605C] block">02 / EXTRACTOR</span>
          <span className="font-bold text-[#171918] block mt-0.5">1,500-Char Sample</span>
          <span className="text-[10px] text-[#5D605C] block mt-1">
            UTF-8 / pypdf (2 pages) <br /> or Binary Metadata
          </span>
        </div>

        <div
          className={`border border-[#171918] p-3 ${
            mode === 'online' ? 'bg-[#171918] text-[#F3F0E9]' : 'bg-[#D97745]/20 text-[#171918]'
          }`}
        >
          <span
            className={`text-[10px] block ${
              mode === 'online' ? 'text-[#D97745]' : 'text-[#B85D30] font-semibold'
            }`}
          >
            03 / {mode === 'online' ? 'OLLAMA JSON MODE' : 'SAFE FALLBACK'}
          </span>
          <span className="font-bold block mt-0.5">
            {mode === 'online' ? 'temp=0.1 · schema' : 'Route -> Otros'}
          </span>
          <span className={`text-[10px] block mt-1 ${mode === 'online' ? 'text-[#B9B7AF]' : 'text-[#3D403E]'}`}>
            {mode === 'online'
              ? 'Enforce ext + YYYY_MM_DD'
              : language === 'en'
                ? 'Zero file loss on daemon offline'
                : 'Sin pérdida de archivos offline'}
          </span>
        </div>
      </div>

      <div className="font-mono text-[10px] text-[#3D403E] border-t border-[#B9B7AF] pt-2.5 flex justify-between">
        <span>CATEGORIES: 6 Directories</span>
        <span>Collision Guard: _1, _2 · unittest verified</span>
      </div>
    </div>
  );
};

/* ============================================================================
 * 04 — IOT HARDWARE SCHEMATIC VISUAL: Real 12x8 LED Matrix Hex Decoder
 * ============================================================================ */
const MATRIX_ICONS: Record<'SECURE' | 'WARNING' | 'INTRUDER', { hex: [number, number, number]; led: string; range: string }> = {
  SECURE: {
    hex: [0x3184a444, 0x42081100, 0xa0040000],
    led: 'D7 GREEN LED ON',
    range: '> 80 cm',
  },
  WARNING: {
    hex: [0x20020020, 0x02002002, 0x00200000],
    led: 'D6 YELLOW LED ON',
    range: '20 – 80 cm',
  },
  INTRUDER: {
    hex: [0x80240420, 0x24081102, 0x40420800],
    led: 'D5 RED LED ON',
    range: '< 20 cm',
  },
};

function decodeMatrixBits(words: [number, number, number]): boolean[] {
  const bits: boolean[] = [];
  for (let w = 0; w < 3; w++) {
    const val = words[w] >>> 0;
    for (let b = 31; b >= 0; b--) {
      bits.push(((val >>> b) & 1) === 1);
    }
  }
  return bits;
}

export const IotEdgeVisual: React.FC = () => {
  const { language } = useLanguage();
  const [zone, setZone] = useState<'SECURE' | 'WARNING' | 'INTRUDER'>('SECURE');

  const current = MATRIX_ICONS[zone];
  const pixels = decodeMatrixBits(current.hex);

  return (
    <div className="bg-[#171918] text-[#F3F0E9] border border-[#171918] p-4 sm:p-5 flex flex-col justify-between">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#B9B7AF]/20">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#D97745]">
          UNO R4 WIFI · FIRMWARE STATE PREVIEW
        </span>
        <span className="font-mono text-[10px] text-[#B9B7AF]">src/main.ino</span>
      </div>

      {/* State Switcher Buttons */}
      <div className="grid grid-cols-3 border border-[#B9B7AF]/30 mb-4 font-mono text-[10px]">
        {(['SECURE', 'WARNING', 'INTRUDER'] as const).map((stateKey) => (
          <button
            key={stateKey}
            type="button"
            onClick={() => setZone(stateKey)}
            className={`py-1.5 px-2 transition-colors ${
              zone === stateKey
                ? stateKey === 'INTRUDER'
                  ? 'bg-[#D97745] text-[#171918] font-bold'
                  : stateKey === 'WARNING'
                    ? 'bg-[#526B9B] text-[#F3F0E9] font-bold'
                    : 'bg-[#F3F0E9] text-[#171918] font-bold'
                : 'text-[#B9B7AF] hover:text-[#F3F0E9]'
            }`}
          >
            {stateKey}
          </button>
        ))}
      </div>

      {/* Matrix + GPIO Wiring Split */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-3">
        {/* Authentic 12x8 LED Matrix decoded from uint32_t bitmaps */}
        <div className="sm:col-span-6 p-3 bg-[#101211] border border-[#B9B7AF]/20">
          <div className="grid grid-cols-12 gap-1" aria-label={`LED Matrix bitmap for ${zone}`}>
            {pixels.map((on, i) => (
              <div
                key={i}
                className={`aspect-square ${
                  on
                    ? zone === 'INTRUDER'
                      ? 'bg-[#D97745]'
                      : zone === 'WARNING'
                        ? 'bg-[#526B9B]'
                        : 'bg-[#F3F0E9]'
                    : 'bg-[#252826]'
                }`}
              />
            ))}
          </div>
          <span className="font-mono text-[9px] text-[#B9B7AF] block mt-2 text-center">
            12×8 LED Matrix ({zone.toLowerCase()})
          </span>
        </div>

        {/* Verified Pin Mapping */}
        <div className="sm:col-span-6 font-mono text-[10px] space-y-1.5">
          <div className="flex justify-between border-b border-[#B9B7AF]/15 pb-1">
            <span className="text-[#B9B7AF]">THRESHOLD</span>
            <span className="text-[#F3F0E9] font-semibold">{current.range}</span>
          </div>
          <div className="flex justify-between border-b border-[#B9B7AF]/15 pb-1">
            <span className="text-[#B9B7AF]">ACTUATOR</span>
            <span className="text-[#D97745]">{current.led}</span>
          </div>
          <div className="flex justify-between border-b border-[#B9B7AF]/15 pb-1">
            <span className="text-[#B9B7AF]">HC-SR04</span>
            <span className="text-[#F3F0E9]">D3 TRIG / D4 ECHO</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#B9B7AF]">API ROUTE</span>
            <span className="text-[#526B9B] font-semibold">GET /data (1s AJAX)</span>
          </div>
        </div>
      </div>

      <p className="font-mono text-[10px] text-[#B9B7AF]">
        {language === 'en'
          ? '3-sample noise average (0..400cm) + 1,000-char capped event table.'
          : 'Media de 3 muestras válidas (0..400cm) + tabla de eventos acotada a 1.000 chars.'}
      </p>
    </div>
  );
};

/* ============================================================================
 * 05 — PREFLOP HERO VISUAL: Regex Parsing -> SQLite -> 6-Max Benchmarks
 * ============================================================================ */
export const PreflopHeroVisual: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-[#F3F0E9] border border-[#171918] p-4 sm:p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#B9B7AF] pb-3 mb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#526B9B] font-semibold">
          REGEX ETL → SQLITE SCHEMA (STDLIB PYTHON)
        </span>
        <span className="font-mono text-[10px] text-[#5D605C]">UNIQUE(hand_id, platform)</span>
      </div>

      {/* Extraction Rule Breakdown */}
      <div className="space-y-2.5 mb-4 font-mono text-[10px]">
        <div className="p-2.5 bg-[#EAE6DC] border border-[#B9B7AF]">
          <span className="text-[#5D605C] block">WINAMAX & 888POKER PARSING SIGNATURES</span>
          <span className="text-[#171918] font-medium block mt-1">
            Winamax: <span className="text-[#526B9B]">*** PRE-FLOP ***</span> → Hero (raises|calls|bets)
          </span>
          <span className="text-[#171918] font-medium block mt-0.5">
            888poker: <span className="text-[#526B9B]">** Dealing down cards **</span> → Normalized cards
          </span>
        </div>

        {/* Theoretical 6-Max Reference Bands */}
        <div className="grid grid-cols-3 border-t border-l border-[#B9B7AF]">
          <div className="p-2.5 border-r border-b border-[#B9B7AF]">
            <span className="text-[#5D605C] block">VPIP TARGET</span>
            <span className="text-xs font-bold text-[#171918]">20% – 27%</span>
            <span className="text-[9px] text-[#5D605C] block">6-Max Theory</span>
          </div>
          <div className="p-2.5 border-r border-b border-[#B9B7AF]">
            <span className="text-[#5D605C] block">PFR TARGET</span>
            <span className="text-xs font-bold text-[#171918]">17% – 23%</span>
            <span className="text-[9px] text-[#5D605C] block">Initiative Band</span>
          </div>
          <div className="p-2.5 border-r border-b border-[#B9B7AF]">
            <span className="text-[#5D605C] block">VPIP–PFR GAP</span>
            <span className="text-xs font-bold text-[#D97745]">3 – 6 pp</span>
            <span className="text-[9px] text-[#5D605C] block">Cold-Call Limit</span>
          </div>
        </div>
      </div>

      <p className="font-mono text-[10px] text-[#5D605C]">
        {language === 'en'
          ? 'Includes standalone browser index.html analyzer keeping raw logs client-side.'
          : 'Incluye analizador HTML autónomo en navegador para procesar historiales sin servidor.'}
      </p>
    </div>
  );
};
