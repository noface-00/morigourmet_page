/* ================================
   CASA DE SABOR - JAVASCRIPT
   ================================ */

/* ================================
   1. SMOOTH SCROLLING
   ================================ */

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ================================
   2. WHATSAPP FORM HANDLING
   ================================ */

// Manejo del formulario de WhatsApp
const whatsappForm = document.getElementById('whatsappForm');

if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const name = document.getElementById('customerName').value;
        const message = document.getElementById('customerMessage').value;
        
        // Construir el mensaje para WhatsApp
        const whatsappMessage = `Hola, soy ${name}.\n\n${message}`;
        
        // Codificar el mensaje para URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // IMPORTANTE: Reemplaza este número con tu número de WhatsApp
        // Formato: código de país + número (sin espacios, sin +, sin guiones)
        // Ejemplo para Ecuador: 593987654321
        const phoneNumber = '593999999999'; // ← CAMBIA ESTE NÚMERO
        
        // Crear URL de WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Abrir WhatsApp en nueva pestaña
        window.open(whatsappURL, '_blank');
        
        // Limpiar formulario después de enviar
        this.reset();
    });
}

/* ================================
   3. FORM HANDLING (LEGACY)
   ================================ */

// Manejo del formulario de contacto (si existe)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica para enviar el formulario
        // Por ejemplo, usando fetch() para enviar a un servidor
        
        // Mensaje de confirmación
        alert('Gracias por tu consulta. Te contactaremos pronto.');
        
        // Limpiar formulario
        this.reset();
    });
}

/* ================================
   4. INTERSECTION OBSERVER
   ================================ */

// Configuración del observer para animaciones al hacer scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas las tarjetas de productos
document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});

/* ================================
   5. HEADER SCROLL EFFECT (OPCIONAL)
   ================================ */

// Cambia la opacidad del header al hacer scroll
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Si quieres agregar efecto de scroll, descomenta esto:
    /*
    if (currentScroll > 100) {
        header.style.background = 'rgba(250, 250, 250, 0.98)';
    } else {
        header.style.background = 'rgba(250, 250, 250, 0.95)';
    }
    */
    
    lastScroll = currentScroll;
});

/* ================================
   6. NAVEGACIÓN MÓVIL (OPCIONAL)
   ================================ */

// Si quieres agregar un menú hamburguesa para móvil
// Descomenta y personaliza este código:

/*
const menuToggle = document.createElement('button');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '☰';
menuToggle.style.display = 'none';

const nav = document.querySelector('nav');
const navMenu = document.querySelector('.nav-menu');

nav.insertBefore(menuToggle, navMenu);

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Mostrar botón en móvil
if (window.innerWidth <= 768) {
    menuToggle.style.display = 'block';
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
    } else {
        menuToggle.style.display = 'none';
        navMenu.classList.remove('active');
    }
});
*/