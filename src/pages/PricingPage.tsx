import FadeIn from "@/components/FadeIn";
import SEO, { organizationSchema } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PricingPage = () => {
  return (
    <div>
      <SEO
        title="Pricing – Simple, Honest Pricing"
        description="No hidden fees, no long lock-in periods. Explore Tree Studios pricing plans for product teams of any size. Start free and grow at your own pace."
        path="/pricing"
        jsonLd={organizationSchema}
      />
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
                to="/demo"
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
