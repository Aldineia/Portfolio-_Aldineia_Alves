// Objeto de tradução (dados textuais para PT e EN)
const translations = {
    pt: {
        pageTitle: "Aldinéia Alves | Engenheira de Software",
        // Navegação
        navInicio: "Início",
        navSobre: "Sobre Mim",
        navHabilidades: "Habilidades",
        navProjetos: "Projetos",
        navFormacao: "Formação",
        navContato: "Contato",
        // Hero Section
        heroLocation: "Manaus, AM",
        heroGreeting: "Aldinéia Alves",
        heroTitle: "Engenheira de Software em Formação.",
        heroDescription: "Apaixonada por tecnologia, focada em construir soluções digitais robustas e eficientes. Minha jornada envolve desenvolvimento Web (HTML, CSS, JS) e Java, sempre buscando aprender e aplicar as melhores práticas de Engenharia de Software.",
        heroBtnProjects: "Ver Projetos",
        heroBtnResume: "Baixar Currículo",
        // About Section
        aboutTitle: "Sobre Mim",
        aboutSubtitle: "Transformando Ideias em Código Funcional",
        aboutP1: "Minha paixão pelo desenvolvimento começou com a web, dominando as tecnologias front-end e a lógica de programação. Atualmente, estou expandindo minhas habilidades para o back-end com Java e conceitos de engenharia de software para criar aplicações completas e escaláveis.",
        aboutP2: "Acredito que a combinação de um código limpo com uma excelente experiência do usuário é a chave para o sucesso de qualquer projeto. Sou proativa, autodidata e estou sempre em busca de novos desafios que impulsionem meu crescimento profissional.",
        aboutCard1: "Experiência em Desenvolvimento Web",
        aboutCard2: "Foco em lógica e Orientação a Objetos",
        aboutCard3: "Comunicação e Resolução de Problemas",
        // Skills Section
        skillsTitle: "Habilidades Técnicas",
        skillsWebTitle: "Web & Front-end",
        skillsBackendTitle: "Back-end & Ferramentas",
        skillsOthersTitle: "Outras Habilidades",
        skillsItem1: "Metodologias Ágeis (Scrum/Kanban)",
        skillsItem2: "Comunicação Cliente x Servidor",
        skillsItem3: "Pensamento Crítico e Proatividade",
        skillsItem4: "Inglês Básico/Intermediário (Estudando)",
        skillsItem5: "Foco em UI/UX para Web",
        // Projects Section
        projectsTitle: "Principais Projetos",
        project1Name: "Projeto E-commerce Responsivo",
        project1Desc: "Desenvolvimento de uma loja virtual completa utilizando HTML, CSS (Flexbox/Grid) e JavaScript para interações dinâmicas. Foco total em responsividade e performance.",
        project2Name: "API de Gerenciamento de Tarefas",
        project2Desc: "Backend desenvolvido em Java (Spring Boot) para gerenciar dados de usuários e tarefas. Inclui autenticação básica e integração com banco de dados SQL.",
        project3Name: "Landing Page para Startup",
        project3Desc: "Criação de uma landing page de alta conversão, com animações e formulário de contato funcional, seguindo as diretrizes de UI/UX moderno.",
        projectDetails: "Ver Detalhes →",
        // Education Section
        educationTitle: "Formação & Certificações",
        academicTitle: "Formação Acadêmica",
        acad1Course: "Engenharia de Software (em andamento)",
        acad1Inst: "Universidade Cruzeiro do Sul - UNICSUL",
        acad1Desc: "Foco em arquitetura de sistemas, desenvolvimento full-stack, metodologias ágeis e qualidade de software.",
        certTitle: "Principais Certificações",
        cert1Name: "Programador Web (200h)",
        cert1Inst: "Instituto Federal Rio Grande do Sul (IFRS)",
        cert2Name: "Programação Básica com Java I (40h)",
        cert2Inst: "Instituto Federal Rio Grande do Sul (IFRS)",
        cert3Name: "Pacote Office na Prática (10h)",
        cert3Inst: "SENAI Play",
        cert4Name: "Excel (8h)",
        cert4Inst: "Santander | Open Academy",
        cert5Name: "Comunicação Client x Server (2h)",
        cert5Inst: "DIO",
        // Contact Section
        contactTitle: "Entre em Contato",
        contactInfoTitle: "Detalhes de Contato",
        contactInfoDesc: "Estou aberta a novas oportunidades de trabalho e colaboração. Envie uma mensagem e vamos construir algo incrível juntos!",
        contactLocation: "Manaus, Amazonas, Brasil",
        formLabelName: "Nome",
        formLabelEmail: "Email",
        formLabelMessage: "Mensagem",
        formBtnSubmit: "Enviar Mensagem",
        // Footer
        footerTitle: "Engenheira de Software",
        footerSocialTitle: "Redes Sociais",
        footerCopyright: "© 2025 Aldinéia Alves. Todos os direitos reservados.",
    },
    en: {
        pageTitle: "Aldinéia Alves | Engenheira de Software",
        // Navigation
        navInicio: "Home",
        navSobre: "About Me",
        navHabilidades: "Skills",
        navProjetos: "Projects",
        navFormacao: "Education",
        navContato: "Contact",
        // Hero Section
        heroLocation: "Manaus, AM",
        heroGreeting: "Hello, I'm Aldinéia Alves",
        heroTitle: "Software Engineer in Training.",
        heroDescription: "Passionate about technology, focused on building robust and efficient digital solutions. My journey involves Web development (HTML, CSS, JS) and Java, always seeking to learn and apply the best practices of Software Engineering.",
        heroBtnProjects: "View Projects",
        heroBtnResume: "Download Resume",
        // About Section
        aboutTitle: "About Me",
        aboutSubtitle: "Turning Ideas into Functional Code",
        aboutP1: "My passion for development began with the web, mastering front-end technologies and programming logic. I am currently expanding my skills to back-end development with Java and software engineering concepts to create complete and scalable applications.",
        aboutP2: "I believe that the combination of clean code with an excellent user experience is the key to the success of any project. I am proactive, self-taught, and always looking for new challenges that drive my professional growth.",
        aboutCard1: "Web Development Experience",
        aboutCard2: "Focus on Logic and Object-Oriented Programming",
        aboutCard3: "Communication and Problem Solving",
        // Skills Section
        skillsTitle: "Technical Skills",
        skillsWebTitle: "Web & Front-end",
        skillsBackendTitle: "Back-end & Tools",
        skillsOthersTitle: "Other Skills",
        skillsItem1: "Agile Methodologies (Scrum/Kanban)",
        skillsItem2: "Client x Server Communication",
        skillsItem3: "Critical Thinking and Proactivity",
        skillsItem4: "Basic/Intermediate English (Studying)",
        skillsItem5: "Focus on UI/UX for Web",
        // Projects Section
        projectsTitle: "Main Projects",
        project1Name: "Responsive E-commerce Project",
        project1Desc: "Development of a complete virtual store using HTML, CSS (Flexbox/Grid), and JavaScript for dynamic interactions. Total focus on responsiveness and performance.",
        project2Name: "Task Management API",
        project2Desc: "Backend developed in Java (Spring Boot) to manage user and task data. Includes basic authentication and integration with SQL database.",
        project3Name: "Landing Page for Startup",
        project3Desc: "Creation of a high-conversion landing page, with animations and a functional contact form, following modern UI/UX guidelines.",
        projectDetails: "View Details →",
        // Education Section
        educationTitle: "Education & Certifications",
        academicTitle: "Academic Education",
        acad1Course: "Software Engineering (in progress)",
        acad1Inst: "Universidade Cruzeiro do Sul - UNICSUL",
        acad1Desc: "Focus on systems architecture, full-stack development, agile methodologies, and software quality.",
        certTitle: "Main Certifications",
        cert1Name: "Web Programmer (200h)",
        cert1Inst: "Federal Institute of Rio Grande do Sul (IFRS)",
        cert2Name: "Basic Programming with Java I (40h)",
        cert2Inst: "Federal Institute of Rio Grande do Sul (IFRS)",
        cert3Name: "Practical Office Package (10h)",
        cert3Inst: "SENAI Play",
        cert4Name: "Excel (8h)",
        cert4Inst: "Santander | Open Academy",
        cert5Name: "Client x Server Communication (2h)",
        cert5Inst: "DIO",
        // Contact Section
        contactTitle: "Get in Touch",
        contactInfoTitle: "Contact Details",
        contactInfoDesc: "I am open to new job opportunities and collaborations. Send a message and let's build something incredible together!",
        contactLocation: "Manaus, Amazonas, Brazil",
        formLabelName: "Name",
        formLabelEmail: "Email",
        formLabelMessage: "Message",
        formBtnSubmit: "Send Message",
        // Footer
        footerTitle: "Software Engineer",
        footerSocialTitle: "Social Media",
        footerCopyright: "© 2025 Aldinéia Alves. All rights reserved.",
    }
};

