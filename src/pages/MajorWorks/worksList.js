import BcpMigracion from '../../assets/bcp-migracion.png';
import America from '../../assets/america.png';
import Argentina from '../../assets/argentina.png';
import Honduras from '../../assets/honduras.png';
import KaytrustApp from '../../assets/everisid.png';
import Prima from '../../assets/prima.png';
import Cadena from '../../assets/cadena.png';
import David19 from '../../assets/david19.png';
import KaytrustLanding from '../../assets/kaytrust.png';

// Each work has an image and its texts per language:
//   name + client → list on the left; title (falls back to name) + description → detail on the right.
// A missing field falls back to Spanish (the original texts), then English. Use getWorkText(work, lang).
// Quechua (qu) texts need review by a native speaker.
export const WORKS = [
  {
    id: 'migracion-banca-movil-bcp',
    image: BcpMigracion,
    text: {
      es: {
        name: 'Migración de app de banca móvil',
        client: 'Banco de Crédito del Perú 2025 - 2026',
        title: 'Migración App Banca Móvil',
        description:
          'Mi trabajo consistió en definir lineamientos, revisar calidad de código, revisión de procesos y mejora constante de librerías React Native y nativas.',
      },
      en: {
        name: 'Mobile banking app migration',
        title: 'Mobile Banking App Migration',
        description:
          'My work consisted of defining guidelines, reviewing code quality, reviewing processes and continuously improving React Native and native libraries.',
      },
      fr: {
        name: "Migration de l'application de banque mobile",
        title: "Migration de l'app de banque mobile",
        description:
          'Mon travail consistait à définir des lignes directrices, à contrôler la qualité du code, à revoir les processus et à améliorer en continu les bibliothèques React Native et natives.',
      },
      de: {
        name: 'Migration einer Mobile-Banking-App',
        description:
          'Meine Arbeit bestand darin, Richtlinien festzulegen, die Codequalität zu prüfen, Prozesse zu überprüfen und React-Native- sowie native Bibliotheken kontinuierlich zu verbessern.',
      },
      nl: {
        name: 'Migratie van een app voor mobiel bankieren',
        description:
          'Mijn werk bestond uit het opstellen van richtlijnen, het bewaken van de codekwaliteit, het herzien van processen en het continu verbeteren van React Native- en native libraries.',
      },
      qu: {
        name: 'Celularpi banco app-ta astay',
        description:
          "Llamk'ayniyqa karqan kamachikuykunata churay, código allin kayninta qhaway, ruraykunata qhawapay, React Native nisqa hinallataq nativa librería-kunata sapa kuti allinchay.",
      },
      ru: {
        name: 'Миграция приложения мобильного банкинга',
        description:
          'Моя работа заключалась в определении стандартов разработки, контроле качества кода, проверке процессов и постоянном улучшении библиотек React Native и нативных библиотек.',
      },
    },
  },
  {
    id: 'in-grid-america-tv',
    image: America,
    text: {
      es: {
        name: 'Plataforma de gestión de programación televisiva',
        client: 'América Televisión 2018',
        description:
          'Web App diseñada para administrar el catálogo de programas, los cortes comerciales, programación de productos audiovisuales y los ingresos por marketing.',
      },
      en: {
        name: 'TV programming management platform',
        description:
          'Web app designed to manage the program catalog, commercial breaks, scheduling of audiovisual products and marketing revenue.',
      },
      fr: {
        name: 'Plateforme de gestion de la programmation télévisuelle',
        description:
          'Application web conçue pour gérer le catalogue de programmes, les coupures publicitaires, la programmation des contenus audiovisuels et les revenus marketing.',
      },
      de: {
        name: 'Plattform zur Verwaltung des TV-Programms',
        description:
          'Web-App zur Verwaltung des Programmkatalogs, der Werbeunterbrechungen, der Planung audiovisueller Inhalte und der Marketingeinnahmen.',
      },
      nl: {
        name: 'Platform voor het beheer van tv-programmering',
        description:
          'Webapp voor het beheren van de programmacatalogus, reclameblokken, de planning van audiovisuele producties en marketinginkomsten.',
      },
      qu: {
        name: 'Televisión programacionta kamachinapaq plataforma',
        description:
          "Web app, programakunata, publicidad pakiykunata, audiovisual rurasqakunata hinallataq marketing qullqi yaykuykunata kamachinapaq ruwasqa.",
      },
      ru: {
        name: 'Платформа управления телепрограммированием',
        description:
          'Веб-приложение для управления каталогом программ, рекламными блоками, планированием аудиовизуального контента и доходами от маркетинга.',
      },
    },
  },
  {
    id: 'piloto-identidad-argentina',
    image: Argentina,
    text: {
      es: {
        name: 'Piloto de identidad digital ciudadana con blockchain',
        client: 'Kaytrust App/Gobierno de Argentina 2019',
        description:
          'Fue un MVP de cómo funcionaría la digitalización de la identidad de los ciudadanos de Argentina y qué riesgos de seguridad implica.',
      },
      en: {
        name: 'Blockchain-based digital citizen ID pilot',
        client: 'Kaytrust App/Government of Argentina 2019',
        description:
          'An MVP of how digitizing the identity of Argentine citizens would work and the security risks it involves.',
      },
      fr: {
        name: "Pilote d'identité numérique citoyenne avec blockchain",
        client: 'Kaytrust App/Gouvernement argentin 2019',
        description:
          "Un MVP montrant comment fonctionnerait la numérisation de l'identité des citoyens argentins et les risques de sécurité qu'elle implique.",
      },
      de: {
        name: 'Pilotprojekt für digitale Bürgeridentität mit Blockchain',
        client: 'Kaytrust App/Regierung Argentiniens 2019',
        description:
          'Ein MVP, das zeigt, wie die Digitalisierung der Identität argentinischer Bürger funktionieren würde und welche Sicherheitsrisiken sie birgt.',
      },
      nl: {
        name: 'Pilot voor digitale burgeridentiteit met blockchain',
        client: 'Kaytrust App/Argentijnse overheid 2019',
        description:
          "Een MVP van hoe het digitaliseren van de identiteit van Argentijnse burgers zou werken en welke beveiligingsrisico's dat met zich meebrengt.",
      },
      qu: {
        name: 'Blockchainwan llaqtaruna digital riqsichikuypaq piloto',
        client: 'Kaytrust App/Argentina kamachiq 2019',
        description:
          "Argentina llaqtarunakunaq riqsichikuyninta digitalman tikray imayna llamk'anman, hinallataq ima seguridad sasachakuykunata apamunman, chayta qhawachiq MVP karqan.",
      },
      ru: {
        name: 'Пилотный проект цифровой идентичности граждан на блокчейне',
        client: 'Kaytrust App/Правительство Аргентины 2019',
        description:
          'MVP, показывающий, как работала бы оцифровка удостоверений личности граждан Аргентины и какие риски безопасности это несёт.',
      },
    },
  },
  {
    id: 'contratos-honduras',
    image: Honduras,
    // TODO: add a description (the old portfolio reused the Argentina text here by mistake).
    text: {
      es: { name: 'Gestión de contratos gubernamentales', client: 'Kaytrust App/Gobierno de Honduras' },
      en: { name: 'Government contract management', client: 'Kaytrust App/Government of Honduras' },
      fr: { name: 'Gestion des contrats publics', client: 'Kaytrust App/Gouvernement du Honduras' },
      de: { name: 'Verwaltung von Regierungsverträgen', client: 'Kaytrust App/Regierung von Honduras' },
      nl: { name: 'Beheer van overheidscontracten', client: 'Kaytrust App/Hondurese overheid' },
      qu: { name: 'Kamachiq contratokunata kamachiy', client: 'Kaytrust App/Honduras kamachiq' },
      ru: { name: 'Управление государственными контрактами', client: 'Kaytrust App/Правительство Гондураса' },
    },
  },
  {
    id: 'kaytrust-app',
    image: KaytrustApp,
    text: {
      es: {
        name: 'App de identidad digital con blockchain',
        client: 'Kaytrust App 2018',
        description:
          'KayTrust Wallet es una billetera para tu identidad digital, compatible con los últimos estándares abiertos de Credenciales Verificables del W3C e Identidad Descentralizada. Su seguridad está garantizada por un registro distribuido interoperable, inmutable y cuyo contenido es imposible de falsificar.',
      },
      en: {
        name: 'Blockchain digital identity app',
        description:
          'KayTrust Wallet is a wallet for your digital identity, compatible with latest W3C Verifiable Credentials and Decentralized Identity open standards. Its security is guaranteed by an interoperable distributed ledger that is immutable and whose content is impossible to falsify.',
      },
      fr: {
        name: "Application d'identité numérique avec blockchain",
        description:
          "KayTrust Wallet est un portefeuille pour votre identité numérique, compatible avec les derniers standards ouverts du W3C sur les Verifiable Credentials et l'identité décentralisée. Sa sécurité est garantie par un registre distribué interopérable, immuable et dont le contenu est impossible à falsifier.",
      },
      de: {
        name: 'Digitale Identitäts-App mit Blockchain',
        description:
          'KayTrust Wallet ist eine Wallet für deine digitale Identität, kompatibel mit den neuesten offenen W3C-Standards für Verifiable Credentials und dezentrale Identität. Ihre Sicherheit wird durch ein interoperables, unveränderliches verteiltes Ledger garantiert, dessen Inhalt nicht gefälscht werden kann.',
      },
      nl: {
        name: 'App voor digitale identiteit met blockchain',
        description:
          'KayTrust Wallet is een wallet voor je digitale identiteit, compatibel met de nieuwste open W3C-standaarden voor Verifiable Credentials en gedecentraliseerde identiteit. De beveiliging wordt gegarandeerd door een interoperabel, onveranderlijk gedistribueerd grootboek waarvan de inhoud niet te vervalsen is.',
      },
      qu: {
        name: 'Blockchainwan digital riqsichikuy app',
        description:
          "KayTrust Wallet nisqaqa digital riqsichikuyniykipaq wallet-mi, W3C nisqaq Verifiable Credentials hinallataq Identidad Descentralizada nisqa musuq kichasqa estándarkunawan llamk'an. Seguridadninqa interoperable, mana tikrakuq registro distribuido nisqawan allinchasqa, chaypi kaqkunaqa mana llullachiy atikunchu.",
      },
      ru: {
        name: 'Приложение цифровой идентичности на блокчейне',
        description:
          'KayTrust Wallet — это кошелёк для вашей цифровой идентичности, совместимый с последними открытыми стандартами W3C Verifiable Credentials и децентрализованной идентичности. Его безопасность гарантирует совместимый неизменяемый распределённый реестр, содержимое которого невозможно подделать.',
      },
    },
  },
  {
    id: 'portal-prima-afp',
    image: Prima,
    text: {
      es: {
        name: 'Portal de gestión de fondos de pensiones',
        client: 'Prima AFP',
        description: 'Página web para realizar trámites virtuales de una administradora de fondos de pensiones del Perú.',
      },
      en: {
        name: 'Pension fund management portal',
        description: 'Website for completing online procedures with a Peruvian pension fund administrator.',
      },
      fr: {
        name: 'Portail de gestion de fonds de pension',
        description:
          "Site web permettant d'effectuer des démarches en ligne auprès d'une société de gestion de fonds de pension péruvienne.",
      },
      de: {
        name: 'Portal zur Verwaltung von Pensionsfonds',
        description: 'Website, über die man Online-Vorgänge bei einer peruanischen Pensionsfondsgesellschaft erledigen kann.',
      },
      nl: {
        name: 'Portaal voor pensioenfondsbeheer',
        description: 'Website om online zaken te regelen bij een Peruaanse pensioenfondsbeheerder.',
      },
      qu: {
        name: 'Pensión qullqikunata kamachinapaq portal',
        description: 'Perú suyupi pensión qullqikunata kamachiq empresawan internetpi trámitekunata ruranapaq web raphi.',
      },
      ru: {
        name: 'Портал управления пенсионными фондами',
        description: 'Веб-сайт для онлайн-оформления услуг перуанской компании по управлению пенсионными фондами.',
      },
    },
  },
  {
    id: 'io-bank-bcp',
    image: null,
    // TODO: add description and image.
    text: {
      es: { name: 'App de banca móvil', client: 'IO Bank - Banco de Crédito del Perú' },
      en: { name: 'Mobile banking app' },
      fr: { name: 'Application de banque mobile' },
      de: { name: 'Mobile-Banking-App' },
      nl: { name: 'App voor mobiel bankieren' },
      qu: { name: 'Celularpaq banco app' },
      ru: { name: 'Приложение мобильного банкинга' },
    },
  },
  {
    id: 'proyecto-cadena',
    image: Cadena,
    text: {
      es: {
        name: 'App web de gestión de aduanas',
        client: 'Kaytrust App/BID 2019',
        description:
          'El Proyecto Cadena es una web app que ayuda en la administración y conexión de las aduanas de: Perú, México, Colombia y Chile.',
      },
      en: {
        name: 'Customs management web app',
        client: 'Kaytrust App/IDB 2019',
        description:
          'Proyecto Cadena is a web app that helps manage and connect the customs authorities of Peru, Mexico, Colombia and Chile.',
      },
      fr: {
        name: 'Application web de gestion douanière',
        description:
          'Le Proyecto Cadena est une application web qui aide à administrer et à connecter les douanes du Pérou, du Mexique, de la Colombie et du Chili.',
      },
      de: {
        name: 'Web-App für das Zollmanagement',
        client: 'Kaytrust App/IDB 2019',
        description:
          'Proyecto Cadena ist eine Web-App, die bei der Verwaltung und Vernetzung der Zollbehörden von Peru, Mexiko, Kolumbien und Chile hilft.',
      },
      nl: {
        name: 'Webapp voor douanebeheer',
        client: 'Kaytrust App/IDB 2019',
        description:
          'Proyecto Cadena is een webapp die helpt bij het beheren en verbinden van de douanediensten van Peru, Mexico, Colombia en Chili.',
      },
      qu: {
        name: 'Aduanakunata kamachinapaq web app',
        description:
          'Proyecto Cadena nisqaqa Perú, México, Colombia, Chile suyukunaq aduanankunata kamachinapaq hinallataq tinkuchinapaq yanapaq web app-mi.',
      },
      ru: {
        name: 'Веб-приложение для управления таможней',
        client: 'Kaytrust App/МБР 2019',
        description:
          'Proyecto Cadena — веб-приложение, которое помогает администрировать и связывать таможенные службы Перу, Мексики, Колумбии и Чили.',
      },
    },
  },
  {
    id: 'david-19',
    image: David19,
    text: {
      es: {
        name: 'David 19 - Campaña Covid 19',
        client: 'Kaytrust App - BID 2020',
        description:
          'La aplicación es parte de LACChain y busca recopilar información relacionada al COVID-19 de ciudadanos de forma privada y anónima.',
      },
      en: {
        name: 'David 19 - Covid 19 Campaign',
        client: 'Kaytrust App - IDB 2020',
        description:
          'The app is part of LACChain and seeks to collect COVID-19-related information from citizens privately and anonymously.',
      },
      fr: {
        name: 'David 19 - Campagne Covid 19',
        description:
          "L'application fait partie de LACChain et vise à collecter, de manière privée et anonyme, des informations sur la COVID-19 auprès des citoyens.",
      },
      de: {
        name: 'David 19 - Covid-19-Kampagne',
        client: 'Kaytrust App - IDB 2020',
        description:
          'Die App ist Teil von LACChain und sammelt privat und anonym COVID-19-bezogene Informationen von Bürgerinnen und Bürgern.',
      },
      nl: {
        name: 'David 19 - Covid 19-campagne',
        client: 'Kaytrust App - IDB 2020',
        description:
          'De app maakt deel uit van LACChain en verzamelt privé en anoniem COVID-19-gerelateerde informatie van burgers.',
      },
      qu: {
        name: 'David 19 - Covid 19 campaña',
        description:
          'Kay app-qa LACChain nisqapa huk partenmi, llaqtarunakunamanta COVID-19 nisqamanta willakuykunata pakallapi, mana sutinkuta riqsichispa huñunanpaq.',
      },
      ru: {
        name: 'David 19 - кампания Covid 19',
        client: 'Kaytrust App - МБР 2020',
        description:
          'Приложение является частью LACChain и собирает информацию о COVID-19 от граждан конфиденциально и анонимно.',
      },
    },
  },
  {
    id: 'kaytrust-landing',
    image: KaytrustLanding,
    text: {
      es: {
        name: 'Landing page',
        client: 'Kaytrust Blockchain Project 2019',
        description:
          'KayTrust es una plataforma de confianza que permite gestionar las identidades digitales de tus clientes de manera segura, confiable y soberana.',
      },
      en: {
        name: 'Landing Page',
        description:
          "KayTrust is a trust platform that lets you manage your customers' digital identities in a secure, reliable and self-sovereign way.",
      },
      fr: {
        name: 'Landing page',
        description:
          'KayTrust est une plateforme de confiance qui permet de gérer les identités numériques de vos clients de manière sûre, fiable et souveraine.',
      },
      de: {
        name: 'Landingpage',
        description:
          'KayTrust ist eine Vertrauensplattform, mit der du die digitalen Identitäten deiner Kundinnen und Kunden sicher, zuverlässig und selbstbestimmt verwalten kannst.',
      },
      nl: {
        name: 'Landingspagina',
        description:
          'KayTrust is een vertrouwensplatform waarmee je de digitale identiteiten van je klanten veilig, betrouwbaar en soeverein beheert.',
      },
      qu: {
        name: 'Landing page',
        description:
          'KayTrust nisqaqa confianza plataformam, clienteykikunaq digital riqsichikuyninkuta allin waqaychasqa, confiakunapaq hinallataq kikinkupa kamachisqanta kamachinaykipaq.',
      },
      ru: {
        name: 'Лендинг',
        description:
          'KayTrust — это доверенная платформа, позволяющая безопасно, надёжно и суверенно управлять цифровыми идентичностями ваших клиентов.',
      },
    },
  },
];

const FIELDS = ['name', 'client', 'title', 'description'];

// Texts of a work in `lang`, field by field: lang → es → en. `title` falls back to `name`.
export const getWorkText = (work, lang) => {
  const chain = [work.text[lang], work.text.es, work.text.en].filter(Boolean);
  const pick = (field) => chain.find((t) => t[field])?.[field] ?? '';
  const result = Object.fromEntries(FIELDS.map((field) => [field, pick(field)]));
  // A localized name without a localized title should win over the Spanish title.
  if (!work.text[lang]?.title && work.text[lang]?.name) result.title = work.text[lang].name;
  result.title ||= result.name;
  return result;
};
