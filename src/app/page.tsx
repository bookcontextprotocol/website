import { ExampleCarousel } from "@/components/example-carousel";
import { FadeIn } from "@/components/fade-in";
import { SignupForm } from "@/components/signup-form";

export default function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:inline-flex focus:h-10 focus:items-center focus:border focus:border-accent focus:bg-background focus:px-4 focus:text-sm focus:text-accent"
      >
        Skip to content
      </a>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="group flex items-center gap-2">
            <span className="inline-block size-2 bg-accent transition-transform group-hover:scale-110" />
            <span className="font-pixel text-xl tracking-tight">BCP</span>
          </a>
          <a
            href="https://github.com/bookcontextprotocol"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="main" className="relative mx-auto flex max-w-5xl flex-col px-6 pt-32 pb-20">
        {/* Decorative glyph */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-8 right-6 select-none font-pixel text-[12rem] leading-none text-border/40 sm:text-[18rem]"
        >
          {"{"}
        </div>

        <div className="animate-in delay-1 inline-flex items-center gap-2 mb-6">
          <span className="inline-block size-1.5 bg-accent" />
          <span className="font-pixel text-xs text-muted-foreground">
            v0.1 — early development
          </span>
        </div>
        <h1 className="animate-in delay-2 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Book Context Protocol
          <span className="cursor-blink ml-1 inline-block h-[1.1em] w-[3px] translate-y-[0.1em] bg-accent" />
        </h1>
        <p className="animate-in delay-3 mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground">
          Licensed, citable retrieval for books, papers, and deep reference
          material — built for AI. Bring your owned or institution-licensed
          sources into your AI workflows with clean citations, clear usage
          rules, and an upgrade path to paying rights holders.
        </p>
        <div className="animate-in delay-4 mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#waitlist"
            className="btn-press btn-glow inline-flex h-10 items-center justify-center border border-foreground bg-foreground px-5 text-sm text-background"
          >
            Stay in the loop
          </a>
          <a
            href="#spec"
            className="btn-press btn-glow-muted inline-flex h-10 items-center justify-center border border-border px-5 text-sm text-muted-foreground"
          >
            Read the spec
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-t border-border" />
      </div>

      {/* Problem */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block size-1.5 bg-accent" />
            <h2 className="font-pixel text-xs uppercase text-muted-foreground">
              The problem
            </h2>
          </div>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-foreground">
            AI workflows break down where the best information lives. Books and paid PDFs are hard to search well. Citations are messy across editions and formats. Rights are unclear. Teams rebuild the same pipelines in a dozen incompatible ways.
          </p>
        </FadeIn>
      </section>

      {/* What is BCP */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-t border-border" />
      </div>

      <section id="spec" className="mx-auto max-w-5xl px-6 py-20">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block size-1.5 bg-accent" />
            <h2 className="font-pixel text-xs uppercase text-muted-foreground">
              What is BCP
            </h2>
          </div>
          <p className="mb-12 max-w-2xl text-pretty text-lg leading-relaxed text-foreground">
            A content and retrieval standard for long-form sources. BCP defines how books, papers, and manuals are described, accessed, cited, and metered — so any tool can retrieve the right passages without treating content like a free-for-all.
          </p>

          <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          <div className="grid-cell bg-background p-6">
            <h3 className="mb-2 text-sm font-medium">Manifests</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              What the work is, which edition, how it&apos;s structured.
              Stable work and edition identifiers.
            </p>
          </div>
          <div className="grid-cell bg-background p-6">
            <h3 className="mb-2 text-sm font-medium">Locators</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Stable references to passages — not fragile page numbers.
              Section, paragraph, and text hash.
            </p>
          </div>
          <div className="grid-cell bg-background p-6">
            <h3 className="mb-2 text-sm font-medium">Policies</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              What&apos;s allowed: quote length, display rules, caching
              limits. Rights travel with the content.
            </p>
          </div>
          <div className="grid-cell bg-background p-6">
            <h3 className="mb-2 text-sm font-medium">Receipts</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Optional usage metering so creators and publishers can get
              paid. Micropayments, subscriptions, or one-time access.
            </p>
          </div>
          </div>
        </FadeIn>
      </section>

      {/* API example */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-t border-border" />
      </div>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block size-1.5 bg-accent" />
            <h2 className="font-pixel text-xs uppercase text-muted-foreground">
              Interface
            </h2>
          </div>
          <p className="mb-12 max-w-2xl text-pretty text-lg leading-relaxed text-foreground">
            Four standard tools — delivered over MCP or any transport.
          </p>

        {/* Tools grid */}
        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          <div className="grid-cell bg-background p-6">
            <h3 className="mb-1 text-sm font-medium">search</h3>
            <p className="font-pixel text-xs text-muted-foreground">
              query, filters &rarr; passage handles
            </p>
          </div>
          <div className="grid-cell bg-background p-6">
            <h3 className="mb-1 text-sm font-medium">fetch</h3>
            <p className="font-pixel text-xs text-muted-foreground">
              handle, max_chars &rarr; text + citation + receipt
            </p>
          </div>
          <div className="grid-cell bg-background p-6">
            <h3 className="mb-1 text-sm font-medium">cite</h3>
            <p className="font-pixel text-xs text-muted-foreground">
              handle, style &rarr; formatted citation
            </p>
          </div>
          <div className="grid-cell bg-background p-6">
            <h3 className="mb-1 text-sm font-medium">policy</h3>
            <p className="font-pixel text-xs text-muted-foreground">
              work_id &rarr; allowed uses + pricing
            </p>
          </div>
        </div>

        {/* Examples */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block size-1.5 bg-accent" />
            <h3 className="font-pixel text-xs uppercase text-muted-foreground">
              Examples
            </h3>
          </div>

          <ExampleCarousel />
        </div>
        </FadeIn>
      </section>

      {/* Who it's for */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-t border-border" />
      </div>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <FadeIn>
          <div className="flex items-center gap-2 mb-8">
            <span className="inline-block size-1.5 bg-accent" />
            <h2 className="font-pixel text-xs uppercase text-muted-foreground">
              Who this is for
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          <div className="grid-cell bg-background p-6">
            <h3 className="mb-2 text-sm font-medium">Builders</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Plug books and papers into agents and RAG with clean, stable
              citations. Less glue code, fewer one-off pipelines, better
              results.
            </p>
          </div>
          <div className="grid-cell bg-background p-6">
            <h3 className="mb-2 text-sm font-medium">Research &amp; quant teams</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Build internal knowledge systems over finance, science, and
              engineering references — with provenance and audit trails.
            </p>
          </div>
          <div className="grid-cell bg-background p-6">
            <h3 className="mb-2 text-sm font-medium">Publishers &amp; authors</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              New revenue channel into AI retrieval. Policy controls, usage
              receipts, and a real path to getting paid for your work.
            </p>
          </div>
          <div className="grid-cell bg-background p-6">
            <h3 className="mb-2 text-sm font-medium">Institutions</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Bring-your-own-access with existing subscriptions. Compliance,
              audit logs, and org-level controls.
            </p>
          </div>
          </div>
        </FadeIn>
      </section>

      {/* Roadmap */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-t border-border" />
      </div>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <FadeIn>
          <div className="flex items-center gap-2 mb-8">
            <span className="inline-block size-1.5 bg-accent" />
            <h2 className="font-pixel text-xs uppercase text-muted-foreground">
              Roadmap
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="mb-3 font-pixel text-sm">
              v0.1{" "}
              <span className="text-muted-foreground">— now</span>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Work manifest schema</li>
              <li>Passage locators + citation format</li>
              <li>Basic policy schema</li>
              <li>Reference provider + client</li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-pixel text-sm">
              v0.2{" "}
              <span className="text-muted-foreground">— next</span>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Usage receipts + payout reporting</li>
              <li>Versioning and change tracking</li>
              <li>No-verbatim / pointer-only mode</li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-pixel text-sm">
              v0.3{" "}
              <span className="text-muted-foreground">— later</span>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Hosted marketplace + discovery</li>
              <li>Publisher onboarding + payouts</li>
              <li>Institutional access integration</li>
            </ul>
          </div>
        </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-t border-border" />
      </div>

      <section id="waitlist" className="mx-auto max-w-5xl px-6 py-20">
        <FadeIn>
          <h2 className="mb-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            BCP is forming now
          </h2>
          <p className="mb-8 max-w-xl text-pretty leading-relaxed text-foreground">
            We&apos;re building the spec in the open. Drop your email and we&apos;ll keep you posted as things take shape.
          </p>
          <SignupForm />
          <div className="mt-4">
            <a
              href="mailto:hello@bookcontextprotocol.com"
              className="link-underline text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Or email us directly &rarr;
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <span className="text-xs text-muted-foreground">
            Book Context Protocol
          </span>
          <span className="text-xs text-muted-foreground">
            {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}
