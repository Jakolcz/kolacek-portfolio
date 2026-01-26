export const languages = {
    en: 'English',
    cs: 'Čeština',
};

export const defaultLang = 'en';

export const translations = {
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.work': 'Work',
        'nav.about': 'About',
        'nav.contact': 'Contact',

        // Hero Section
        // TODO: Come up with something better
        'hero.role': 'Java Developer available for B2B cooperation',
        'hero.title': 'Robust Java <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600 dark:to-emerald-200">Backends</span> for Complex Enterprises',
        'hero.description1': 'Senior Freelance Java Developer specializing in',
        'hero.tech1': 'Spring Boot',
        'hero.tech2': 'Microservices',
        'hero.tech3': 'REST APIs',
        'hero.description2': 'Delivering scalable and efficient solutions tailored to your business needs.',
        'hero.mapAlt': 'Map showing my location,',
        'hero.basedIn': 'Based in',
        'hero.location': 'Brno, CZ',
        'hero.since': 'Since 2013',
        'hero.experience': '10+ years of experience',
        'hero.sectors': 'Banking, Travel agencies & Telecom',
        'hero.techStack': 'Tech Stack',

        // Footer
        'footer.copyright': '© {year} Jakub Koláček. All rights reserved.',
        'footer.joke': 'Built with Java... just kidding, Astro, TypeScript & Tailwind.'
    },
    cs: {
        // Navbar
        'nav.home': 'Domů',
        'nav.services': 'Služby',
        'nav.work': 'Práce',
        'nav.about': 'O mně',
        'nav.contact': 'Kontakt',

        // Hero Section
        'hero.role': 'Java vývojář dostupný pro B2B spolupráci',
        'hero.title': 'Robustní Java <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600 dark:to-emerald-200">Backendy</span> pro složité podniky',
        'hero.description1': 'Senior Freelance Java Developer specializující se na',
        'hero.tech1': 'Spring Boot',
        'hero.tech2': 'Microservices',
        'hero.tech3': 'REST API',
        'hero.description2': 'Dodávám škálovatelná a efektivní řešení přizpůsobená potřebám vašeho podnikání.',
        'hero.mapAlt': 'Mapa ukazující mou polohu,',
        'hero.basedIn': 'Sídlo',
        'hero.location': 'Brno',
        'hero.since': 'Od roku 2013',
        'hero.experience': '10+ let zkušeností',
        'hero.sectors': 'Bankovnictví, Cestovní kanceláře & Telekomunikace',
        'hero.techStack': 'Tech stack',

        // Footer
        'footer.copyright': '© {year} Jakub Koláček. Všechna práva vyhrazena.',
        'footer.joke': 'Postaveno na Javě... jen žertuji, Astro, TypeScript & Tailwind.'
    },
} as const;