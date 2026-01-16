const password = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", () => {
  const val = password.value;
  let score = 0;

  if (val.length >= 6) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  if (val.length >= 12) score++; // bonus for very long passwords

  updateStrength(score);
});

function updateStrength(score) {
  let strength = "";
  let color = "";

  switch(score) {
    case 0:
    case 1:
      strength = "Weak";
      color = "red";
      break;
    case 2:
      strength = "Medium";
      color = "orange";
      break;
    case 3:
      strength = "Strong";
      color = "yellowgreen";
      break;
    case 4:
    case 5:
      strength = "Very Strong";
      color = "green";
      break;
  }

  strengthBar.style.width = (score / 5 * 100) + "%";
  strengthBar.style.background = color;
  strengthText.textContent = strength;
}