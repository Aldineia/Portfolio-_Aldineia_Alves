document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuIcon = menuToggle.querySelector('i');

    // 1. Funcionalidade do Menu Sanduíche (Mobile)
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Troca o ícone do menu para 'x' e vice-versa
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    });

    // Fechar o menu e reverter o ícone ao clicar em um link (útil para mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                // Garante que o ícone volte para a barra (fa-bars)
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    });

    // 2. Funcionalidade de scroll suave para os links internos (incluindo o link #inicio)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetElement = document.querySelector(this.getAttribute('href'));
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            // Melhora a acessibilidade: Adiciona o foco no elemento de destino para leitores de tela
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus();
        });
    });

    // *******************************************
    // ** 3. Inicialização e Configuração do ScrollReveal **
    // *******************************************
    
    if (typeof ScrollReveal !== 'undefined') {
        
        // 3.1. Configurações padrão
        ScrollReveal({ 
            reset: true, 
            distance: '80px', 
            duration: 2000, 
            delay: 200 
        });

        // 3.2. Aplicar as animações aos elementos
        ScrollReveal().reveal('.hero-content, h2', { origin: 'top' });
        ScrollReveal().reveal('.hero-image, .about-image-or-text', { origin: 'left' });
        ScrollReveal().reveal('.about-details, .expertise-cards', { origin: 'right', delay: 300 });
        ScrollReveal().reveal('.skills-column, .project-card, .academic-box, .certifications-box, .contact-info, .contact-form', { 
            origin: 'bottom',
            interval: 100 // Atraso em cascata para os cards/colunas
        });
        ScrollReveal().reveal('.footer-content', { origin: 'bottom', delay: 500 });

    } else {
        console.warn("ScrollReveal não foi carregado. Verifique se o CDN está no index.html.");
    }

});