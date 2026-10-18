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
    'nav.subtitle': 'Développeur Backend & Mobile',
    'nav.menu': 'Ouvrir le menu',

    /* ---------- Controls ---------- */
    'theme.toLight': 'Passer en mode clair',
    'theme.toDark': 'Passer en mode sombre',
    'lang.switchToEn': 'Switch to English',
    'lang.switchToFr': 'Passer en français',

    /* ---------- Loader ---------- */
    'loader.sub': 'Initialisation de l’expérience numérique...',

    /* ---------- Hero ---------- */
    'hero.eyebrow': 'Mobile React Native / Flutter / Go / Spring Boot',
    'hero.tagline1': 'Je livre des applications mobiles qui fonctionnent.',
    'hero.tagline2': 'Pas seulement des fonctionnalités de démo.',
    'hero.title1': 'Des alertes en 3 secondes.',
    'hero.title2': 'Une app qui reste fluide.',
    'hero.title3': 'Même hors ligne.',
    'hero.work': 'Voir les projets',
    'hero.resume': 'Voir le CV',
    'hero.resume.link': 'CV_ARIJESA_FR.pdf',
    'hero.scroll': 'Défilez. L’intéressant est plus bas.',

    /* ---------- About ---------- */
    'about.eyebrow': 'À propos / Le bâtisseur',
    'about.lead': 'Là où la technologie devient une solution, ',
    'about.leadAccent': 'pas une complication.',
    'about.copy':
      'Je construis des applications mobiles complètes — React Native, Flutter et natif Android/iOS côté mobile, Go, Java Spring Boot et Python côté backend, avec du temps réel, des notifications push et un mode hors-ligne qui reste fiable. Je me soucie de la performance, des tests et du cycle complet, parce que livrer n’est que la moitié du travail. L’autre moitié, c’est faire en sorte que ça reste livré.',
    'about.tag1.label': 'Mobile par conception',
    'about.tag1.sub': 'React Native + Flutter + natif',
    'about.tag2.label': 'Pensée de bout en bout',
    'about.tag2.sub': 'Maquette → Store',
    'about.tag3.label': 'Des apps qui tiennent la charge',
    'about.tag3.sub': 'Sans crash',
    'about.tag4.label': 'Mon futur compte',
    'about.tag4.sub': 'Le code propre est une assurance-vie',

    /* ---------- Stack ---------- */
    'stack.eyebrow': 'La stack technique',
    'stack.title':
      'Les outils avec lesquels je transforme des besoins terrain en applications mobiles prêtes pour la production.',
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
    'projects.title': 'Une vitrine des applications que j’ai conçues.',
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
    'projects.seeMoreDetails': 'Voir plus de détails',
    'projects.objective': 'Objectif',
    'projects.features': 'Fonctionnalités',
    'projects.closeDetails': 'Fermer les détails',

    /* ---------- Experience ---------- */
    'exp.eyebrow': 'Expérience d’ingénierie',
    'exp.title': 'Une chronologie d’applications bâties pour tenir la charge.',

    /* ---------- Showroom ---------- */
    'showroom.eyebrow': 'Le showroom numérique',
    'showroom.title': 'De vraies applications. De vraies contraintes. De vrais utilisateurs.',
    'showroom.desc':
      'Chaque projet ici a été conçu pour survivre au contact d’utilisateurs réels, de réseaux instables et de vraies mises en production sur les stores.',

    /* ---------- Why ---------- */
    'why.eyebrow': 'Pourquoi travailler avec moi',
    'why.title': 'Quatre principes derrière chaque projet.',

    /* ---------- Testimonial ---------- */
    'testi.quote1': '« Un bon logiciel simplifie le travail.',
    'testi.quote2': 'Un mauvais logiciel le complique. »',
    'testi.source': '— Principe de travail',

    /* ---------- Contact ---------- */
    'contact.eyebrow': 'Contact',
    'contact.title': 'Discutons.',
    'contact.desc':
      'Application mobile, audit technique, ou un système temps réel qui doit grandir sans casser. Dites-moi ce que vous avez entre les mains.',
    'contact.remote': 'Disponible en télétravail partout dans le monde ou en présentiel à Madagascar',
    'contact.name': 'Votre nom',
    'contact.email': 'Votre E-mail',
    'contact.project': 'Votre projet',
    'contact.bookingTitle': 'Parlons de votre prochaine opportunité',
    'contact.bookingDesc': 'Un échange de 30 minutes pour discuter de vos besoins, de mon expérience et de la manière dont je pourrais contribuer à votre équipe.',
    'contact.bookingCta': 'Prendre rendez-vous',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message',
    'contact.statusEmpty': 'Merci de renseigner votre nom, votre e-mail et votre message.',
    'contact.statusOpening': 'Ouverture de votre client e-mail pour envoyer ce message…',
    'contact.subjectPrefix': 'Demande de projet de ',
    'contact.statusSent': 'Message envoyé avec succès.',
    'contact.closeNotification': 'Fermer la notification',

    /* ---------- Footer ---------- */
    'footer.tagline': 'Construire des expériences mobiles avec technologie et précision.',
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
    'nav.subtitle': 'Backend & Mobile Developer',
    'nav.menu': 'Open menu',

    /* ---------- Controls ---------- */
    'theme.toLight': 'Switch to light mode',
    'theme.toDark': 'Switch to dark mode',
    'lang.switchToEn': 'Switch to English',
    'lang.switchToFr': 'Passer en français',

    /* ---------- Loader ---------- */
    'loader.sub': 'Initializing digital experience...',

    /* ---------- Hero ---------- */
    'hero.eyebrow': 'Mobile React Native / Flutter / Go / Spring Boot',
    'hero.tagline1': 'I ship mobile apps that work.',
    'hero.tagline2': 'Not just features that demo well.',
    'hero.title1': 'Alerts in 3 seconds.',
    'hero.title2': 'An app that stays smooth.',
    'hero.title3': 'Even offline.',
    'hero.work': 'See the work',
    'hero.resume': 'View Resume',
    'hero.resume.link': 'CV_ARIJESA_EN.pdf',
    'hero.scroll': 'Scroll. The interesting part is below.',

    /* ---------- About ---------- */
    'about.eyebrow': 'About / The Builder',
    'about.lead': 'Where technology becomes a solution, ',
    'about.leadAccent': 'not a complication.',
    'about.copy':
      'I build complete mobile applications — React Native, Flutter and native Android/iOS on the mobile side, Go, Java Spring Boot and Python on the backend, with real-time updates, push notifications and an offline mode that stays reliable. I care about performance, testing and the full cycle because shipping is only half the job. The other half is making sure it stays shipped.',
    'about.tag1.label': 'Mobile by design',
    'about.tag1.sub': 'React Native + Flutter + native',
    'about.tag2.label': 'End-to-end thinking',
    'about.tag2.sub': 'Mockup → Store',
    'about.tag3.label': 'Apps that hold up',
    'about.tag3.sub': 'Without crashes',
    'about.tag4.label': 'Future me matters',
    'about.tag4.sub': 'Clean code is self-defense',

    /* ---------- Stack ---------- */
    'stack.eyebrow': 'The Technology Stack',
    'stack.title': 'Tools I use to turn field needs into production-ready mobile apps.',
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
    'projects.title': 'A showroom of apps I’ve engineered.',
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
    'projects.seeMoreDetails': 'See more details',
    'projects.objective': 'Objective',
    'projects.features': 'Features',
    'projects.closeDetails': 'Close details',

    /* ---------- Experience ---------- */
    'exp.eyebrow': 'Engineering Experience',
    'exp.title': 'A timeline of building apps that hold up.',

    /* ---------- Showroom ---------- */
    'showroom.eyebrow': 'The Digital Showroom',
    'showroom.title': 'Real apps. Real constraints. Real users.',
    'showroom.desc':
      'Every project here was built to survive contact with actual users, unstable networks, and actual store releases.',

    /* ---------- Why ---------- */
    'why.eyebrow': 'Why Work With Me',
    'why.title': 'Four principles behind every project.',

    /* ---------- Testimonial ---------- */
    'testi.quote1': '“Good software saves time.',
    'testi.quote2': ' Bad software wastes it.”',
    'testi.source': '— Working principle',

    /* ---------- Contact ---------- */
    'contact.eyebrow': 'Contact',
    'contact.title': 'Let’s talk.',
    'contact.desc':
      'Mobile app, technical audit, or a real-time system that needs to grow without breaking. Tell me what you’re dealing with.',
    'contact.remote': 'Available worldwide remotely or on-site in Madagascar',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.project': 'Your Project',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.bookingTitle': 'Let’s Talk About Your Next Opportunity',
    'contact.bookingDesc': 'A 30-minute conversation to discuss your needs, my experience, and how I could contribute to your team.',
    'contact.bookingCta': 'Book a Meeting',
    'contact.statusEmpty': 'Please fill in your name, email and message.',
    'contact.statusOpening': 'Opening your email client to send this message…',
    'contact.subjectPrefix': 'Project inquiry from ',
    'contact.statusSent': 'Message sent successfully.',
    'contact.closeNotification': 'Close notification',

    /* ---------- Footer ---------- */
    'footer.tagline': 'Building mobile experiences with technology and precision.',
    'footer.navTitle': 'Navigation',
    'footer.connectTitle': 'Connect',
    'footer.rights': '© 2026 arijesama.dev — All rights reserved.',
    'footer.engineered': 'Designed & engineered from scratch.'
  }
};
