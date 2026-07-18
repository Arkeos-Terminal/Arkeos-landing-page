// Arkeos Terminal — waitlist form handling.
// Posts to /api/waitlist (a Vercel serverless function). See api/waitlist.js
// and the README for how to connect that endpoint to a real email service.

const form = document.getElementById('waitlist-form');
const emailInput = document.getElementById('email');
const button = document.getElementById('join-btn');
const status = document.getElementById('form-status');

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      body: JSON.stringify({ email }),
    });

    if (!response.ok) throw new Error('Request failed');

    setStatus("you're on the list — we'll be in touch.", 'success');
    form.reset();
  } catch (error) {
    setStatus('something broke on our end — try again.', 'error');
  } finally {
    setLoading(false);
  }
});

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
