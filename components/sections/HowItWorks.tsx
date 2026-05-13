import React from "react";

const steps = [
  {
    phase: "01",
    title: "Apply",
    sub: "Surface Treatment",
    desc: "DNF is applied to vulnerable surfaces via spray, brush, or integrated sprinkler systems — compatible with standard equipment and scalable to any area.",
  },
  {
    phase: "02",
    title: "Activate",
    sub: "Thermal Trigger",
    desc: "Heat or flame contact activates the formula instantly. A thermal barrier forms, interrupting the heat transfer that enables fire to spread material to material.",
  },
  {
    phase: "03",
    title: "Slow Spread",
    sub: "Propagation Reduction",
    desc: "Fire propagation on treated surfaces slows by up to 3×. Critical minutes are preserved — the treated zone becomes a controlled buffer.",
  },
  {
    phase: "04",
    title: "Reduce Heat",
    sub: "Thermal Attenuation",
    desc: "Radiant heat reaching adjacent untreated structures drops by up to 56%, limiting secondary ignitions and structural damage beyond the treated area.",
  },
  {
    phase: "05",
    title: "Support Response",
    sub: "Emergency Window",
    desc: "Fire departments gain 5–10 extra minutes to arrive, establish perimeters, suppress fire, and coordinate evacuation under controlled conditions.",
  },
  {
    phase: "06",
    title: "Protect Assets",
    sub: "Structural & Life Safety",
    desc: "People evacuate. Buildings hold. Nature survives. Cultural heritage is preserved. Industrial continuity maintained. DNF buys time to act.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative py-10 overflow-hidden"
      style={{ background: "#050505" }}
    >
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Left-aligned header */}
        <div className="mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#e8c97a] mb-4">
            How DNF Works
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f0e8d8] leading-tight mb-4">
            Six Steps.<br />
            <span className="text-ice-gradient">One Life-Saving Mission.</span>
          </h2>
          <p className="text-[#8a7060] max-w-lg text-lg leading-relaxed">
            From application to protection — how DNF transforms the fire safety equation.
          </p>
        </div>

        {/* Horizontal timeline — desktop: 2 rows of 3 */}
        <div className="hidden lg:block space-y-16">
          {[steps.slice(0, 3), steps.slice(3, 6)].map((row, rowIdx) => {
            const firstIdx = rowIdx === 0 ? 0 : 3;
            return (
              <div key={rowIdx} className="relative">
                {/* Horizontal connecting line for this row */}
                <div
                  className="absolute top-6 left-[16.67%] right-[16.67%] h-px"
                  style={{
                    background: "linear-gradient(90deg, rgba(201,168,76,0.55) 0%, rgba(201,168,76,0.18) 100%)",
                  }}
                />
                <div className="grid grid-cols-3 gap-0">
                  {row.map((step, colIdx) => {
                    const globalIdx = firstIdx + colIdx;
                    const isFilled = colIdx === 0; // first of each row
                    return (
                      <div key={globalIdx} className="flex flex-col items-center relative">
                        {/* Circle node */}
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center z-10 mb-6 relative shrink-0"
                          style={{
                            background: isFilled
                              ? "linear-gradient(135deg, #e8c97a, #c9a84c)"
                              : "rgba(18,12,4,0.9)",
                            border: "1.5px solid rgba(201,168,76,0.5)",
                          }}
                        >
                          <span
                            className="text-xs font-black"
                            style={{ color: isFilled ? "#050505" : "#c9a84c" }}
                          >
                            {step.phase}
                          </span>
                        </div>

                        {/* Step content */}
                        <div className="text-center px-4">
                          <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#c9a84c] mb-1.5 opacity-70">
                            {step.sub}
                          </div>
                          <h3 className="text-sm font-bold text-[#f0e8d8] mb-2">{step.title}</h3>
                          <p className="text-xs text-[#6a5840] leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile stacked timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-5 pb-8 relative">
              {/* Vertical connector */}
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-px" style={{ background: "rgba(201,168,76,0.2)" }} />
              )}
              {/* Circle */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10"
                style={{
                  background: i === 0 ? "linear-gradient(135deg, #e8c97a, #c9a84c)" : "rgba(18,12,4,0.9)",
                  border: "1.5px solid rgba(201,168,76,0.4)",
                }}
              >
                <span className="text-xs font-black" style={{ color: i === 0 ? "#050505" : "#c9a84c" }}>{step.phase}</span>
              </div>
              {/* Content */}
              <div className="pt-1.5">
                <div className="text-[10px] font-bold tracking-widest uppercase text-[#c9a84c] mb-1 opacity-70">{step.sub}</div>
                <h3 className="text-base font-bold text-[#f0e8d8] mb-1.5">{step.title}</h3>
                <p className="text-sm text-[#6a5840] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
