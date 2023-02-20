const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

/* Portfolio */

function tabsFilters() {
  const tabs = document.querySelectorAll(".portfolio-filters a");
  const projets = document.querySelectorAll(".portfolio .card");

  const resetActiveLinks = () => {
    tabs.forEach((elem) => {
      elem.classList.remove("active");
    });
  };

  const showProjets = (elem) => {
    console.log(elem);
    projets.forEach((projet) => {
      let filter = projet.getAttribute("data-category");

      if (elem === "all") {
        projet.parentNode.classList.remove("hide");
        return;
      }

      filter !== elem
        ? projet.parentNode.classList.add("hide")
        : projet.parentNode.classList.remove("hide");
    });
  };

  tabs.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();
      let filter = elem.getAttribute("data-filter");
      showProjets(filter);
      resetActiveLinks();
      elem.classList.add("active");
    });
  });
}

tabsFilters();

function showProjectDetails() {
  const links = document.querySelectorAll(".card__link");
  const modals = document.querySelectorAll(".modal");
  const btns = document.querySelectorAll(".modal__close");

  const hideModals = () => {
    modals.forEach((modal) => {
      modal.classList.remove("show");
    });
  };

  links.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();

      document.querySelector(`[id=${elem.dataset.id}]`).classList.add("show");
    });
  });

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      hideModals();
    });
  });
}

showProjectDetails();

// effets

const obsInterAnim = () => {
  const sections = document.querySelectorAll("section");
  const skills = document.querySelectorAll(".skills .bar");

  sections.forEach((section, index) => {
    if (index === 0) return;

    section.style.opacity = 0;
    section.style.transition = "all 1.6s";
  });

  let sectionObs = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let elements = entry.target;
        elements.style.opacity = 1;
      }
    });
  });

  sections.forEach((section) => {
    sectionObs.observe(section);
  });

  skills.forEach((skill, index) => {
    skill.style.width = 0;
    skill.style.transition = "all 1.6s";
  });

  let skillsObs = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let elements = entry.target;
        elements.style.width = elements.dataset.width + "%";
      }
    });
  });

  skills.forEach((skill) => {
    skillsObs.observe(skill);
  });
};

obsInterAnim();
