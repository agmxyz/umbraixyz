import translations from './translations.json';

export const languages = {
  en: 'English',
  es: 'Español', 
  de: 'Deutsch',
};

export const defaultLang = 'en';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string) {
    return key.split('.').reduce((obj, k) => obj?.[k], translations[lang]) || key;
  }
}

export function getStaticPaths() {
  return Object.keys(languages).map(lang => ({
    params: { lang: lang === defaultLang ? undefined : lang },
  }));
}

export function translatePath(path: string, lang: string) {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}