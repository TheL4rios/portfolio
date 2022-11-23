import { Languages } from '../components/Translation';

export const getLocalLanguage = (): Languages => {
    const localLang = window.navigator.language;
    if (localLang !== 'es-ES') {
        return 'en';
    }

    return 'es';
}