import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Scryon handles your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[var(--text-muted)] mb-12">Last updated: June 2026</p>

        <div className="prose prose-invert max-w-none space-y-10 text-[var(--text-secondary)] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">What we collect</h2>
            <p>
              Scryon collects the minimum data required to provide the service. When you sign in with
              Google, we receive your name and email address for account identification. When you
              record a phone call, the audio is uploaded to our servers solely for the purpose of
              transcription and analysis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">Audio handling</h2>
            <p>
              <strong className="text-[var(--foreground)]">Audio files are not stored.</strong> Once
              your call has been transcribed and analyzed, the original audio file is permanently
              deleted from our servers. We retain only the transcript and the AI-generated analysis
              (summary, action items, sentiment, tags).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              How we use your data
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To transcribe and analyze your call recordings.</li>
              <li>To generate action items, summaries, and sentiment analysis.</li>
              <li>To provide semantic search over your transcripts.</li>
              <li>To send you push notifications when call processing completes.</li>
            </ul>
            <p className="mt-3">
              We do not sell your data, share it with advertisers, or use it to train AI models
              without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              Third-party providers
            </h2>
            <p>
              Scryon uses the following third-party services to operate:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                <strong className="text-[var(--foreground)]">Lemonfox / Whisper</strong> — for
                speech-to-text transcription.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">OpenAI</strong> — for LLM analysis and
                semantic search embeddings.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Firebase (Google)</strong> — for
                authentication.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Railway</strong> — for hosting the
                backend.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              Your rights
            </h2>
            <p>
              You can delete any call — including its transcript and analysis — at any time from the
              app or the web dashboard. Deleting your account removes all associated data permanently.
              To request account deletion, contact us at{" "}
              <a href="mailto:privacy@scryon.app" className="text-[var(--brand-light)] hover:underline">
                privacy@scryon.app
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">Contact</h2>
            <p>
              Questions about this policy?{" "}
              <a href="mailto:privacy@scryon.app" className="text-[var(--brand-light)] hover:underline">
                privacy@scryon.app
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
