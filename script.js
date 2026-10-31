const menuToggle = document.getElementById("menuToggle");
const menuPanel = document.getElementById("menuPanel");

if (menuToggle && menuPanel) {
  const isMenuOpen = () => menuToggle.getAttribute("aria-expanded") === "true";

  function setMenu(open) {
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
    menuPanel.classList.toggle("is-open", open);
    menuPanel.setAttribute("aria-hidden", String(!open));
  }

  menuToggle.addEventListener("click", () => setMenu(!isMenuOpen()));

  menuPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("click", (event) => {
    if (!menuToggle.contains(event.target) && !menuPanel.contains(event.target)) {
      setMenu(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen()) {
      setMenu(false);
      menuToggle.focus();
    }
  });
}