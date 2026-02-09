"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

const examples = [
  {
    tool: "search",
    query: `search("how repetition creates false beliefs", { author: "Kahneman" })`,
    passage:
      "\u201CA reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.\u201D",
    verbatim: true,
    isbn: "isbn:9780374533557",
    location: "pt. 1, ch. 5",
    hash: "7b2f4a",
    policyLabel: "verbatim",
    policyDetail: "allowed / max 500 chars",
    receiptUsage: "384 chars",
    receiptCost: "$0.0029",
  },
  {
    tool: "fetch",
    query: `fetch("bcp:9780226458113/ch.12/p.3", { max_chars: 500 })`,
    passage:
      "Kuhn argues that competing scientific paradigms cannot be adjudicated through logical proof alone\u2009\u2014\u2009each paradigm defines its own standards of evidence and evaluation.",
    verbatim: false,
    isbn: "isbn:9780226458113",
    location: "ch. 12, para. 3",
    hash: "summary",
    policyLabel: "verbatim",
    policyDetail: "denied / summary only",
    receiptUsage: "1 passage",
    receiptCost: "$0.0051",
  },
  {
    tool: "cite",
    query: `cite("bcp:9781476733524/epilogue", { style: "chicago" })`,
    passage: null,
    verbatim: false,
    isbn: null,
    location: null,
    hash: null,
    policyLabel: "citation",
    policyDetail: "allowed / unlimited",
    receiptUsage: "1 citation",
    receiptCost: "no charge",
  },
  {
    tool: "policy",
    query: `policy("bcp:9780201896831")`,
    passage: null,
    verbatim: false,
    isbn: null,
    location: null,
    hash: null,
    policyLabel: null,
    policyDetail: null,
    receiptUsage: null,
    receiptCost: null,
  },
];

function ExampleContent({ ex }: { ex: (typeof examples)[number] }) {
  return (
    <>
      {/* Request label */}
      <div className="flex items-center gap-2 pb-3 pl-6">
        <span className="inline-block size-1.5 bg-accent" />
        <span className="font-pixel text-xs text-muted-foreground">
          request
        </span>
      </div>

      {/* Query */}
      <div className="border border-border bg-muted p-6">
        <p className="font-pixel text-sm break-all sm:break-normal">
          {ex.query}
        </p>
      </div>

      {/* Response label */}
      <div className="flex items-center gap-2 py-3 pl-6">
        <span className="inline-block size-1.5 bg-accent" />
        <span className="font-pixel text-xs text-muted-foreground">
          response
        </span>
      </div>

      {/* Response */}
      <div className="border border-border p-6">
        {ex.passage ? (
          <>
            <p
              className={`text-sm leading-relaxed text-foreground/90 ${ex.verbatim ? "italic" : ""}`}
            >
              {ex.passage}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-pixel text-xs text-muted-foreground">
              <span>{ex.isbn}</span>
              <span className="text-border">/</span>
              <span>{ex.location}</span>
              <span className="text-border">/</span>
              <span>{ex.hash}</span>
            </div>
          </>
        ) : ex.tool === "cite" ? (
          <p className="text-sm leading-relaxed text-foreground/90">
            Mukherjee, Siddhartha.{" "}
            <span className="italic">
              The Gene: An Intimate History
            </span>
            . New York: Scribner, 2016. Epilogue.
          </p>
        ) : (
          <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
            <span className="font-pixel text-muted-foreground">work</span>
            <span>The Art of Computer Programming, Vol. 1</span>
            <span className="font-pixel text-muted-foreground">author</span>
            <span>Knuth, Donald E.</span>
            <span className="font-pixel text-muted-foreground">access</span>
            <span>licensed</span>
            <span className="font-pixel text-muted-foreground">verbatim</span>
            <span>
              allowed{" "}
              <span className="font-pixel text-muted-foreground">/ max 300 chars</span>
            </span>
            <span className="font-pixel text-muted-foreground">summary</span>
            <span>
              allowed{" "}
              <span className="font-pixel text-muted-foreground">/ unlimited</span>
            </span>
            <span className="font-pixel text-muted-foreground">citation</span>
            <span>
              allowed{" "}
              <span className="font-pixel text-muted-foreground">/ unlimited</span>
            </span>
            <span className="font-pixel text-muted-foreground">cache</span>
            <span>24h</span>
            <span className="font-pixel text-muted-foreground">pricing</span>
            <span>
              <span className="text-accent">$0.004</span>{" "}
              <span className="font-pixel text-muted-foreground">/ passage</span>
            </span>
          </div>
        )}
      </div>

      {/* Policy + Receipt (dynamic per example, hidden for policy tool) */}
      {ex.policyLabel && (
        <div className="mt-8 border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="border-b border-border p-6 sm:border-b-0 sm:border-r">
              <div className="mb-2 font-pixel text-xs text-muted-foreground">
                policy
              </div>
              <p className="text-sm">
                <span className="text-muted-foreground">
                  {ex.policyLabel}
                </span>{" "}
                {ex.policyDetail}
              </p>
            </div>
            <div className="p-6">
              <div className="mb-2 font-pixel text-xs text-muted-foreground">
                receipt
              </div>
              <p className="text-sm tabular-nums">
                {ex.receiptUsage}
                <span className="text-muted-foreground"> / </span>
                <span
                  className={
                    ex.receiptCost === "no charge"
                      ? "text-muted-foreground"
                      : "text-accent"
                  }
                >
                  {ex.receiptCost}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function ExampleCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [minHeight, setMinHeight] = useState<number | undefined>(undefined);
  const measureRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % examples.length);
  }, []);

  // Measure all examples to find the tallest and lock container height
  useEffect(() => {
    function measure() {
      if (!measureRef.current) return;
      const children = measureRef.current.children;
      let max = 0;
      for (let i = 0; i < children.length; i++) {
        max = Math.max(max, (children[i] as HTMLElement).offsetHeight);
      }
      if (max > 0) setMinHeight(max);
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next, active]);

  const ex = examples[active];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Hidden measurement container — renders all examples to find max height */}
      <div
        ref={measureRef}
        aria-hidden
        className="pointer-events-none invisible absolute left-0 right-0 overflow-hidden"
        style={{ position: "absolute", zIndex: -1 }}
      >
        {examples.map((item) => (
          <div key={item.tool}>
            <ExampleContent ex={item} />
          </div>
        ))}
      </div>

      {/* Tool tabs */}
      <div className="flex items-center gap-1 mb-6">
        {examples.map((item, i) => (
          <button
            key={item.tool}
            onClick={() => setActive(i)}
            className={`btn-press font-pixel text-xs px-3 py-1.5 border transition-colors ${
              i === active
                ? "border-foreground text-foreground"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/50"
            }`}
          >
            {item.tool}
          </button>
        ))}
      </div>

      {/* Animated example */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={minHeight ? { minHeight } : undefined}
        >
          <ExampleContent ex={ex} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
