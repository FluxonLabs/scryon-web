import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Scryon collects, uses, stores, and protects account, call recording, transcript, and analysis data.",
};

const contents = [
  ["overview", "Overview"],
  ["scope", "Scope"],
  ["data-we-collect", "Data we collect"],
  ["how-we-use-data", "How we use data"],
  ["audio-ai", "Audio, transcription, and AI"],
  ["disclosures", "How we disclose data"],
  ["cookies", "Cookies and analytics"],
  ["storage-retention", "Storage and retention"],
  ["security", "Security"],
  ["rights", "Your choices and rights"],
  ["children", "Children"],
  ["international", "International processing"],
  ["changes", "Policy changes"],
  ["contact", "Contact us"],
] as const;

const processors = [
  ["Google Firebase", "Authentication and push notifications", "Account identifiers, authentication data, device push token"],
  ["Lemonfox / Whisper", "Speech-to-text transcription", "Audio recording and technical job metadata"],
  ["pyannoteAI", "Optional speaker diarization and voice profile features", "Audio recording and, when enabled with consent, a provider-issued voice profile"],
  ["OpenAI", "Transcript analysis and optional semantic-search embeddings", "Transcript text and instructions needed to produce the requested output"],
  ["Railway and configured object-storage providers", "Application hosting, databases, and private artifact storage", "Service data stored or processed by Scryon"],
  ["Sentry", "Privacy-filtered error reporting when enabled", "Technical diagnostics with request bodies, sensitive headers, and user content removed"],
  ["Vercel Analytics", "Website performance and aggregate usage measurement", "Limited website and device interaction data"],
] as const;

