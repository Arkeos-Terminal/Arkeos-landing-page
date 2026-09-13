/**
 * Site-wide constants. The Loops waitlist URL is the one value you must fill in
 * before launch — paste your form endpoint from Loops → Forms.
 *
 * Example: https://app.loops.so/api/newsletter-form/clxxxxxxxx
 */
export const LOOPS_FORM_ENDPOINT = "https://app.loops.so/api/newsletter-form/cmrpwh87403lq0j12kw6wenco";

export const site = {
  name: "Arkeos Terminal",
  shortName: "Arkeos",
  url: "https://www.arkeos.xyz",
  description:
    "Arkeos is the terminal for tokenized TCGs. You'll be invited for early access as soon as we launch.",
  xUrl: "https://x.com/arkeosxyz",
  xHandle: "@arkeosxyz",
  email: "terminal@arkeos.xyz",
  supportEmail: "support@arkeos.xyz",
  lastUpdated: "09/08/26",
} as const;
