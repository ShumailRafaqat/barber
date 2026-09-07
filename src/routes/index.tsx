import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Flame, Instagram, MapPin, Phone, Play, Quote, Scissors, Star, X } from "lucide-react";
import { ADDRESS, ADDRESS_TWO, MAPS_EMBED, MAPS_EMBED_TWO, MAPS_LINK, MAPS_LINK_TWO, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { ServicesExplorer } from "@/components/services-explorer";
import { SpecialOffers } from "@/components/special-offers";
import { useI18n } from "@/lib/i18n";
import heroShop from "@/assets/hero-shop.jpg";
import barberWork from "@/assets/barber-work.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bangkok Kropper | Best Barber Shop in Bangkok" },
      {
        name: "description",
        content:
          "Bangkok Kropper is a professional barbershop in Sukhumvit, Bangkok, offering precision haircuts, modern fades, styling, beard trims, and premium grooming for both men and women.",
      },
      { property: "og:title", content: "Bangkok Kropper | Best Barber Shop in Bangkok" },
      {
        property: "og:description",
        content: "Signature fades, royal razor shaves and herbal head spa. 4.9★, 570+ reviews.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const googleReviewLink =
  "https://www.google.com/search?q=best+barber+shop+in+bangkok&oq=best+&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIQCAEQLhjHARixAxjRAxiABDIGCAIQRRg5MgYIAxAjGCcyCggEEAAYsQMYgAQyCggFEAAYsQMYgAQyCggGEAAYsQMYgAQyCggHEAAYsQMYgAQyEAgIEAAYgwEYsQMYgAQYigUyBwgJEAAYgATSAQgxODMxajBqN6gCCLACAfEFJQ3-WJUzjUg&sourceid=chrome&source=chrome.ob&ie=UTF-8#sv=CAESzAEKuAEStQEKd0FKaVQ0dEpqSTZGd3QzUElEcml2dXF0UU92OUNvZ0RySG5KbzY5TGhxT0tTVVRITF92amtyNHhBN20yQnRRSHd2eDE5ZnlVYVREemQwdkFxcHlYeDJIOG5pYl9DTHpBSWgzc193RGZwUDNST3NoV0E3eTVjQ053EhZBbm1kYXJtaU9yeW1rZFVQeTZ5ekFRGiJBRHNyOWZSc3dpNkRfbm5ScWZlWGhPQmhaYlJhbEdib0NBEgQ4MDUxGgEzKgAwADgBQAAYACDb5emeAkoCEAI";

const reviews = [
  ["I had a great experience at this barber shop in Bangkok. I’m a tourist visiting the city, and they gave me an excellent haircut. The staff was very professional, friendly, and understood exactly what I wanted. The service was clean, quick, and well-organized. I’m really happy with the result and would highly recommend this place to anyone visiting Bangkok.", "Sagar Sonar", "Google review"],
  ["Lucky to have found this nice shop. They are all professionals who can give you sound advice and do their job nicely. Furthermore, they are good in English and one of them can even understand and speak Mandarin. Whatever you would like to have done, beard or hair, just go to them.", "Victor Gomes", "Google review"],
  ["One of the best experiences I’ve had in a barbershop. Maa pays so much attention to detail, the fade was immaculate, and he was very gentle. He also razor shaved the edges and wiped me with a warm towel afterwards. Highly recommend.", "Ryan Muir", "Google review"],
  ["I cut my hair and beard here, and the result was really good. The barber was professional, careful, and paid attention to the details. The place was clean, the service was smooth, and I left very happy with the haircut and beard trim. Highly recommended! Special thanks to Fong.", "Ahmed Alhefeiti", "Google review"],
  ["Exceptional! Decided to wash and dry my hair as my partner was cutting his and I had a lovely time. My hair turned out perfect. Such a good late night pick me up.", "Judith Louis", "Google review"],
] as const;

const team = [
  {
    name: "Kropper",
    role: "Founder · Master Barber",
    years: "10+ years",
    bio: "Precision cuts, classic grooming and the signature Bangkok Kropper experience.",
    specialties: ["Haircut", "Beard", "Shave", "Styling"],
    image: barberWork,
  },
  {
    name: "Mali",
    role: "Color Specialist",
    years: "8+ years",
    bio: "Personal color, restorative treatments and soft movement for every texture.",
    specialties: ["Color", "Highlights", "Hair Spa", "Keratin"],
    image: heroShop,
  },
  {
    name: "Niran",
    role: "Grooming Specialist",
    years: "7+ years",
    bio: "Straight-razor ritual, beard architecture and the calmest hot towel in Sukhumvit.",
    specialties: ["Beard", "Razor", "Hot Towel", "Grooming"],
    image: barberWork,
  },
] as const;

const galleryItems = [
  ["01", "Signature fade", barberWork], ["02", "Hot towel ritual", heroShop], ["03", "Beard sculpt", barberWork], ["04", "Shop details", heroShop],
  ["05", "Classic cut", barberWork], ["06", "Head spa", heroShop], ["07", "Sharp finish", barberWork], ["08", "The chair", heroShop],
  ["09", "Razor work", barberWork], ["10", "Color session", heroShop], ["11", "Fresh shape", barberWork], ["12", "Khlong Toei", heroShop],
  ["13", "Clean lines", barberWork], ["14", "After the cut", heroShop], ["15", "Detail work", barberWork], ["16", "Bangkok texture", heroShop],
  ["17", "New look", barberWork], ["18", "The finish", heroShop], ["19", "In the room", barberWork], ["20", "Ready chair", heroShop],
] as const;

const faqs = [
  ["Where is Bangkok Kropper Barber Shop located?", "Bangkok Kropper Barber Shop is located at 33 Sukhumvit Rd, Khlong Toei, Bangkok 10110, Thailand. The shop is conveniently located in the Sukhumvit area of Bangkok."],
  ["Is there a barber shop near Sukhumvit in Bangkok?", "Yes. Bangkok Kropper Barber Shop provides professional men's grooming and hair services on Sukhumvit Road, Khlong Toei, Bangkok."],
  ["What services does Bangkok Kropper Barber Shop offer?", "We offer a wide range of grooming and hair services, including men's haircuts, beard trimming, shaving, shampoo, hair coloring, hair treatments, facial massage, waxing, women's hair services, and kids' haircuts."],
  ["Does Bangkok Kropper Barber Shop offer men's haircuts?", "Yes. We provide men's haircuts, haircut and shampoo, beard trimming, shaving, hair styling, hair coloring, hair treatments, and grooming services."],
  ["Do you offer beard trimming and shaving in Bangkok?", "Yes. Our men's grooming services include beard trimming, beard grooming, and shaving."],
  ["Does Bangkok Kropper Barber Shop offer women's hair services?", "Yes. We also provide women's haircuts, shampoo and blow-dry, hair spa, hair coloring, highlights, keratin treatments, Brazilian keratin, perms, and permanent hair straightening."],
  ["Do you offer hair coloring in Bangkok?", "Yes. We offer hair coloring for men and women, including regular hair colors, fashion colors, and highlights. The final price may vary depending on hair length and the service required."],
  ["Does Bangkok Kropper Barber Shop offer kids' haircuts?", "Yes. Kids' haircuts are available along with our men's and women's hair services."],
  ["Can I book a haircut at Bangkok Kropper Barber Shop through WhatsApp?", "Yes. You can contact us on WhatsApp at +66 92 905 0509 to ask about appointments, services, availability, and pricing."],
  ["How can I find Bangkok Kropper Barber Shop?", "You can find Bangkok Kropper Barber Shop at 33 Sukhumvit Rd, Khlong Toei, Bangkok 10110, Thailand. The location can also be found using the Plus Code PHQ3+C9 Bangkok, Thailand."],
] as const;

function Home() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeReview, setActiveReview] = useState(0);
  const [activeTeam, setActiveTeam] = useState(0);
  const [activeGallery, setActiveGallery] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [showDealsWelcome, setShowDealsWelcome] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    setShowDealsWelcome(true);
  }, []);

  useEffect(() => {
    if (!showDealsWelcome || !("speechSynthesis" in window)) return;
    const timer = window.setTimeout(() => speakWelcome(), 250);
    return () => window.clearTimeout(timer);
  }, [showDealsWelcome]);

  const speakWelcome = () => {
    if (!("speechSynthesis" in window)) return;
    const greeting = new SpeechSynthesisUtterance(
      "Welcome to Bangkok Kropper. Explore our special deals and save more when you combine services.",
    );
    greeting.lang = "en-US";
    greeting.rate = 0.92;
    greeting.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(greeting);
  };

  const closeDealsWelcome = () => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setShowDealsWelcome(false);
  };

  const exploreDeals = () => {
    closeDealsWelcome();
    document.getElementById("offers")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const el = heroRef.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      setTilt({
        x: (e.clientX - r.left) / r.width - 0.5,
        y: (e.clientY - r.top) / r.height - 0.5,
      });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveGallery((current) => (current + 1) % galleryItems.length);
    }, 3800);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveVideo((current) => (current + 1) % 3);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTeam((current) => (current + 1) % team.length);
    }, 10000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />

      {showDealsWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 px-4 backdrop-blur-[2px]">
          <div role="dialog" aria-labelledby="deals-welcome-title" className="relative w-full max-w-sm animate-rise overflow-hidden border border-primary/50 bg-background text-foreground shadow-2xl shadow-black/20">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" />
            <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full border-[18px] border-primary/20" />
            <div className="relative p-4 pl-5 sm:p-5 sm:pl-6">
            <button
              type="button"
              onClick={closeDealsWelcome}
              aria-label="Close deals message"
              className="absolute right-3 top-3 grid size-8 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <X className="size-4" />
            </button>
            <div className="flex items-start justify-between gap-5 pr-8">
              <div>
                <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.28em] text-primary">
                  <Flame className="size-4" /> First visit? Start here.
                </p>
                <h2 id="deals-welcome-title" className="mt-3 font-display text-xl uppercase leading-[0.92] text-foreground sm:text-2xl">
                  Welcome to<br /><span className="text-primary">Bangkok Kropper</span>
                </h2>
              </div>
              <span className="mt-1 grid size-14 shrink-0 rotate-[-8deg] place-items-center rounded-full border border-primary/70 text-center text-[0.5rem] font-bold uppercase leading-tight tracking-[0.1em] text-primary">
                Member<br />price
              </span>
            </div>
            <div className="my-4 flex items-center gap-3 border-y border-dashed border-border py-2.5">
              <span className="font-display text-lg text-primary">SAVE MORE</span>
              <span className="text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">when you combine services</span>
            </div>
            <p className="max-w-sm text-xs leading-5 text-muted-foreground">
              Curated barber rituals, better value. See the combinations our guests book most.
            </p>
            <button
              type="button"
              onClick={exploreDeals}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-accent"
            >
              Explore the deals <ArrowRight className="size-3.5" />
            </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section ref={heroRef} className="relative isolate overflow-hidden border-b border-border bg-background">
        <img
          src={heroShop}
          alt="Neon-lit interior of Bangkok Kropper Barber Shop with leather barber chairs"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover opacity-35 grayscale-[18%] transition-transform duration-700 ease-out"
          style={{ transform: `scale(1.08) translate(${tilt.x * -18}px, ${tilt.y * -18}px)` }}
        />
        <div
          className="pointer-events-none absolute inset-0 transition-[background] duration-300"
          style={{
            background: `radial-gradient(circle at ${50 + tilt.x * 34}% ${42 + tilt.y * 28}%, color-mix(in oklab, var(--color-accent) 13%, transparent), transparent 26%), linear-gradient(to bottom, color-mix(in oklab, var(--color-background) 82%, transparent), color-mix(in oklab, var(--color-background) 72%, transparent) 52%, var(--color-background) 100%)`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.12)_50%,transparent_80%)] opacity-40" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <Scissors className="hero-float absolute left-[8%] top-[28%] size-8 rotate-[-24deg] text-primary/20 md:size-11" />
          <Scissors className="hero-float absolute right-[10%] top-[22%] size-6 rotate-[58deg] text-accent/20 md:size-9" style={{ animationDelay: "-3s" }} />
          <span className="hero-float absolute bottom-[25%] right-[19%] h-px w-16 rotate-[-28deg] bg-primary/15 md:w-24" style={{ animationDelay: "-1.5s" }} />
        </div>
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pt-28 pb-16">
          <span className="animate-rise inline-flex w-fit items-center gap-2 rounded-sm border border-primary/50 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-primary">
            <Star className="size-3 fill-primary" /> 4.9★ · 570+ Google reviews
          </span>
          <h1
            className="animate-rise mt-6 origin-left font-display text-3xl uppercase leading-[0.98] tracking-wide text-foreground transition-transform duration-500 ease-out sm:text-5xl lg:text-[4.5rem]"
            style={{ animationDelay: "80ms", transform: `translate(${tilt.x * 12}px, ${tilt.y * 8}px)` }}
          >
            Bangkok
            <br />
            <span className="text-primary neon-text">Kropper</span>{" "}
            <span className="text-accent">Barber Shop</span>
          </h1>
          <p
            className="animate-rise mt-6 max-w-xl text-lg text-muted-foreground"
            style={{ animationDelay: "160ms" }}
          >
            Bangkok Kropper is a professional barbershop in Sukhumvit, Bangkok, offering
            precision haircuts, modern fades, styling, beard trims, and premium grooming for both
            men and women.
          </p>
          <div
            className="animate-rise mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="/book"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-sm bg-primary px-7 py-4 font-bold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_-12px_var(--color-primary)] neon-ring"
            >
              <span className="absolute inset-y-0 left-0 w-1/3 -translate-x-full skew-x-[-18deg] bg-white/25 transition-transform duration-500 group-hover:translate-x-[360%]" />
              <Phone className="relative size-4" /> <span className="relative">{t.bookCta}</span>
            </a>
          </div>
        </div>
      </section>

      <SpecialOffers />

      {/* Services preview */}
      <section id="services" className="border-b border-border bg-card/20 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">{t.services}</p><h2 className="mt-3 font-display text-2xl uppercase tracking-wide text-foreground md:text-4xl">{t.menuCta}</h2></div>
            <a href="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-foreground">{t.menuCta} <ArrowRight className="size-4" /></a>
          </div>
          <div className="mt-10">
            <ServicesExplorer />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="border-b border-border bg-background px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">The visual archive</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl uppercase leading-none tracking-wide text-foreground md:text-6xl">20 frames from <span className="text-primary neon-text">the chair</span></h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">A living lookbook of sharp work, warm light and the details that make Bangkok Kropper feel different.</p>
          </div>
          <div className="mt-10 grid auto-rows-[8rem] grid-cols-2 gap-2 sm:auto-rows-[10rem] sm:grid-cols-4 lg:auto-rows-[11rem] lg:grid-cols-6">
            {galleryItems.map(([number, label, image], index) => <a key={number} href="/services" aria-label={`Open ${label} service gallery item`} className={`group relative overflow-hidden border bg-card transition-all duration-1000 ease-out ${index === activeGallery ? "col-span-2 row-span-3 border-primary shadow-[0_0_30px_-12px_var(--color-primary)] sm:col-span-2 lg:col-span-3 lg:row-span-4" : "border-border"}`}>
              <img src={image} alt={`${label} at Bangkok Kropper Barber Shop`} className={`size-full object-cover transition duration-1000 ease-out group-hover:scale-110 group-hover:grayscale-0 ${index === activeGallery ? "scale-105 grayscale-0" : "grayscale-[45%]"}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-1 items-end justify-between gap-2 p-4 transition-transform duration-500 group-hover:translate-y-0">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">{number} / {label}</span>
                <ArrowRight className="size-4 shrink-0 text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              {index === activeGallery && <span className="absolute left-4 top-4 border border-primary/60 bg-background/70 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-primary backdrop-blur-sm">Now in focus</span>}
            </a>)}
          </div>
        </div>
      </section>

      {/* Video / motion */}
      <section id="media" className="border-b border-border bg-background px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.35em] text-accent">
                <Play className="size-3.5 fill-current" /> Video / chair in motion
              </p>
              <h2 className="mt-3 font-display text-2xl uppercase tracking-wide text-foreground md:text-4xl">
                Watch the <span className="text-primary neon-text">Kropper rhythm</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">Professional haircuts, modern fades, beard trims and Thai herbal head spa in Sukhumvit, Bangkok.</p>
          </div>
          <div className="mt-8 grid gap-3 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
            {["Signature fade", "Hot towel ritual", "Head spa reset"].map((title, index) => <div key={title} className={`group relative flex min-h-[16rem] flex-col justify-between overflow-hidden border border-dashed transition-all duration-1000 ease-out ${index === activeVideo ? "border-primary bg-primary/10 shadow-[0_0_35px_-14px_var(--color-primary)] lg:min-h-[25rem]" : "border-border bg-card/40"}`}>
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(135deg,color-mix(in_oklab,var(--color-primary)_12%,transparent)_1px,transparent_1px)] [background-size:22px_22px]" />
              <div className="relative flex items-start justify-between p-5"><span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">0{index + 1} / Video slot</span><span className="border border-primary/40 px-2 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">{index === activeVideo ? "In focus" : "Coming soon"}</span></div>
              <div className="relative flex flex-col items-center justify-center px-5 py-8 text-center"><span className={`grid size-16 place-items-center rounded-full border border-primary/60 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground ${index === activeVideo ? "animate-pulse bg-primary text-primary-foreground" : ""}`}><Play className="ml-1 size-6 fill-current" /></span><h3 className="mt-6 font-display text-2xl uppercase text-foreground">{title}</h3><p className="mt-2 max-w-xs text-sm text-muted-foreground">Your video will appear here.</p></div>
              <div className="relative flex items-center justify-between border-t border-border px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground"><span>MP4 / reel</span><ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" /></div>
            </div>)}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="border-b border-border bg-card/20 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.35em] text-accent"><MapPin className="size-4" /> Locations</p>
              <h2 className="mt-3 font-display text-3xl uppercase tracking-wide text-foreground md:text-5xl">Find your <span className="text-primary neon-text">chair</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Visit Bangkok Kropper at either of our Bangkok locations.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {[
              { number: "01", name: "Khlong Toei · Sukhumvit", address: ADDRESS, embed: MAPS_EMBED, link: MAPS_LINK },
              { number: "02", name: "Phaya Thai · Phahon Yothin", address: ADDRESS_TWO, embed: MAPS_EMBED_TWO, link: MAPS_LINK_TWO },
            ].map((location) => <article key={location.number} className="overflow-hidden border border-border bg-background">
              <iframe title={`Map for ${location.name}`} src={location.embed} loading="lazy" className="h-56 w-full border-0 grayscale-[35%] transition-[filter] hover:grayscale-0" />
              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between">
                <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">{location.number} / Location</p><h3 className="mt-2 font-display text-2xl uppercase text-foreground">{location.name}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{location.address}</p></div>
                <a href={location.link} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 border border-primary/50 px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary hover:bg-primary hover:text-primary-foreground">Open map <ArrowRight className="size-4" /></a>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="relative overflow-hidden border-y border-border bg-secondary/35 px-5 py-20 text-foreground">
        <div className="pointer-events-none absolute -right-24 top-16 size-72 rounded-full border border-primary/25" />
        <div className="pointer-events-none absolute -left-28 bottom-10 size-80 rounded-full border border-primary/15" />
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">The people behind the chair</p>
              <h2 className="mt-3 font-display text-3xl uppercase tracking-wide text-foreground md:text-5xl">Meet the hands behind <span className="text-primary">the craft</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Different hands. One standard. A better cut than you walked in for.</p>
          </div>

          <div className="relative mt-10 grid gap-4 lg:grid-cols-[1.22fr_0.78fr] lg:items-stretch">
            <div key={activeTeam} className="group relative min-h-[28rem] animate-rise overflow-hidden rounded-[1.75rem] border border-primary/25 bg-background shadow-[0_24px_60px_-35px_color-mix(in_oklab,var(--color-primary)_45%,transparent)] lg:min-h-[36rem]">
              <img src={team[activeTeam]?.image} alt={`${team[activeTeam]?.name} profile at Bangkok Kropper Barber Shop`} width={1200} height={900} className="absolute inset-0 block h-full w-full object-cover grayscale-[18%] transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <span className="absolute left-6 top-6 font-display text-7xl leading-none text-white/85 sm:text-8xl">0{activeTeam + 1}</span>
              <span className="absolute right-6 top-7 rotate-90 text-[0.58rem] font-bold uppercase tracking-[0.35em] text-white/70">Bangkok / The chair</span>
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-5">
                <div>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.3em] text-primary">Bangkok Kropper</p>
                  <p className="mt-2 font-display text-4xl uppercase leading-none text-white sm:text-6xl">{team[activeTeam]?.name}</p>
                </div>
                <span className="hidden rounded-full border border-white/30 bg-black/20 px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm sm:block">Selected barber</span>
              </div>
            </div>

            <div key={`${activeTeam}-info`} className="flex animate-rise flex-col justify-center rounded-[1.75rem] border border-border bg-background p-6 shadow-[0_20px_50px_-35px_color-mix(in_oklab,var(--color-primary)_35%,transparent)] md:p-9">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-primary">{team[activeTeam]?.role}</p>
                <span className="font-display text-4xl text-primary">0{activeTeam + 1}</span>
              </div>
              <p className="mt-7 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-muted-foreground">Master barber</p>
              <h3 className="mt-2 font-display text-4xl uppercase leading-none text-foreground md:text-5xl">{team[activeTeam]?.name}</h3>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">{team[activeTeam]?.role}</p>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">{team[activeTeam]?.bio}</p>

              <div className="mt-7">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.28em] text-primary">Specialities</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {team[activeTeam]?.specialties.map((specialty) => <span key={specialty} className="rounded-full border border-border px-3 py-1.5 text-[0.62rem] font-semibold text-muted-foreground">{specialty}</span>)}
                </div>
              </div>

              <div className="mt-7 flex items-end justify-between border-t border-border pt-5">
                <div><p className="text-[0.6rem] font-bold uppercase tracking-[0.28em] text-primary">Experience</p><p className="mt-1 font-display text-2xl uppercase text-foreground">{team[activeTeam]?.years}</p></div>
              </div>
            </div>

            <div className="grid gap-2 border-t border-border/80 pt-4 sm:grid-cols-3 lg:col-span-2">
              {team.map((member, index) => (
                <button key={member.name} type="button" onClick={() => setActiveTeam(index)} className={`group relative flex items-center gap-3 border-b-2 p-3 text-left transition-all duration-300 ${activeTeam === index ? "border-primary bg-background/75" : "border-transparent hover:border-primary/50"}`} aria-label={`View ${member.name}'s profile`}>
                  <span className="font-display text-lg text-primary">0{index + 1}</span>
                  <img src={member.image} alt="" width={80} height={80} className={`size-12 rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 ${activeTeam === index ? "grayscale-0" : ""}`} />
                  <span><span className="block font-display text-base uppercase text-foreground">{member.name}</span><span className="block text-[0.58rem] uppercase tracking-[0.1em] text-muted-foreground">{member.role}</span></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google reviews */}
      <section id="reviews" className="relative overflow-hidden border-y border-border bg-card/30 px-5 py-10 md:py-12">
        <div className="pointer-events-none absolute -left-16 top-8 size-72 rounded-full border border-primary/10" />
        <div className="pointer-events-none absolute -right-16 bottom-8 size-80 rounded-full border border-accent/10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-accent">
                <span className="relative grid size-3 place-items-center rounded-full border border-primary"><span className="size-1.5 rounded-full bg-primary" /></span>
                {t.reviews}
              </p>
              <h2 className="mt-4 font-display text-2xl uppercase leading-[0.98] tracking-wide text-foreground md:text-4xl">
                Loved by our customers
              </h2>
            </div>
            <a href={googleReviewLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-background/70 px-3 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              <span className="grid size-5 place-items-center rounded-full bg-foreground text-[0.65rem] font-black text-background">G</span>
              {t.liveGoogleReviews} <ExternalLink className="size-3.5" />
            </a>
          </div>

          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg border border-border bg-background p-5 shadow-[0_20px_50px_-35px_rgba(0,0,0,0.45)] md:p-7">
            <div key={activeReview} className="grid animate-rise gap-6 md:grid-cols-[180px_1fr] md:gap-8">
              <div className="flex flex-row items-center justify-between gap-4 border-b border-border pb-5 md:flex-col md:items-start md:border-b-0 md:border-r md:pb-0 md:pr-8">
                <div>
                  <span className="grid size-10 place-items-center rounded-full bg-foreground text-lg font-black shadow-sm ring-1 ring-border">
                    <span className="text-background">G</span>
                  </span>
                  <p className="mt-3 text-sm font-bold text-foreground">Google reviews</p>
                  <p className="mt-1 text-xs text-muted-foreground">570+ experiences</p>
                </div>
                <div>
                  <span className="font-display text-2xl text-foreground">4.9</span>
                  <div className="mt-1 flex gap-0.5 text-primary" aria-label="4.9 out of 5 stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="size-3.5 fill-primary" />)}</div>
                </div>
              </div>

              <div className="min-w-0">
                <div className="flex items-center justify-between gap-4">
                  <Quote className="size-5 text-primary" />
                  <span className="tabular-nums text-xs font-bold text-muted-foreground">{String(activeReview + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span>
                </div>
                <p className="mt-4 max-w-2xl text-base leading-7 text-foreground md:text-lg">
                  “{reviews[activeReview]?.[0]}”
                </p>
                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-primary">{reviews[activeReview]?.[1]}</p>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Google reviewer · {reviews[activeReview]?.[2]}</p>
                  </div>
                  <span className="hidden text-xs text-muted-foreground sm:inline">Verified on Google</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
              <div className="flex gap-2">
                {reviews.map(([_, author], index) => (
                  <button
                    key={author}
                    type="button"
                    aria-label={`Show review from ${author}`}
                    onClick={() => setActiveReview(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeReview ? "w-10 bg-primary" : "w-4 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <a
                href={googleReviewLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-md border border-border bg-foreground px-4 py-2.5 text-xs font-bold tracking-wide text-background shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5 hover:bg-muted hover:shadow-[0_5px_14px_rgba(0,0,0,0.22)]"
                aria-label="Open Google profile and leave a review"
              >
                <span className="grid size-6 place-items-center rounded-full bg-background text-sm font-black shadow-sm ring-1 ring-border">
                  <span className="text-foreground">G</span>
                </span>
                <span>View Google profile</span>
                <ExternalLink className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO FAQ */}
      <section className="border-y border-border bg-secondary/35 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-primary">
                <span className="h-px w-10 bg-primary" />
                {t.faqTitle}
              </div>
              <h2 className="mt-4 max-w-sm font-display text-3xl uppercase leading-[0.94] tracking-wide text-foreground md:text-5xl">
                {t.faqTitle}
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
                {t.faqIntro}
              </p>
              <a href="/book" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-md">
                {t.bookCta} <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="space-y-2 rounded-2xl border border-border/80 bg-background/45 p-2 shadow-[0_18px_45px_-30px_color-mix(in_oklab,var(--color-primary)_35%,transparent)]">
              {faqs.map(([question, answer], index) => (
                <details key={question} className="group rounded-xl border border-transparent bg-background/55 transition-colors open:border-primary/35 open:bg-card">
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-4 py-4 text-left transition-colors marker:hidden hover:text-primary sm:px-5">
                    <span className="font-display text-sm text-primary">0{index + 1}</span>
                    <span className="flex-1 font-semibold leading-6 text-foreground">{question}</span>
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-lg leading-none text-muted-foreground transition-all group-open:rotate-45 group-open:border-primary group-open:text-primary">+</span>
                  </summary>
                  <p className="animate-rise border-t border-border/70 px-12 pb-5 pt-4 text-sm leading-7 text-muted-foreground">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(([question, answer]) => ({
                "@type": "Question",
                name: question,
                acceptedAnswer: { "@type": "Answer", text: answer },
              })),
            }),
          }}
        />
      </section>

      {/* Social CTA */}
      <section className="border-y border-border bg-card/40 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <a
            href="https://www.instagram.com/bangkokkropper"
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden rounded-sm border border-border bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:border-foreground hover:shadow-[0_18px_60px_-20px_rgba(0,0,0,0.55)] md:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full border border-foreground/15 transition-transform duration-700 group-hover:rotate-45 group-hover:scale-125" />
            <div className="pointer-events-none absolute -bottom-24 right-24 size-56 rounded-full border border-foreground/10 transition-transform duration-700 group-hover:-rotate-45 group-hover:scale-110" />
            <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.35em] text-muted-foreground">
                  <span className="size-2 animate-pulse rounded-full bg-foreground" /> Live from the chair
                </p>
                <h2 className="mt-3 font-display text-xl uppercase tracking-wide text-foreground md:text-3xl">
                  Follow us on <span className="text-foreground">Instagram</span>
                </h2>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  New cuts, barber stories and the next sharp look land there first. Tap in and
                  stay close to the chair.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-foreground">
                  @bangkokkropper{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
                </span>
              </div>
              <span className="relative grid size-24 shrink-0 place-items-center rounded-full bg-foreground p-1 shadow-[0_0_35px_rgba(255,255,255,0.16)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <span className="grid size-full place-items-center rounded-full bg-background/90">
                  <Instagram className="size-10 text-foreground" />
                </span>
                <span className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full bg-foreground text-background transition-transform duration-500 group-hover:rotate-90">
                  <ArrowRight className="size-3.5 -rotate-45" />
                </span>
              </span>
            </div>
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
