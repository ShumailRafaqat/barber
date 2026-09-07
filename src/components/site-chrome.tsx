import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { languages, useI18n } from "@/lib/i18n";
import {
  Facebook,
  ExternalLink,
  Globe2,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  X,
  Youtube,
} from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
] as const;

export const PHONE = "+66 92 905 0509";
export const PHONE_HREF = "tel:+66929050509";
export const WHATSAPP_HREF = "https://wa.me/66929050509";
export const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=Bangkok+Kropper+Barber+Shop+Khlong+Toei+reviews";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { language, setLanguage, t } = useI18n();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-border/70 bg-background/92 backdrop-blur-xl"
          : "bg-background/78 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-2.5 sm:px-5 sm:py-3">
        <Link to="/" className="group flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3">
          <img
            src="/logo.png"
            alt="Bangkok Kropper logo"
            className="h-10 w-14 shrink-0 object-contain sm:h-11 sm:w-16"
          />
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-base tracking-wide text-primary sm:text-lg">
              BANGKOK KROPPER
            </span>
            <span className="block truncate text-[0.58rem] uppercase tracking-[0.25em] text-muted-foreground sm:text-[0.65rem] sm:tracking-[0.35em]">
              Barber Shop
            </span>
          </span>
        </Link>

        <nav className="ml-2 hidden items-center gap-3 whitespace-nowrap md:flex lg:ml-5 xl:gap-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              className="whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label === "Home" ? t.home : t.services}
            </Link>
          ))}
          <a
            href="/#reviews"
            className="whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
          >
            {t.reviews}
          </a>
          <a
            href="/#team"
            className="whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
          >
            {t.team}
          </a>
          <a
            href="/#media"
            className="whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
          >
            {t.gallery}
          </a>
          <a
            href="/#locations"
            className="whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
          >
            Locations
          </a>
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-1.5 whitespace-nowrap text-[0.68rem] font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:text-foreground lg:inline-flex"
          >
            <Phone className="size-4" /> {PHONE}
          </a>
          <a
            href="/book"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-md"
          >
            <Phone className="size-4" /> {t.bookAppointment}
          </a>
          <label className="hidden min-w-20 items-center gap-1 whitespace-nowrap rounded-full border border-primary/45 bg-card/70 px-2.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-wider text-primary lg:flex">
            <Globe2 className="size-4 shrink-0" />
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as typeof language)}
              aria-label={t.language}
              className="max-w-16 appearance-none bg-transparent text-xs font-bold uppercase text-foreground outline-none"
            >
              {languages.map((item) => (
                <option key={item.code} value={item.code} className="bg-card text-foreground">
                  {item.code === "en" ? item.label : `${item.label} · ${item.native}`}
                </option>
              ))}
            </select>
          </label>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid size-10 shrink-0 place-items-center rounded-full border border-primary/50 bg-card/85 text-primary shadow-sm md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 shadow-2xl shadow-black/40 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 font-display text-xl tracking-wide text-foreground"
            >
              {item.label === "Home" ? t.home : t.services}
            </Link>
          ))}
          <a
            href="/#reviews"
            onClick={() => setOpen(false)}
            className="block border-b border-border py-3 font-display text-xl tracking-wide text-foreground"
          >
            {t.reviews}
          </a>
          <a
            href="/#team"
            onClick={() => setOpen(false)}
            className="block border-b border-border py-3 font-display text-xl tracking-wide text-foreground"
          >
            {t.team}
          </a>
          <a
            href="/#media"
            onClick={() => setOpen(false)}
            className="block border-b border-border py-3 font-display text-xl tracking-wide text-foreground"
          >
            {t.gallery}
          </a>
          <a
            href="/#locations"
            onClick={() => setOpen(false)}
            className="block border-b border-border py-3 font-display text-xl tracking-wide text-foreground"
          >
            Locations
          </a>
          <a
            href="/book"
            className="mt-4 flex items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-primary py-3 font-bold uppercase text-primary-foreground"
          >
            <Phone className="size-4" /> {t.bookAppointment}
          </a>
          <a
            href={PHONE_HREF}
            className="mt-3 flex items-center justify-center gap-2 rounded-sm border border-primary/50 py-3 font-bold uppercase text-primary"
          >
            <Phone className="size-4" /> {t.call} {PHONE}
          </a>
          <label className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <Globe2 className="size-4 text-primary" />
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as typeof language)}
              aria-label={t.language}
              className="rounded-sm border border-primary/40 bg-background px-3 py-2 text-foreground outline-none focus:border-primary"
            >
              {languages.map((item) => (
                <option key={item.code} value={item.code} className="bg-card text-foreground">
                  {item.code === "en" ? item.label : `${item.label} · ${item.native}`}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
    </header>
  );
}

export const ADDRESS = "33 Sukhumvit Rd, Khlong Toei, Bangkok 10110, Thailand";
export const ADDRESS_TWO = "2/3 Phahon Yothin 7, Phaya Thai, Bangkok 10400, Thailand";
export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Bangkok Kropper Barber Shop, 33 Sukhumvit Rd, Khlong Toei, Bangkok 10110");
export const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("33 Sukhumvit Rd, Khlong Toei, Bangkok 10110, Thailand") +
  "&z=16&output=embed";
export const MAPS_LINK_TWO =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS_TWO);
export const MAPS_EMBED_TWO =
  "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS_TWO) + "&z=16&output=embed";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/popular/bangkok-kropper-barber-shop/", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/p/Bangkok-kropper-Barber-shop-61566903118616/", Icon: Facebook },
  { label: "YouTube", href: "https://youtube.com/@bangkokkropper?si=z2ZF30C4bPnwnQPb", Icon: Youtube },
  { label: "Email", href: "mailto:bangkokkropper33@gmail.com", Icon: Mail },
  { label: "WhatsApp", href: WHATSAPP_HREF, Icon: MessageCircle },
] as const;

