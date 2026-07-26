// Arkeos Terminal — referral page logic.
//
// No tracking behind this yet — the link is real and unique-ish, but
// nothing counts who clicks it or credits the referrer. The "move up the
// queue" copy on this page is aspirational for now. See README.

const STORAGE_KEY = 'arkeos_waitlist_user';
const SITE_URL = 'https://arkeos.xyz';

const record = readRecord();

if (!record) {
  // No local signup found — don't show a referral page with nothing to show.
  window.location.href = 'index.html';
} else {
  render(record);
}

function readRecord() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function render(record) {
  const link = `${SITE_URL}/?ref=${record.referralCode}`;
  document.getElementById('referral-link').value = link;
  document.getElementById('copy-btn').addEventListener('click', () => copyLink(link));

  const shareText = "i'm early on @arkeosxyz — execution intelligence for solana TCGs.\n\njoin the waitlist:";
  document.getElementById('share-x').href =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(link)}`;
  document.getElementById('share-send').addEventListener('click', () => sendLink(link, shareText));
}

async function copyLink(link) {
  const status = document.getElementById('copy-status');
  const input = document.getElementById('referral-link');
  try {
    await navigator.clipboard.writeText(link);
    status.textContent = 'copied.';
  } catch (error) {
    input.focus();
    input.select();
    status.textContent = 'text selected — press ctrl/cmd+c.';
  }
  setTimeout(() => (status.textContent = ''), 2500);
}

async function sendLink(link, text) {
  if (navigator.share) {
    try {
      await navigator.share({ title: 'Arkeos Terminal', text, url: link });
      return;
    } catch (error) {
      // user cancelled, or share isn't actually supported — fall through
    }
  }
  window.open(
    `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(text)}`,
    '_blank',
    'noopener'
  );
}
