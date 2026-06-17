import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Scryon terms of service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">Terms of Service</h1>
        <p className="text-sm text-[var(--text-muted)] mb-12">Last updated: June 2026</p>

        <div className="space-y-10 text-[var(--text-secondary)] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              Acceptance of terms
            </h2>
            <p>
              By downloading or using Scryon, you agree to these terms. If you do not agree, do not
              use the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              Permitted use
            </h2>
            <p>
              Scryon is provided for personal and business use to transcribe and analyze your own
              phone calls. You must comply with all applicable laws in your jurisdiction regarding
              call recording, including obtaining consent from other parties where required.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              Your responsibility for recording consent
            </h2>
            <p>
              Call recording laws vary by country and region. You are solely responsible for
              ensuring that recording any call complies with the laws applicable to you and the
              other party. Scryon does not provide legal advice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              Service availability
            </h2>
            <p>
              Scryon is provided "as is" without warranty. We may modify, suspend, or discontinue
              the service at any time. We are not liable for any downtime or data loss.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by law, Scryon and its creators shall not be liable
              for any indirect, incidental, or consequential damages arising from the use or
              inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">Contact</h2>
            <p>
              Questions?{" "}
              <a
                href="mailto:hello@scryon.app"
                className="text-[var(--brand-light)] hover:underline"
              >
                hello@scryon.app
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
