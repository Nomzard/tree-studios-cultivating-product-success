import FadeIn from "@/components/FadeIn";
import SEO, { organizationSchema } from "@/components/SEO";
import { CheckCircle2, Shield, Zap } from "lucide-react";

const benefits = [
  "Free to start — no credit card required",
  "Set up your first strategy tree in minutes",
  "Connect Jira or Linear instantly",
  "Invite your team and share a living view",
];

const SignupPage = () => {

  return (
    <div>
      <SEO
        title="Sign Up Free – Start Using Tree Studios Today"
        description="Create your free Tree Studios account. Build your strategy tree, connect Jira or Linear, and make alignment visible — in minutes."
        path="/signup"
        jsonLd={organizationSchema}
      />

      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left: Value prop */}
            <FadeIn>
              <div>
                <p className="text-sm font-medium text-moss tracking-wide uppercase mb-4">
                  Get Started
                </p>
                <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground leading-tight mb-6">
                  Start aligning strategy to work — for free
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Create your account in seconds and build your first strategy
                  tree today. No meetings, no sales calls — just sign up and go.
                </p>

                <ul className="space-y-4 mb-8">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Ready in 2 minutes
                  </span>
                  <span className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    EU-hosted & GDPR compliant
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Right: Signup form */}
            <FadeIn delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                      You're in!
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Check your email to verify your account and get started
                      with Tree Studios.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      Create your free account
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
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
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
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
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
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        minLength={8}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Minimum 8 characters
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      Create Account
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="text-xs text-muted-foreground text-center">
                      Free forever for small teams. No credit card required.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
