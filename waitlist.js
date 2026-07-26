// Vercel Serverless Function — POST /api/waitlist
// Zero config: Vercel auto-detects any file in /api as a function, no build step needed.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("waitlist-form");
  const emailInput = form ? form.querySelector('input[type="email"]') : null;

  if (!form) {
    console.error("Form with id 'waitlist-form' not found!");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevents page refresh

    const email = emailInput ? emailInput.value.trim() : "";
    if (!email) return;

    try {
      const bodyData = new URLSearchParams();
      bodyData.append("email", email);

      // Send request to Loops
      await fetch("https://app.loops.so/api/newsletter-form/cmrpwh874031q0j12kw6wenco", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: bodyData,
        mode: "no-cors" // Prevents CORS blocking
      });

      // Redirect immediately after post
      window.location.href = `/refer?email=${encodeURIComponent(email)}`;
    } catch (err) {
      console.error("Submission error:", err);
      window.location.href = `/refer?email=${encodeURIComponent(email)}`;
    }
  });
});
