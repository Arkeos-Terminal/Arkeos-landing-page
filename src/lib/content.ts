import { site } from "@/lib/site";

export const features = [
  {
    title: "Live Gacha EV.",
    body: "Real-time, inventory-based EV on every gacha machine — recalculated as pulls deplete the pool, not set once at launch.",
  },
  {
    title: "True Profit Odds.",
    body: "The exact probability a given pull returns more than you paid for it.",
  },
  {
    title: "Arbitrage Engine.",
    body: "Flags the moment a secondary listing drops below a protocol's own buyback price.",
  },
  {
    title: "True Liquid Net Worth.",
    body: "Your collection priced at guaranteed, instant cash-out value — then routed to the best venue to exit it.",
  },
  {
    title: "Onchain, not self-reported.",
    body: "Every number is pulled directly from Solana RPC data, not a platform's own dashboard.",
  },
] as const;

export const aboutBody =
  "Arkeos Terminal is an institutional-grade execution intelligence platform for tokenized TCGs and RWA collectibles on Solana. It indexes raw Solana RPC data directly, turning onchain activity into real-time EV, arbitrage, and portfolio data.";

export type LegalBlock = {
  heading: string;
  updated?: string;
  intro?: string;
  sections: { title: string; body: string[] }[];
};

export const riskDisclaimer: LegalBlock = {
  heading: "Risk Disclaimer — Gacha & Trading Card Mechanics",
  updated: site.lastUpdated,
  sections: [
    {
      title: "1. Arkeos Terminal Is Not an Operator",
      body: [
        `Arkeos Terminal ("Arkeos," "we," "us") is a data and analytics platform. We do not operate, control, custody, or issue any gacha machine, trading card pack, marketplace listing, or vault referenced on the Terminal. All such products are operated by independent third-party platforms (including, without limitation, Collector Crypt, Beezle, and other Solana-based protocols and marketplaces). Arkeos indexes publicly available onchain data from these platforms; we are not a party to any transaction you make on them.`,
      ],
    },
    {
      title: "2. Data Is Informational Only — Not a Guarantee",
      body: [
        `Expected value (EV), "hot"/"cold" machine flags, profit odds, arbitrage alerts, and net worth figures shown on the Terminal are statistical calculations derived from onchain data at a point in time. They describe probabilistic averages, not predictions or guarantees for any individual pull, trade, or sale. A machine flagged as positive-EV can still return a result worth less than what you paid — that is the nature of probability, not an error in our data. Past figures, including historical EV or "hot" streaks, are not indicative of future or individual outcomes. We make reasonable efforts to keep data accurate and current but do not warrant that any figure is complete, error-free, or reflects real-time onchain state at the exact moment you act on it. You are solely responsible for verifying information independently before making any purchase, trade, or sale on a third-party platform.`,
      ],
    },
    {
      title: "3. Gacha Mechanics Involve Randomness and Real Financial Risk",
      body: [
        "Opening a tokenized pack or gacha machine is a randomized mechanic. You may receive an item worth significantly less than the amount you paid. No feature of the Terminal — including EV tracking, profit odds, or arbitrage detection — eliminates this risk or guarantees a profitable outcome. Only spend what you can afford to lose.",
      ],
    },
    {
      title: "4. Not Financial, Investment, or Legal Advice",
      body: [
        "Nothing on Arkeos Terminal constitutes financial, investment, tax, gambling, or legal advice. We do not recommend that you buy, sell, hold, or open any specific pack, card, or asset. You should make your own independent decisions and consult a qualified professional where appropriate.",
      ],
    },
    {
      title: "5. Third-Party Platforms and Assets",
      body: [
        "We have no control over, and accept no responsibility for, the solvency, security, accuracy, uptime, or conduct of any third-party platform indexed by the Terminal, including their buyback commitments, vaulting arrangements, or ability to fulfill redemptions. Any dispute arising from a transaction on a third-party platform is between you and that platform.",
      ],
    },
    {
      title: "6. Eligibility and Jurisdiction",
      body: [
        "You must meet the minimum legal age in your jurisdiction to use the Terminal and to participate in gacha, trading card, or collectible mechanics on any third-party platform. Gacha and loot-box-style mechanics are subject to varying, evolving regulation depending on your country or region. It is your responsibility to determine whether your use of the Terminal and any third-party platform is lawful where you live. Arkeos does not verify jurisdiction-specific legality on your behalf and may restrict access in regions where we determine such restriction is appropriate.",
      ],
    },
    {
      title: "7. Play Responsibly",
      body: [
        "If opening packs or gacha machines stops feeling fun, or starts to feel like something you can't stop, that's worth paying attention to. Set a budget before you start, and stop when you reach it — regardless of what the odds say.",
      ],
    },
  ],
};

