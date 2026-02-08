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

  const inputClasses = cn(
    "h-10 border border-border bg-muted px-4 text-sm text-foreground placeholder:text-muted-foreground transition-colors hover:bg-[#1e1e1e]",
    "focus:border-foreground focus:outline-none"
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          className={cn(inputClasses, "sm:w-40")}
        />
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          className={cn(inputClasses, "sm:w-40")}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={cn(inputClasses, "sm:w-64")}
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
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}
    </form>
  );
}
