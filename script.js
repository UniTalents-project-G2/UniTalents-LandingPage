document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector(".menu-horizontal");
  const openMenuBtn = document.querySelector(".open-menu");

  function toggleMenu() {
    menu.classList.toggle("menu_opened");
  }

  openMenuBtn.addEventListener("click", toggleMenu);

  const langButton = document.getElementById('langToggle');

  langButton.addEventListener('click', () => {
    const isEnglish = langButton.innerText === 'EN';
    langButton.innerText = isEnglish ? 'ES' : 'EN';

    // Header
    const links = document.querySelectorAll('nav.topheader a');
    if (links.length >= 4) {
      links[0].innerText = isEnglish ? 'How it works?' : '¿Cómo funciona?';
      links[1].innerText = isEnglish ? 'Success Stories' : 'Casos de Éxito';
      links[2].innerText = isEnglish ? 'FAQs' : 'FAQs';
      links[3].innerText = isEnglish ? 'Team' : 'Integrantes';
    }

    const loginLink = document.querySelector('nav.topheader a[href^="https"]');
    if (loginLink) loginLink.innerText = isEnglish ? 'Login' : 'Acceder';

    // Hero
    const title = document.querySelector('.hero-content h1');
    if (title) {
      title.innerHTML = isEnglish
        ? "Start today <br> your <br> professional path"
        : "Empieza hoy <br> tu camino <br> profesional";
    }

    const ctaBtn = document.querySelector('.cta-button');
    if (ctaBtn) {
      ctaBtn.innerText = isEnglish ? "Sign up" : "Regístrate";
    }

    // Cómo funciona
    const howTitle = document.querySelector('.how-it-works h2');
    if (howTitle) howTitle.innerText = isEnglish ? "How it works?" : "¿Cómo funciona?";

    const stepTitles = document.querySelectorAll('.step h3');
    const stepTexts = document.querySelectorAll('.step p');

    const stepTitlesEn = [
      "Discover projects",
      "Build your portfolio",
      "Collaborate and learn",
      "Boost your career"
    ];
    const stepTitlesEs = [
      "Descubre proyectos",
      "Construye tu portafolio",
      "Colabora y aprende",
      "Impulsa tu carrera"
    ];
    const stepTextsEn = [
      "Explore new opportunities in different areas",
      "Showcase your skills and achievements",
      "Gain experience in the job field",
      "Gain visibility and expand your professional network"
    ];
    const stepTextsEs = [
      "Explora nuevas oportunidades en nuevas áreas",
      "Muestra tus habilidades y logros",
      "Obtén experiencia en el campo laboral",
      "Gana visibilidad y expande tu red profesional"
    ];

    stepTitles.forEach((el, i) => el.innerText = isEnglish ? stepTitlesEn[i] : stepTitlesEs[i]);
    stepTexts.forEach((el, i) => el.innerText = isEnglish ? stepTextsEn[i] : stepTextsEs[i]);

    // Casos de éxito
    const successTitle = document.querySelector('.success-stories h2');
    if (successTitle) successTitle.innerText = isEnglish ? "Success Stories" : "Casos de éxito";

    const quotes = document.querySelectorAll('.quote');
    const roles = document.querySelectorAll('.role');
    if (quotes.length >= 2 && roles.length >= 2) {
      quotes[0].innerText = isEnglish
        ? "UniTalents connected me with a fintech for a real project. Now I have an internship thanks to that experience."
        : "UniTalents me conectó con una fintech para un proyecto real. Hoy tengo prácticas preprofesionales gracias a esa experiencia.";

      roles[0].innerText = isEnglish
        ? "Software Engineering Student"
        : "Estudiante de Ingenierpia de Software";

      quotes[1].innerText = isEnglish
        ? "We published a project on UniTalents and within a week we had a student working with us. Delivered on time and with excellent quality."
        : "Publicamos un proyecto en UniTalents y en una semana ya teníamos a un estudiante trabajando con nosotros. Entregó a tiempo y con excelente calidad.";

      roles[1].innerText = isEnglish
        ? "Operations Manager, QLab Perú"
        : "Gerente de Operaciones, QLab Perú";
    }

    // FAQs
    const faqsTitle = document.querySelector('.faqs h2');
    if (faqsTitle) faqsTitle.innerText = isEnglish ? "Frequently Asked Questions" : "Preguntas frecuentes";

    const faqQuestions = document.querySelectorAll('.faq-container summary');
    const faqAnswers = document.querySelectorAll('.faq-container p');

    const questionsEn = [
      "Who can apply to the projects?",
      "What types of projects are published?",
      "Is there a cost to use UniTalents?",
      "What is the hiring process like?"
    ];
    const questionsEs = [
      "¿Quiénes pueden postular a los proyectos?",
      "¿Qué tipo de proyectos se publican?",
      "¿Tiene algún costo usar UniTalents?",
      "¿Cómo es el proceso de contratación?"
    ];
    const answersEn = [
      "All students registered on the platform with a verified profile and an active portfolio.",
      "Real projects from companies seeking young talent for innovation, development, design, and more.",
      "For students, the platform is completely free. Companies pay to post and validate talent.",
      "Companies select applicants, rate their performance, and may hire directly through the platform."
    ];
    const answersEs = [
      "Todos los estudiantes registrados en la plataforma con un perfil verificado y un portafolio activo.",
      "Se publican proyectos reales de empresas que buscan talento joven para innovación, desarrollo, diseño y más.",
      "Para los estudiantes, la plataforma es completamente gratuita. Las empresas pagan por publicar y validar talento.",
      "Las empresas seleccionan postulantes, califican su desempeño y pueden contratar directamente desde la plataforma."
    ];

    faqQuestions.forEach((el, i) => el.innerText = isEnglish ? questionsEn[i] : questionsEs[i]);
    faqAnswers.forEach((el, i) => el.innerText = isEnglish ? answersEn[i] : answersEs[i]);

    // Integrantes
    const membersTitle = document.querySelector('.members h2');
    if (membersTitle) membersTitle.innerText = isEnglish ? "Team Members" : "Integrantes";

    // Footer
    const footerLinks = document.querySelectorAll('.menuFooter .footerElem a');
    const footerTextsEn = [
      "Home",
      "How it works?",
      "Success Stories",
      "FAQs",
      "Team",
      "Login"
    ];
    const footerTextsEs = [
      "Inicio",
      "¿Cómo funciona?",
      "Casos de éxito",
      "FAQs",
      "Integrantes",
      "Acceder"
    ];
    footerLinks.forEach((el, i) => el.innerText = isEnglish ? footerTextsEn[i] : footerTextsEs[i]);

    const copyright = document.querySelector('.footer .text');
    if (copyright) {
      copyright.innerText = isEnglish
        ? "©2025 | All rights reserved"
        : "©2025 | Todos los derechos reservados";
    }
  });
});
