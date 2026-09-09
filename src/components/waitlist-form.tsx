import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { joinWaitlist } from "@/lib/waitlist";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm({ className }: { className?: string }) {
  const join = useServerFn(joinWaitlist);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim().toLowerCase();
    if (!EMAIL_RE.test(value)) {
      setStatus("error");
      setMessage("Enter a valid email.");
      return;
    }
    setStatus("submitting");
    setMessage("");
    try {
      const result = await join({ data: { email: value } });
      if (result.ok) {
        setStatus("success");
        setMessage("You're on the list. We'll be in touch.");
      } else {
        setStatus("error");
        setMessage(result.error);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <p
        className={cn(
          "hero-enter hero-enter-d3 text-center text-sm text-muted",
          className,
        )}
        role="status"
      >
        {message}
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "hero-enter hero-enter-d3 flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center",
        className,
      )}
      noValidate
    >
      <label className="sr-only" htmlFor="waitlist-email">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        name="email"
        autoComplete="email"
        inputMode="email"
        placeholder="you@email.com"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (status === "error") {
            setStatus("idle");
            setMessage("");
          }
        }}
        disabled={status === "submitting"}
        className={cn(
          "h-12 min-h-12 flex-1 rounded-pill border border-line bg-surface px-5",
          "text-sm text-fg placeholder:text-subtle",
          "transition-[border-color,box-shadow] duration-quick ease-out",
          "focus-visible:border-line-strong focus-visible:outline-none focus-visible:shadow-focus",
          "disabled:opacity-60",
        )}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "h-12 min-h-12 shrink-0 rounded-pill border border-line-strong bg-surface-2 px-7",
          "text-sm font-medium text-fg",
          "transition-[transform,background-color,border-color] duration-quick ease-out",
          "hover:border-fg/40 hover:bg-surface-2",
          "active:scale-press",
          "disabled:opacity-60",
        )}
      >
        {status === "submitting" ? "Joining…" : "Join"}
      </button>
      {message && status === "error" ? (
        <p className="w-full text-center text-xs text-danger" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
