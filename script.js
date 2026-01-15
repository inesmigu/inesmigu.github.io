// Efecto de aparición en scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.querySelectorAll('.timeline-item, .education-item, .project-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Actualizar año actual en footer
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.footer-text');
    if (yearElement) {
        yearElement.textContent = yearElement.textContent.replace('2024', currentYear);
    }
    
    // Efecto hover en barras de habilidades
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            const originalWidth = bar.style.width;
            bar.style.width = '100%';
            setTimeout(() => {
                bar.style.width = originalWidth;
            }, 300);
        });
    });
});

// Añadir clase para animaciones CSS
document.documentElement.classList.add('js-enabled');
// ===== SISTEMA DE IDIOMAS =====

// Traducciones COMPLETAS para tu CV
const translations = {
    fr: {
        // Header
        "name": "TU NOMBRE COMPLETO",
        "title": "RÉCEPTIONNISTE DIPLOMATIQUE & RELATIONS INTERNATIONALES",
        "profile-title": "PROFIL PROFESSIONNEL",
        "profile-text": "Réceptionniste diplomatique avec 3 ans d'expérience...",
        "experience-title": "EXPÉRIENCE PROFESSIONNELLE",
        "education-title": "FORMATION",
        "skills-title": "COMPÉTENCES & APTITUDES",
        "languages-title": "COMPÉTENCES LINGUISTIQUES",
        "certificates-title": "CERTIFICATS & DIPLÔMES",
        "references-title": "RÉFÉRENCES",
        "availability-title": "DISPONIBILITÉ",
        
        // Botones
        "download-pdf": "Télécharger PDF",
        "view-pdf": "Visualiser",
        "contact-label": "CONTACT",
        "email-label": "EMAIL",
        "phone-label": "TÉLÉPHONE",
        "location-label": "LOCALISATION",
        "status-label": "STATUT",
        
        // Textos específicos (añade todos los que necesites)
        "exp-embassy-title": "RÉCEPTIONNISTE DIPLOMATIQUE",
        "exp-embassy-company": "Ambassade d'Espagne à Berne",
        "exp-parkfly-title": "AGENT DE SERVICE CLIENT",
        "exp-cinema-title": "EMPLOYÉ DE CINÉMA",
        
        // Certificados
        "cert-1-title": "Diplôme de Baccalauréat",
        "cert-2-title": "Attestation d'Emploi",
        "cert-3-title": "Certification Ethical Hacker",
        
        // Disponibilidad
        "availability-text": "Disponible pour travailler à Berne, Genève..."
    },
    
    en: {
        // Header
        "name": "YOUR FULL NAME",
        "title": "DIPLOMATIC RECEPTIONIST & INTERNATIONAL RELATIONS",
        "profile-title": "PROFESSIONAL PROFILE",
        "profile-text": "Diplomatic receptionist with 3 years of experience...",
        "experience-title": "WORK EXPERIENCE",
        "education-title": "EDUCATION",
        "skills-title": "SKILLS & COMPETENCIES",
        "languages-title": "LANGUAGE SKILLS",
        "certificates-title": "CERTIFICATES & DIPLOMAS",
        "references-title": "REFERENCES",
        "availability-title": "AVAILABILITY",
        
        // Botones
        "download-pdf": "Download PDF",
        "view-pdf": "View",
        "contact-label": "CONTACT",
        "email-label": "EMAIL",
        "phone-label": "PHONE",
        "location-label": "LOCATION",
        "status-label": "STATUS",
        
        // Textos específicos
        "exp-embassy-title": "DIPLOMATIC RECEPTIONIST",
        "exp-embassy-company": "Spanish Embassy in Bern",
        "exp-parkfly-title": "CUSTOMER SERVICE AGENT",
        "exp-cinema-title": "CINEMA STAFF",
        
        // Certificados
        "cert-1-title": "Baccalaureate Diploma",
        "cert-2-title": "Employment Certificate",
        "cert-3-title": "Ethical Hacker Certification",
        
        // Disponibilidad
        "availability-text": "Available to work in Bern, Geneva..."
    },
    
    es: {
        // Header
        "name": "TU NOMBRE COMPLETO",
        "title": "RECEPCIONISTA DIPLOMÁTICA & RELACIONES INTERNACIONALES",
        "profile-title": "PERFIL PROFESIONAL",
        "profile-text": "Recepcionista diplomática con 3 años de experiencia...",
        "experience-title": "EXPERIENCIA PROFESIONAL",
        "education-title": "EDUCACIÓN",
        "skills-title": "HABILIDADES & COMPETENCIAS",
        "languages-title": "IDIOMAS",
        "certificates-title": "CERTIFICADOS & DIPLOMAS",
        "references-title": "REFERENCIAS",
        "availability-title": "DISPONIBILIDAD",
        
        // Botones
        "download-pdf": "Descargar PDF",
        "view-pdf": "Ver",
        "contact-label": "CONTACTO",
        "email-label": "EMAIL",
        "phone-label": "TELÉFONO",
        "location-label": "UBICACIÓN",
        "status-label": "ESTADO",
        
        // Textos específicos
        "exp-embassy-title": "RECEPCIONISTA DIPLOMÁTICA",
        "exp-embassy-company": "Embajada de España en Berna",
        "exp-parkfly-title": "AGENTE DE SERVICIO AL CLIENTE",
        "exp-cinema-title": "PERSONAL DE CINE",
        
        // Certificados
        "cert-1-title": "Título de Bachillerato",
        "cert-2-title": "Certificado de Empleo",
        "cert-3-title": "Certificación Ethical Hacker",
        
        // Disponibilidad
        "availability-text": "Disponible para trabajar en Berna, Ginebra..."
    }
};

// ===== FUNCIÓN PARA CAMBIAR IDIOMA =====
function changeLanguage(lang) {
    console.log(`Cambiando a idioma: ${lang}`);
    
    // 1. Actualizar botones activos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // 2. Cambiar todos los textos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // 3. Cambiar textos en inputs y textareas
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // 4. Cambiar atributos alt en imágenes
    document.querySelectorAll('[data-translate-alt]').forEach(element => {
        const key = element.getAttribute('data-translate-alt');
        if (translations[lang] && translations[lang][key]) {
            element.alt = translations[lang][key];
        }
    });
    
    // 5. Cambiar atributos title
    document.querySelectorAll('[data-translate-title]').forEach(element => {
        const key = element.getAttribute('data-translate-title');
        if (translations[lang] && translations[lang][key]) {
            element.title = translations[lang][key];
        }
    });
    
    // 6. Guardar preferencia
    localStorage.setItem('preferred-language', lang);
    
    // 7. Cambiar idioma del HTML (para accesibilidad)
    document.documentElement.lang = lang;
    
    console.log(`Idioma cambiado a: ${lang}`);
}

// ===== INICIALIZAR =====
function initLanguage() {
    // 1. Cargar idioma guardado o detectar navegador
    let savedLang = localStorage.getItem('preferred-language');
    
    if (!savedLang) {
        // Detectar idioma del navegador
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('fr')) savedLang = 'fr';
        else if (browserLang.startsWith('es')) savedLang = 'es';
        else savedLang = 'en';
    }
    
    // 2. Aplicar idioma
    changeLanguage(savedLang);
    
    // 3. Añadir eventos a los botones
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    console.log('Sistema de idiomas inicializado');
}

// ===== EJECUTAR CUANDO CARGA LA PÁGINA =====
document.addEventListener('DOMContentLoaded', function() {
    // Esperar a que todo cargue
    setTimeout(initLanguage, 500);
});