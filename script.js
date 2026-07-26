// Arkeos Terminal — waitlist form handling.
// Posts to /api/waitlist (a Vercel serverless function), then hands off to
// refer.html with a locally-generated referral record. Referral counts are
// placeholder/local until a real backend tracks them — see README.

const form = document.getElementById('waitlist-form');
const emailInput = document.getElementById('email');
const button = document.getElementById('join-btn');
const status = document.getElementById('form-status');

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STORAGE_KEY = 'arkeos_waitlist_user';

const referredBy = new URLSearchParams(window.location.search).get('ref');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (!EMAIL_PATTERN.test(email)) {
    setStatus('enter a valid email to continue.', 'error');
    emailInput.focus();
    return;
  }

  setLoading(true);
  setStatus('', null);

  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, ref: referredBy || undefined }),
    });

    if (!response.ok) throw new Error('Request failed');

    saveLocalRecord(email);
    window.location.href = 'refer.html';
  } catch (error) {
    setStatus('something broke on our end — try again.', 'error');
    setLoading(false);
  }
});

function saveLocalRecord(email) {
  const record = {
    email,
    referralCode: generateReferralCode(email),
    referralCount: 0,
    referredBy: referredBy || null,
    joinedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch (error) {
    // localStorage unavailable (private browsing, etc.) — refer.html will
    // just bounce back here, which is an acceptable degradation for now.
  }
}

function generateReferralCode(email) {
  const seed = `${email.toLowerCase().trim()}-${Date.now()}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36).toUpperCase().padEnd(6, '0').slice(0, 6);
}

function setLoading(isLoading) {
  button.disabled = isLoading;
  button.textContent = isLoading ? '···' : 'Join';
}

function setStatus(message, type) {
  status.textContent = message;
  status.classList.remove('text-emerald-400', 'text-red-400');
  if (type === 'success') status.classList.add('text-emerald-400');
  if (type === 'error') status.classList.add('text-red-400');
}
