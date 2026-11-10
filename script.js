
/* =====================================
   2. AUTOMATIC FOOTER YEAR
===================================== */

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =====================================
   3. BACK TO TOP BUTTON
===================================== */

const backToTop = document.querySelector("#backToTop");

if (backToTop) {

    window.addEventListener("scroll", function() {

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================
   4. SCROLL REVEAL ANIMATION
===================================== */

const revealElements = document.querySelectorAll(
    ".hero, .about, .services, .service-card, .contact, footer"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(function(element) {

        element.classList.add("reveal");

        observer.observe(element);

    });

}


/* =====================================
   5. ACTIVE NAVIGATION
===================================== */

const navLinks = document.querySelectorAll("nav a");

const pageSections = document.querySelectorAll(
    ".hero, .about, .services, .contact"
);

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                navLinks.forEach(function(link) {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    'nav a[href="#' + entry.target.id + '"]'
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    }, {
        threshold: 0.3
    });

    pageSections.forEach(function(section) {
        sectionObserver.observe(section);
    });

}

const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

// Switch themes
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem("theme", isDark ? "dark" : "light");
});