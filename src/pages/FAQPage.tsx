import FadeIn from "@/components/FadeIn";
import SEO, { faqSchema, organizationSchema } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Product",
    items: [
      {
        question: "What is Tree Studios?",
        answer:
          "Tree Studios is a product strategy alignment tool that helps product organizations visually connect business goals, product strategy, and team work. Instead of scattered roadmaps and slide decks, you get a living strategy tree that everyone can see and understand.",
      },
      {
        question: "What is a strategy tree?",
        answer:
          "A strategy tree is a visual representation that connects your high-level business goals to product initiatives and all the way down to the daily work your teams do. It makes the 'why' behind every piece of work visible, so teams stay aligned without constant meetings.",
      },
      {
        question: "How is Tree Studios different from a roadmap tool?",
        answer:
          "Roadmap tools focus on what you're building and when. Tree Studios focuses on why you're building it and how it connects to strategy. It's an alignment layer that sits between your strategy documents and your execution tools like Jira or Linear.",
      },
      {
        question: "Does Tree Studios replace Jira or Linear?",
        answer:
          "No. Tree Studios integrates with Jira and Linear — it doesn't replace them. Your teams keep working in their preferred tools. Tree Studios pulls in that work and connects it to the bigger strategic picture.",
      },
      {
        question: "Can I try Tree Studios for free?",
        answer:
          "Yes! We offer a free trial so you can explore the strategy tree and see how it works for your organization. No credit card required.",
      },
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        question: "How long does it take to set up?",
        answer:
          "Most teams have their first strategy tree up and running within a day. We provide a guided onboarding experience, and you can import existing goals and initiatives to get started quickly.",
      },
      {
        question: "Do I need to change how my team works?",
        answer:
          "Not at all. Tree Studios adapts to your existing workflow. Teams keep using Jira, Linear, or whatever tools they prefer. Tree Studios simply makes the strategic connections visible without adding overhead.",
      },
      {
        question: "What integrations do you support?",
        answer:
          "We currently integrate with Jira and Linear, with more integrations on the way. Our integrations automatically sync team work into the strategy tree, keeping everything up to date without manual effort.",
      },
    ],
  },
  {
    category: "Security & Hosting",
    items: [
      {
        question: "Where is my data hosted?",
        answer:
          "All data is hosted in Europe (EU), on infrastructure designed for enterprise-grade security and compliance. We're committed to GDPR compliance and data sovereignty.",
      },
      {
        question: "Is Tree Studios secure?",
        answer:
          "Yes. We use encryption at rest and in transit, role-based access control, and follow security best practices. Tree Studios is designed and built in Sweden with privacy-first principles.",
      },
    ],
  },
];

const allFaqItems = faqs.flatMap((c) => c.items);

const FAQPage = () => {
  return (
    <div>
      <SEO
        title="FAQ – Frequently Asked Questions"
        description="Find answers to common questions about Tree Studios, our strategy tree product, integrations with Jira and Linear, pricing, security, and getting started."
        path="/faq"
        jsonLd={[faqSchema(allFaqItems), organizationSchema]}
      />

      <section className="container mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-moss tracking-wide uppercase mb-4">
              FAQ
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
              Frequently asked questions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to know about Tree Studios, our product, and
              how to get started.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {faqs.map((category, ci) => (
            <FadeIn key={ci} delay={ci * 0.1}>
              <div className="mb-12">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4 pb-2 border-b border-border">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${ci}-${i}`}
                      className="border border-border rounded-xl px-6 bg-card"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-card">
        <div className="container mx-auto px-6 py-20">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
                Still have questions?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Book a relaxed conversation and we'll tell you more. No strings
                attached.
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
