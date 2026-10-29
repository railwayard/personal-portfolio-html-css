
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation menu
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  // Close the menu after selecting a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  // Filter portfolio projects
  const filter = document.getElementById("project-filter");
  const cards = document.querySelectorAll(".project-card");
  const filterStatus = document.getElementById("filter-status");

  filter.addEventListener("change", () => {
    let visibleCount = 0;

    cards.forEach((card) => {
      const matches =
        filter.value === "all" ||
        card.dataset.category === filter.value;

      card.hidden = !matches;
      if (matches) visibleCount++;
    });

    filterStatus.textContent = `${visibleCount} project(s) displayed.`;
  });

  // Contact form validation
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please complete all fields.";
      return;
    }

    if (!form.elements.email.validity.valid) {
      status.textContent = "Please enter a valid email address.";
      form.elements.email.focus();
      return;
    }

    status.textContent =
      "Your form is valid! No message has been sent because this demo has no email service.";

    form.reset();
  });
});
