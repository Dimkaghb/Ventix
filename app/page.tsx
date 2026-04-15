import Image from "next/image";

// Local asset imports
import фонImg from "@/assets/фон.png";
import heroGroupImg from "@/assets/telegram-cloud-document-2-5402439319241662523.jpg";
import logoImg from "@/assets/лого.png";
import волныImg from "@/assets/фотоВихревыеКолебания.png";
import эскизImg from "@/assets/эскизНашеРешение.png";
import эскизКакImg from "@/assets/эскиз_какэтоработает.png";
import фото1Img from "@/assets/фото1_какэтоработает.png";
import фото2Img from "@/assets/фото2_какэтоработает.png";
import таблицаImg from "@/assets/таблицазаполненная.png";
import турбиныImg from "@/assets/турбинывместе.png";

// ─── Lightning bolt used in hero headline ───────────────────
function LightningBolt() {
  return (
    <svg
      width="26"
      height="46"
      viewBox="0 0 22 38"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M13 0L0 21H9.5L7.5 38L22 17H12.5L13 0Z" fill="#365EFF" />
    </svg>
  );
}

// ─── Circular stat badge ─────────────────────────────────────
function StatCircle({ value, unit }: { value: string; unit: string }) {
  const r = 62;
  const size = 152;
  const cx = size / 2;
  const cy = size / 2;
  const C = 2 * Math.PI * r;
  const arc = C * (270 / 360);
  const gap = C - arc;

  return (
    <div
      className="relative flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle at 38% 38%, #1e2d6e 0%, #0c1235 70%)",
        }}
      />
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
        style={{ transform: "rotate(-135deg)", transformOrigin: "center" }}
        aria-hidden="true"
      >
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(77,112,255,0.12)" strokeWidth="6" />
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke="#4D70FF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${arc.toFixed(1)} ${gap.toFixed(1)}`}
        />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-[4px]">
        <svg width="11" height="18" viewBox="0 0 9 15" fill="none" aria-hidden="true">
          <path d="M5.5 0L0 8.5H4L3 15L9 6.5H5L5.5 0Z" fill="#4D70FF" />
        </svg>
        <span className="text-white font-black text-[22px] leading-none tracking-tight">
          {value}
        </span>
        <span className="text-[#7888b4] text-[11px] font-semibold uppercase tracking-widest">
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

      {/* ── BACKGROUND ───────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src={фонImg}
          alt=""
          fill
          className="object-cover object-top"
          priority
          quality={95}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ════════════════════════════════════════════════
            NAVIGATION
        ════════════════════════════════════════════════ */}
        <header className="w-full px-12">
          <div className="max-w-[1280px] mx-auto flex items-center justify-between py-6">
            <a href="/">
              <Image
                src={logoImg}
                alt="Ventrix"
                height={38}
                style={{ width: "auto", height: "38px" }}
                priority
              />
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[15px] font-semibold text-[#bababa] hover:text-white tracking-[-0.04em] transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden md:flex items-center bg-[#121212] hover:bg-[#1a1a1a] border border-white/10 text-white text-[15px] font-semibold rounded-[10px] px-5 py-3 tracking-[-0.04em] transition-colors duration-200"
            >
              Связаться
            </a>
          </div>
        </header>

        {/* ════════════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════════════ */}
        <section className="flex-1 flex flex-col px-12">
          <div className="max-w-[1280px] w-full mx-auto flex-1 flex flex-col">

            {/* Text block */}
            <div className="px-10 pt-[100px]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#bababa] mb-7">
                ВИ* — Вихреиндуцированный
              </p>

              <div className="flex items-center gap-6 mb-8 flex-wrap">
                <LightningBolt />
                <h1
                  className="font-black text-white uppercase leading-[0.93em] tracking-[-0.04em]"
                  style={{
                    fontSize: "clamp(44px, 5.2vw, 74px)",
                    textShadow: "0 0 120px rgba(54,94,255,0.18)",
                  }}
                >
                  ВИ* — ВЕТРОГЕНЕРАТОР
                </h1>
                <LightningBolt />
              </div>

              <div className="flex flex-wrap items-end justify-between gap-8">
                <p
                  className="text-[20px] leading-[1.4em] tracking-[-0.04em] text-[#bababa] max-w-[600px]"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Получайте чистую энергию из вихреиндуцированных колебаний —
                  без лопастей, без шума, без вреда для природы.
                </p>

                <div className="flex gap-3 shrink-0">
                  <a
                    href="#problem"
                    className="bg-[#365EFF] hover:bg-[#4D70FF] text-white text-[15px] font-semibold rounded-[10px] px-5 py-3 tracking-[-0.04em] transition-colors duration-200"
                  >
                    Узнать больше
                  </a>
                  <a
                    href="#contact"
                    className="bg-[#121212] hover:bg-[#1a1a1a] text-white text-[15px] font-semibold rounded-[10px] px-5 py-3 tracking-[-0.04em] transition-colors duration-200"
                  >
                    Связаться
                  </a>
                </div>
              </div>
            </div>

            {/* Hero turbine group — single combined image, large */}
            <div className="relative flex justify-center" style={{ marginTop: "-220px" }}>
              <Image
                src={heroGroupImg}
                alt="ВИ*-Ветрогенератор"
                priority
                style={{
                  width: "clamp(1700px, 175vw, 2400px)",
                  height: "auto",
                }}
              />
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════
            PROBLEM SECTION
        ════════════════════════════════════════════════ */}
        <section id="problem" className="px-12 pt-24 pb-12">
          <div className="max-w-[1280px] mx-auto">

            <div
              className="rounded-2xl p-12 flex flex-col gap-8"
              style={{ background: "linear-gradient(135deg, #0f1535 0%, #080c1e 100%)" }}
            >

              {/* Top row */}
              <div className="flex flex-wrap gap-10 justify-between">
                <h2
                  className="font-black text-white uppercase leading-[0.95em] tracking-[-0.03em] shrink-0"
                  style={{ fontSize: "clamp(38px, 4vw, 60px)" }}
                >
                  Проблема
                </h2>

                <div className="flex flex-col gap-5 max-w-[560px]">
                  <p className="text-[17px] leading-[1.5em] tracking-[-0.02em] text-[#c0c8e0]">
                    Традиционные ветряные турбины сталкиваются с высокими затратами,
                    отходами, ограничениями по пространству и рисками для безопасности,
                    что подчёркивает необходимость более эффективного решения.
                  </p>

                  <div className="flex gap-3 items-start">
                    <span className="text-[#4D70FF] mt-[3px] shrink-0">•</span>
                    <p className="text-[15px] leading-[1.55em] tracking-[-0.02em] text-[#8090b8]">
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
              <div className="flex gap-10 flex-wrap">
                {STATS.map(({ value, unit, desc }) => (
                  <div key={unit} className="flex items-center gap-6">
                    <StatCircle value={value} unit={unit} />
                    <p className="text-[15px] leading-[1.5em] text-[#6070a0] max-w-[180px]">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            VORTEX OSCILLATIONS SECTION
        ════════════════════════════════════════════════ */}
        <section id="technology" className="px-12 pt-24 pb-20">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12">

            <div className="flex gap-14 items-start flex-wrap">
              <h2
                className="font-black text-white uppercase leading-[0.92em] tracking-[-0.04em] shrink-0"
                style={{ fontSize: "clamp(52px, 6.5vw, 86px)" }}
              >
                Вихревые<br />колебания
              </h2>

              <p className="text-[17px] leading-[1.6em] tracking-[-0.02em] text-[#bababa] max-w-[520px] pt-2">
                Когда ветер обтекает цилиндрический объект, позади него
                образуются чередующиеся вихри — этот эффект называется
                вихреобразованием Кармана. Вихри создают попеременные силы,
                которые заставляют объект колебаться.
              </p>
            </div>

            {/* Wave image strip */}
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ height: "clamp(170px, 22vw, 270px)" }}
            >
              <Image
                src={волныImg}
                alt="Вихревые колебания Кармана"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════
            OUR SOLUTION SECTION
        ════════════════════════════════════════════════ */}
        <section id="product" className="px-12 pt-12 pb-20">
          <div className="max-w-[1280px] mx-auto">

            <div
              className="rounded-2xl p-12 flex gap-12 items-stretch"
              style={{ background: "linear-gradient(135deg, #0f1535 0%, #080c1e 100%)" }}
            >

              {/* Left column — text */}
              <div className="flex flex-col gap-7 flex-1 min-w-0">

                <p className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#bababa]">
                  Наш продукт
                </p>

                <div className="flex items-start gap-4">
                  <span
                    className="text-[#365EFF] font-black shrink-0"
                    style={{ fontSize: "clamp(44px, 5vw, 68px)", lineHeight: "0.92em" }}
                  >
                    +
                  </span>
                  <h2
                    className="font-black text-white uppercase leading-[0.92em] tracking-[-0.04em]"
                    style={{ fontSize: "clamp(44px, 5vw, 68px)" }}
                  >
                    Наше<br />Решение
                  </h2>
                </div>

                <p
                  className="text-[17px] font-semibold tracking-[-0.03em] text-white"
                  style={{ lineHeight: "1.3em" }}
                >
                  Ventrix – Инновационная система ветроэнергетики
                </p>

                <p className="text-[15px] leading-[1.6em] tracking-[-0.02em] text-[#8090b8] max-w-[420px]">
                  Ventrix — ультракомпактный безлопастной ветрогенератор, который
                  преобразует вихреиндуцированные колебания в электроэнергию.
                  Он решает ключевые проблемы традиционной ветроэнергетики:
                  занимает минимум места, не требует масштабной инфраструктуры,
                  безопасен для людей и животных, не производит опасных отходов
                  и значительно снижает стоимость эксплуатации.
                </p>

              </div>

              {/* Middle column — annotations */}
              <div className="flex flex-col justify-center gap-9 shrink-0 w-[210px]">

                <div className="flex flex-col gap-2">
                  <div className="h-px bg-white/[0.12]" />
                  <p className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#4D70FF]">
                    Ось вращения
                  </p>
                  <p className="text-[13px] leading-[1.55em] tracking-[-0.01em] text-[#6070a0]">
                    Обеспечивает колебания вдоль вертикальной оси и стабилизацию конструкции
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="h-px bg-white/[0.12]" />
                  <p className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#4D70FF]">
                    Ременная передача
                  </p>
                  <p className="text-[13px] leading-[1.55em] tracking-[-0.01em] text-[#6070a0]">
                    Преобразует линейные колебания мачты в энергию генератора
                  </p>
                </div>

              </div>

              {/* Right — schematic image */}
              <div className="shrink-0 flex items-center justify-center" style={{ width: "clamp(180px, 24vw, 320px)" }}>
                <Image
                  src={эскизImg}
                  alt="Схема ВИ*-Ветрогенератора"
                  style={{ width: "100%", height: "auto", opacity: 0.92 }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            HOW IT WORKS SECTION
        ════════════════════════════════════════════════ */}
        <section id="technology" className="px-12 pt-12 pb-20">
          <div className="max-w-[1280px] mx-auto">

            <div
              className="rounded-2xl overflow-hidden flex gap-0 items-stretch"
              style={{ background: "linear-gradient(135deg, #0a0f28 0%, #060a1a 100%)" }}
            >

              {/* Left column */}
              <div className="flex flex-col gap-9 p-12 flex-1 min-w-0">

                <h2
                  className="font-black text-white uppercase leading-[0.90em] tracking-[-0.04em]"
                  style={{ fontSize: "clamp(38px, 4.5vw, 62px)" }}
                >
                  Как это<br />работает?
                </h2>

                <div className="flex flex-col gap-7">

                  <div className="flex flex-col gap-3">
                    <p className="text-[15px] font-semibold tracking-[-0.02em] text-white">
                      Принцип генерации энергии
                    </p>
                    <p className="text-[14px] leading-[1.6em] tracking-[-0.01em] text-[#6070a0]">
                      Вихри создают силы, вызывающие колебания конструкции. Это
                      усиливает передачу энергии генератору и повышает эффективность генерации.
                    </p>
                  </div>

                  <div className="h-px bg-white/[0.07]" />

                  <div className="flex flex-col gap-3">
                    <p className="text-[15px] font-semibold tracking-[-0.02em] text-white">
                      Магнитные энергизаторы (b)
                    </p>
                    <p className="text-[14px] leading-[1.6em] tracking-[-0.01em] text-[#6070a0]">
                      Магнитная акцелерация снижает хаос, стабилизирует колебания и
                      адаптируется к ветру, повышая эффективность системы.
                    </p>
                  </div>

                </div>

              </div>

              {/* Center — schematic image */}
              <div
                className="shrink-0 flex items-end justify-center"
                style={{ width: "clamp(240px, 33vw, 430px)" }}
              >
                <Image
                  src={эскизКакImg}
                  alt="Схема работы ВИ*-генератора"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Right column — two stacked info cards */}
              <div className="flex flex-col flex-1 min-w-0 p-12 gap-5">

                <div
                  className="flex-1 rounded-xl p-6 flex items-center gap-5"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <p className="text-[14px] font-semibold tracking-[-0.02em] text-white">
                      Передача энергии на генератор
                    </p>
                    <p className="text-[13px] leading-[1.6em] tracking-[-0.01em] text-[#6070a0]">
                      Колебания передаются через ось (a), которая разделяет конструкцию на две
                      части, и активирует зубчатую передачу, соединённую с шаговым
                      электродвигателем.
                    </p>
                  </div>
                  <div className="shrink-0" style={{ width: 88, height: 88 }}>
                    <Image
                      src={фото1Img}
                      alt="Зубчатая передача"
                      style={{ width: 88, height: 88, objectFit: "contain", borderRadius: 8 }}
                    />
                  </div>
                </div>

                <div
                  className="flex-1 rounded-xl p-6 flex items-center gap-5"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <p className="text-[14px] font-semibold tracking-[-0.02em] text-white">
                      Генерация энергии через шаговый электродвигатель (с)
                    </p>
                    <p className="text-[13px] leading-[1.6em] tracking-[-0.01em] text-[#6070a0]">
                      Механическая энергия преобразуется во вращательное движение, что позволяет
                      эффективно вырабатывать электроэнергию.
                    </p>
                  </div>
                  <div className="shrink-0" style={{ width: 88, height: 88 }}>
                    <Image
                      src={фото2Img}
                      alt="Шаговый электродвигатель"
                      style={{ width: 88, height: 88, objectFit: "contain", borderRadius: 8 }}
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            COMPETITOR ANALYSIS SECTION
        ════════════════════════════════════════════════ */}
        <section id="about" className="px-12 pt-12 pb-20">
          <div className="max-w-[1280px] mx-auto">

            <div
              className="rounded-2xl overflow-hidden flex gap-0 items-stretch"
              style={{ background: "linear-gradient(135deg, #0a0f28 0%, #060a1a 100%)" }}
            >

              {/* Left column */}
              <div className="flex flex-col p-12 shrink-0 overflow-hidden" style={{ width: "clamp(280px, 30vw, 380px)" }}>

                <h2
                  className="font-black text-white uppercase leading-[0.90em] tracking-[-0.04em] mb-7 break-words"
                  style={{ fontSize: "clamp(32px, 3.2vw, 48px)" }}
                >
                  Анализ<br />конкурентов
                </h2>

                <p className="text-[15px] leading-[1.65em] tracking-[-0.02em] text-[#6070a0] mb-auto">
                  Ventrix обеспечивает наибольшую плотность мощности,
                  высокую эффективность, занимает минимум пространства,
                  работает практически бесшумно, требует низких затрат
                  на обслуживание, служит до 25 лет и стоит значительно
                  дешевле конкурентов.
                </p>

                <div className="mt-9">
                  <Image
                    src={турбиныImg}
                    alt="Сравнение турбин конкурентов"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>

              </div>

              {/* Right — comparison table */}
              <div className="flex-1 min-w-0 flex items-center p-7 pl-0">
                <Image
                  src={таблицаImg}
                  alt="Таблица анализа конкурентов"
                  style={{ width: "100%", height: "auto", borderRadius: 12 }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            CONTACT / FOOTER STRIP
        ════════════════════════════════════════════════ */}
        <footer id="contact" className="px-12 pt-12 pb-12 mt-auto">
          <div className="max-w-[1280px] mx-auto">

            <div
              className="rounded-2xl px-12 py-9 flex items-center justify-between gap-8 flex-wrap"
              style={{
                background: "linear-gradient(135deg, #0d1845 0%, #0a1230 50%, #060c22 100%)",
                border: "1px solid rgba(77,112,255,0.15)",
              }}
            >

              {/* Left — label + contacts */}
              <div className="flex flex-col gap-4">
                <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#4D70FF]">
                  Contact us
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+77471029975"
                    className="flex items-center gap-3 text-[15px] font-medium text-[#c0c8e0] hover:text-white transition-colors duration-200 tracking-[-0.02em]"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.6.57 1 1 0 011 1v3.51a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.6 1 1 0 01-.25 1.02l-2.2 2.17z"
                        fill="currentColor"
                      />
                    </svg>
                    +7 747 102 9975
                  </a>

                  <a
                    href="mailto:osandiana53@gmail.com"
                    className="flex items-center gap-3 text-[15px] font-medium text-[#c0c8e0] hover:text-white transition-colors duration-200 tracking-[-0.02em]"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <polyline
                        points="22,6 12,13 2,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    osandiana53@gmail.com
                  </a>
                </div>
              </div>

              {/* Right — CTA button */}
              <a
                href="#"
                className="shrink-0 flex items-center text-white text-[15px] font-semibold uppercase tracking-[0.05em] rounded-xl px-7 py-4 transition-colors duration-200 hover:bg-white/10 bg-white/5"
                style={{ border: "1px solid rgba(255,255,255,0.18)" }}
              >
                Загрузить наше исследование
              </a>

            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
