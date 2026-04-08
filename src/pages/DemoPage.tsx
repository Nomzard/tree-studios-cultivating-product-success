import FadeIn from "@/components/FadeIn";
import SEO, { organizationSchema } from "@/components/SEO";
import { CheckCircle2, MessageCircle, Calendar, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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

const benefits = [
  "See a live strategy tree with your own use case",
  "Understand how Jira/Linear integrations work",
  "Get personalized onboarding guidance",
  "No commitment — just a relaxed conversation",
];

const DemoPage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Demo request received!",
      description: "We'll be in touch within 24 hours.",
    });
  };

  return (
    <div className="overflow-hidden bg-secondary">
      <SEO
        title="Book a Demo – See Tree Studios in Action"
        description="Book a free demo of Tree Studios. See how our strategy tree connects your product roadmap to business goals. No commitment, no pressure."
        path="/demo"
        jsonLd={organizationSchema}
      />

      <section className="relative">
        <BlobShape className="top-10 left-10 w-72 h-72" color="bg-sand/10" />
        <BlobShape className="bottom-20 right-10 w-80 h-80" color="bg-leaf/15" />
        <div className="container mx-auto px-6 py-10 md:py-14">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Left: Value prop */}
              <FadeIn>
                <div>
                  <p className="text-sm font-medium text-moss tracking-wide uppercase mb-4">
                    Book a Demo
                  </p>
                  <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground leading-tight mb-6">
                    See strategy alignment in action
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    In 30 minutes, we'll show you how Tree Studios makes the
                    connection between product strategy and team work visible — using
                    your own examples.
                  </p>

                  <ul className="space-y-4 mb-8">
                    {benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      30 min call
                    </span>
                    <span className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      No commitment
                    </span>
                  </div>
                </div>
              </FadeIn>

              {/* Right: Form */}
              <FadeIn delay={0.2}>
                <div className="bg-card border border-border rounded-[1.5rem] p-8">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-5">
                        <MessageCircle className="h-8 w-8 text-terracotta" />
                      </div>
                      <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                        Thank you!
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We've received your demo request and will get back to you
                        within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                        Request a demo
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-foreground mb-1.5"
                          >
                            First name
                          </label>
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition-shadow"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-foreground mb-1.5"
                          >
                            Last name
                          </label>
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition-shadow"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Work email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition-shadow"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition-shadow"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="teamSize"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Product team size
                        </label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition-shadow"
                        >
                          <option value="">Select...</option>
                          <option value="1-5">1–5 people</option>
                          <option value="6-20">6–20 people</option>
                          <option value="21-50">21–50 people</option>
                          <option value="50+">50+ people</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          What's your biggest alignment challenge? (optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition-shadow resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-terracotta text-white px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95"
                      >
                        Book my demo
                      </button>
                      <p className="text-xs text-muted-foreground text-center">
                        We'll respond within 24 hours. No spam, ever.
                      </p>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
