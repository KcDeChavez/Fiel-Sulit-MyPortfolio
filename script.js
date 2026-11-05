const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const galleryTrack = document.getElementById("galleryTrack");
const galleryCounter = document.getElementById("galleryCounter");
const galleryFilters = document.querySelectorAll(".gallery-filter");

if (galleryTrack && galleryCounter) {
  const galleryCards = galleryTrack.querySelectorAll(".gallery-card");

  function updateGallery(category) {
    let visibleCount = 0;

    galleryCards.forEach((card) => {
      const isVisible = category === "All" || card.dataset.category === category;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    galleryCounter.textContent = `${visibleCount} photos`;
  }

  galleryFilters.forEach((button) => {
    button.addEventListener("click", () => {
      galleryFilters.forEach((filter) => {
        const isActive = filter === button;
        filter.classList.toggle("active", isActive);
        filter.setAttribute("aria-pressed", String(isActive));
      });

      updateGallery(button.dataset.category);
    });
  });
}
