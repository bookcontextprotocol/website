"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName || !lastName || !email) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
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

  const inputClasses =
    "h-11 border border-border bg-muted px-4 text-sm text-foreground placeholder:text-muted-foreground transition-colors hover:bg-[#1e1e1e] focus:border-foreground focus:outline-none";

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 sm:max-w-lg">
        {/* Row 1: First name / Last name */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            className={inputClasses}
          />
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            className={inputClasses}
          />
        </div>
        {/* Row 2: Email / Submit */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[3fr_2fr]">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={inputClasses}
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className={cn(
              "btn-press btn-glow h-11 border border-foreground bg-foreground text-sm text-background transition-colors",
              "disabled:opacity-50"
            )}
          >
            {status === "submitting" ? "Subscribing..." : "Stay in the loop"}
          </button>
        </div>
      </div>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">{errorMessage}</p>
      )}
    </form>
  );
}
