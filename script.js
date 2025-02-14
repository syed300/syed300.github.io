document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input[type='number']");
  const labels = {
    totalUsers: "users",
    disabilityPercent: "%",
    improvementPercent: "%"
  };

  inputs.forEach(input => {
    input.addEventListener("input", () => {
      const label = input.nextElementSibling;
      label.textContent = input.value ? input.value + " " + labels[input.id] : "";
      label.style.opacity = input.value ? 1 : 0;
    });
  });

  document.getElementById("calculateBtn").addEventListener("click", () => {
    let valid = true;
    document.querySelectorAll("input[type='number']").forEach(input => {
      const value = parseFloat(input.value);
      const errorMsg = input.nextElementSibling.nextElementSibling;

      if (!value || value < 0) {
        input.classList.add("error");
        errorMsg.textContent = "Invalid input!";
        errorMsg.style.visibility = "visible";
        valid = false;
      } else {
        input.classList.remove("error");
        errorMsg.style.visibility = "hidden";
      }
    });

    if (valid) {
      const totalUsers = parseFloat(document.getElementById("totalUsers").value);
      const disabilityPercent = parseFloat(document.getElementById("disabilityPercent").value);
      const improvementPercent = parseFloat(document.getElementById("improvementPercent").value);
      const impact = Math.round(totalUsers * (disabilityPercent / 100) * (improvementPercent / 100));
      document.getElementById("resultText").innerHTML = `<strong>${impact} Users Will Benefit</strong>`;
      document.getElementById("resultCard").classList.add("show");
    }
  });

  document.getElementById("darkToggle").addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });
});