const hours = [
  { day: "Monday", open: "10:00", close: "02:30" },
  { day: "Tuesday", open: "10:00", close: "02:30" },
  { day: "Wednesday", open: "10:00", close: "02:30" },
  { day: "Thursday", open: "10:00", close: "02:30" },
  { day: "Friday", open: "10:00", close: "02:30" },
  { day: "Saturday", open: "10:00", close: "02:30" },
  { day: "Sunday", open: "10:00", close: "00:00" },
] as const;

/** Bangkok time (UTC+7) minutes since midnight + weekday index (0 = Monday). */
function bangkokNow() {
  const utc = Date.now() + new Date().getTimezoneOffset() * 60000;
  const bkk = new Date(utc + 7 * 3600000);
  return { minutes: bkk.getHours() * 60 + bkk.getMinutes(), day: (bkk.getDay() + 6) % 7 };
}

export function SiteFooter() {
  const { t } = useI18n();
  const [now, setNow] = useState(() => bangkokNow());
  const [tick, setTick] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const [panel, setPanel] = useState<"hours" | "reviews" | "why">("hours");
  const [cuts, setCuts] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setNow(bangkokNow());
      setTick((t) => t + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const today = hours[now.day] ?? hours[0];
  const closeMin = today.close === "00:00" ? 24 * 60 : 26 * 60 + 30;
  const isOpen = now.minutes >= 600 && now.minutes < closeMin;
  const clock = `${String(Math.floor(now.minutes / 60)).padStart(2, "0")}:${String(
    now.minutes % 60,
  ).padStart(2, "0")}`;
  const untilMin = isOpen ? closeMin - now.minutes : (600 - now.minutes + 1440) % 1440;
  const untilLabel = `${Math.floor(untilMin / 60)}h ${untilMin % 60}m`;

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      {/* barber poles */}
      <div
        aria-hidden
        className="barber-pole pointer-events-none absolute inset-y-0 left-0 w-2 opacity-70"
      />
      <div
        aria-hidden
        className="barber-pole pointer-events-none absolute inset-y-0 right-0 w-2 opacity-70"
      />

      <div className="group/marquee relative flex select-none whitespace-nowrap border-b border-border py-3 text-muted-foreground">
        <div className="marquee-track flex shrink-0 gap-10 pr-10 font-display text-sm uppercase tracking-[0.4em] group-hover/marquee:[animation-play-state:paused]">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["Fades", "Razor shaves", "Beard sculpting", "Herbal head spa", "Walk-ins welcome"].map(
              (w) => (
                <span key={`${i}-${w}`} className="flex items-center gap-10">
                  {w} <Scissors className="size-3.5 text-accent" />
                </span>
              ),
            ),
          )}
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-7 py-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCuts((c) => c + 1)}
              className="group text-left font-display text-3xl tracking-wide text-primary neon-text"
            >
              BANGKOK KROPPER
              <Scissors
                key={cuts}
                className={`ml-3 inline size-5 text-accent transition-transform ${
                  cuts ? "animate-rise" : ""
                } group-hover:rotate-45`}
              />
            </button>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            {t.footerIntro} — rated 4.9★ by 570+ customers.
          </p>
          {cuts > 0 && (
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-accent">
              {cuts} snip{cuts > 1 ? "s" : ""} — the clippers are warm
            </p>
          )}

          <div
            className={`mt-6 inline-flex items-center gap-3 rounded-sm border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
              isOpen
                ? "border-primary/50 text-primary neon-ring"
                : "border-border text-muted-foreground"
            }`}
          >
            <span className="relative grid size-2.5 place-items-center">
              <span
                className={`absolute inset-0 rounded-full ${isOpen ? "bg-primary" : "bg-muted-foreground"}`}
              />
              {isOpen && (
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/70" />
              )}
            </span>
            {isOpen ? t.openNow : t.closed} · Bangkok{" "}
            <span className="tabular-nums">
              {clock}:{String(tick % 60).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {isOpen ? `${t.closesIn} ${untilLabel}` : `${t.opensIn} ${untilLabel}`}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                onMouseEnter={() => setHovered(label)}
                onMouseLeave={() => setHovered(null)}
                className="group grid size-11 place-items-center rounded-sm border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
          <p className="mt-3 h-4 text-xs uppercase tracking-[0.3em] text-primary">
            {hovered ?? ""}
          </p>
        </div>

        <div className="text-sm text-muted-foreground">
          <div className="flex gap-1 rounded-sm border border-border p-1">
            {(["hours", "reviews", "why"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setPanel(key)}
                className={`flex-1 rounded-sm px-2 py-1.5 font-display text-xs uppercase tracking-[0.2em] transition-colors ${
                  panel === key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {key === "why" ? t.whyUs : key === "hours" ? t.openingHours : t.reviews}
              </button>
            ))}
          </div>

          {panel === "hours" && (
            <ul className="mt-4 space-y-1 animate-rise">
              {hours.map((h, i) => (
                <li
                  key={h.day}
                  className={`flex items-center justify-between rounded-sm px-2 py-1 transition-colors ${
                    i === now.day ? "bg-primary/10 text-primary" : "hover:bg-secondary/60"
                  }`}
                >
                  <span>{h.day}</span>
                  <span className="tabular-nums">
                    {h.open} – {h.close === "00:00" ? "midnight" : h.close}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {panel === "reviews" && (
            <div className="mt-4 animate-rise">
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-sm border border-border bg-background px-4 py-4 text-foreground transition-all hover:-translate-y-1 hover:border-primary"
              >
                <span className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-white shadow-md">
                    <span className="font-sans text-xl font-black text-background">
                      G
                    </span>
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      {t.liveGoogleReviews}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">4.9★ · 570+ reviews</span>
                  </span>
                </span>
                <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          )}

          {panel === "why" && (
            <ul className="mt-4 space-y-2 animate-rise">
              {[
                "Walk-ins welcome until late",
                "Hot towel + straight razor finish",
                "Thai herbal head spa ritual",
                "English & Thai speaking barbers",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 rounded-sm px-2 py-1 hover:bg-secondary/60"
                >
                  <Scissors className="mt-0.5 size-3.5 shrink-0 text-accent" />
                  {line}
                </li>
              ))}
            </ul>
          )}

        </div>

      </div>

      <p className="relative border-t border-border px-7 py-5 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        © {new Date().getFullYear()} Bangkok Kropper Co., Ltd. · 4.9★ · 570+ reviews
      </p>
    </footer>
  );
}
