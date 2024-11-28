document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navHrefs a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            // Remove 'active' class from all links
            links.forEach(item => item.classList.remove("active"));

            // Add 'active' class to the clicked link
            link.classList.add("active");
        });
    });
});