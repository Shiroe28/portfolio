document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-box img");

    images.forEach(img => {
        img.style.transition = "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out";

        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.15) rotate(5deg)";
            img.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1) rotate(0deg)";
            img.style.boxShadow = "none";
        });
    });
});
