/**
 * Contact Form Logic
 * Handles client-side validation, form submission, and toast notifications
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');

    if (!contactForm) return;

    // --- Show Toast Notification ---
    function showToast(message, type = 'success') {
        const iconHtml = type === 'success' 
            ? '<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="#00e676" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
            : '<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="#ff5252" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';

        toast.className = `toast toast--${type}`;
        toast.innerHTML = `
            ${iconHtml}
            <div class="toast__message">${message}</div>
        `;

        // Show toast
        toast.classList.add('is-visible');

        // Hide after 3 seconds
        setTimeout(() => {
            toast.classList.remove('is-visible');
        }, 3000);
    }

    // --- Form Validation & Submission ---
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Basic Validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const honeypot = document.querySelector('input[name="_gotcha"]');

        // Reset error states
        [nameInput, emailInput, messageInput].forEach(input => {
            input.parentElement.classList.remove('has-error');
            input.classList.remove('is-error');
        });

        if (!nameInput.value.trim()) {
            isValid = false;
            nameInput.parentElement.classList.add('has-error');
            nameInput.classList.add('is-error');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
            isValid = false;
            emailInput.parentElement.classList.add('has-error');
            emailInput.classList.add('is-error');
        }

        if (!messageInput.value.trim()) {
            isValid = false;
            messageInput.parentElement.classList.add('has-error');
            messageInput.classList.add('is-error');
        }

        // Spam protection check
        if (honeypot && honeypot.value !== '') {
            isValid = false; // Bot detected
        }

        if (isValid) {
            // Update button state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;

            // --- Formspree / Web3Forms Implementation ---
            // For a static site, you would typically use fetch() to send the data
            // to a service like Formspree or Web3Forms.
            
            /* Example Web3Forms fetch:
            const formData = new FormData(contactForm);
            formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
            
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showToast('Message sent successfully! I will get back to you soon.');
                    contactForm.reset();
                } else {
                    showToast('Something went wrong. Please try again.', 'error');
                }
            })
            */

            // Simulation of network request
            setTimeout(() => {
                showToast('Message sent successfully! I will get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalBtnHtml;
                submitBtn.disabled = false;
            }, 1500);
        }
    });

    // Remove error class on input
    const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.parentElement.classList.remove('has-error');
            this.classList.remove('is-error');
        });
    });
});
