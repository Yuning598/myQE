import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function BilateralTradeVisualization() {
  const [v, setV] = useState(8);
  const [c, setC] = useState(4);
  const [pb, setPb] = useState(6);
  const [ps, setPs] = useState(5);

  const data = useMemo(() => {
    const qStar = v >= c ? 1 : 0;
    const tb = -pb;
    const ts = ps;
    const value = v * qStar;
    const cost = c * qStar;
    const ub = value + tb;
    const us = ts - cost;
    const surplus = (v - c) * qStar;
    const subsidy = tb + ts;

    return {
      qStar,
      tb,
      ts,
      value,
      cost,
      ub,
      us,
      surplus,
      subsidy,
      revenue: -subsidy,
      external: Math.max(subsidy, 0),
    };
  }, [v, c, pb, ps]);

  const width = 520;
  const height = 280;
  const pad = 42;
  const max = 10;
  const x = (val) => pad + (val / max) * (width - 2 * pad);
  const y = (val) => height - pad - (val / max) * (height - 2 * pad);
  const pointX = x(v);
  const pointY = y(c);

  const reset = () => {
    setV(8);
    setC(4);
    setPb(6);
    setPs(5);
  };

  return (
    <div className="h-screen overflow-hidden bg-slate-50 p-3 text-slate-900">
      <div className="mx-auto grid h-full max-w-[1280px] grid-rows-[auto_minmax(0,1fr)_auto] gap-3">
        <header className="flex items-center justify-between rounded-2xl bg-white px-5 py-3 shadow-sm ring-1 ring-slate-200">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Bilateral trade</p>
            <h1 className="text-xl font-bold tracking-tight text-slate-950">双边交易机制可视化</h1>
          </div>
          <Button onClick={reset} className="h-9 rounded-xl px-4 text-xs">Reset</Button>
        </header>

        <main className="grid min-h-0 gap-3 md:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="min-h-0 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
            <h2 className="mb-3 text-sm font-semibold text-slate-950">Controls</h2>
            <div className="grid gap-2">
              <ControlRow label="buyer value" symbol="v" value={v} setValue={setV} />
              <ControlRow label="seller cost" symbol="c" value={c} setValue={setC} />
              <ControlRow label="buyer pays" symbol="p_b" value={pb} setValue={setPb} />
              <ControlRow label="seller gets" symbol="p_s" value={ps} setValue={setPs} />
            </div>
          </aside>

          <section className="min-h-0 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
            <div className="mb-2 flex items-center justify-between gap-2">
              <div>
                <h2 className="text-sm font-semibold text-slate-950">Efficient allocation graph</h2>
                <p className="text-xs text-slate-500">Blue: v ≥ c, q*=1. Red: v &lt; c, q*=0.</p>
              </div>
              <div className={`shrink-0 rounded-xl px-3 py-1.5 text-xs font-semibold ${data.qStar ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
                {data.qStar ? "trade" : "no trade"}
              </div>
            </div>

            <svg viewBox={`0 0 ${width} ${height}`} className="h-[calc(100%-38px)] w-full rounded-2xl bg-white">
              <defs>
                <linearGradient id="trade" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.82" />
                  <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.32" />
                </linearGradient>
                <linearGradient id="notrade" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#fecaca" stopOpacity="0.56" />
                  <stop offset="100%" stopColor="#fee2e2" stopOpacity="0.24" />
                </linearGradient>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L6,3 z" fill="#0f172a" />
                </marker>
              </defs>

              <rect x={pad} y={pad} width={width - 2 * pad} height={height - 2 * pad} fill="url(#notrade)" rx="14" />
              <path d={`M ${pad} ${height - pad} L ${width - pad} ${height - pad} L ${width - pad} ${pad} Z`} fill="url(#trade)" />

              <line x1={pad} y1={height - pad} x2={width - pad} y2={pad} stroke="#334155" strokeWidth="2" strokeDasharray="7 7" />
              <line x1={pad} y1={height - pad} x2={width - pad + 12} y2={height - pad} stroke="#0f172a" strokeWidth="2" markerEnd="url(#arrow)" />
              <line x1={pad} y1={height - pad} x2={pad} y2={pad - 12} stroke="#0f172a" strokeWidth="2" markerEnd="url(#arrow)" />

              <text x={width - pad + 15} y={height - pad + 5} fontSize="17" fill="#0f172a" fontStyle="italic">v</text>
              <text x={pad - 18} y={pad - 15} fontSize="17" fill="#0f172a" fontStyle="italic">c</text>
              <text x={width - pad - 70} y={pad + 22} fontSize="13" fill="#0f172a" fontWeight="700">v = c</text>
              <text x={width - pad - 90} y={height - pad - 18} fontSize="13" fill="#1d4ed8" fontWeight="700">q* = 1</text>
              <text x={pad + 18} y={pad + 28} fontSize="13" fill="#b91c1c" fontWeight="700">q* = 0</text>

              {[0, 2, 4, 6, 8, 10].map((tick) => (
                <g key={`x-${tick}`}>
                  <line x1={x(tick)} y1={height - pad - 5} x2={x(tick)} y2={height - pad + 5} stroke="#64748b" />
                  <text x={x(tick) - 5} y={height - pad + 20} fontSize="10" fill="#64748b">{tick}</text>
                </g>
              ))}

              {[0, 2, 4, 6, 8, 10].map((tick) => (
                <g key={`y-${tick}`}>
                  <line x1={pad - 5} y1={y(tick)} x2={pad + 5} y2={y(tick)} stroke="#64748b" />
                  <text x={pad - 27} y={y(tick) + 4} fontSize="10" fill="#64748b">{tick}</text>
                </g>
              ))}

              <line x1={pointX} y1={height - pad} x2={pointX} y2={pointY} stroke="#0f172a" strokeWidth="1.2" strokeOpacity="0.28" strokeDasharray="4 4" />
              <line x1={pad} y1={pointY} x2={pointX} y2={pointY} stroke="#0f172a" strokeWidth="1.2" strokeOpacity="0.28" strokeDasharray="4 4" />

              <motion.circle
                cx={pointX}
                cy={pointY}
                r="8"
                fill={data.qStar ? "#059669" : "#dc2626"}
                animate={{ cx: pointX, cy: pointY }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
              />
              <text x={Math.min(pointX + 12, width - pad - 105)} y={Math.max(pointY - 10, pad + 16)} fontSize="13" fill="#0f172a" fontWeight="700">
                (v={v}, c={c})
              </text>
            </svg>
          </section>
        </main>

        <section className="grid shrink-0 gap-3 md:grid-cols-5">
          <ResultCard
            title="Buyer"
            formula="u_b=vq+t_b"
            value={data.ub}
            items={[
              ["vq*", data.value],
              ["t_b", data.tb],
            ]}
          />
          <ResultCard
            title="Seller"
            formula="u_s=t_s-cq"
            value={data.us}
            items={[
              ["cq*", data.cost],
              ["t_s", data.ts],
            ]}
          />
          <ResultCard
            title="Surplus"
            formula="s*=(v-c)q*"
            value={data.surplus}
            items={[
              ["u_b+u_s", data.ub + data.us],
              ["revenue", data.revenue],
            ]}
          />
          <InfoCard title="Transfers">
            <MiniFormula left="q*" right={String(data.qStar)} />
            <MiniFormula left="t_b" right={String(data.tb)} />
            <MiniFormula left="t_s" right={String(data.ts)} />
            <MiniFormula left="t_b+t_s" right={String(data.subsidy)} />
            <div className={`mt-1.5 rounded-xl px-2.5 py-1.5 text-xs font-semibold ${data.subsidy <= 0 ? "bg-slate-100 text-slate-700" : "bg-amber-100 text-amber-900"}`}>
              {data.subsidy <= 0 ? "NES: no subsidy" : "Needs subsidy"}
            </div>
          </InfoCard>
          <InfoCard title="Interim">
            <div className="space-y-1.5 text-[11px] leading-4 text-slate-700">
              <div className="rounded-xl bg-blue-50 p-2 ring-1 ring-blue-100">
                <b>Buyer:</b> knows v, averages over c
                <div className="mt-1 font-mono">U_b(v)=vQ_b+T_b</div>
              </div>
              <div className="rounded-xl bg-emerald-50 p-2 ring-1 ring-emerald-100">
                <b>Seller:</b> knows c, averages over v
                <div className="mt-1 font-mono">U_s(c)=T_s-cQ_s</div>
              </div>
            </div>
          </InfoCard>
        </section>
      </div>
    </div>
  );
}

function ControlRow({ label, symbol, value, setValue }) {
  const dec = () => setValue((prev) => Math.max(0, prev - 1));
  const inc = () => setValue((prev) => Math.min(10, prev + 1));

  return (
    <div className="rounded-xl bg-slate-50 p-2 ring-1 ring-slate-200">
      <div className="mb-1 flex items-center justify-between gap-2">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">{label}</p>
          <p className="font-mono text-sm font-bold text-slate-950">{symbol}</p>
        </div>
        <span className="rounded-lg bg-white px-2 py-1 font-mono text-xs font-semibold ring-1 ring-slate-200">{value}</span>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={dec} className="h-6 w-7 rounded-lg border border-slate-300 bg-white text-xs font-bold hover:bg-slate-100">−</button>
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="min-w-0 flex-1 accent-blue-700"
        />
        <button onClick={inc} className="h-6 w-7 rounded-lg border border-slate-300 bg-white text-xs font-bold hover:bg-slate-100">+</button>
      </div>
    </div>
  );
}

function MiniFormula({ left, right }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-slate-50 px-2.5 py-1.5 font-mono text-[11px] ring-1 ring-slate-100">
      <span>{left}</span>
      <span className="font-semibold text-slate-950">{right}</span>
    </div>
  );
}

function ResultCard({ title, formula, value, items }) {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
          <p className="font-mono text-[11px] text-slate-500">{formula}</p>
        </div>
        <span className={`rounded-xl px-2.5 py-1 font-mono text-xs font-bold ${value >= 0 ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>{value}</span>
      </div>
      <div className="grid gap-1.5 text-xs">
        {items.map(([k, val]) => (
          <div key={k} className="flex justify-between rounded-lg bg-slate-50 px-2.5 py-1.5">
            <span className="text-slate-600">{k}</span>
            <span className="font-mono font-semibold">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoCard({ title, children }) {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
      <h3 className="mb-2 text-sm font-semibold text-slate-950">{title}</h3>
      <div className="grid gap-1.5">{children}</div>
    </div>
  );
}
