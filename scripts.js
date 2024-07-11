document.addEventListener("DOMContentLoaded", () => {
    const contactUsBtn = document.getElementById("contact-us-btn");
    const contactFormPopup = document.getElementById("contact-form-popup");
    const closeBtn = document.getElementById("close-btn");

    contactUsBtn.addEventListener("click", () => {
        contactFormPopup.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        contactFormPopup.style.display = "none";
    });

    // Slider functionality
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.style.transform = `translateX(${-index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(index);
        });
    });

    // Initial slide
    showSlide(currentIndex);

    // Project image change on hover
    const projectItems = document.querySelectorAll('.project');
    const projectImage = document.getElementById('project-image');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const newImage = item.getAttribute('data-image');
            projectImage.setAttribute('src', newImage);
        });
    });
});

function toggleRedColor(element) {
    // Toggle a class to change background color
    element.classList.toggle('red-background');
}

// JavaScript to handle the pop-up functionality
const contactBtn = document.getElementById('contact-us-btn');
const closeBtn = document.getElementById('close-btn');
const contactForm = document.getElementById('contact-form');

// Open the contact form when clicking the Contact Us button
contactBtn.addEventListener('click', function() {
    contactForm.style.display = 'block';
});

// Close the contact form when clicking the Close button
closeBtn.addEventListener('click', function() {
    contactForm.style.display = 'none';
});



