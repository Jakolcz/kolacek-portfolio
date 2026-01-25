import {defaultLang, translations} from './translations';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in translations) return lang as keyof typeof translations;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
    return function t(key: keyof typeof translations[typeof defaultLang], values?: Record<string, string | number>) {
        let text: string = translations[lang][key] || translations[defaultLang][key];

        // Enable simple placeholder replacement
        if (values) {
            Object.keys(values).forEach((placeholder) => {
                text = text.replace(`{${placeholder}}`, String(values[placeholder]));
            });
        }

        return text;
    }
}

export function getLocalizedPath(path: string, lang: string) {
    if (lang === defaultLang) return path;
    return `/${lang}${path}`;
}