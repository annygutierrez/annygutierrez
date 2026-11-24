// UI texts per language. Work descriptions live with the works in src/pages/MajorWorks/worksList.js.
// `name` is how each language calls itself (shown in the language menu).
export const LANGUAGES = [
  { code: 'es', name: 'español' },
  { code: 'en', name: 'english' },
  { code: 'fr', name: 'français' },
  { code: 'de', name: 'deutsch' },
  { code: 'nl', name: 'nederlands' },
  { code: 'qu', name: 'runasimi' },
  { code: 'ru', name: 'русский' },
];

export const DEFAULT_LANGUAGE = 'en';

export const TRANSLATIONS = {
  en: {
    home: {
      title: 'anny gutierrez-lopez makes:',
      makes: ['websites', 'mobile apps', 'mobile games', 'steam games', 'drawings', 'robots', 'paintings', 'music', 'poems', 'micro-stories'],
    },
    nav: { majorWorks: 'major works', aboutMe: 'about me', contact: 'contact', home: 'home', language: 'language', next: 'next', poems: 'poems', microStories: 'micro-stories' },
  },
  es: {
    home: {
      title: 'anny gutierrez-lopez crea:',
      makes: ['sitios web', 'apps móviles', 'juegos móviles', 'juegos de steam', 'dibujos', 'robots', 'pinturas', 'música', 'poemas', 'microrrelatos'],
    },
    nav: { majorWorks: 'trabajos destacados', aboutMe: 'sobre mí', contact: 'contacto', home: 'inicio', language: 'idioma', next: 'siguiente', poems: 'poemas', microStories: 'microrrelatos' },
  },
  fr: {
    home: {
      title: 'anny gutierrez-lopez crée :',
      makes: ['sites web', 'applications mobiles', 'jeux mobiles', 'jeux steam', 'dessins', 'robots', 'peintures', 'musique', 'poèmes', 'micro-nouvelles'],
    },
    nav: { majorWorks: 'travaux principaux', aboutMe: 'à propos', contact: 'contact', home: 'accueil', language: 'langue', next: 'suivant', poems: 'poèmes', microStories: 'micro-nouvelles' },
  },
  de: {
    home: {
      title: 'anny gutierrez-lopez macht:',
      makes: ['websites', 'mobile apps', 'mobile games', 'steam-games', 'zeichnungen', 'roboter', 'gemälde', 'musik', 'gedichte', 'kurzgeschichten'],
    },
    nav: { majorWorks: 'hauptwerke', aboutMe: 'über mich', contact: 'kontakt', home: 'startseite', language: 'sprache', next: 'weiter', poems: 'gedichte', microStories: 'kurzgeschichten' },
  },
  nl: {
    home: {
      title: 'anny gutierrez-lopez maakt:',
      makes: ['websites', 'mobiele apps', 'mobiele games', 'steam-games', 'tekeningen', 'robots', 'schilderijen', 'muziek', 'gedichten', 'microverhalen'],
    },
    nav: { majorWorks: 'belangrijkste werken', aboutMe: 'over mij', contact: 'contact', home: 'home', language: 'taal', next: 'volgende', poems: 'gedichten', microStories: 'microverhalen' },
  },
  // Quechua: needs review by a native speaker.
  qu: {
    home: {
      title: 'anny gutierrez-lopez ruran:',
      makes: ['web raphikuna', 'celularpaq app-kuna', 'celularpaq pukllaykuna', 'steam pukllaykuna', "siq'ikuna", 'robotkuna', "llimp'ikuna", 'takikuna', 'harawikuna', 'uchuy willakuykuna'],
    },
    nav: { majorWorks: "hatun llamk'aykuna", aboutMe: 'ñuqamanta', contact: 'rimanakusun', home: 'qallariy', language: 'simi', next: 'qatiqnin', poems: 'harawikuna', microStories: 'uchuy willakuykuna' },
  },
  ru: {
    home: {
      title: 'anny gutierrez-lopez создаёт:',
      makes: ['сайты', 'мобильные приложения', 'мобильные игры', 'игры для steam', 'рисунки', 'роботы', 'картины', 'музыка', 'стихи', 'микрорассказы'],
    },
    nav: { majorWorks: 'главные работы', aboutMe: 'обо мне', contact: 'контакты', home: 'главная', language: 'язык', next: 'далее', poems: 'стихи', microStories: 'микрорассказы' },
  },
};
