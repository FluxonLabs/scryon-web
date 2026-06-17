import Link from "next/link";
import {
  Mic,
  BrainCircuit,
  CheckSquare,
  Search,
  TrendingUp,
  Users,
  Zap,
  Shield,
  ArrowRight,
  Star,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const FEATURES = [
  {
    icon: Mic,
    title: "Automatic Transcription",
    description:
      "Records and transcribes your phone calls the moment they end. No tapping, no setup — it just works.",
  },
  {
    icon: Users,
    title: "Speaker Identification",
    description:
      "Tells you exactly who said what. Labels are refined with your contact's name automatically.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    description:
      "Extracts sentiment, tone, key discussion points, decisions, and a scannable executive summary for every call.",
  },
  {
    icon: CheckSquare,
    title: "Action Items",
    description:
      "Never drop a follow-up again. Scryon finds every commitment made in the call and tracks it for you.",
  },
  {
    icon: Search,
    title: "Semantic Search",
    description:
      'Type "calls about payment issues" and find them — even if those exact words were never spoken.',
  },
  {
    icon: TrendingUp,
    title: "Call Insights",
    description:
      "Sentiment trends, call volume patterns, and top discussion topics across all your calls in one dashboard.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Make your call",
    description:
      "Record any phone call with Scryon's built-in recorder. The app detects calls automatically from your call log.",
  },
  {
    step: "02",
    title: "AI processes it",
    description:
      "Scryon transcribes, diarizes speakers, and runs LLM analysis in the background. Usually done in under a minute.",
  },
  {
    step: "03",
    title: "Get the full picture",
    description:
      "Open the call to see the full transcript, summary bullets, action items, sentiment, and tone — all structured and searchable.",
  },
];

const TRANSCRIPT_DEMO = [
  {
    speaker: "You",
    role: "user",
    text: "I wanted to walk you through the Q3 roadmap before we finalize the pricing.",
  },
  {
    speaker: "Ravi",
    role: "contact",
    text: "Sure, I had a quick question on pricing first — the $99 tier feels high for our team size.",
  },
  {
    speaker: "You",
    role: "user",
    text: "Totally fair. Let me pull up what's included at that tier. We can work something out.",
  },
  {
    speaker: "Ravi",
    role: "contact",
    text: "That'd be great. Can you send a revised quote by Wednesday?",
  },
];

const ACTION_ITEMS_DEMO = [
  { text: "Send revised pricing quote to Ravi", priority: "high", due: "Wed" },
  { text: "Schedule Q3 roadmap review demo on Friday", priority: "high", due: "Fri" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--text-secondary)] mb-8">
            <Zap size={12} className="text-[var(--brand-light)]" />
            AI-powered · Speaker ID · Semantic search
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[var(--foreground)] leading-[1.1] tracking-tight mb-6">
            Every call, fully{" "}
            <span className="text-[var(--brand-light)]">understood</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Scryon transcribes your Android phone calls, identifies each speaker, and extracts action
            items, sentiment, and key insights — automatically.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--brand)] text-white font-semibold hover:bg-[var(--brand-light)] transition-colors"
            >
              Download for Android
              <ArrowRight size={16} />
            </Link>
            <Link
              href="https://dashboard.scryon.app/login"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] font-semibold hover:text-[var(--foreground)] hover:border-[var(--brand)] transition-colors"
            >
              Sign in to dashboard
            </Link>
          </div>
        </div>

        {/* Demo card */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--surface-2)]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-xs text-[var(--text-muted)] font-mono">
                Ravi — Quarterly Review · 18 min · sales
              </span>
            </div>

            <div className="p-6 grid sm:grid-cols-2 gap-6">
              {/* Transcript */}
              <div>
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                  Transcript
                </p>
                <div className="space-y-3">
                  {TRANSCRIPT_DEMO.map((seg, i) => (
                    <div key={i} className="text-sm">
                      <span
                        className={`font-semibold mr-2 ${
                          seg.role === "user"
                            ? "text-[var(--brand-light)]"
                            : "text-[var(--positive)]"
                        }`}
                      >
                        {seg.speaker}
                      </span>
                      <span className="text-[var(--text-secondary)]">{seg.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Analysis */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    Summary
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Ravi pushed back on the $99/seat tier. Agreed on a Friday demo and revised quote
                    by Wednesday.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    Sentiment
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 rounded-full bg-[var(--surface-2)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[var(--positive)]"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-[var(--positive)]">+0.55</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    Action Items
                  </p>
                  <div className="space-y-2">
                    {ACTION_ITEMS_DEMO.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border-subtle)]"
                      >
                        <div className="w-4 h-4 rounded border border-[var(--brand)] mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[var(--foreground)]">{item.text}</p>
                          <p className="text-xs text-[var(--text-muted)]">
                            Due {item.due} · {item.priority}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[var(--brand-light)] uppercase tracking-widest mb-3">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              From call to insights in minutes
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div key={s.step} className="relative">
                <div className="text-5xl font-black text-[var(--border)] mb-4">{s.step}</div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 sm:px-6 border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[var(--brand-light)] uppercase tracking-widest mb-3">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              Everything your calls tell you,
              <br />
              finally captured
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand)] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-dim)] flex items-center justify-center mb-4 group-hover:bg-[var(--brand)] transition-colors">
                  <f.icon
                    size={18}
                    className="text-[var(--brand-light)] group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-semibold text-[var(--foreground)] mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web dashboard callout */}
      <section className="py-24 px-4 sm:px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-[var(--brand-dim)] bg-[var(--surface)] p-8 sm:p-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-dim)] text-xs font-semibold text-[var(--brand-light)] mb-6">
              NEW — Web Dashboard
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
              See more on the web
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-8 leading-relaxed">
              Sign in to your Scryon dashboard to view your full call library, run semantic search
              across every conversation, track action items in one place, and see sentiment and topic
              trends over time.
            </p>
            <Link
              href="https://dashboard.scryon.app/login"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--brand)] text-white font-semibold hover:bg-[var(--brand-light)] transition-colors"
            >
              Open dashboard
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="py-16 px-4 sm:px-6 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-[var(--positive-dim)] flex items-center justify-center flex-shrink-0">
            <Shield size={18} className="text-[var(--positive)]" />
          </div>
          <div>
            <h3 className="font-semibold text-[var(--foreground)] mb-1">Your data, your calls</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Audio is processed for transcription and then deleted. Only the transcript and analysis
              are stored — encrypted, on infrastructure you control. Read our{" "}
              <Link href="/privacy" className="text-[var(--brand-light)] hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-[var(--warning)] text-[var(--warning)]" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Start capturing your calls today
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Free to download. No subscription required to get started.
          </p>
          <Link
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--brand)] text-white font-bold text-lg hover:bg-[var(--brand-light)] transition-colors"
          >
            Download for Android
            <ArrowRight size={20} />
          </Link>
          <p className="text-xs text-[var(--text-muted)] mt-4">Android 8.0+ required</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
