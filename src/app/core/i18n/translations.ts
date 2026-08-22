/**
 * Flat-key translation dictionaries.
 * FR is the default language of the application.
 */
export const TRANSLATIONS: Record<'fr' | 'en', Record<string, string>> = {
  fr: {
    /* ---------- Navbar ---------- */
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.stack': 'Stack',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.contact': 'Contact',
    'nav.hire': 'Me recruter',
    'nav.subtitle': 'Développeur Fullstack',
    'nav.menu': 'Ouvrir le menu',

    /* ---------- Controls ---------- */
    'theme.toLight': 'Passer en mode clair',
    'theme.toDark': 'Passer en mode sombre',
    'lang.switchToEn': 'Switch to English',
    'lang.switchToFr': 'Passer en français',

    /* ---------- Loader ---------- */
    'loader.sub': 'Initialisation de l’expérience numérique...',

    /* ---------- Hero ---------- */
    'hero.eyebrow': 'Fullstack Java / Spring Boot / Angular',
    'hero.tagline1': 'Je livre des systèmes qui fonctionnent.',
    'hero.tagline2': 'Pas seulement des fonctionnalités de démo.',
    'hero.title1': 'Un backend qui tient.',
    'hero.title2': 'Un frontend qui respire.',
    'hero.title3': 'Un déploiement sans panique.',
    'hero.work': 'Voir les projets',
    'hero.resume': 'Voir le CV',
    'hero.resume.link': 'CV_ARIJESA_FR.pdf',
    'hero.scroll': 'Défilez. L’intéressant est plus bas.',

    /* ---------- About ---------- */
    'about.eyebrow': 'À propos / Le bâtisseur',
    'about.lead': 'Là où la technologie devient une solution, ',
    'about.leadAccent': 'pas une complication.',
    'about.copy':
      'Je construis des applications complètes — Java et Spring Boot côté backend, Angular côté frontend, avec des données qui restent fiables et des conteneurs identiques en staging et en production. Je me soucie de l’architecture et du cycle complet, parce que livrer n’est que la moitié du travail. L’autre moitié, c’est faire en sorte que ça reste livré.',
    'about.tag1.label': 'Fullstack par conception',
    'about.tag1.sub': 'Java + Spring + Angular',
    'about.tag2.label': 'Pensée de bout en bout',
    'about.tag2.sub': 'Ticket → Production',
    'about.tag3.label': 'Des systèmes qui montent en charge',
    'about.tag3.sub': 'Sans drame',
    'about.tag4.label': 'Mon futur compte',
    'about.tag4.sub': 'Le code propre est une assurance-vie',

    /* ---------- Stack ---------- */
    'stack.eyebrow': 'La stack technique',
    'stack.title':
      'Les outils avec lesquels je transforme des idées en systèmes prêts pour la production.',
    'cat.language': 'Langage',
    'cat.backend': 'Backend',
    'cat.frontend': 'Frontend',
    'cat.mobile': 'Mobile',
    'cat.database': 'Base de données',
    'cat.cache': 'Cache',
    'cat.devops': 'DevOps',
    'cat.streaming': 'Streaming',
    'cat.tooling': 'Outillage',

    /* ---------- Projects ---------- */
    'projects.eyebrow': 'Réalisations sélectionnées',
    'projects.title': 'Une vitrine des systèmes que j’ai conçus.',
    'projects.visitWebsite': 'Visiter le site',
    'projects.private': 'Projet privé',
    'projects.privateHint': 'Projet privé — étude de cas indisponible',
    'projects.viewGallery': 'Voir la galerie',
    'projects.galleryFor': 'Voir la galerie de ',
    'projects.myRole': 'Mon rôle',
    'projects.closeGallery': 'Fermer la galerie',
    'projects.prevImage': 'Image précédente',
    'projects.nextImage': 'Image suivante',
    'projects.goToImage': 'Aller à l’image ',

    /* ---------- Experience ---------- */
    'exp.eyebrow': 'Expérience d’ingénierie',
    'exp.title': 'Une chronologie de systèmes bâtis pour monter en charge.',

    /* ---------- Showroom ---------- */
    'showroom.eyebrow': 'Le showroom numérique',
    'showroom.title': 'De vrais systèmes. De vraies contraintes. Une vraie production.',
    'showroom.desc':
      'Chaque projet ici a été conçu pour survivre au contact d’utilisateurs réels, de données réelles et de vrais déploiements un vendredi soir.',

    /* ---------- Why ---------- */
    'why.eyebrow': 'Pourquoi travailler avec moi',
    'why.title': 'Quatre principes derrière chaque projet.',

    /* ---------- Testimonial ---------- */
    'testi.quote1': '« Un bon logiciel disparaît dans le travail qu’il rend possible.',
    'testi.quote2': 'Un mauvais logiciel devient le travail. »',
    'testi.source': '— Principe de travail',

    /* ---------- Contact ---------- */
    'contact.eyebrow': 'Contact',
    'contact.title': 'Discutons.',
    'contact.desc':
      'Produit complet, audit technique, ou un système qui doit grandir sans casser. Dites-moi ce que vous avez entre les mains.',
    'contact.remote': 'Disponible en télétravail partout dans le monde ou en présentiel à Madagascar',
    'contact.name': 'Nom',
    'contact.email': 'E-mail',
    'contact.project': 'Projet',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message',
    'contact.statusEmpty': 'Merci de renseigner votre nom, votre e-mail et votre message.',
    'contact.statusOpening': 'Ouverture de votre client e-mail pour envoyer ce message…',
    'contact.subjectPrefix': 'Demande de projet de ',
    'contact.statusSent': 'Message envoyé avec succès.',

    /* ---------- Footer ---------- */
    'footer.tagline': 'Construire des expériences numériques avec technologie et précision.',
    'footer.navTitle': 'Navigation',
    'footer.connectTitle': 'Réseaux',
    'footer.rights': '© 2026 arijesama.dev — Tous droits réservés.',
    'footer.engineered': 'Conçu & développé de zéro.'
  },

  en: {
    /* ---------- Navbar ---------- */
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire me now',
    'nav.subtitle': 'Fullstack Developer',
    'nav.menu': 'Open menu',

    /* ---------- Controls ---------- */
    'theme.toLight': 'Switch to light mode',
    'theme.toDark': 'Switch to dark mode',
    'lang.switchToEn': 'Switch to English',
    'lang.switchToFr': 'Passer en français',

    /* ---------- Loader ---------- */
    'loader.sub': 'Initializing digital experience...',

    /* ---------- Hero ---------- */
    'hero.eyebrow': 'Fullstack Java / Spring Boot / Angular',
    'hero.tagline1': 'I ship systems that work.',
    'hero.tagline2': 'Not just features that demo well.',
    'hero.title1': 'Backend that holds.',
    'hero.title2': 'Frontend that breathes.',
    'hero.title3': 'Deployment that doesn’t panic.',
    'hero.work': 'See the work',
    'hero.resume': 'View Resume',
    'hero.resume.link': 'CV_ARIJESA_EN.pdf',
    'hero.scroll': 'Scroll. The interesting part is below.',

    /* ---------- About ---------- */
    'about.eyebrow': 'About / The Builder',
    'about.lead': 'Where technology becomes a solution, ',
    'about.leadAccent': 'not a complication.',
    'about.copy':
      'I build full applications — Java and Spring Boot on the backend, Angular on the frontend, with data that stays reliable and containers that behave the same in staging and production. I care about architecture and the full cycle because shipping is only half the job. The other half is making sure it stays shipped.',
    'about.tag1.label': 'Fullstack by design',
    'about.tag1.sub': 'Java + Spring + Angular',
    'about.tag2.label': 'End-to-end thinking',
    'about.tag2.sub': 'Ticket → Production',
    'about.tag3.label': 'Systems that scale',
    'about.tag3.sub': 'Without drama',
    'about.tag4.label': 'Future me matters',
    'about.tag4.sub': 'Clean code is self-defense',

    /* ---------- Stack ---------- */
    'stack.eyebrow': 'The Technology Stack',
    'stack.title': 'Tools I use to turn ideas into production-ready systems.',
    'cat.language': 'Language',
    'cat.backend': 'Backend',
    'cat.frontend': 'Frontend',
    'cat.mobile': 'Mobile',
    'cat.database': 'Database',
    'cat.cache': 'Cache',
    'cat.devops': 'DevOps',
    'cat.streaming': 'Streaming',
    'cat.tooling': 'Tooling',

    /* ---------- Projects ---------- */
    'projects.eyebrow': 'Selected Work',
    'projects.title': 'A showroom of systems I’ve engineered.',
    'projects.visitWebsite': 'Visit Website',
    'projects.private': 'Private Project',
    'projects.privateHint': 'Private project — case study unavailable',
    'projects.viewGallery': 'View gallery',
    'projects.galleryFor': 'View gallery for ',
    'projects.myRole': 'My Role',
    'projects.closeGallery': 'Close gallery',
    'projects.prevImage': 'Previous image',
    'projects.nextImage': 'Next image',
    'projects.goToImage': 'Go to image ',

    /* ---------- Experience ---------- */
    'exp.eyebrow': 'Engineering Experience',
    'exp.title': 'A timeline of building things that scale.',

    /* ---------- Showroom ---------- */
    'showroom.eyebrow': 'The Digital Showroom',
    'showroom.title': 'Real systems. Real constraints. Real production.',
    'showroom.desc':
      'Every project here was built to survive contact with actual users, actual data, and actual Friday deploys.',

    /* ---------- Why ---------- */
    'why.eyebrow': 'Why Work With Me',
    'why.title': 'Four principles behind every project.',

    /* ---------- Testimonial ---------- */
    'testi.quote1': '“Good software disappears into the work it enables.',
    'testi.quote2': 'Bad software becomes the work.”',
    'testi.source': '— Working principle',

    /* ---------- Contact ---------- */
    'contact.eyebrow': 'Contact',
    'contact.title': 'Let’s talk.',
    'contact.desc':
      'Full product build, technical audit, or a system that needs to grow without breaking. Tell me what you’re dealing with.',
    'contact.remote': 'Available worldwide remotely or on-site in Madagascar',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.project': 'Project',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.statusEmpty': 'Please fill in your name, email and message.',
    'contact.statusOpening': 'Opening your email client to send this message…',
    'contact.subjectPrefix': 'Project inquiry from ',
    'contact.statusSent': 'Message sent successfully.',

    /* ---------- Footer ---------- */
    'footer.tagline': 'Building digital experiences with technology and precision.',
    'footer.navTitle': 'Navigation',
    'footer.connectTitle': 'Connect',
    'footer.rights': '© 2026 arijesama.dev — All rights reserved.',
    'footer.engineered': 'Designed & engineered from scratch.'
  }
};
