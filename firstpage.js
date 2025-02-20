document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    
    buttons.forEach((button, index) => {
        button.style.opacity = "0";
        button.style.transform = "translateY(20px)";
        setTimeout(() => {
            button.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            button.style.opacity = "1";
            button.style.transform = "translateY(0)";
        }, index * 200); 
    });

   
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    
    buttons.forEach(button => {
        button.addEventListener("mousedown", () => {
            button.style.transform = "scale(0.9)"; 
        });
        button.addEventListener("mouseup", () => {
            button.style.transform = "scale(1.1)"; 
            setTimeout(() => {
                button.style.transform = "scale(1)"; 
            }, 150);
        });
    });
});
