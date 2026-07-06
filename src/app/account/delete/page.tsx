import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delete your account",
  description: "How to delete your Scryon account and data — in the app or without it.",
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">Delete your account</h1>
        <p className="text-sm text-[var(--text-muted)] mb-12">
          Two ways to do this — pick whichever works for you.
        </p>

        <div className="prose prose-invert max-w-none space-y-10 text-[var(--text-secondary)] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              Option 1 — In the app (instant)
            </h2>
            <p>
              Open Scryon, go to your <strong className="text-[var(--foreground)]">Profile</strong>{" "}
              (tap your avatar), then <strong className="text-[var(--foreground)]">Delete account</strong>.
              Confirming permanently deletes your account, your calls, transcripts, analysis, action
              items, and contacts. This happens immediately — there&apos;s no grace period to undo it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              Option 2 — Without the app
            </h2>
            <p>
              Don&apos;t have the app installed, or can&apos;t sign in? Email{" "}
              <a
                href="mailto:privacy@scryon.app?subject=Account%20deletion%20request"
                className="text-[var(--brand-light)] hover:underline"
              >
                privacy@scryon.app
              </a>{" "}
              from the address associated with your account and request deletion. We&apos;ll verify
              you own the account and delete it — normally within 7 days — and confirm by email once
              it&apos;s done.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              What gets deleted
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your account (name, email, sign-in credentials).</li>
              <li>Every call record: title, notes, and metadata.</li>
              <li>Transcripts and AI analysis (summaries, action items, sentiment).</li>
              <li>Contacts you created in Scryon.</li>
              <li>
                Raw audio isn&apos;t in this list because it&apos;s already gone — Scryon deletes the
                uploaded audio file as soon as transcription finishes, account deletion or not. See our{" "}
                <a href="/privacy" className="text-[var(--brand-light)] hover:underline">
                  privacy policy
                </a>
                .
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
