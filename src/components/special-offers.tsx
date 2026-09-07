import { useState } from "react";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import { specialOffers, type OfferAudience } from "@/data/offers";

export function SpecialOffers() {
  const [audience, setAudience] = useState<OfferAudience>("men");
  const visibleOffers = specialOffers.filter((offer) => offer.audience === audience);

  return (
    <section id="offers" className="border-y border-border bg-secondary/45 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.35em] text-primary">
              <Flame className="size-4" /> Special deals
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl uppercase leading-[0.92] tracking-wide text-foreground md:text-5xl">
              Combine more services, <span className="text-primary">save more.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
              Curated chair rituals with the details already considered. Pick a deal and arrive ready.
            </p>
          </div>
          <div className="flex rounded-full border border-border bg-background/70 p-1">
            {(["men", "women"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setAudience(item)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all ${audience === item ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item === "men" ? "Men's deals" : "Women's deals"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {visibleOffers.map((offer, index) => (
            <article key={offer.id} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background/80 p-5 shadow-[0_20px_50px_-35px_color-mix(in_oklab,var(--color-primary)_45%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/70">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.3em] text-primary">Deal 0{index + 1}</p>
                  <h3 className="mt-2 font-display text-2xl uppercase text-foreground">{offer.name}</h3>
                </div>
                <span className="rounded-full border border-primary/45 bg-primary/10 px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.15em] text-primary">Save {offer.savings} THB</span>
              </div>

              <div className="mt-6 space-y-3 border-y border-border py-4">
                {offer.items.map((item) => (
                  <div key={item.serviceId} className="flex items-start justify-between gap-4 text-sm">
                    <span className="flex items-start gap-2 text-muted-foreground"><Sparkles className="mt-0.5 size-3.5 shrink-0 text-primary" />{item.name}</span>
                    <span className="shrink-0 font-semibold text-foreground">{item.price.toLocaleString()} THB</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground line-through">Normal total: {offer.originalTotal.toLocaleString()} THB</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Discount: -{offer.savings.toLocaleString()} THB</p>
                  <p className="mt-1 font-display text-3xl text-primary">{offer.dealPrice.toLocaleString()} <span className="text-sm text-muted-foreground">THB</span></p>
                </div>
                <span className="text-right text-[0.58rem] font-bold uppercase tracking-[0.16em] text-primary">You save<br />{offer.savings} THB</span>
              </div>

              <a href={`/book?deal=${offer.id}`} className="mt-6 inline-flex items-center justify-between rounded-full bg-primary px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-all hover:bg-accent">
                Book this deal <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
