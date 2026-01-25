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

        // Footer
        'footer.copyright': '© {year} Jakub Koláček. All rights reserved.',
    },
    cs: {
        // Navbar
        'nav.home': 'Domů',
        'nav.services': 'Služby',
        'nav.work': 'Práce',
        'nav.about': 'O mně',
        'nav.contact': 'Kontakt',

        // Footer
        'footer.copyright': '© {year} Jakub Koláček. Všechna práva vyhrazena.',
    },
} as const;