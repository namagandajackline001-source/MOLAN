// ---- MOBILE MENU ----
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('nav ul');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// ---- SIGNATURE PAD ----
const canvas = document.getElementById('signature-pad');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let drawing = false;

    canvas.addEventListener('mousedown', () => drawing = true);
    canvas.addEventListener('mouseup', () => { drawing = false; ctx.beginPath(); });
    canvas.addEventListener('mouseleave', () => drawing = false);
    canvas.addEventListener('mousemove', draw);

    // Touch support
    canvas.addEventListener('touchstart', (e) => { e.preventDefault(); drawing = true; });
    canvas.addEventListener('touchend', () => { drawing = false; ctx.beginPath(); });
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!drawing) return;
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#00235B';
        ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
    });

    function draw(event) {
        if (!drawing) return;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#00235B';
        const rect = canvas.getBoundingClientRect();
        ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.clientX - rect.left, event.clientY - rect.top);
    }
}

function clearSignature() {
    const canvas = document.getElementById('signature-pad');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function validateSubmission(e) {
    e.preventDefault();
    alert('Application for Motherland Academy submitted successfully! We will be in touch soon.');
    return true;
}
