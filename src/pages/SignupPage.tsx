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
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Get started with Tree Studios
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Sign in with your Google account to get started instantly — no passwords, no hassle.
                  </p>
                  <a
                    href="https://www.treestudios.app/auth"
                    className="w-full bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Sign in with Google
                  </a>
                  <p className="text-xs text-muted-foreground">
                    Free forever for small teams. No credit card required.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
