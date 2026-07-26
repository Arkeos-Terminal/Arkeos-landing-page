// Vercel Serverless Function — POST /api/waitlist
// Zero config: Vercel auto-detects any file in /api as a function, no build step needed.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.querySelector('input[type="email"]');

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) return;

    try {
      // 1. Format data as URL-encoded form parameters
      const bodyData = new URLSearchParams();
      bodyData.append("email", email);

      // 2. Send request to Loops form endpoint
      const response = await fetch("https://app.loops.so/api/newsletter-form/cmrpwh874031q0j12kw6wenco", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: bodyData
      });

      // 3. Redirect to referral page
      if (response.ok || response.status === 200) {
        window.location.href = `/refer?email=${encodeURIComponent(email)}`;
      } else {
        window.location.href = `/refer?email=${encodeURIComponent(email)}`;
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback redirect so user flow never breaks
      window.location.href = `/refer?email=${encodeURIComponent(email)}`;
    }
  });
});
