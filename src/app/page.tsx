import Link from "next/link";
import {
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
import { AndroidIcon } from "@/components/AndroidIcon";
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
    description: "Read the summary, transcript, and action items in one focused view.",
  },
];

const FEATURES = [
  {
    visual: "transcript",
    title: "Readable transcripts",
    description: "Follow the conversation with speaker-separated text and clear timestamps.",
  },
  {
    visual: "summary",
    title: "Useful summaries",
    description: "See the decisions and important discussion points without replaying the full call.",
  },
  {
    visual: "actions",
    title: "Action items",
    description: "Keep follow-ups visible and mark them complete from one focused list.",
  },
];

function FeatureVisual({ type }: { type: string }) {
  if (type === "transcript") {
    return (
      <div className="relative h-48 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-[var(--foreground)]">Transcript</p>
          <p className="text-[10px] text-[var(--text-muted)]">08:42</p>
        </div>
        <div className="mt-5 space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-[9px] font-semibold text-white">Y</div>
            <div className="w-[74%] rounded-xl rounded-tl-sm bg-[var(--brand-dim)] px-3 py-2">
              <div className="h-1.5 w-full rounded-full bg-[var(--brand)]/25" />
              <div className="mt-2 h-1.5 w-2/3 rounded-full bg-[var(--brand)]/20" />
            </div>
          </div>
          <div className="flex items-start justify-end gap-3">
            <div className="w-[66%] rounded-xl rounded-tr-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-2">
              <div className="h-1.5 w-full rounded-full bg-[var(--text-muted)]/25" />
              <div className="mt-2 h-1.5 w-1/2 rounded-full bg-[var(--text-muted)]/20" />
            </div>
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#ff922e] text-[9px] font-semibold text-white">S2</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "summary") {
    return (
      <div className="relative h-48 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5">
        <div className="absolute -right-10 -top-10 size-32 rounded-full bg-[var(--brand-dim)]" />
        <div className="relative flex size-10 items-center justify-center rounded-xl bg-[var(--brand-dim)]">
          <Sparkles size={19} className="text-[var(--brand)]" />
        </div>
        <p className="relative mt-4 text-xs font-semibold text-[var(--foreground)]">Key points</p>
        <div className="relative mt-3 space-y-3">
          {["Launch plan confirmed", "Owners are aligned", "Review set for Friday"].map((line, index) => (
            <div key={line} className="flex items-center gap-2.5">
              <span className={`size-1.5 rounded-full ${index === 0 ? "bg-[var(--brand)]" : "bg-[var(--text-muted)]/45"}`} />
              <span className="text-[11px] text-[var(--text-secondary)]">{line}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-48 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-[var(--foreground)]">Actions</p>
        <p className="text-[10px] font-medium text-[var(--positive)]">2 of 3 done</p>
      </div>
      <div className="mt-4 space-y-2.5">
        {["Share launch timeline", "Confirm final owner", "Book Friday review"].map((item, index) => (
          <div key={item} className="flex items-center gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)] px-3 py-2.5">
            {index < 2 ? (
              <CheckCircle2 size={15} className="shrink-0 text-[var(--positive)]" />
            ) : (
              <span className="size-[15px] shrink-0 rounded-full border border-[var(--text-muted)]" />
            )}
            <span className={`text-[11px] ${index < 2 ? "text-[var(--text-muted)] line-through" : "text-[var(--text-secondary)]"}`}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
                  <AndroidIcon className="size-5 shrink-0" />
                  Get Scryon for Android
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

        <section className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-24 sm:px-6">
          <div id="how-it-works" className="scroll-mt-24 mx-auto max-w-6xl">
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

        <section className="border-t border-[var(--border)] px-5 py-24 sm:px-6">
          <div id="features" className="scroll-mt-24 mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[var(--brand)]">Inside every call</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[var(--foreground)] sm:text-4xl">
                The useful parts, ready when you need them.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {FEATURES.map((feature) => (
                <article key={feature.title}>
                  <FeatureVisual type={feature.visual} />
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
              <AndroidIcon className="size-5 shrink-0" />
              Get Scryon for Android
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
