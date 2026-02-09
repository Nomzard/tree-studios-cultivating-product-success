import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const tiers = [
  {
    name: "Grow",
    price: "$49",
    period: "/mo",
    desc: "For product teams getting started with outcome-focused work.",
    features: [
      "Up to 3 product teams",
      "Strategy tree with 2 levels",
      "Basic tracking & follow-up",
      "Email support",
      "Onboarding session",
    ],
    highlighted: false,
  },
  {
    name: "Forest",
    price: "$129",
    period: "/mo",
    desc: "For product organizations that want to make impact truly visible.",
    features: [
      "Unlimited teams",
      "Full strategy tree (all levels)",
      "Advanced data & follow-up",
      "Priority support",
      "Dedicated onboarding",
      "Integrations (Jira, Linear, etc.)",
      "Roles & permissions",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    period: "",
    desc: "For large organizations with specific needs around security and scalability.",
    features: [
      "Everything in Forest",
      "SSO & advanced security",
      "Custom integrations",
      "Dedicated account manager",
      "SLA agreement",
      "On-premise option",
    ],
    highlighted: false,
  },
];

const PricingPage = () => {
  return (
    <div>
      <section className="container mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-moss tracking-wide uppercase mb-4">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Simple, honest pricing
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No hidden fees. No long lock-in periods. Start where you are and
              grow at your own pace.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground ring-2 ring-primary"
                    : "bg-card border border-border"
                }`}
              >
                <h3 className="font-serif text-2xl mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-semibold">{tier.price}</span>
                  {tier.period && (
                    <span
                      className={`text-sm ml-1 ${
                        tier.highlighted
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm mb-6 leading-relaxed ${
                    tier.highlighted
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {tier.desc}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                          tier.highlighted ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-opacity hover:opacity-90 ${
                    tier.highlighted
                      ? "bg-primary-foreground text-primary"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {tier.price === "Contact us" ? "Contact Us" : "Get Started"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ-ish section */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-foreground mb-4">
                Not sure? Just ask.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We don't believe in hard sales pressure. Book a relaxed
                conversation and we'll tell you more and listen to your
                challenges. No strings attached.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
