import BuyButton from "@/components/shop/BuyButton";
import { routes } from "@/lib/links";
import {
  formatMoney,
  getProduct,
  isShopifyConfigured,
  type Product,
} from "@/lib/shopify";

// The course is a Shopify product (type "Training") so checkout, payment, and
// order emails run through the same store as the gear. Price and availability
// come from Shopify; FALLBACK_PRICE only shows if the store can't be reached.
const SHOPIFY_HANDLE = "civilian-to-protector-certification-course";
const FALLBACK_PRICE = "$1,950";
const CERTIFICATE = "/images/cert_civilian_to_protector.jpg";

const facts = [
  { value: "15", unit: "Hours", detail: "Hands-on training" },
  { value: "5", unit: "Days", detail: "3 hours a day" },
  { value: "Lvl 1", unit: "Certified", detail: "TACT OPS certificate" },
];

const curriculum = [
  "The difference between the gym and the street",
  "Self-defense: the definition, how it applies, and how to articulate it",
  "Awareness",
  "CFM - Circular Footwork Mechanics",
  "Safe firearm handling",
  "Stances, and why each one matters",
  "Basic reloading",
  "Cover and concealment",
  "Rules of engagement for defensive tactics on the street",
  "Dynamic defensive tactics and shooting",
  "Force on force",
  "Disarming",
  "Basic medic",
  "Extraction to safety and the 911 call",
];

const includes = [
  "15 hours of instruction directly with Franck",
  "Civilian To Protector certificate, issued by TACT OPS",
  "Your first level on the four-level Protector path",
];

async function loadCourse(): Promise<Product | null> {
  if (!isShopifyConfigured()) return null;
  try {
    return await getProduct(SHOPIFY_HANDLE);
  } catch {
    return null;
  }
}

function Facts() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {facts.map((f) => (
        <div
          key={f.unit}
          className="rounded-xl border border-accent-blue/25 bg-black/30 px-3 py-4 sm:p-5 text-center"
        >
          <p className="font-heading text-2xl sm:text-3xl font-bold text-white leading-none">
            {f.value}
          </p>
          <p className="text-accent-blue-light text-[10px] sm:text-[11px] uppercase tracking-[2px] font-bold font-body mt-1.5">
            {f.unit}
          </p>
          <p className="text-text-muted text-[10px] sm:text-xs font-body mt-1 leading-snug">
            {f.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

function Certificate() {
  return (
    <a
      href={CERTIFICATE}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl overflow-hidden border border-accent-gold/40 bg-black/40 shadow-[0_24px_70px_rgba(0,0,0,0.55)] hover:border-accent-gold/80 transition-all duration-300"
    >
      <img
        src={CERTIFICATE}
        alt="Civilian To Protector certificate - Close Combat Defensive Tactics, hosted by TACT OPS, signed by Franck Pala"
        loading="lazy"
        className="w-full h-auto transition-transform duration-[900ms] group-hover:scale-[1.02]"
      />
    </a>
  );
}

function Enroll({ product }: { product: Product | null }) {
  const variant = product?.variants[0];
  const onSale = Boolean(variant?.availableForSale);
  const price = variant
    ? formatMoney(variant.price).replace(/\.00$/, "")
    : FALLBACK_PRICE;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-3">
        <p className="font-heading text-5xl lg:text-6xl font-bold text-white leading-none">
          {price}
        </p>
        <p className="text-text-muted text-xs uppercase tracking-[1.5px] font-body pb-1.5">
          Full course
        </p>
      </div>
      {variant && onSale ? (
        <>
          <BuyButton
            variantId={variant.id}
            available
            label="Enroll Now"
            showQuantity={false}
          />
          <p className="text-text-muted text-xs font-body leading-relaxed">
            Secure checkout by Shopify. After you enroll, our team contacts you
            to schedule your five days.
          </p>
        </>
      ) : (
        <>
          <a
            href={routes.contact}
            className="inline-flex items-center justify-center w-full sm:w-auto self-start px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.02] transition-all duration-300 min-h-[52px]"
          >
            Reserve Your Spot &rarr;
          </a>
          <p className="text-text-muted text-xs font-body leading-relaxed">
            Tell us your availability and we will schedule your five days.
          </p>
        </>
      )}
    </div>
  );
}

export default async function CivilianProtectorCourse({
  compact = false,
}: {
  /** Compact mode drops the full curriculum - used on the training sub-pages. */
  compact?: boolean;
}) {
  const product = await loadCourse();

  return (
    <section
      id="civilian-to-protector"
      className="py-16 sm:py-20 lg:py-28 relative noise-bg scroll-mt-[112px]"
      style={{
        background:
          "linear-gradient(180deg, #0C1118 0%, #101A28 50%, #0C1118 100%)",
      }}
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-accent-gold/[0.07] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {compact ? (
          <div className="animate-on-scroll rounded-2xl border border-accent-gold/30 bg-bg-steel-card/50 p-6 sm:p-9 lg:p-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
            <Certificate />
            <div>
              <p className="text-accent-gold text-xs uppercase tracking-[3px] font-bold mb-3 font-body">
                Level 1 Certification Course
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white leading-[1.0] mb-4">
                Civilian To <span className="text-accent-blue-light">Protector.</span>
              </h2>
              <p className="text-text-secondary text-base leading-relaxed font-body mb-6">
                Fifteen hours over five days, taught directly by Franck. Learn
                what works on the street, prove it under pressure, and leave
                certified.
              </p>
              <div className="mb-7">
                <Facts />
              </div>
              <Enroll product={product} />
              <a
                href="/training#civilian-to-protector"
                className="inline-block mt-6 text-accent-blue-light text-sm uppercase tracking-[2px] font-bold hover:text-white transition-colors font-body"
              >
                See the full course curriculum &rarr;
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
              <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Level 1 Certification Course
              </p>
              <h2 className="font-heading text-5xl lg:text-7xl font-bold uppercase text-white mb-5 leading-[1.0]">
                Civilian To <span className="text-accent-blue-light">Protector.</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
                Fifteen hours over five days, taught directly by Franck. You
                learn what actually works on the street, prove it under
                pressure, and leave with your Level 1 TACT OPS certificate.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-start mb-12 sm:mb-14">
              {/* Certificate + format */}
              <div className="animate-on-scroll space-y-5">
                <Certificate />
                <Facts />
              </div>

              {/* Curriculum */}
              <div className="animate-on-scroll">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white mb-6 leading-tight">
                  What You Will Train
                </h3>
                <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {curriculum.map((c, i) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-md bg-accent-blue/15 border border-accent-blue/40 flex items-center justify-center font-heading text-xs font-bold text-accent-blue-light">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-text-secondary text-sm lg:text-[15px] font-body leading-snug pt-1">
                        {c}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Enroll */}
            <div className="animate-on-scroll rounded-2xl border border-accent-gold/35 bg-bg-steel-card/60 p-6 sm:p-9 lg:p-10 grid md:grid-cols-2 gap-8 lg:gap-12 items-center shadow-[0_0_50px_rgba(201,168,76,0.08)]">
              <div>
                <p className="text-accent-gold text-xs uppercase tracking-[3px] font-bold mb-4 font-body">
                  What&apos;s Included
                </p>
                <ul className="space-y-3">
                  {includes.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="text-accent-gold flex-shrink-0 mt-0.5 text-sm">
                        ✓
                      </span>
                      <span className="text-text-secondary text-sm lg:text-base font-body leading-relaxed">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Enroll product={product} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
