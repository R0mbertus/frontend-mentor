document.addEventListener("DOMContentLoaded", function(event) { 
    const boxes = document.querySelectorAll('.box');
    for (const box of boxes) {
        box.addEventListener('click', (event) => {
            var link = box.getAttribute("href");
            window.location = link;
        });
    }
});
