/* ================================
   MORITA GOURMET - JAVASCRIPT
   ================================ */

/* ================================
   1. MENÚ HAMBURGUESA
   ================================ */

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const body = document.body;

// Abrir/cerrar menú
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
}

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Cerrar menú al hacer clic fuera (en el overlay)
document.addEventListener('click', (e) => {
    if (body.classList.contains('menu-open') && 
        !navMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

/* ================================
   2. SMOOTH SCROLLING
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
   3. WHATSAPP FORM HANDLING
   ================================ */

// Manejo del formulario de WhatsApp
const whatsappForm = document.getElementById('whatsappForm');

if (whatsappForm) {
    console.log('Formulario de WhatsApp encontrado');
    
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        console.log('Formulario enviado');
        
        // Obtener los valores del formulario
        const nameInput = document.getElementById('customerName');
        const messageInput = document.getElementById('customerMessage');
        
        if (!nameInput || !messageInput) {
            console.error('No se encontraron los campos del formulario');
            alert('Error: No se pudieron encontrar los campos del formulario');
            return;
        }
        
        const name = nameInput.value.trim();
        const message = messageInput.value.trim();
        
        if (!name || !message) {
            alert('Por favor completa todos los campos');
            return;
        }
        
        console.log('👤 Nombre:', name);
        console.log('💬 Mensaje:', message);
        
        // Construir el mensaje para WhatsApp
        const whatsappMessage = `Hola, soy ${name}.

${message}`;
        
        // Codificar el mensaje para URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // ⚠️ IMPORTANTE: Reemplaza este número con tu número de WhatsApp
        // Formato: código de país + número (sin espacios, sin +, sin guiones)
        // Ejemplo para Ecuador: 593987654321
        const phoneNumber = '593982667069'; // ← CAMBIA ESTE NÚMERO
        
        // Crear URL de WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        console.log('URL de WhatsApp:', whatsappURL);
        
        // Abrir WhatsApp en nueva pestaña
        try {
            window.open(whatsappURL, '_blank');
            console.log('WhatsApp abierto correctamente');
            
            // Limpiar formulario después de enviar
            this.reset();
        } catch (error) {
            console.error('Error al abrir WhatsApp:', error);
            alert('Error al abrir WhatsApp. Por favor intenta nuevamente.');
        }
    });
} else {
    console.error('No se encontró el formulario con ID "whatsappForm"');
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
   5. HEADER SCROLL EFFECT
   ================================ */

// Cambia la opacidad del header al hacer scroll
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    lastScroll = currentScroll;
});
