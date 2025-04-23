document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  // Updated credentials
  const validUser = "Ganya";
  const validPass = "Ganeshisgood";

  if (username === validUser && password === validPass) {
    errorMsg.style.color = "green";
    errorMsg.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Replace with your actual dashboard path
    }, 1500);
  } else {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Invalid username or password.";
  }
});
