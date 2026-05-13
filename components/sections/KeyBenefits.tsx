import React from "react";
import { IconClock, IconFlame, IconPeople, IconPaw, IconLeaf, IconShield } from "@/components/Icons";

const benefits = [
  {
    Icon: IconClock,
    title: "Critical Time Advantage",
    desc: "DNF extends the window between ignition and critical fire behavior — giving people, systems and responders measurable additional minutes.",
    metric: "+7 min",
    metricLabel: "average extended response window",
  },
  {
    Icon: IconFlame,
    title: "Fire Spread Reduction",
    desc: "On treated surfaces, fire propagation slows by up to 3× compared to untreated materials under equivalent conditions.",
    metric: "up to 3×",
    metricLabel: "slower spread on treated surfaces",
  },
  {
    Icon: IconPeople,
    title: "Human Safety",
    desc: "Evacuation corridors stay open longer. Stairwells and exit pathways remain viable. The human cost of fire events is measurably reduced.",
    metric: "↑80%",
    metricLabel: "safer evacuation viability",
  },
  {
    Icon: IconPaw,
    title: "Animal Safety",
    desc: "Slower propagation creates escape corridors for wildlife. Livestock, farm animals and wild species gain critical time to flee fire zones.",
    metric: "Preserved",
    metricLabel: "wildlife escape corridors",
  },
  {
    Icon: IconLeaf,
    title: "Environmental Responsibility",
    desc: "DNF leaves no toxic residue. The formula is biodegradable, non-accumulative and certified safe for soil and water contact zones.",
    metric: "0",
    metricLabel: "toxic residue — eco-certified",
  },
  {
    Icon: IconShield,
    title: "Infrastructure Protection",
    desc: "Buildings, critical infrastructure, cultural heritage sites and industrial facilities maintain structural integrity longer under fire threat.",
    metric: "60–80%",
    metricLabel: "reduction in asset exposure risk",
  },
];

export default function KeyBenefits() {
  return (
    <section
      id="sustainability"
      className="relative py-10 overflow-hidden"
      style={{ background: "#050505" }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Left-aligned header */}
        <div className="mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e8c97a] mb-4">
            Why DNF
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f0e8d8] leading-tight mb-4">
            Measurable Benefits.<br />
            <span className="text-ice-gradient">Real-World Impact.</span>
          </h2>
          <p className="text-[#8a7060] text-lg max-w-lg leading-relaxed">
            Quantifiable advantages across every dimension that matters in fire safety — no trade-offs.
          </p>
        </div>

        {/* Two-column list of horizontal cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {benefits.map((b, i) => {
            const BIcon = b.Icon;
            return (
              <div
                key={i}
                className="flex items-start gap-5 rounded-2xl px-6 py-5 group hover:border-amber-700/30 transition-all"
                style={{
                  background: "rgba(14,10,3,0.7)",
                  border: "1px solid rgba(201,168,76,0.12)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-[#e8c97a]"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.18)",
                  }}
                >
                  <BIcon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3 mb-1.5 flex-wrap">
                    <h3 className="text-sm font-bold text-[#f0e8d8]">{b.title}</h3>
                    <span className="text-lg font-black text-ice-gradient leading-none shrink-0">{b.metric}</span>
                  </div>
                  <p className="text-xs text-[#8a7060] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 p-7 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-5"
          style={{
            background: "rgba(14,10,3,0.6)",
            border: "1px solid rgba(201,168,76,0.12)",
            borderLeft: "3px solid #c9a84c",
          }}
        >
          <div>
            <p className="text-base font-bold text-[#f0e8d8]">
              Six dimensions. One technology.{" "}
              <span className="text-ice-gradient">Proven performance.</span>
            </p>
            <p className="text-sm text-[#8a7060] mt-1">
              Every benefit is backed by independent laboratory testing and field demonstration data.
            </p>
          </div>
          <a href="#demonstrations" className="btn-ice px-6 py-3 rounded-full text-sm shrink-0">
            View Test Data
          </a>
        </div>
      </div>
    </section>
  );
}
