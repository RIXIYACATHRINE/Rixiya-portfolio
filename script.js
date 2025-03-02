document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded Successfully!");
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-btn");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offset = 100; // Adjust this value to center the section better
                const targetPosition = targetSection.offsetTop - offset;

                // Smooth scrolling to the section
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

                // Add fade-in animation
                targetSection.classList.add("fade-in");

                // Remove animation after 1.5s to allow re-triggering
                setTimeout(() => {
                    targetSection.classList.remove("fade-in");
                }, 1500);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded Successfully!");
});
