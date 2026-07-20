document.addEventListener("DOMContentLoaded", () => {
  const LOOPS_ENDPOINT = "https://app.loops.so/api/newsletter-form/cmrpwh874031q0j12kw6wenco";

  const form = document.getElementById("waitlist-form");
  const emailInput = document.getElementById("email");
  const submitBtn = document.getElementById("join-btn");
  const formStatus = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    if (!email) return;

    // Loading State
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = "JOINING...";
    submitBtn.disabled = true;

    try {
      // Use native URLSearchParams for clean encoding
      const payload = new URLSearchParams();
      payload.append("email", email);

      const response = await fetch(LOOPS_ENDPOINT, {
        method: "POST",
        body: payload
      });

      if (response.ok) {
        // Success UI
        submitBtn.innerText = "YOU'RE IN!";
        submitBtn.classList.add("text-emerald-400", "border-emerald-500");
        emailInput.value = "";
        emailInput.placeholder = "Transmission Received";
        emailInput.disabled = true;
        if (formStatus) {
          formStatus.innerText = "Spot secured. Check your inbox soon.";
          formStatus.className = "font-ui mt-4 text-sm min-h-[1.25em] text-emerald-400";
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Loops API Response Error:", response.status, errorData);
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Waitlist Error:", error);
      submitBtn.innerText = "TRY AGAIN";
      submitBtn.disabled = false;
      if (formStatus) {
        formStatus.innerText = "Something went wrong. Please try again.";
        formStatus.className = "font-ui mt-4 text-sm min-h-[1.25em] text-red-400";
      }
      setTimeout(() => {
        submitBtn.innerText = originalBtnText;
        if (formStatus) formStatus.innerText = "";
      }, 3000);
    }
  });
});
