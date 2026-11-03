/* KRISHHHVERSE — Personal portfolio
   Add your real public profile links below. Leave a value empty until ready. */
const PROFILE_LINKS = {
  email: "",       // Example: "mailto:yourname@example.com"
  github: "",      // Example: "https://github.com/yourusername"
  linkedin: "",    // Example: "https://www.linkedin.com/in/yourusername/"
  instagram: ""    // Example: "https://www.instagram.com/yourusername/"
};

const profileImage = document.getElementById("profileImage");
const portraitFallback = document.getElementById("portraitFallback");
if (profileImage) {
  profileImage.addEventListener("load", () => {
    profileImage.style.display = "block";
    portraitFallback.style.display = "none";
  });
  profileImage.addEventListener("error", () => {
    profileImage.style.display = "none";
    portraitFallback.style.display = "flex";
  });
  // Add a src attribute in index.html after placing your photo in assets/.
  if (profileImage.hasAttribute("src") && profileImage.complete && profileImage.naturalWidth > 0) {
    profileImage.style.display = "block";
    portraitFallback.style.display = "none";
  }
}

// Reveal elements gently as they enter the viewport.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

// Scroll progress indicator.
const progressBar = document.getElementById("scrollProgress");
function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}
window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

// Skill category filters.
const filterButtons = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-card");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    skillCards.forEach((card) => {
      card.hidden = selected !== "all" && card.dataset.category !== selected;
    });
  });
});

// Mobile navigation.
const menuToggle = document.getElementById("menuToggle");
const desktopNav = document.querySelector(".desktop-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = desktopNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  document.body.classList.toggle("menu-open", isOpen);
});
desktopNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    desktopNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
  });
});

// Contact links stay inactive until real URLs are added above.
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}
document.querySelectorAll("[data-profile-link]").forEach((link) => {
  const key = link.dataset.profileLink;
  const destination = PROFILE_LINKS[key];
  if (destination && destination.trim()) {
    link.href = destination;
    if (!destination.startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast(`Add your ${key} details in script.js first.`);
    });
  }
});

document.getElementById("yearNow").textContent = new Date().getFullYear();