export const termsOfService: LegalBlock = {
  heading: "Terms of Service",
  updated: site.lastUpdated,
  intro: `By accessing or using Arkeos Terminal ("Arkeos," "we," "us," "the Terminal"), you agree to these Terms. If you don't agree, don't use the Terminal.`,
  sections: [
    {
      title: "1. What Arkeos Is",
      body: [
        "Arkeos Terminal is a data and analytics platform for tokenized trading cards and collectibles on Solana. We index publicly available onchain data to surface EV, arbitrage, and portfolio information. We do not operate any gacha machine, marketplace, or vault — those are run by independent third-party platforms. See our Risk Disclaimer for more on this distinction and on data limitations.",
      ],
    },
    {
      title: "2. Eligibility",
      body: [
        "You must be of legal age in your jurisdiction to use the Terminal, and your use must comply with local law. We may restrict access in regions where we determine it's appropriate to do so.",
      ],
    },
    {
      title: "3. Access During Pre-Alpha",
      body: [
        "Access is currently limited and invite/waitlist-based. We may change, suspend, or revoke access at our discretion during this stage without notice, including to fix issues, manage load, or comply with legal requirements.",
      ],
    },
    {
      title: "4. Acceptable Use",
      body: [
        "Don't: scrape or abuse the Terminal beyond normal use, attempt to reverse-engineer our systems, interfere with the Terminal's operation, or use it for unlawful purposes. We may suspend or terminate access for violations.",
      ],
    },
    {
      title: "5. No Financial or Investment Advice",
      body: [
        "Nothing on the Terminal is financial, investment, tax, gambling, or legal advice. See our Risk Disclaimer for full detail. You are responsible for your own decisions on any third-party platform.",
      ],
    },
    {
      title: "6. Intellectual Property",
      body: [
        "The Terminal's design, code, and content are owned by Arkeos or our licensors. You may not copy, resell, or redistribute the Terminal or its data feeds without our written permission.",
      ],
    },
    {
      title: "7. Disclaimer of Warranties",
      body: [
        'The Terminal is provided "as is." We don\'t guarantee the Terminal, or the data it displays, will be accurate, uninterrupted, or error-free.',
      ],
    },
    {
      title: "8. Limitation of Liability",
      body: [
        "To the maximum extent permitted by law, Arkeos is not liable for indirect, incidental, or consequential damages arising from your use of the Terminal, including losses from decisions made on third-party platforms based on data shown here.",
      ],
    },
    {
      title: "9. Changes to These Terms",
      body: [
        "We may update these Terms as the product evolves. Continued use after an update means you accept the revised Terms.",
      ],
    },
    {
      title: "10. Contact",
      body: [`Questions about these Terms: ${site.supportEmail}`],
    },
  ],
};

export const privacyPolicy: LegalBlock = {
  heading: "Privacy Policy",
  updated: site.lastUpdated,
  sections: [
    {
      title: "1. What We Collect",
      body: [
        "Waitlist signup: your email address, via our waitlist provider (Loops.so).",
        "Wallet-based access (at full launch): your public wallet address, via Supabase, to authenticate access to the Terminal. We never ask for or store your private keys or seed phrase.",
        "Basic usage data: standard web logs and analytics (e.g. pages visited, device/browser type) collected through our hosting provider (Vercel) and any analytics tools we add.",
      ],
    },
    {
      title: "2. What We Don't Collect",
      body: [
        "We don't collect private keys, seed phrases, or custody any funds or assets. We don't require KYC to join the waitlist.",
      ],
    },
    {
      title: "3. How We Use It",
      body: [
        "To send waitlist and product updates, manage access to the Terminal, understand how the product is used, and improve it. We don't sell your personal data.",
      ],
    },
    {
      title: "4. Third-Party Processors",
      body: [
        "We use third-party services to operate the Terminal, including Loops.so (waitlist/email), Supabase (authentication), and Vercel (hosting). Each processes data under their own privacy terms in addition to this policy.",
      ],
    },
    {
      title: "5. Cookies & Analytics",
      body: [
        "We may use cookies or similar technology for basic site analytics. You can control cookies through your browser settings.",
      ],
    },
    {
      title: "6. Data Retention",
      body: [
        "We keep your data for as long as needed to provide the Terminal and for legitimate business purposes, or until you ask us to delete it.",
      ],
    },
    {
      title: "7. Your Rights",
      body: [
        `Depending on where you live, you may have the right to access, correct, or delete your personal data. Contact us to make a request.`,
      ],
    },
    {
      title: "8. Security",
      body: [
        "We take reasonable measures to protect your data, but no system is perfectly secure, and we can't guarantee absolute security.",
      ],
    },
    {
      title: "9. Changes to This Policy",
      body: [
        "We may update this policy as the product evolves. Material changes will be reflected by updating the date above.",
      ],
    },
    {
      title: "10. Contact",
      body: [
        `Questions about this policy, or to make a data request: ${site.supportEmail}`,
      ],
    },
  ],
};
