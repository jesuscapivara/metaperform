// ============================================
// THEME MANAGEMENT - Dark Mode Detection
// ============================================

(function () {
  "use strict";

  // Detectar preferência do sistema
  function getSystemTheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  }

  // Obter tema salvo ou usar preferência do sistema
  function getTheme() {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
      }
    } catch (e) {
      // localStorage não disponível
    }
    return getSystemTheme();
  }

  // Aplicar tema
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // localStorage não disponível
    }
    updateThemeToggle(theme);
  }

  // Inicializar tema na página
  function initTheme() {
    // Verificar se o tema já foi aplicado pelo script inline
    const currentTheme = document.documentElement.getAttribute("data-theme");

    // Se não houver tema aplicado, aplicar agora
    if (!currentTheme) {
      const theme = getTheme();
      applyTheme(theme);
    } else {
      // Se já houver tema, apenas atualizar os botões
      updateThemeToggle(currentTheme);
    }

    // Observar mudanças na preferência do sistema (se não houver tema salvo)
    try {
      if (!localStorage.getItem("theme")) {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.addEventListener("change", (e) => {
          if (!localStorage.getItem("theme")) {
            applyTheme(e.matches ? "dark" : "light");
          }
        });
      }
    } catch (e) {
      // localStorage não disponível, apenas observar mudanças
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", (e) => {
        applyTheme(e.matches ? "dark" : "light");
      });
    }
  }

  // Alternar tema
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  }

  // Atualizar botão de toggle
  function updateThemeToggle(theme) {
    const toggleBtn = document.getElementById("themeToggle");
    const toggleIcon = document.getElementById("themeToggleIcon");
    const toggleBtnMobile = document.getElementById("themeToggleMobile");
    const toggleIconMobile = document.getElementById("themeToggleIconMobile");

    if (toggleIcon) {
      toggleIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
    if (toggleBtn) {
      toggleBtn.setAttribute(
        "aria-label",
        theme === "dark"
          ? "Alternar para tema claro"
          : "Alternar para tema escuro"
      );
    }
    if (toggleIconMobile) {
      toggleIconMobile.textContent = theme === "dark" ? "☀️" : "🌙";
    }
    if (toggleBtnMobile) {
      toggleBtnMobile.setAttribute(
        "aria-label",
        theme === "dark"
          ? "Alternar para tema claro"
          : "Alternar para tema escuro"
      );
    }
  }

  // Inicializar assim que o DOM estiver pronto ou imediatamente se já estiver pronto
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTheme);
  } else {
    // DOM já está pronto
    initTheme();
  }

  // Exportar função de toggle para uso global
  window.toggleTheme = toggleTheme;
})();

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close mobile menu when a link is clicked
  const mobileLinks = document.querySelectorAll(".mobile-link");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Close mobile menu when clicking outside
  window.addEventListener("click", (e) => {
    if (
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn.contains(e.target) &&
      mobileMenu.classList.contains("active")
    ) {
      mobileMenu.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe feature cards and other elements
document
  .querySelectorAll(".feature-card, .trust-card, .dual-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// ============================================
// TRUST SECTION - Cards now use CSS animations
// ============================================
// Trust cards animations are handled via CSS in styles.css

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerHTML = "↑";
scrollToTopBtn.className = "scroll-to-top";
scrollToTopBtn.setAttribute("aria-label", "Voltar ao topo");
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ============================================
// LAZY LOAD IMAGES
// ============================================

if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log(
  "%cMetaPerform Landing Page",
  "font-size: 20px; font-weight: bold; color: #00C853;"
);
console.log(
  "%cTransformando objetivos em resultados através da tecnologia e inteligência de dados.",
  "font-size: 14px; color: #666;"
);
