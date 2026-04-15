import Image from "next/image";

// Local asset imports
import фонImg from "@/assets/фон.png";
import turbineImg from "@/assets/image.png";
import logoImg from "@/assets/лого.png";

// ─── Lightning bolt used in hero headline ───────────────────
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

// ─── Circular stat badge (JSX — avoids Cyrillic filename issues) ─
function StatCircle({ value, unit }: { value: string; unit: string }) {
  // 270° arc, gap at bottom-centre
  const r = 52;
  const size = 128;
  const cx = size / 2;
  const cy = size / 2;
  const C = 2 * Math.PI * r;
  const arc = C * (270 / 360);   // filled portion
  const gap = C - arc;            // empty portion

  return (
    <div
      className="relative flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
    >
      {/* Dark navy gradient disc */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 38% 38%, #1e2d6e 0%, #0c1235 70%)",
        }}
      />

      {/* Blue arc ring — gap centred at bottom */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
        style={{ transform: "rotate(-135deg)", transformOrigin: "center" }}
        aria-hidden="true"
      >
        {/* dim track */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke="rgba(77,112,255,0.12)"
          strokeWidth="5"
        />
        {/* lit arc */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke="#4D70FF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${arc.toFixed(1)} ${gap.toFixed(1)}`}
        />
      </svg>

      {/* Inner content */}
      <div className="relative z-10 flex flex-col items-center gap-[3px]">
        {/* small lightning */}
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" aria-hidden="true">
          <path d="M5.5 0L0 8.5H4L3 15L9 6.5H5L5.5 0Z" fill="#4D70FF" />
        </svg>
        <span className="text-white font-black text-[19px] leading-none tracking-tight">
          {value}
        </span>
        <span className="text-[#7888b4] text-[9px] font-semibold uppercase tracking-widest">
          {unit}
        </span>
      </div>
    </div>
  );
}

// ─── Stat data ───────────────────────────────────────────────
const STATS = [
  {
    value: "2 млн",
    unit: "тонн",
    desc: "неутилизируемых отходов создаются традиционными турбинами",
  },
  {
    value: "300",
    unit: "людей",
    desc: "ежегодно погибают в результате эксплуатации ветряных турбин",
  },
  {
    value: "$20млн",
    unit: "финансов",
    desc: "требуется для работы каждой турбины",
  },
];

// ─── Nav links ───────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Технология", href: "#technology" },
  { label: "Продукт", href: "#product" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contact" },
];

// ════════════════════════════════════════════════════════════
export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">

      {/* ── BACKGROUND — фон.png (scrolls with page) ─────── */}
      <div className="absolute inset-x-0 top-0 z-0 pointer-events-none select-none">
        <Image
          src={фонImg}
          alt=""
          style={{ width: "100%", height: "auto" }}
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ════════════════════════════════════════════════
            NAVIGATION
        ════════════════════════════════════════════════ */}
        <header className="w-full px-10">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between py-5">
            <a href="/">
              <Image
                src={logoImg}
                alt="Ventrix"
                height={32}
                style={{ width: "auto", height: "32px" }}
                priority
              />
            </a>

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

            <a
              href="#contact"
              className="hidden md:flex items-center bg-[#121212] hover:bg-[#1a1a1a] border border-white/10 text-white text-[14px] font-semibold rounded-[10px] px-4 py-[10px] tracking-[-0.04em] transition-colors duration-200"
            >
              Связаться
            </a>
          </div>
        </header>

        {/* ════════════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════════════ */}
        <section className="flex-1 flex flex-col px-10">
          <div className="max-w-[1200px] w-full mx-auto flex-1 flex flex-col">

            {/* Text block */}
            <div className="px-10 pt-[88px]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.04em] text-[#bababa] mb-6">
                ВИ* — Вихреиндуцированный
              </p>

              <div className="flex items-center gap-5 mb-7 flex-wrap">
                <LightningBolt />
                <h1
                  className="font-black text-white uppercase leading-[0.93em] tracking-[-0.04em]"
                  style={{
                    fontSize: "clamp(36px, 4.4vw, 62px)",
                    textShadow: "0 0 120px rgba(54,94,255,0.18)",
                  }}
                >
                  ВИ* — ВЕТРОГЕНЕРАТОР
                </h1>
                <LightningBolt />
              </div>

              <div className="flex flex-wrap items-end justify-between gap-8">
                <p
                  className="text-[18px] leading-[1.4em] tracking-[-0.04em] text-[#bababa] max-w-[560px]"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Получайте чистую энергию из вихреиндуцированных колебаний —
                  без лопастей, без шума, без вреда для природы.
                </p>

                <div className="flex gap-2 shrink-0">
                  <a
                    href="#problem"
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

            {/* Three-turbine fan — height-controlled, anchored bottom */}
            <div
              className="relative mt-auto"
              style={{ height: "clamp(320px, 46vh, 500px)" }}
            >
              {/* LEFT — dark/steel tint, leaning left */}
              <div
                className="absolute bottom-0"
                style={{
                  left: "50%",
                  transform: "translateX(calc(-50% - 190px)) rotate(-14deg)",
                  transformOrigin: "bottom center",
                  opacity: 0.42,
                  zIndex: 1,
                }}
              >
                <Image
                  src={turbineImg}
                  alt=""
                  style={{
                    height: "clamp(210px, 30vh, 330px)",
                    width: "auto",
                    filter: "brightness(0.5) saturate(0.35)",
                  }}
                />
              </div>

              {/* RIGHT — teal tint, leaning right */}
              <div
                className="absolute bottom-0"
                style={{
                  left: "50%",
                  transform: "translateX(calc(-50% + 190px)) rotate(14deg)",
                  transformOrigin: "bottom center",
                  opacity: 0.52,
                  zIndex: 1,
                }}
              >
                <Image
                  src={turbineImg}
                  alt=""
                  style={{
                    height: "clamp(210px, 30vh, 330px)",
                    width: "auto",
                    filter: "brightness(0.65) hue-rotate(192deg) saturate(1.7)",
                  }}
                />
              </div>

              {/* CENTER — hero piece, full brightness, on top */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                style={{ zIndex: 2 }}
              >
                <Image
                  src={turbineImg}
                  alt="ВИ*-Ветрогенератор"
                  priority
                  style={{
                    height: "clamp(300px, 44vh, 480px)",
                    width: "auto",
                  }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════
            PROBLEM SECTION
        ════════════════════════════════════════════════ */}
        <section id="problem" className="px-10 pt-20 pb-10">
          <div className="max-w-[1200px] mx-auto">

            {/* Unified dark card — no image split */}
            <div
              className="rounded-2xl p-10 flex flex-col gap-7"
              style={{ background: "linear-gradient(135deg, #0f1535 0%, #080c1e 100%)" }}
            >

              {/* Top row: heading + body */}
              <div className="flex flex-wrap gap-8 justify-between">
                <h2
                  className="font-black text-white uppercase leading-[0.95em] tracking-[-0.03em] shrink-0"
                  style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
                >
                  Проблема
                </h2>

                <div className="flex flex-col gap-4 max-w-[520px]">
                  <p className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#c0c8e0]">
                    Традиционные ветряные турбины сталкиваются с высокими затратами,
                    отходами, ограничениями по пространству и рисками для безопасности,
                    что подчёркивает необходимость более эффективного решения.
                  </p>

                  <div className="flex gap-3 items-start">
                    <span className="text-[#4D70FF] mt-[3px] shrink-0">•</span>
                    <p className="text-[13px] leading-[1.55em] tracking-[-0.02em] text-[#8090b8]">
                      На одном квадратном километре можно разместить не более двух
                      ветряных турбин. Для их транспортировки требуются специальные
                      большие дороги и автомобили.
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.07]" />

              {/* Stats row */}
              <div className="flex gap-8 flex-wrap">
                {STATS.map(({ value, unit, desc }) => (
                  <div key={unit} className="flex items-center gap-5">
                    <StatCircle value={value} unit={unit} />
                    <p className="text-[13px] leading-[1.5em] text-[#6070a0] max-w-[160px]">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
