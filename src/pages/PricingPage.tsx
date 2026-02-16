import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const tiers = [
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
