// src/context/LanguageContext.jsx
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageContext = createContext();

export const SUPPORTED_LANGUAGES = [
  { code: 'EN', name: 'English', path: '' },
  { code: 'FR', name: 'Français', path: 'fr' },
  { code: 'DE', name: 'Deutsch', path: 'de' },
  { code: 'ES', name: 'Español', path: 'es' },
  { code: 'IT', name: 'Italiano', path: 'it' },
  { code: 'ZH', name: '中文', path: 'zh' },
  { code: 'AR', name: 'العربية', path: 'ar' }
];

const translations = {
  EN: {
    home: "Home",
    destinations: "Destinations",
    about: "About Us",
    toursList: "Tours List",
    contactUs: "Contact Us",
    bookSafari: "Book Safari",
    tagline: "Your premier partner for unforgettable luxury and wildlife safaris across East and Southern Africa.",
  },
  FR: {
    home: "Accueil",
    destinations: "Destinations",
    about: "À Propos",
    toursList: "Liste des Circuits",
    contactUs: "Contactez-nous",
    bookSafari: "Réserver",
    tagline: "Votre partenaire de premier choix pour des safaris de luxe inoubliables en Afrique de l'Est et Australe.",
  },
  ES: {
    home: "Inicio",
    destinations: "Destinos",
    about: "Sobre Nosotros",
    toursList: "Lista de Tours",
    contactUs: "Contáctenos",
    bookSafari: "Reservar Safari",
    tagline: "Su socio principal para safaris de lujo y vida silvestre inolvidables en África Oriental y Austral.",
  },
  IT: {
    home: "Home",
    destinations: "Destinazioni",
    about: "Chi Siamo",
    toursList: "Lista Tour",
    contactUs: "Contattaci",
    bookSafari: "Prenota Safari",
    tagline: "Il vostro partner principale per indimenticabili safari di lusso e naturalistici nell'Africa orientale e australe.",
  },
  ZH: {
    home: "首页",
    destinations: "目的地",
    about: "关于我们",
    toursList: "行程列表",
    contactUs: "联系我们",
    bookSafari: "预订游猎",
    tagline: "您在东非和南部非洲难忘的奢华与野生动物游猎之旅的首选伙伴。",
  },
  AR: {
    home: "الرئيسية",
    destinations: "الوجهات",
    about: "من نحن",
    toursList: "قائمة الرحلات",
    contactUs: "اتصل بنا",
    bookSafari: "احجز الرحلة",
    tagline: "شريكك الأول لرحلات السفاري الفاخرة التي لا تنسى عبر شرق وجنوب أفريقيا.",
  },
  DE: {
    home: "Startseite",
    destinations: "Reiseziele",
    about: "Über uns",
    toursList: "Reisen",
    contactUs: "Kontakt",
    bookSafari: "Safari Buchen",
    tagline: "Ihr erstklassiger Partner für unvergessliche Luxus- und Wildlife-Safaris in Ost- und Südafrika.",
  }
};

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Derive the language directly from the URL to avoid synchronizing state in an effect.
  const firstSegment = location.pathname.split('/')[1]?.toLowerCase();
  const matchedLang = SUPPORTED_LANGUAGES.find(lang => lang.path === firstSegment);
  const currentLang = matchedLang?.code || 'EN';

  const setLanguage = (langCode) => {
    const targetLang = SUPPORTED_LANGUAGES.find(lang => lang.code === langCode);
    if (!targetLang) return;

    const pathSegments = location.pathname.split('/');
    const currentFirstSegment = pathSegments[1]?.toLowerCase();
    
    // Check if the current URL already has a language prefix
    const hasLangPrefix = SUPPORTED_LANGUAGES.some(lang => lang.path === currentFirstSegment);

    let routeSegments = hasLangPrefix ? pathSegments.slice(2) : pathSegments.slice(1);
    routeSegments = routeSegments.filter(Boolean);

    let newPath;
    if (targetLang.code === 'EN') {
      // Strip language prefix for default English root
      newPath = `/${routeSegments.join('/')}`;
    } else {
      // Add the selected language prefix to the current route.
      newPath = `/${targetLang.path}${routeSegments.length ? `/${routeSegments.join('/')}` : ''}`;
    }

    navigate(`${newPath}${location.search}${location.hash}`);
  };

  const t = (key) => {
    return translations[currentLang]?.[key] || translations['EN'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t, SUPPORTED_LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}