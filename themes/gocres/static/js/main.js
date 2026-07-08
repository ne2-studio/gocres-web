(function () {
  "use strict";

  // Header scroll state
  var header = document.getElementById("site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Mobile nav toggle
  var navToggle = document.getElementById("nav-toggle");
  var navMobile = document.getElementById("nav-mobile");
  if (navToggle && navMobile) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMobile.classList.toggle("hidden") === false;
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      revealEls.forEach(function (el) {
        io.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  }

  // Contact form: real submit to remote endpoint, show a loading state
  // while the browser waits for the backend's redirect to /gracias/.
  var contactForm = document.getElementById("contact-form");
  var contactSubmit = document.getElementById("contact-submit");
  if (contactForm && contactSubmit) {
    var idleState = contactSubmit.querySelector(".contact-submit-idle");
    var loadingState = contactSubmit.querySelector(".contact-submit-loading");
    contactForm.addEventListener("submit", function () {
      contactSubmit.disabled = true;
      if (idleState) idleState.classList.add("hidden");
      if (loadingState) {
        loadingState.classList.remove("hidden");
        loadingState.classList.add("inline-flex");
      }
    });
  }

  // Chip toggles (service / budget selection)
  document.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      var input = chip.querySelector("input[type=hidden]");
      var active = chip.classList.toggle("is-active");
      if (input) input.value = active ? input.dataset.value : "";
    });
  });
})();
