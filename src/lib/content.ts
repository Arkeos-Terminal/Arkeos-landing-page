import { site } from "@/lib/site";

export const aboutLead =
  "Arkeos is a gacha platform. Smooth open, games on top of the rip, quests that make a bad rip count, and rewards paid from the games and the rips. Same cards as the big platforms. The reason to stay is better UI/UX, the first gacha platform with rakeback, generous rewards, speculative games, collection data, addictive quests, raffles, and much more.";

export const features = [
  {
    title: "Packs.",
    body: "The gacha machines. Price, EV, rarity odds, grails in the pack, and profit odds. Each rip gives XP toward the next tier. Open on this site with a wallet or Google. No Arkeos balance.",
  },
  {
    title: "Arcade.",
    body: "Call the type, or higher or lower. Both hang off a rip, and both are optional.",
  },
  {
    title: "Quests.",
    body: "Daily and monthly. Fun ones, not a chore list.",
  },
  {
    title: "Scoreboard.",
    body: "Your rip history. Spent, returned, up or down, and your best pull.",
  },
  {
    title: "Collection.",
    body: "Your slabs, with price, grade, pop, a chart, and recent sales.",
  },
  {
    title: "Rewards.",
    body: "Rakeback, a rip meter, a streak, a raffle, and weekly and monthly bonuses.",
  },
] as const;

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
      title: "1. What Arkeos Is",
      body: [
        `Arkeos ("we," "us") is a gacha platform for tokenized trading cards on Solana. Packs opened on Arkeos are Collector Crypt packs: Collector Crypt does the rip, and Arkeos wraps it. Arcade games, quests, and rewards are Arkeos features. Arcade payouts are paid from an Arkeos wallet. We do not custody your slabs, and we do not issue the packs.`,
      ],
    },
    {
      title: "2. Data Is Informational Only — Not a Guarantee",
      body: [
        `Expected value (EV), profit odds, rarity odds, and slab prices shown on Arkeos are figures at a point in time. They describe averages, not a promise for any single rip, call, or sale. A pack can still return less than you paid. An Arcade call can miss, and a miss keeps the stake. Past results are not indicative of future outcomes. We make reasonable efforts to keep figures current but do not warrant that any figure is complete, error-free, or live at the moment you act on it.`,
      ],
    },
    {
      title: "3. Gacha Mechanics Involve Randomness and Real Financial Risk",
      body: [
        "Opening a pack is a randomized mechanic. You may receive a slab worth less than you paid. Arcade games are optional bets on the next rip, priced so the game has an edge. No feature of Arkeos, including EV, profit odds, quests, or rewards, removes that risk or guarantees a profit. Only spend what you can afford to lose.",
      ],
    },
    {
      title: "4. Not Financial, Investment, or Legal Advice",
      body: [
        "Nothing on Arkeos constitutes financial, investment, tax, gambling, or legal advice. We do not recommend that you buy, sell, hold, or open any specific pack, card, or asset. You should make your own independent decisions and consult a qualified professional where appropriate.",
      ],
    },
    {
      title: "5. Third-Party Platforms and Assets",
      body: [
        "We have no control over, and accept no responsibility for, the solvency, security, accuracy, uptime, or conduct of Collector Crypt or any other third-party platform you reach through Arkeos, including their buyback commitments, vaulting arrangements, or ability to fulfill redemptions. A dispute about a pack, a slab, or a buyback is between you and that platform.",
      ],
    },
    {
      title: "6. Eligibility and Jurisdiction",
      body: [
        "You must meet the minimum legal age in your jurisdiction to use Arkeos and to participate in gacha, trading card, or collectible mechanics on any third-party platform. Gacha and loot-box-style mechanics are subject to varying, evolving regulation depending on your country or region. It is your responsibility to determine whether your use of Arkeos and any third-party platform is lawful where you live. Arkeos does not verify jurisdiction-specific legality on your behalf and may restrict access in regions where we determine such restriction is appropriate.",
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
  intro: `By accessing or using Arkeos ("we," "us"), you agree to these Terms. If you don't agree, don't use Arkeos.`,
  sections: [
    {
      title: "1. What Arkeos Is",
      body: [
        "Arkeos is a gacha platform for tokenized trading cards on Solana. Packs are Collector Crypt packs opened through Arkeos. Arcade, quests, and rewards are ours. We do not custody your slabs and we do not issue the packs. See the Risk Disclaimer for how rips, Arcade calls, and the figures on the site can lose you money.",
      ],
    },
    {
      title: "2. Eligibility",
      body: [
        "You must be of legal age in your jurisdiction to use Arkeos, and your use must comply with local law. We may restrict access in regions where we determine it's appropriate to do so.",
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
        "Don't: scrape or abuse Arkeos beyond normal use, attempt to reverse-engineer our systems, interfere with Arkeos's operation, or use it for unlawful purposes. We may suspend or terminate access for violations.",
      ],
    },
    {
      title: "5. No Financial or Investment Advice",
      body: [
        "Nothing on Arkeos is financial, investment, tax, gambling, or legal advice. See our Risk Disclaimer for full detail. You are responsible for your own decisions on any third-party platform.",
      ],
    },
    {
      title: "6. Intellectual Property",
      body: [
        "Arkeos's design, code, and content are owned by Arkeos or our licensors. You may not copy, resell, or redistribute Arkeos or its data feeds without our written permission.",
      ],
    },
    {
      title: "7. Disclaimer of Warranties",
      body: [
        'Arkeos is provided "as is." We don\'t guarantee Arkeos, or the data it displays, will be accurate, uninterrupted, or error-free.',
      ],
    },
    {
      title: "8. Limitation of Liability",
      body: [
        "To the maximum extent permitted by law, Arkeos is not liable for indirect, incidental, or consequential damages arising from your use of Arkeos, including losses from decisions made on third-party platforms based on data shown here.",
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
        "Wallet-based access (at full launch): your public wallet address, via Supabase, to authenticate access to Arkeos. We never ask for or store your private keys or seed phrase.",
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
        "To send waitlist and product updates, manage access to Arkeos, understand how the product is used, and improve it. We don't sell your personal data.",
      ],
    },
    {
      title: "4. Third-Party Processors",
      body: [
        "We use third-party services to operate Arkeos, including Loops.so (waitlist/email), Supabase (authentication), and Vercel (hosting). Each processes data under their own privacy terms in addition to this policy.",
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
        "We keep your data for as long as needed to provide Arkeos and for legitimate business purposes, or until you ask us to delete it.",
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
