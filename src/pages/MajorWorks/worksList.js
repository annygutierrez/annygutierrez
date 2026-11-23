import BcpMigracion from '../../assets/bcp-migracion.png';
import America from '../../assets/america.png';
import Argentina from '../../assets/argentina.png';
import Honduras from '../../assets/honduras.png';
import KaytrustApp from '../../assets/everisid.png';
import Prima from '../../assets/prima.png';
import Cadena from '../../assets/cadena.png';
import David19 from '../../assets/david19.png';
import KaytrustLanding from '../../assets/kaytrust.png';

// `name`/`client` show in the list; `title` (falls back to `name`), `description` and `image` show in the detail panel.
export const WORKS = [
  {
    id: 'migracion-banca-movil-bcp',
    name: 'Migración de App de banca mobil',
    client: 'Banco de Credito del Peru',
    title: 'Migración App Banca Mobil',
    description:
      'Mi trabajo consistió en definir lineamientos, revisar calidad de código, revisión de procesos y mejora constante de librerias React Native y nativas.',
    image: BcpMigracion,
  },
  {
    id: 'in-grid-america-tv',
    name: 'Plataforma de gestion de programacion televisiva',
    client: 'America Television 2018',
    description:
      'Web App diseñada para administrar el catálogo de programas, los cortes comerciales, programación de productos audiovisuales y los ingresos por marketing.',
    image: America,
  },
  {
    id: 'piloto-identidad-argentina',
    name: 'Piloto de Identidad Digital ciudadana con blockchain',
    client: 'Kaytrust App/Gobierno de Argentina 2019',
    description:
      'Fue un MVP de cómo funcionaría la digitalización de la identidad de los ciudadanos de Argentina y que riesgos de seguridad implica.',
    image: Argentina,
  },
  {
    id: 'contratos-honduras',
    name: 'Gestion de contratos gubernamentales',
    client: 'Kaytrust App/Gobierno de Honduras',
    // TODO: add a description (the old portfolio reused the Argentina text here by mistake).
    description: '',
    image: Honduras,
  },
  {
    id: 'kaytrust-app',
    name: 'App de identidad digital con blockchain',
    client: 'Kaytrust App 2018',
    description:
      'KayTrust Wallet is a wallet for your digital identity, compatible with latest W3C Verifiable Credentials and Decentralized Identity open standards. Its security is guaranteed by an interoperable distributed ledger that is immutable and whose content is impossible to falsify.',
    image: KaytrustApp,
  },
  {
    id: 'portal-prima-afp',
    name: 'Portal de gestion de fondos de pensiones',
    client: 'Prima AFP',
    description: 'Página web para realizar trámites virtuales de una administradora de fondos de pensiones del Perú.',
    image: Prima,
  },
  {
    id: 'io-bank-bcp',
    name: 'App de banca mobil',
    client: 'IO Bank - Banco de Credito del Peru',
    // TODO: add description and image.
    description: '',
    image: null,
  },
  {
    id: 'proyecto-cadena',
    name: 'App Web de gestión de aduanas',
    client: 'Kaytrust App/BID 2019',
    description:
      'El Proyecto Cadena es una web app que ayuda en la administración y conexión de las aduanas de: Perú, México, Colombia y Chile.',
    image: Cadena,
  },
  {
    id: 'david-19',
    name: 'David 19 - Covid 19 Compaign',
    client: 'Kaytrust App - BID 2020',
    description:
      'La aplicación es parte de LACChain y busca recopilar información relacionada al COVID-19 de ciudadanos de forma privada y anónima.',
    image: David19,
  },
  {
    id: 'kaytrust-landing',
    name: 'Landing Page',
    client: 'Kaytrust Blockchain Project 2019',
    description:
      'KayTrust es una plataforma de confianza que permite gestionar las identidades digitales de tus clientes de manera segura, confiable y soberana.',
    image: KaytrustLanding,
  },
];
