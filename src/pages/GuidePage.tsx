import FadeIn from "@/components/FadeIn";
import SEO, { organizationSchema } from "@/components/SEO";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Share2 } from "lucide-react";

const guidesContent: Record<
  string,
  {
    title: string;
    description: string;
    readTime: string;
    sections: { heading: string; content: string }[];
  }
> = {
  "product-strategy-alignment": {
    title: "The Complete Guide to Product Strategy Alignment",
    description:
      "Learn how to connect your business goals to team work with a strategy tree. A step-by-step framework for product leaders.",
    readTime: "12 min read",
    sections: [
      {
        heading: "Why alignment breaks down",
        content:
          "In most product organizations, the link between business strategy and day-to-day work is invisible. Strategy lives in slide decks from last quarter. Roadmaps exist in spreadsheets that drift out of date. And teams are left guessing whether their work actually matters.\n\nThe result? Wasted effort, conflicting priorities, and frustrated people. Leadership wonders why execution doesn't match their vision. Teams wonder why their work doesn't seem to matter. The gap isn't effort — it's visibility.",
      },
      {
        heading: "What is product strategy alignment?",
        content:
          "Product strategy alignment is the practice of creating clear, visible connections between your high-level business goals and the work your product teams do every day. It answers the question every team member should be able to answer: 'How does my work contribute to our strategy?'\n\nUnlike traditional top-down planning, alignment is continuous. It's not a quarterly exercise — it's a living system that evolves as your strategy and understanding evolves.",
      },
      {
        heading: "The strategy tree framework",
        content:
          "A strategy tree visualizes your organization's strategic structure as a connected tree. At the top are your business goals — revenue targets, market expansion, customer satisfaction. Below them are product strategies — the bets you're making about how to reach those goals. And at the leaves are the initiatives, features, and daily work that teams actually deliver.\n\nThe power of the tree is in the connections. Every piece of work can be traced up to a strategic goal. And every strategic goal can be traced down to concrete work. When something is disconnected — an 'orphan' — it's immediately visible.",
      },
      {
        heading: "Step 1: Define your strategic goals",
        content:
          "Start with 3-5 business-level goals. These should be outcomes, not outputs. 'Increase retention by 15%' is a goal. 'Build a notification system' is not. Your goals should be stable enough to last a quarter or more, but specific enough to measure.\n\nAvoid the temptation to have too many goals. If everything is a priority, nothing is. The strategy tree works best when it forces clarity about what matters most.",
      },
      {
        heading: "Step 2: Map product strategies to goals",
        content:
          "For each business goal, identify the product strategies — the bets — that you believe will drive that goal. These are hypotheses: 'We believe that improving onboarding will increase retention.' Each strategy should be connected to exactly one goal.\n\nThis is where alignment starts to become powerful. When a product leader can see all the strategies mapped to a single goal, they can spot overlaps, gaps, and conflicts that would be invisible in a spreadsheet.",
      },
      {
        heading: "Step 3: Connect team work to strategies",
        content:
          "Now connect the actual work — epics, initiatives, features — to the strategies they serve. This is where integration with tools like Jira and Linear becomes valuable. Teams don't need to change how they work; the strategy tree pulls in their existing work and makes the connections visible.\n\nThe magic moment is when a team member can click on their current sprint work and trace it all the way up to a business goal. That's alignment.",
      },
      {
        heading: "Step 4: Make it visible and shareable",
        content:
          "A strategy tree only works if people can see it. Share it as a single link that's always up to date. Use it in planning meetings, stakeholder updates, and team retrospectives. When the tree is visible, conversations shift from 'what are we building?' to 'is our work connected to what matters?'\n\nThis is the moment when alignment stops being a planning exercise and becomes a way of working.",
      },
      {
        heading: "Common pitfalls to avoid",
        content:
          "1. Making it too complex: Start with 2-3 levels. You can always add depth later.\n2. Treating it as a planning tool only: The strategy tree should be updated continuously, not just at planning time.\n3. Ignoring orphans: Disconnected work is a signal, not a failure. Use it to start conversations about priority.\n4. Expecting perfection: Strategy is messy. The tree should reflect that reality, not hide it.",
      },
    ],
  },
  "roadmap-to-strategy-connection": {
    title: "How to Connect Your Roadmap to Business Strategy",
    description:
      "Most roadmaps exist in isolation. This guide shows you how to create visible links between what teams ship and why it matters.",
    readTime: "8 min read",
    sections: [
      {
        heading: "The roadmap isolation problem",
        content:
          "Roadmaps were designed to answer 'what are we building and when?' But they rarely answer 'why?' The result is that stakeholders see a list of features without context, teams work without understanding the bigger picture, and strategy becomes disconnected from execution.\n\nThis isn't a tooling problem — it's a visibility problem. The connections exist in people's heads, but they're not visible to the organization.",
      },
      {
        heading: "From feature list to strategic narrative",
        content:
          "The key shift is moving from a flat feature list to a connected strategic narrative. Every item on your roadmap should be traceable to a strategic objective. If it can't be, it's either the wrong work or the wrong strategy.\n\nStart by asking: For each roadmap item, what strategic goal does it serve? If the answer is unclear, that's your first alignment problem to solve.",
      },
      {
        heading: "Practical steps to connect your roadmap",
        content:
          "1. List your current strategic goals (3-5 max)\n2. Tag each roadmap item with the goal it serves\n3. Identify items that don't connect to any goal — these are candidates for deprioritization\n4. Look for goals with no roadmap items — these are strategic gaps\n5. Share the connected view with stakeholders\n\nThis exercise alone often reveals surprising misalignments that have been invisible for months.",
      },
      {
        heading: "Making it sustainable",
        content:
          "The connection between roadmap and strategy needs to be maintained continuously, not just at planning time. Use a tool like Tree Studios that automatically keeps the connections visible and flags when work becomes disconnected from strategy.",
      },
    ],
  },
  "outcome-driven-product-teams": {
    title: "Building Outcome-Driven Product Teams",
    description:
      "Shift your team's focus from output to outcomes. Practical techniques for measuring impact.",
    readTime: "10 min read",
    sections: [
      {
        heading: "Output vs. outcome thinking",
        content:
          "Output-driven teams measure success by what they ship: features delivered, story points completed, releases pushed. Outcome-driven teams measure success by the impact of what they ship: customer retention improved, activation rate increased, support tickets reduced.\n\nThe shift from output to outcome thinking is one of the most important transformations a product organization can make.",
      },
      {
        heading: "How to define meaningful outcomes",
        content:
          "Good outcomes are specific, measurable, and connected to business value. 'Improve the user experience' is not an outcome. 'Reduce time-to-value for new users from 7 days to 3 days' is.\n\nStart by asking: If this initiative succeeds, what will change in a way we can measure? The answer is your outcome.",
      },
      {
        heading: "Connecting outcomes to strategy",
        content:
          "Outcomes are the bridge between strategy and execution. Each outcome should ladder up to a strategic goal. When teams can see how their outcome connects to the bigger picture, motivation and autonomy increase.\n\nA strategy tree makes this connection visual and always accessible — not buried in a planning document from last quarter.",
      },
      {
        heading: "Tracking and celebrating progress",
        content:
          "Make outcome progress visible to the whole organization. Celebrate when outcomes improve, not just when features ship. Use data and evidence to show real impact, and make it easy for leadership to see how product work drives business success.",
      },
    ],
  },
  "strategy-tree-vs-okrs": {
    title: "Strategy Tree vs OKRs: Which Framework Fits Your Team?",
    description:
      "Understand the differences between strategy trees and OKRs and how they can work together.",
    readTime: "7 min read",
    sections: [
      {
        heading: "OKRs: Strengths and limitations",
        content:
          "OKRs (Objectives and Key Results) are great for setting ambitious goals and measuring progress. They work well when you need focus and accountability. But OKRs have limitations: they don't show how objectives connect to each other, they can feel disconnected from daily work, and they often become a quarterly ritual rather than a living system.",
      },
      {
        heading: "The strategy tree approach",
        content:
          "A strategy tree provides the missing context that OKRs lack. It shows how each objective fits into the bigger picture, how different teams' work connects, and where gaps exist. Think of it as the connective tissue between your OKRs and your execution.\n\nWhere OKRs ask 'what do we want to achieve?', the strategy tree asks 'how does everything connect?'",
      },
      {
        heading: "Using them together",
        content:
          "The most effective organizations use both. OKRs define the targets. The strategy tree shows the connections. Your OKR objectives become nodes in the tree, connected upward to business goals and downward to team initiatives.\n\nThis combination gives you the best of both worlds: the focus and accountability of OKRs with the visibility and alignment of a strategy tree.",
      },
      {
        heading: "Which should you start with?",
        content:
          "If your biggest problem is lack of focus and accountability, start with OKRs. If your biggest problem is lack of visibility and alignment between teams, start with a strategy tree. And if you're not sure — a strategy tree will often reveal where OKRs should focus.",
      },
    ],
  },
};

const GuidePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? guidesContent[slug] : undefined;

  if (!guide) return <Navigate to="/guides" replace />;

  return (
    <div>
      <SEO
        title={guide.title}
        description={guide.description}
        path={`/guides/${slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          author: organizationSchema,
          publisher: organizationSchema,
        }}
      />

      <article className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              All guides
            </Link>

            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {guide.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight mb-6">
              {guide.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 pb-8 border-b border-border">
              {guide.description}
            </p>
          </FadeIn>

          <div className="space-y-12">
            {guide.sections.map((section, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <section>
                  <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                    {section.heading}
                  </h2>
                  {section.content.split("\n\n").map((paragraph, pi) => (
                    <p
                      key={pi}
                      className="text-muted-foreground leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-16 pt-8 border-t border-border">
              <div className="bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground text-center">
                <h3 className="text-2xl font-heading font-semibold mb-3">
                  Ready to try strategy alignment?
                </h3>
                <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
                  See how Tree Studios makes the connection between strategy and
                  impact visible.
                </p>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Book a demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </article>
    </div>
  );
};

export default GuidePage;
