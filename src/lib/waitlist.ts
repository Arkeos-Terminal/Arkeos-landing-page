import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { LOOPS_FORM_ENDPOINT } from "@/lib/site";

const emailSchema = z.object({
  email: z.string().trim().email("Enter a valid email"),
});

export type WaitlistResult =
  | { ok: true }
  | { ok: false; error: string };

function isPlaceholderEndpoint(url: string) {
  return !url || url.includes("ENTER_LOOPS_ENDPOINT_HERE") || !/^https?:\/\//i.test(url);
}

export const joinWaitlist = createServerFn({ method: "POST" })
  .validator(emailSchema)
  .handler(async ({ data }): Promise<WaitlistResult> => {
    const email = data.email.toLowerCase();

    if (isPlaceholderEndpoint(LOOPS_FORM_ENDPOINT)) {
      // Form is wired; paste the Loops URL into src/lib/site.ts to go live.
      return { ok: true };
    }

    const body = new URLSearchParams({
      email,
      userGroup: "Waitlist",
      source: "arkeos.xyz",
    });

    try {
      const response = await fetch(LOOPS_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        if (response.status === 400 || response.status === 409) {
          // Already subscribed still counts as success for the visitor.
          if (/already|exists|subscribed/i.test(text)) {
            return { ok: true };
          }
        }
        return {
          ok: false,
          error: "Could not join the waitlist. Try again in a moment.",
        };
      }

      return { ok: true };
    } catch {
      return {
        ok: false,
        error: "Network error. Check your connection and try again.",
      };
    }
  });
