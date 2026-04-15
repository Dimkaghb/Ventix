import Image from "next/image";

// Local asset imports — Next.js auto-detects dimensions from these
import фонImg from "@/assets/фон.png";
import turbineImg from "@/assets/image.png";
import logoImg from "@/assets/лого.png";

function LightningBolt() {
  return (
    <svg
      width="22"
      height="38"
      viewBox="0 0 22 38"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M13 0L0 21H9.5L7.5 38L22 17H12.5L13 0Z" fill="#365EFF" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Технология", href: "#technology" },
  { label: "Продукт", href: "#product" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contact" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════
          BACKGROUND — фон.png
          Full page width, height auto so portrait image isn't
          cropped — smoke swirls appear at top-right & bottom-left.
          Position absolute (scrolls with page) so future sections
          below the hero sit on plain black.
      ═══════════════════════════════════════════════════ */}
      <div className="absolute inset-x-0 top-0 z-0 pointer-events-none select-none">
        <Image
          src={фонImg}
          alt=""
          style={{ width: "100%", height: "auto" }}
          priority
          quality={95}
        />
        {/* vignette so headline text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* ═══════════════════════════════════════════════════
          MAIN LAYOUT
      ═══════════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ───────────────────────────────────────────────
            NAVIGATION
        ─────────────────────────────────────────────── */}
        <header className="w-full px-10">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between py-5">

            {/* Logo image */}
            <a href="/">
              <Image
                src={logoImg}
                alt="Ventrix"
                height={32}
                style={{ width: "auto", height: "32px" }}
                priority
              />
            </a>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[14px] font-semibold text-[#bababa] hover:text-white tracking-[-0.04em] transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* CTA button */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-1 bg-[#121212] hover:bg-[#1a1a1a] border border-white/10 text-white text-[14px] font-semibold rounded-[10px] px-4 py-[10px] tracking-[-0.04em] transition-colors duration-200"
            >
              Связаться
            </a>
          </div>
        </header>

        {/* ───────────────────────────────────────────────
            HERO SECTION
        ─────────────────────────────────────────────── */}
        <section className="flex-1 flex flex-col px-10">

          {/* content rail — max 1200px, dashed side borders from design system */}
          <div className="max-w-[1200px] w-full mx-auto flex-1 flex flex-col">

            {/* ── TEXT BLOCK ──────────────────────────── */}
            <div className="px-10 pt-[88px]">

              {/* Section tag — /Tag text style */}
              <p className="text-[12px] font-semibold uppercase tracking-[0.04em] text-[#bababa] mb-6">
                ВИ* — Вихреиндуцированный
              </p>

              {/* Primary headline — ⚡ ВИ* — ВЕТРОГЕНЕРАТОР ⚡ */}
              <div className="flex items-center gap-5 mb-7 flex-wrap">
                <LightningBolt />
                <h1
                  className="font-black text-white uppercase leading-[0.93em] tracking-[-0.04em]"
                  style={{
                    fontSize: "clamp(36px, 4.4vw, 62px)",
                    textShadow: "0 0 120px rgba(54, 94, 255, 0.18)",
                  }}
                >
                  ВИ* — ВЕТРОГЕНЕРАТОР
                </h1>
                <LightningBolt />
              </div>

              {/* Body + CTA row */}
              <div className="flex flex-wrap items-end justify-between gap-8">
                <p
                  className="text-[18px] leading-[1.4em] tracking-[-0.04em] text-[#bababa] max-w-[560px]"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Получайте чистую энергию из вихреиндуцированных колебаний —
                  без лопастей, без шума, без вреда для природы.
                </p>

                {/* Buttons — /CTA text style, 10px radius from design system */}
                <div className="flex gap-2 shrink-0">
                  <a
                    href="#product"
                    className="bg-[#365EFF] hover:bg-[#4D70FF] text-white text-[14px] font-semibold rounded-[10px] px-4 py-3 tracking-[-0.04em] transition-colors duration-200"
                  >
                    Узнать больше
                  </a>
                  <a
                    href="#contact"
                    className="bg-[#121212] hover:bg-[#1a1a1a] text-white text-[14px] font-semibold rounded-[10px] px-4 py-3 tracking-[-0.04em] transition-colors duration-200"
                  >
                    Связаться
                  </a>
                </div>
              </div>
            </div>

            {/* ── THREE-TURBINE FAN ARRANGEMENT ───────── */}
            {/* Center: full size, full opacity.
                Left/right: ~70% width, rotated ±14° from base,
                lower opacity, tinted dark/teal respectively. */}
            <div
              className="relative flex-1 overflow-hidden"
              style={{ minHeight: "380px" }}
            >
              {/* LEFT turbine — dark/steel tint, leaning left */}
              <div
                className="absolute bottom-0"
                style={{
                  left: "50%",
                  width: "21%",
                  transform: "translateX(calc(-50% - 220px)) rotate(-14deg)",
                  transformOrigin: "bottom center",
                  opacity: 0.42,
                  zIndex: 1,
                }}
              >
                <Image
                  src={turbineImg}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                    filter: "brightness(0.5) saturate(0.35)",
                  }}
                />
              </div>

              {/* RIGHT turbine — teal tint, leaning right */}
              <div
                className="absolute bottom-0"
                style={{
                  left: "50%",
                  width: "21%",
                  transform: "translateX(calc(-50% + 220px)) rotate(14deg)",
                  transformOrigin: "bottom center",
                  opacity: 0.52,
                  zIndex: 1,
                }}
              >
                <Image
                  src={turbineImg}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                    filter: "brightness(0.65) hue-rotate(192deg) saturate(1.7)",
                  }}
                />
              </div>

              {/* CENTER turbine — hero piece, full opacity, on top */}
              <div
                className="absolute bottom-0"
                style={{
                  left: "50%",
                  width: "29%",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                }}
              >
                <Image
                  src={turbineImg}
                  alt="ВИ*-Ветрогенератор"
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
