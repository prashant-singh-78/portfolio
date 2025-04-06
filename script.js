// Initialize EmailJS with your public API key


document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("HuWlWN7_jhAeT9u2a"); // Your EmailJS public key

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form submission using EmailJS
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;

            // Validate fields
            if (!name || !email || !message) {
                alert("Please fill in all fields before submitting.");
                return;
            }

            // Send email
            emailjs.send("service_b29vfzc", "template_echvhmf", {
                name: name,
                from_email: email,
                from_message: message
            })
            .then(function(response) {
                alert("Message sent successfully!");
                form.reset();
            })
            .catch(function(error) {
                alert("Failed to send message. Please try again.");
                console.error(error);
            });
        });
    }

    // Navbar scroll behavior
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        nav.style.transform = (lastScrollY < window.scrollY) ? 'translateY(-100%)' : 'translateY(0)';
        lastScrollY = window.scrollY;
    });
});
