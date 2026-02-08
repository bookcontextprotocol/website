"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    // TODO: Replace with your actual form endpoint (Formspree, Loops, Resend, etc.)
    // For now, simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2">
        <span className="inline-block size-1.5 bg-accent" />
        <p className="text-sm text-foreground">
          You&apos;re in. We&apos;ll keep you posted.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className={cn(
          "h-10 border border-border bg-muted px-4 text-sm text-foreground placeholder:text-muted-foreground transition-colors hover:bg-[#1e1e1e]",
          "focus:border-foreground focus:outline-none",
          "sm:w-64"
        )}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "btn-press btn-glow inline-flex h-10 items-center justify-center border border-foreground bg-foreground px-5 text-sm text-background",
          "disabled:opacity-50"
        )}
      >
        {status === "submitting" ? "Subscribing..." : "Stay in the loop"}
      </button>
    </form>
  );
}
