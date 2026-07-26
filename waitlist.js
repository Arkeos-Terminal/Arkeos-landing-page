// Vercel Serverless Function — POST /api/waitlist
// Zero config: Vercel auto-detects any file in /api as a function, no build step needed.

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, ref } = req.body || {};
  const isValid = typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // TODO: this currently only logs the signup. Wire it to a real destination
  // before launch, and use `ref` (the code from the referring link, if any)
  // to credit whoever sent them and increment that person's referral count.
  //   Resend Audiences  https://resend.com/docs/dashboard/audiences/introduction
  //   ConvertKit API    https://developers.convertkit.com
  //   beehiiv API       https://developers.beehiiv.com
  //   Supabase table    https://supabase.com/docs/guides/database
  console.log('[waitlist] new signup:', email, ref ? `(referred by ${ref})` : '');

  return res.status(200).json({ success: true });
};
