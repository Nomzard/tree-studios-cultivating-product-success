import FadeIn from "@/components/FadeIn";
import SEO, { organizationSchema } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlobShape = ({
  className = "",
  color = "bg-sand/10",
}: {
  className?: string;
  color?: string;
}) => (
  <div
    className={`absolute rounded-[40%_60%_70%_30%/40%_50%_60%_50%] ${color} blur-3xl pointer-events-none ${className}`}
  />
);

const PricingPage = () => {
  return (
    <div className="overflow-hidden bg-secondary">
      <SEO
        title="Pricing – Simple, Honest Pricing"
        description="No hidden fees, no long lock-in periods. Explore Tree Studios pricing plans for product teams of any size. Start free and grow at your own pace."
        path="/pricing"
        jsonLd={organizationSchema}
      />
      <section className="relative">
        <BlobShape className="top-10 left-10 w-72 h-72" color="bg-sand/10" />
        <BlobShape className="bottom-20 right-10 w-80 h-80" color="bg-leaf/15" />
        <div className="container mx-auto px-6 py-10 md:py-14">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-medium text-moss tracking-wide uppercase mb-4">
                Pricing
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
                Simple, honest pricing
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No hidden fees. No long lock-in periods. Start where you are and
                grow at your own pace.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative">
        <div className="container mx-auto px-6 py-10 md:py-14">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
                Not sure? Just ask.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Start for free and explore the product at your own pace. No
                credit card required.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-terracotta text-white px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95"
              >
                Sign Up Free
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
