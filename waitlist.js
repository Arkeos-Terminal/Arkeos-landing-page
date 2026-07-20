// Vercel Serverless Function — POST /api/waitlist
// Zero config: Vercel auto-detects any file in /api as a function, no build step needed.

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};
  const isValid = typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // TODO: this currently only logs the signup. Wire it to a real destination
  // before launch — a few common options:
  //   Resend Audiences  https://resend.com/docs/dashboard/audiences/introduction
  //   ConvertKit API    https://developers.convertkit.com
  //   beehiiv API       https://developers.beehiiv.com
  //   Supabase table    https://supabase.com/docs/guides/database
  console.log('[waitlist] new signup:', email);

  return res.status(200).json({ success: true });
};

// ... [Your existing script code, if any] ...


// === LOOPS WAITLIST INTEGRATION ===
document.addEventListener("DOMContentLoaded", () => {
  const LOOPS_ENDPOINT = "https://app.loops.so/api/newsletter-form/cmrpwh87403lq0j12kw6wenco";

  const form = document.getElementById("waitlist-form");
  const emailInput = document.getElementById("email-input");
  const submitBtn = document.getElementById("submit-btn");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    // ... handling submission
  });
});