function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-[var(--border-subtle)] pt-10">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        <header className="max-w-3xl pb-12 sm:pb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-light)]">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
            Scryon turns call recordings into transcripts, summaries, and useful follow-ups. This
            policy explains what information we process to do that, where it goes, how long we keep
            it, and the controls available to you.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--text-muted)]">
            <span>Effective: August 7, 2026</span>
            <span>Policy version: 2026-08-07</span>
          </div>
        </header>

        <div className="grid gap-14 lg:grid-cols-[14rem_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="mb-4 text-sm font-semibold text-[var(--foreground)]">On this page</h2>
            <nav aria-label="Privacy policy contents">
              <ol className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:grid-cols-3 lg:grid-cols-1">
                {contents.map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-light)]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="min-w-0 space-y-10 text-[15px] leading-7 text-[var(--text-secondary)]">
            <PolicySection id="overview" title="Overview">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--brand-dim)] p-5 sm:p-6">
                <ul className="space-y-3">
                  <li><strong className="text-[var(--foreground)]">You control uploads.</strong> Scryon processes a recording only when you choose to import or submit it.</li>
                  <li><strong className="text-[var(--foreground)]">Audio is temporary.</strong> We delete it after processing succeeds or fails; a safety sweeper removes stale temporary audio within 24 hours.</li>
                  <li><strong className="text-[var(--foreground)]">Your content is not advertising inventory.</strong> We do not sell personal information or share call content for targeted advertising.</li>
                  <li><strong className="text-[var(--foreground)]">No model training without permission.</strong> We do not use your audio, transcripts, or analyses to train general-purpose AI models unless we first ask for and receive explicit consent.</li>
                  <li><strong className="text-[var(--foreground)]">Deletion is available in-product.</strong> You can delete individual calls, an optional voice profile, or your entire account.</li>
                </ul>
              </div>
            </PolicySection>

            <PolicySection id="scope" title="1. Scope">
              <p>
                This Privacy Policy applies to the Scryon Android application, website, web
                dashboard, APIs, and related support services (collectively, the “Services”). In
                this policy, “Scryon,” “we,” “us,” and “our” refer to the provider of the Services.
              </p>
              <p>
                It does not govern third-party services that you access independently, even if a
                Scryon feature links to them. Their own privacy policies apply to their processing.
              </p>
            </PolicySection>

            <PolicySection id="data-we-collect" title="2. Data we collect">
              <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
                <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
                  <thead className="bg-[var(--surface)] text-[var(--foreground)]">
                    <tr><th className="p-4 font-semibold">Category</th><th className="p-4 font-semibold">Examples</th><th className="p-4 font-semibold">Source</th></tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-subtle)]">
                    <tr><td className="p-4 font-medium text-[var(--foreground)]">Account and profile</td><td className="p-4">Name, email address, Firebase user identifier, profile settings, consent records, account status, and plan information</td><td className="p-4">You and your sign-in provider</td></tr>
                    <tr><td className="p-4 font-medium text-[var(--foreground)]">Call and contact metadata</td><td className="p-4">Call title, contact name, partial or supplied phone details, organization, direction, date, duration, recording filename, and your notes</td><td className="p-4">You, your device, and your use of the Services</td></tr>
                    <tr><td className="p-4 font-medium text-[var(--foreground)]">User content</td><td className="p-4">Recordings you submit, transcripts, speaker labels, summaries, key points, action items, sentiment, tone, tags, and edits</td><td className="p-4">You and outputs generated at your request</td></tr>
                    <tr><td className="p-4 font-medium text-[var(--foreground)]">Optional voice profile</td><td className="p-4">A provider-issued voice embedding or identifier used to distinguish your voice; Scryon does not decode it into raw biometric measurements</td><td className="p-4">Created only when you enable the feature and provide consent</td></tr>
                    <tr><td className="p-4 font-medium text-[var(--foreground)]">Device and technical data</td><td className="p-4">Device type, operating system, app version, IP address, request identifiers, push-notification token, timestamps, and diagnostic events</td><td className="p-4">Collected automatically when you use the Services</td></tr>
                    <tr><td className="p-4 font-medium text-[var(--foreground)]">Communications</td><td className="p-4">Messages, attachments, and information you send when requesting support, privacy assistance, or reporting a security issue</td><td className="p-4">You</td></tr>
                    <tr><td className="p-4 font-medium text-[var(--foreground)]">Website usage</td><td className="p-4">Pages visited, referrer, approximate device and browser information, and aggregate interaction data</td><td className="p-4">Website analytics technologies</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                Call recordings and transcripts may contain information about other people. You
                must have the legal right to provide that content and must give any notices or
                obtain any permissions required by applicable recording and privacy laws.
              </p>
            </PolicySection>

            <PolicySection id="how-we-use-data" title="3. How we use data">
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-light)]">
                <li>create and secure your account and keep you signed in;</li>
                <li>receive, transcribe, diarize, and analyze recordings you submit;</li>
                <li>generate summaries, action items, insights, and search results;</li>
                <li>sync your calls and settings across supported Scryon experiences;</li>
                <li>send requested service messages and call-processing notifications;</li>
                <li>provide customer support and respond to privacy or security requests;</li>
                <li>monitor reliability, diagnose failures, prevent abuse, and protect the Services;</li>
                <li>understand aggregate product usage and improve features; and</li>
                <li>comply with law, enforce our terms, and protect users, Scryon, and others.</li>
              </ul>
              <p>
                Where applicable law requires a legal basis, we rely on performance of our contract
                with you, your consent (including for optional voice-profile processing), our
                legitimate interests in operating and securing the Services, and compliance with
                legal obligations, as appropriate to the processing.
              </p>
            </PolicySection>

            <PolicySection id="audio-ai" title="4. Audio, transcription, and AI">
              <h3 className="font-semibold text-[var(--foreground)]">Audio lifecycle</h3>
              <p>
                The app reads a recording only after you select or submit it. The recording is sent
                over an encrypted connection to Scryon and the transcription or diarization
                providers needed to perform your request. Scryon may hold a private temporary copy
                while asynchronous processing completes. We delete that copy when processing
                completes or fails, and our stale-file sweeper removes any remaining temporary copy
                within 24 hours. A recording may remain on your device until you delete it there.
              </p>
              <h3 className="font-semibold text-[var(--foreground)]">Generated information</h3>
              <p>
                We retain transcripts, normalized speaker segments, analysis, actions, and related
                processing artifacts so you can retrieve and use them. Automated outputs may be
                inaccurate. Review important information before relying on or sharing it.
              </p>
              <h3 className="font-semibold text-[var(--foreground)]">AI providers and training</h3>
              <p>
                We send only the content reasonably needed to produce the requested transcription,
                analysis, diarization, or search feature. Scryon does not use your call content to
                train general-purpose AI models without explicit consent. Service providers may
                process content under their agreements with us to deliver and secure their services;
                their retention and abuse-monitoring obligations may apply.
              </p>
            </PolicySection>

            <PolicySection id="disclosures" title="5. How we disclose data">
              <p>We disclose personal information only as described below:</p>
              <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
                <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
                  <thead className="bg-[var(--surface)] text-[var(--foreground)]">
                    <tr><th className="p-4 font-semibold">Provider</th><th className="p-4 font-semibold">Purpose</th><th className="p-4 font-semibold">Data involved</th></tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-subtle)]">
                    {processors.map(([provider, purpose, data]) => (
                      <tr key={provider}><td className="p-4 font-medium text-[var(--foreground)]">{provider}</td><td className="p-4">{purpose}</td><td className="p-4">{data}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-light)]">
                <li><strong className="text-[var(--foreground)]">At your direction.</strong> When you export or share a report, your device sends it to the destination you choose. That recipient’s practices then apply.</li>
                <li><strong className="text-[var(--foreground)]">Legal and safety reasons.</strong> We may disclose information when reasonably necessary to comply with law or valid legal process, enforce agreements, investigate abuse, or protect rights and safety.</li>
                <li><strong className="text-[var(--foreground)]">Business changes.</strong> Information may transfer as part of a merger, financing, acquisition, reorganization, bankruptcy, or sale of assets, subject to appropriate notice and safeguards required by law.</li>
              </ul>
              <p>
                We do not sell personal information, and we do not share personal information or
                call content for cross-context behavioural or targeted advertising.
              </p>
            </PolicySection>

            <PolicySection id="cookies" title="6. Cookies and analytics">
              <p>
                The website may use essential storage needed for features such as theme preference,
                along with Vercel Analytics to understand aggregate traffic and performance. We do
                not use call recordings or transcripts for advertising. You can restrict cookies or
                local storage through your browser, although some preferences may no longer persist.
              </p>
              <p>
                The Android app uses Firebase services for authentication, push notifications, and
                app reliability. Your operating system lets you disable notifications. Some
                technical identifiers remain necessary to authenticate requests and operate the app.
              </p>
            </PolicySection>

            <PolicySection id="storage-retention" title="7. Storage and retention">
              <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
                <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
                  <thead className="bg-[var(--surface)] text-[var(--foreground)]"><tr><th className="p-4 font-semibold">Information</th><th className="p-4 font-semibold">Typical retention</th></tr></thead>
                  <tbody className="divide-y divide-[var(--border-subtle)]">
                    <tr><td className="p-4 font-medium text-[var(--foreground)]">Temporary raw audio</td><td className="p-4">Until processing completes or fails; stale temporary copies are removed within 24 hours</td></tr>
                    <tr><td className="p-4 font-medium text-[var(--foreground)]">Calls, transcripts, analyses, and action items</td><td className="p-4">Until you delete the call or your account</td></tr>
                    <tr><td className="p-4 font-medium text-[var(--foreground)]">Optional voice profile</td><td className="p-4">Until you delete the voice profile or your account</td></tr>
                    <tr><td className="p-4 font-medium text-[var(--foreground)]">Account and consent records</td><td className="p-4">While your account is active and as needed afterward for legal, security, and dispute-resolution obligations</td></tr>
                    <tr><td className="p-4 font-medium text-[var(--foreground)]">Pipeline events and operational logs</td><td className="p-4">Generally short-lived; processing events are designed for approximately 30 days, subject to enforcement and backup cycles</td></tr>
                    <tr><td className="p-4 font-medium text-[var(--foreground)]">Backups</td><td className="p-4">Deleted data may remain in restricted backups until those backups rotate, unless longer retention is legally required</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                We may retain limited information longer when required by law, needed to protect the
                Services, resolve disputes, or demonstrate compliance. We may retain aggregated or
                de-identified information that can no longer reasonably identify you.
              </p>
            </PolicySection>

            <PolicySection id="security" title="8. Security">
              <p>
                We use safeguards designed for the sensitivity of voice and transcript data,
                including encrypted transport, authenticated owner-scoped APIs, private object
                storage, restricted service access, redaction of transcript and contact information
                from ordinary logs, privacy filtering for error reports, and deletion controls.
                No system is completely secure, so we cannot guarantee absolute security.
              </p>
              <p>
                If you believe you found a security issue, email{" "}
                <a href="mailto:security@scryon.app" className="text-[var(--brand-light)] hover:underline">security@scryon.app</a>.
                Please do not include call content unless we specifically request it through a secure channel.
              </p>
            </PolicySection>

            <PolicySection id="rights" title="9. Your choices and privacy rights">
              <p>Depending on where you live, you may have rights to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--brand-light)]">
                <li>access or receive a portable copy of personal information;</li>
                <li>correct inaccurate personal information;</li>
                <li>delete personal information;</li>
                <li>withdraw consent where processing relies on consent;</li>
                <li>object to or restrict certain processing; and</li>
                <li>appeal a decision or complain to your local data-protection authority.</li>
              </ul>
              <p>
                You can delete calls and the optional voice profile in Scryon. You can delete your
                account from the app or follow our{" "}
                <Link href="/account/delete" className="text-[var(--brand-light)] hover:underline">account deletion instructions</Link>.
                To request access, correction, portability, or other assistance, email{" "}
                <a href="mailto:privacy@scryon.app" className="text-[var(--brand-light)] hover:underline">privacy@scryon.app</a>.
              </p>
              <p>
                We may need to verify your identity before completing a request. Authorized agents
                may submit requests where permitted by law, but we may require proof of authority.
                We will not discriminate against you for exercising applicable privacy rights.
              </p>
            </PolicySection>

            <PolicySection id="children" title="10. Children">
              <p>
                Scryon is not directed to children under 16, and we do not knowingly collect their
                personal information. Do not create an account or submit a recording if you are
                under 16. If you believe a child has provided personal information, contact{" "}
                <a href="mailto:privacy@scryon.app" className="text-[var(--brand-light)] hover:underline">privacy@scryon.app</a>{" "}
                so we can investigate and delete it where appropriate.
              </p>
            </PolicySection>

            <PolicySection id="international" title="11. International processing">
              <p>
                Scryon and its service providers may process information in countries other than
                yours, including the United States and regions selected for hosting, transcription,
                or diarization. Those countries may have different data-protection laws. Where
                required, we use contractual or other recognized safeguards for international transfers.
              </p>
            </PolicySection>

            <PolicySection id="changes" title="12. Changes to this policy">
              <p>
                We may update this policy as the Services, providers, or laws change. We will post
                the revised policy here and update its effective date and version. If a change is
                material, we will provide additional notice in the app, by email, or through another
                appropriate channel and request renewed consent where required.
              </p>
            </PolicySection>

            <PolicySection id="contact" title="13. Contact us">
              <p>
                For privacy questions or requests, email{" "}
                <a href="mailto:privacy@scryon.app" className="text-[var(--brand-light)] hover:underline">privacy@scryon.app</a>.
                For general product support, email{" "}
                <a href="mailto:support@scryon.app" className="text-[var(--brand-light)] hover:underline">support@scryon.app</a>.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                Please include your account email and the country or state where you live, but do
                not email recordings, transcripts, passwords, or authentication tokens.
              </p>
            </PolicySection>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
