import ContactForm from "@/components/ContactForm";
import { BASE_LOCATION } from "@/components/LocationLine";
import { routes } from "@/lib/links";

// Where training happens: home base in South Florida, camps year-round,
// and Franck travels to groups anywhere in the U.S. Workshops outside Miami
// run in select cities once a large enough group is in place, so they are
// an inquiry, not a published schedule. Keep in step with knowledge.ts.

const camps = [
  { name: "2-Day Weekend Camp", href: `${routes.training}#rates` },
  { name: "7-Day Camp", href: `${routes.training}#rates` },
  { name: "1-Month EP Immersion", href: routes.epImmersion },
];

const requestOptions = [
  "Bring a workshop to my city",
  "Group training - travel to us",
  "2-Day Weekend Camp",
  "7-Day Camp",
  "1-Month EP Immersion",
  "Train in South Florida",
];

type Props = {
  /** Pre-selects the request dropdown, e.g. on the workshops page. */
  defaultRequest?: string;
};

export default function WhereWeTrain({ defaultRequest = "" }: Props) {
  return (
    <section
      id="where-we-train"
      className="bg-bg-secondary py-16 sm:py-20 lg:py-28 relative noise-bg scroll-mt-[112px]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
          <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            Where We Train
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-5 leading-[1.05]">
            Based in South Florida.{" "}
            <span className="text-accent-blue-light">We Come to You.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
            Our home base is {BASE_LOCATION}. Train with us here, or bring
            Franck to your group anywhere in the U.S.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12 sm:mb-16 stagger-children">
          <div className="animate-on-scroll flex flex-col rounded-xl border border-accent-blue/20 bg-bg-steel-card/60 p-6 sm:p-7">
            <p className="text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body mb-3">
              Home Base
            </p>
            <h3 className="font-heading text-xl lg:text-2xl font-bold uppercase text-white mb-3 leading-tight">
              Train in South Florida
            </h3>
            <p className="text-text-secondary text-sm lg:text-base leading-relaxed font-body">
              Private sessions, group training, and camps run out of{" "}
              {BASE_LOCATION}, all year long.
            </p>
          </div>

          <div className="animate-on-scroll flex flex-col rounded-xl border border-accent-blue/20 bg-bg-steel-card/60 p-6 sm:p-7">
            <p className="text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body mb-3">
              Open All Year
            </p>
            <h3 className="font-heading text-xl lg:text-2xl font-bold uppercase text-white mb-3 leading-tight">
              Camps Year-Round
            </h3>
            <ul className="space-y-2">
              {camps.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    className="group inline-flex items-center gap-2 text-white text-sm lg:text-base font-body hover:text-accent-blue-light transition-colors"
                  >
                    <span className="text-accent-blue-light">◆</span>
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-text-muted text-xs uppercase tracking-[1.5px] font-body mt-4">
              Subject to availability
            </p>
          </div>

          <div className="animate-on-scroll flex flex-col rounded-xl border border-accent-blue/40 bg-accent-blue/10 p-6 sm:p-7">
            <p className="text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body mb-3">
              Anywhere in the U.S.
            </p>
            <h3 className="font-heading text-xl lg:text-2xl font-bold uppercase text-white mb-3 leading-tight">
              We Travel to Your Group
            </h3>
            <p className="text-text-secondary text-sm lg:text-base leading-relaxed font-body">
              Have a group? We travel to you, anywhere in the U.S. We also run
              workshops in select cities when we can put a group together.
              Send a request below.
            </p>
          </div>
        </div>

        <div className="animate-on-scroll max-w-3xl mx-auto rounded-2xl border border-accent-blue/20 bg-bg-steel-card/40 p-6 sm:p-8 lg:p-10">
          <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white mb-2">
            Request Training Near You
          </h3>
          <p className="text-text-secondary text-sm lg:text-base font-body mb-6">
            Tell us your city, your group size, and the dates you have in
            mind. We will tell you what we can set up.
          </p>
          <ContactForm
            subject="Training location request"
            serviceOptions={requestOptions}
            serviceLabel="What are you looking for?"
            servicePlaceholder="Select one"
            defaultService={defaultRequest}
            messagePlaceholder="City and state, how many people, and preferred dates."
            submitLabel="Send Request"
            successTitle="Request Sent"
            successMessage="Thanks - Franck's team will review your request and get back to you."
          />
        </div>
      </div>
    </section>
  );
}
