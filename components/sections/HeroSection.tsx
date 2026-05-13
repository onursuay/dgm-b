"use client";

export default function HeroSection() {
  const stats = [
    { value: "3×", label: "Slower Fire Spread", sub: "on treated surfaces" },
    { value: "+7 min", label: "Response Window", sub: "average gain" },
    { value: "−69%", label: "Burn Rate Reduction", sub: "lab certified" },
    { value: "0", label: "Toxic Residue", sub: "eco-safe formula" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Faint gold grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 1,
        }}
      />

      {/* Thin vertical accent line — ~10% from left */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{
          left: "10%",
          width: "1px",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.35) 20%, rgba(201,168,76,0.35) 80%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-10 pt-28 pb-16">

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0s" }}
        >
          <div
            className="w-8 h-px"
            style={{ background: "rgba(201,168,76,0.5)" }}
          />
          <span
            className="text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: "#c9a84c" }}
          >
            Germany · Next-Gen Fire Safety
          </span>
        </div>

        {/* Giant headline — left-aligned, full-width */}
        <h1
          className="font-black leading-[0.95] tracking-tight mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.12s" }}
        >
          <span
            className="block text-[#f0e8d8]"
            style={{ fontSize: "clamp(3rem,8vw,7rem)" }}
          >
            FIRE SPREADS
          </span>
          <span
            className="block text-[#f0e8d8]"
            style={{ fontSize: "clamp(3rem,8vw,7rem)" }}
          >
            IN SECONDS.
          </span>
          <span
            className="block"
            style={{
              fontSize: "clamp(3rem,8vw,7rem)",
              background: "linear-gradient(90deg, #e8c97a 0%, #c9a84c 50%, #f0daa0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            DNF BUYS TIME.
          </span>
        </h1>

        {/* Horizontal stats bar — full width, 4 cols */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 w-full border animate-fade-in-up mb-10"
          style={{
            borderColor: "rgba(201,168,76,0.18)",
            background: "rgba(10,7,2,0.6)",
            animationDelay: "0.28s",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col justify-center px-6 py-6 group hover:bg-amber-900/5 transition-colors"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(201,168,76,0.12)"
                    : "none",
              }}
            >
              <div
                className="text-3xl lg:text-4xl font-black mb-1 leading-none"
                style={{
                  background:
                    "linear-gradient(135deg, #e8c97a 0%, #c9a84c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div className="text-xs font-semibold text-[#d8c8a0] mb-0.5">
                {s.label}
              </div>
              <div className="text-[10px] text-[#5a4830]">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* CTA row — left CTAs, right cert text */}
        <div
          className="flex items-center justify-between gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.44s" }}
        >
          {/* Left: buttons + WhatsApp */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#technology"
              className="btn-ice px-8 py-4 rounded-full text-sm font-bold"
            >
              Explore Technology
            </a>
            <a
              href="#demonstrations"
              className="btn-outline-ice px-8 py-4 rounded-full text-sm"
            >
              Watch Live Demo
            </a>
            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: "#5a4830" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#8a7060")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#5a4830")
              }
            >
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Contact
            </a>
          </div>

          {/* Right: cert text — hidden on mobile */}
          <p
            className="hidden lg:block text-xs italic text-right leading-relaxed shrink-0"
            style={{ color: "#5a4830" }}
          >
            Eco-certified · Made in Germany
          </p>
        </div>
      </div>
    </section>
  );
}
