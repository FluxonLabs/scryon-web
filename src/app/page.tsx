import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileText,
  ListChecks,
  MoreVertical,
  Phone,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.scryon";

const STEPS = [
  {
    number: "01",
    title: "Record with your phone",
    description: "Use your phone’s supported call-recording feature. Scryon never records calls.",
  },
  {
    number: "02",
    title: "Choose Transcribe",
    description: "Open My Calls and select the saved recording you want Scryon to process.",
  },
  {
    number: "03",
    title: "Review your notes",
    description: "Read the summary, transcript, and action items, then update the title if needed.",
  },
];

const FEATURES = [
  {
    icon: FileText,
    title: "Readable transcripts",
    description: "Follow the conversation with speaker-separated text and clear timestamps.",
  },
  {
    icon: Sparkles,
    title: "Useful summaries",
    description: "See the decisions and important discussion points without replaying the full call.",
  },
  {
    icon: ListChecks,
    title: "Action items",
    description: "Keep follow-ups visible and mark them complete from one focused list.",
  },
];

function AppPreview() {
  return (
    <div className="mx-auto w-full max-w-[370px] rounded-[32px] border border-[var(--border)] bg-[var(--surface-2)] p-2 shadow-[0_28px_80px_rgba(36,36,36,0.16)] dark:shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
      <div className="overflow-hidden rounded-[26px] border border-[var(--border-subtle)] bg-[var(--background)]">
        <div className="flex items-center justify-between px-5 pb-3 pt-5 text-[11px] font-semibold text-[var(--text-secondary)]">
          <span>10:38</span>
          <span>5G&nbsp;&nbsp;87%</span>
        </div>

        <div className="flex items-center gap-3 px-5 pb-5 pt-2">
          <div className="flex size-11 items-center justify-center rounded-full bg-[#ff922e] text-sm font-bold text-white">
            PY
          </div>
          <h2 className="flex-1 text-[24px] font-semibold leading-8 text-[var(--foreground)]">
            My Transcription
          </h2>
          <Search className="text-[var(--text-secondary)]" size={21} strokeWidth={1.8} />
        </div>

        <div className="border-y border-[var(--border-subtle)] bg-[var(--surface)] px-5 py-4">
          <div className="flex items-center gap-2 text-[15px] font-medium text-[var(--foreground)]">
            Recent transcription
            <ChevronDown size={17} className="text-[var(--text-muted)]" />
          </div>
        </div>

        <div className="min-h-[430px] px-5 py-4">
          <p className="mb-5 text-xs font-medium text-[var(--text-muted)]">Today</p>

          <div className="flex items-start gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
              <Phone size={18} className="text-[var(--text-secondary)]" strokeWidth={1.8} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start gap-2">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[15px] font-semibold text-[var(--foreground)]">
                    Project catch-up
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--text-muted)]">10:38 pm</p>
                </div>
                <div className="flex items-center gap-1 rounded-full border border-[var(--border)] px-2 py-1 text-[11px] text-[var(--text-secondary)]">
                  <Play size={10} fill="currentColor" />
                  12m 37s
                </div>
                <MoreVertical size={17} className="text-[var(--text-muted)]" />
              </div>

              <div className="mt-5 flex gap-2.5">
                <Sparkles size={16} className="mt-0.5 shrink-0 text-[var(--brand)]" />
                <p className="text-[13px] leading-5 text-[var(--text-secondary)]">
                  Reviewed the launch plan, clarified ownership, and agreed on the next review.
                </p>
              </div>

              <button className="mt-3 text-[13px] font-medium text-[var(--brand)]">
                View detail
              </button>

              <div className="mt-5">
                <div className="mb-2 flex items-center gap-2 text-[13px] font-medium text-[var(--foreground)]">
                  <ListChecks size={16} className="text-[var(--text-muted)]" />
                  Actions
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5">
                  <span className="size-4 rounded-full border border-[var(--text-muted)]" />
                  <span className="text-xs text-[var(--text-secondary)]">Share revised launch timeline</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-[var(--border)] bg-[var(--surface)] px-3 py-3">
          <div className="flex flex-col items-center gap-1 text-[var(--text-muted)]">
            <Phone size={19} />
            <span className="text-[10px]">My Calls</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-[var(--brand)]">
            <FileText size={19} />
            <span className="text-[10px] font-semibold">Transcribed</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-[var(--text-muted)]">
            <ListChecks size={19} />
            <span className="text-[10px]">Actions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />

      <main>
        <section className="px-5 pb-24 pt-32 sm:px-6 lg:pb-28 lg:pt-36">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <p className="mb-5 text-sm font-medium text-[var(--brand)]">Call notes for Android</p>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl lg:text-[60px]">
                Turn saved call recordings into clear next steps.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
                Choose a recording already saved on your phone. Scryon creates a concise summary,
                a speaker-separated transcript, and action items you can follow through.
              </p>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[var(--brand-light)]"
                >
                  Get Scryon for Android
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/#how-it-works"
                  className="px-2 py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
                >
                  See how it works
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <CheckCircle2 size={17} className="text-[var(--positive)]" />
                Scryon never records your calls.
              </div>
            </div>

            <AppPreview />
          </div>
        </section>

        <section id="how-it-works" className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[var(--brand)]">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[var(--foreground)] sm:text-4xl">
                You stay in control of every transcription.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {STEPS.map((step) => (
                <article key={step.number} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-6">
                  <p className="text-sm font-semibold text-[var(--brand)]">{step.number}</p>
                  <h3 className="mt-8 text-xl font-semibold text-[var(--foreground)]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-[var(--border)] px-5 py-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[var(--brand)]">Inside every call</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[var(--foreground)] sm:text-4xl">
                The useful parts, ready when you need them.
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {FEATURES.map((feature) => (
                <article key={feature.title}>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[var(--brand-dim)]">
                    <feature.icon size={20} className="text-[var(--brand)]" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--foreground)]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-16 sm:px-6">
          <div className="mx-auto flex max-w-4xl flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[var(--positive-dim)]">
              <ShieldCheck size={22} className="text-[var(--positive)]" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-[var(--foreground)]">Your recording, your choice</h2>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                Nothing is uploaded until you tap Transcribe. Audio is processed for transcription
                and then deleted from processing storage. Read the{" "}
                <Link href="/privacy" className="font-medium text-[var(--brand)] hover:underline">
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border)] px-5 py-24 text-center sm:px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--foreground)] sm:text-4xl">
              Keep the conversation. Lose the busywork.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--text-secondary)]">
              Turn the recordings you choose into notes you can use.
            </p>
            <Link
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[var(--brand-light)]"
            >
              Get Scryon for Android
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
