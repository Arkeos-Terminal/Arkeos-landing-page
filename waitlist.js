// Vercel Serverless Function — POST /api/waitlist
// Zero config: Vercel auto-detects any file in /api as a function, no build step needed.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"); // or document.getElementById("your-form-id")
  const emailInput = document.querySelector('input[type="email"]');

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) return;

    try {
      // Your Loops API endpoint URL
      const LOOPS_ENDPOINT = "https://app.loops.so/api/newsletter-form/cmrpwh87403lq0j12kw6wenco";

      const response = await fetch(LOOPS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        // Redirect to referral page with email in URL
        window.location.href = `/refer?email=${encodeURIComponent(email)}`;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Submission failed. Check your connection.");
    }
  });
});
