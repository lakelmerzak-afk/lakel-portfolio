// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// CV Interactive Tabs
function switchTab(tabName) {
    // Hide all contents
    document.querySelectorAll('.cv-content').forEach(el => el.classList.add('hidden'));
    
    // Reset all buttons styling
    document.querySelectorAll('.cv-tab-btn').forEach(btn => {
        btn.classList.remove('bg-industrial-accent', 'text-industrial-900', 'shadow');
        btn.classList.add('text-slate-300', 'hover:text-white');
    });

    // Show selected content
    const targetContent = document.getElementById(`content-${tabName}`);
    if (targetContent) {
        targetContent.classList.remove('hidden');
    }

    // Highlight active button
    const targetBtn = document.getElementById(`btn-${tabName}`);
    if (targetBtn) {
        targetBtn.classList.remove('text-slate-300', 'hover:text-white');
        targetBtn.classList.add('bg-industrial-accent', 'text-industrial-900', 'shadow');
    }
}

// Contact Form Simulation Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const successMsg = document.getElementById('form-success');
    const form = document.getElementById('contact-form');
    
    if (successMsg && form) {
        successMsg.classList.remove('hidden');
        form.reset();
        setTimeout(() => {
            successMsg.classList.add('hidden');
        }, 6000);
    }
}