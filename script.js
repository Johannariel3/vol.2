const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");

const loginPage = document.getElementById("loginPage");
const homePage = document.getElementById("homePage");

const bgMusic = document.getElementById("bgMusic");
const logoutBtn = document.getElementById("logoutBtn");
const pauseMusicBtn = document.getElementById("pauseMusic");

// Cek jika user sudah login sebelumnya
window.addEventListener("load", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    showHomePage();
    playMusic();
  }
});

// Login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim().toLowerCase();

  // Username dan password bisa kamu ganti
  if (username === "khaira" && password === "23052006") {
    localStorage.setItem("isLoggedIn", "true");
    errorMsg.textContent = "";
    showHomePage();
    playMusic();
  } else {
    errorMsg.textContent = "Salah, cintakuuu. coba lagii yaa";
  }
});

// Tampilkan halaman utama
function showHomePage() {
  loginPage.classList.add("hidden");
  homePage.classList.remove("hidden");
}

// Tampilkan halaman login
function showLoginPage() {
  homePage.classList.add("hidden");
  loginPage.classList.remove("hidden");
}

// Play music
function playMusic() {
  bgMusic.play().catch(() => {
    console.log("Autoplay diblokir browser. User perlu interaksi.");
  });
}

// Pause / Play music button
pauseMusicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    pauseMusicBtn.textContent = "Pause Lagu 🎵";
  } else {
    bgMusic.pause();
    pauseMusicBtn.textContent = "Play Lagu 🎶";
  }
});

// Logout
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  bgMusic.pause();
  bgMusic.currentTime = 0;
  usernameInput.value = "";
  passwordInput.value = "";
  showLoginPage();
});