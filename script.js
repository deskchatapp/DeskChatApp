// Waitlist form handling
document.getElementById('waitlist-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    
    // Simple validation
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // In a real app, you'd send this to your backend
    // For now, just show success message
    showWaitlistSuccess(email);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showWaitlistSuccess(email) {
    const form = document.getElementById('waitlist-form');
    form.innerHTML = `
        <div class="success-message">
            <h3>🎉 Welcome to the waitlist!</h3>
            <p>We've added <strong>${email}</strong> to our launch list.</p>
            <p>We'll email you when DeskChat App is ready!</p>
        </div>
    `;
}

// Smooth scrolling
function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function joinWaitlist() {
    document.getElementById('waitlist').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate feature cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