// *******************************************
// FUNÇÕES DE TEMA E IDIOMA
// *******************************************

/**
 * Aplica as traduções ao HTML com base no idioma fornecido.
 * @param {string} lang - 'pt' ou 'en'.
 */
function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('portfolioLang', lang);

    const elements = document.querySelectorAll('[data-lang-key]');
    const currentTranslations = translations[lang];

    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (currentTranslations[key]) {
            // Para inputs e textareas, traduz o placeholder ou label
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = currentTranslations[key];
            } else if (element.tagName === 'BUTTON') {
                element.textContent = currentTranslations[key];
            } else if (element.tagName === 'TITLE') {
                 // A tag <title> deve ser tratada como um caso especial, se necessário, ou usar a lógica abaixo para elementos comuns
                element.textContent = currentTranslations[key];
            } 
            else {
                // Para a maioria dos elementos (h1, p, a, span)
                element.textContent = currentTranslations[key];
            }
        }
    });

    // Tradução da tag <title> fora do loop se tiver a tag data-lang-key
    const titleElement = document.querySelector('title');
    if (titleElement) {
        titleElement.textContent = currentTranslations[titleElement.getAttribute('data-lang-key')];
    }
}

/**
 * Alterna entre tema claro e escuro.
 */
function toggleTheme() {
    const body = document.body;
    const isLightMode = body.classList.toggle('light-mode');
    localStorage.setItem('portfolioTheme', isLightMode ? 'light' : 'dark');
    
    // Atualiza o ícone do sol/lua
    const icon = document.getElementById('theme-toggle').querySelector('i');
    if (isLightMode) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.title = "Mudar para Tema Escuro";
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.title = "Mudar para Tema Claro";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuIcon = menuToggle.querySelector('i');
    
    // Elementos de tema/idioma
    const themeToggleBtn = document.getElementById('theme-toggle');
    const langSelector = document.getElementById('language-selector');

    // *******************************************
    // 1. Inicialização de Tema (carrega preferência do localStorage)
    // *******************************************
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        // Garante que o ícone inicial seja a lua
        themeToggleBtn.querySelector('i').classList.remove('fa-sun');
        themeToggleBtn.querySelector('i').classList.add('fa-moon');
        themeToggleBtn.querySelector('i').title = "Mudar para Tema Escuro";
    }

    // *******************************************
    // 2. Inicialização de Idioma (carrega preferência do localStorage)
    // *******************************************
    const savedLang = localStorage.getItem('portfolioLang') || 'pt';
    langSelector.value = savedLang;
    setLanguage(savedLang); // Aplica a tradução inicial

    // *******************************************
    // 3. Listeners para Tema e Idioma
    // *******************************************
    themeToggleBtn.addEventListener('click', toggleTheme);
    langSelector.addEventListener('change', (e) => setLanguage(e.target.value));


    // *******************************************
    // 4. Funcionalidade do Menu Sanduíche (Mobile)
    // *******************************************
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

    // *******************************************
    // 5. Funcionalidade de scroll suave
    // *******************************************
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // Melhora a acessibilidade
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
            }
        });
    });

    // *******************************************
    // 6. Inicialização e Configuração do ScrollReveal
    // *******************************************
    
    if (typeof ScrollReveal !== 'undefined') {
        
        // Configurações padrão
        ScrollReveal({ 
            reset: true, 
            distance: '80px', 
            duration: 2000, 
            delay: 200 
        });

        // Aplicar as animações aos elementos
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