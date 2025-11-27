// Get the button elements
const learnMoreButton = document.querySelector('#home button');
const applyNowButton = document.querySelector('#admissions button');
const submitButton = document.querySelector('#contact-form button');

// Add event listeners to the buttons
learnMoreButton.addEventListener('click', () => {
    window.location.href = '#about';
});

applyNowButton.addEventListener('click', () => {
    window.location.href = 'admissions.html';
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#contact-form #name').value;
    const email = document.querySelector('#contact-form #email').value;
    const message = document.querySelector('#contact-form #message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        document.querySelector('#contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Add a smooth scrolling effect to the navigation links
document.querySelectorAll('header nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
