// JavaScript for future enhancements, currently empty.
document.addEventListener('DOMContentLoaded', () => {
    // You can add any interactive functionality here if needed in the future.
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission

    // Show the loading spinner
    const feedback = document.getElementById('form-feedback');
    const loader = document.querySelector('.loader');
    const success = document.querySelector('.success');

    feedback.classList.remove('hidden'); // Show the feedback container
    loader.classList.remove('hidden');  // Show the loader
    success.classList.add('hidden');    // Hide the success tick for now

    // Simulate a network request delay (e.g., 2 seconds)
    setTimeout(() => {
        loader.classList.add('hidden');   // Hide the loader
        success.classList.remove('hidden');  // Show the green tick
    }, 2000);  // This represents the "submission" delay
});

