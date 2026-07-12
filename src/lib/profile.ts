import {
  siApachekafka,
  siDocker,
  siExpress,
  siGraphql,
  siJavascript,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPm2,
  siPostgresql,
  siPython,
  siRabbitmq,
  siReact,
  siRedis,
  siSpringboot,
  siTypescript,
  siUbuntu,
  siVuedotjs,
  type SimpleIcon,
} from "simple-icons";

/**
 * Fuente única de verdad para tus datos profesionales (sincronizada con tu
 * README de GitHub). Edita este archivo y toda la landing se actualiza.
 */

export const profile = {
  name: "Rafael Andres Rossel Galarza",
  alias: "dev29",
  role: "Backend Engineer",
  headline: "Backend Engineer · Node.js · NestJS · AWS",
  tagline:
    "Ingeniero de Sistemas e Informática especializado en el ecosistema Node.js: arquitecturas escalables con DDD, NestJS e infraestructura en AWS.",
  email: "rosselgalarzarafael@gmail.com",
  githubUser: "RafaDev29",
  siteUrl: "https://web29.uk",
  /** Variantes de búsqueda del nombre: cubren "Rafael Rossel", "Rossel Galarza", nombre completo y alias. */
  alternateNames: [
    "Rafael Rossel",
    "Rossel Galarza",
    "Rafael Andrés Rossel Galarza",
    "Rafael Rossel Galarza",
    "dev29",
  ],
  links: {
    github: "https://github.com/RafaDev29",
    gitlab: "https://gitlab.com/rosselgalarzarafael",
    linkedin: "https://www.linkedin.com/in/rosseldev/",
  },
  mainRoles: ["Node.js", "NestJS", "AWS"],
} as const;

/* ─── Habilidades Cósmicas ────────────────────────────────────────────────── */

export type SkillItem = {
  name: string;
  icon?: SimpleIcon;
  /** Sobreescribe el color de marca cuando es demasiado oscuro para el fondo */
  color?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  flavor: string;
  icon: "server" | "cloud" | "smartphone" | "sparkles" | "database";
  featured?: boolean;
  items: SkillItem[];
};

export const skills: SkillCategory[] = [
  {
    id: "stellar",
    title: "Arquitecturas Escalables (DDD) & Microservicios",
    flavor: "Skill estelar",
    icon: "sparkles",
    featured: true,
    items: [
      { name: "Domain-Driven Design" },
      { name: "Microservicios" },
      { name: "APIs REST" },
      { name: "Kafka", icon: siApachekafka, color: "#EEF1F8" },
      { name: "RabbitMQ", icon: siRabbitmq },
      { name: "Pipelines de despliegue en la nube" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    flavor: "Núcleo gravitacional",
    icon: "server",
    items: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "NestJS", icon: siNestjs },
      { name: "Express", icon: siExpress, color: "#EEF1F8" },
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
      { name: "GraphQL", icon: siGraphql },
      { name: "WebSockets", color: "#7DD3FC" }, // protocolo sin marca: ondas de radio (lucide)
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    flavor: "Estación orbital",
    icon: "cloud",
    items: [
      { name: "AWS", color: "#FF9900" }, // sin ícono en simple-icons: usa la nube lucide
      { name: "Docker", icon: siDocker },
      { name: "PM2", icon: siPm2, color: "#8B7CE8" },
      { name: "Ubuntu", icon: siUbuntu },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    flavor: "Naves de exploración",
    icon: "smartphone",
    items: [
      { name: "Next.js", icon: siNextdotjs, color: "#EEF1F8" },
      { name: "React", icon: siReact },
      { name: "React Native", icon: siReact },
      { name: "Vue.js", icon: siVuedotjs },
    ],
  },
  {
    id: "databases",
    title: "Bases de Datos",
    flavor: "La despensa",
    icon: "database",
    items: [
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MongoDB", icon: siMongodb },
      { name: "MySQL", icon: siMysql },
      { name: "Redis", icon: siRedis },
    ],
  },
];

/**
 * Señales lejanas: tecnologías que conoces pero no son tu especialidad.
 * Se muestran con menor peso visual, como cuerpos en exploración.
 */
export const exploring: SkillItem[] = [
  { name: "Python", icon: siPython },
  { name: "Java · Spring Boot", icon: siSpringboot },
];

/* ─── Experiencia Profesional (Bitácora de Misiones) ──────────────────────── */

export type Experience = {
  company: string;
  url?: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  /** Logro insignia que se muestra como badge destacado */
  highlight?: string;
  bullets: string[];
  stack: string[];
};

// Bullets curados con enfoque backend (del CV completo)
export const experience: Experience[] = [
  {
    company: "QhatuPE",
    url: "https://qhatupe.com",
    role: "Cofundador & Desarrollador Full Stack",
    location: "Lima, Perú",
    period: "2025 — presente",
    current: true,
    highlight: "+100 tiendas activas",
    bullets: [
      "Cofundé la plataforma SaaS que permite a emprendedores peruanos crear tiendas virtuales en minutos, con integración de WhatsApp, Yape, Plin y Culqi.",
      "Arquitecté el backend con NestJS y el frontend con Next.js: sistema de planes con pasarela de pagos, dominio personalizado y subdominios dinámicos por tienda.",
      "Más de 100 tiendas creadas, con clientes activos generando ventas reales a través de la plataforma.",
    ],
    stack: ["NestJS", "Next.js", "AWS"],
  },
  {
    company: "D&A Intelligent Solutions",
    role: "Desarrollador Full Stack",
    location: "Madrid, España · remoto",
    period: "ene 2025 — dic 2025",
    bullets: [
      "Servicios backend con integración de IA en NestJS, desplegados en AWS EC2 tras API Gateway.",
      "Funciones serverless con AWS Lambda para procesamiento de datos de IA y consultas asíncronas.",
      "Contenericé servicios con Docker (imágenes en ECR) e integré ECS con balanceo ALB.",
    ],
    stack: ["NestJS", "AWS Lambda", "Docker", "ECS"],
  },
  {
    company: "SYS & NET del Perú",
    role: "Desarrollador Full Stack",
    location: "Lima, Perú",
    period: "nov 2023 — may 2026",
    bullets: [
      "Plataformas de monitoreo de flotas vehiculares con APIs REST en NestJS, desplegadas en EC2 y API Gateway.",
      "Procesamiento de datos GPS con NestJS y Spring Boot, incluyendo scripts de retransmisión en Python.",
      "WebSockets para monitoreo en tiempo real y arquitectura de almacenamiento distribuido en S3.",
    ],
    stack: ["NestJS", "Spring Boot", "Python", "AWS S3"],
  },
  {
    company: "OPSELI SAC",
    role: "Desarrollador Full Stack",
    location: "Lima, Perú",
    period: "ene 2023 — sep 2023",
    bullets: [
      "Servicios backend con Node.js desplegados en DigitalOcean.",
      "Interfaces web responsivas con Vue.js, optimizando experiencia de usuario y rendimiento.",
    ],
    stack: ["Node.js", "Vue.js", "DigitalOcean"],
  },
];

export const education = [
  {
    school: "Universidad Tecnológica del Perú",
    degree: "Bachiller en Ingeniería de Sistemas e Informática",
    period: "2018 — 2024",
  },
  {
    school: "Universidad Nacional de Ingeniería",
    degree: "Curso de Modelamiento de Datos",
    period: "ene 2022 — mar 2022",
  },
];

/* ─── Proyectos (Dimensiones Exploradas) ──────────────────────────────────── */

export type Project = {
  name: string;
  description: string; // TODO: afina cada descripción con el detalle real
  tags: string[];
  tracking?: boolean; // proyectos de rastreo vehicular remoto (tu especialidad)
};

export const projects: Project[] = [
  {
    name: "Monitor S4",
    description:
      "Sistema SaaS de gestión de alertas: análisis en tiempo real, integración de APIs de terceros y monitoreo continuo de vehículos con alertas inteligentes.",
    tags: ["NestJS", "WebSockets", "AWS"],
    tracking: true,
  },
  {
    name: "SIMTRA",
    description:
      "Monitoreo inteligente de transformadores eléctricos: alertas en tiempo real, detección temprana de fallos y optimización del mantenimiento preventivo.",
    tags: ["Tiempo real", "Alertas"],
  },
  {
    name: "Edispatch",
    description: "Sistema de despacho y asignación inteligente de unidades en campo.",
    tags: ["Node.js", "PostgreSQL"],
    tracking: true,
  },
  {
    name: "Retranslator",
    description:
      "Retransmisión de tramas GPS entre plataformas de rastreo: protocolos, sockets y tolerancia a fallos.",
    tags: ["TCP/IP", "Node.js", "Microservicios"],
    tracking: true,
  },
  {
    name: "Ebeacons",
    description: "Telemetría de activos con beacons BLE y geocercas.",
    tags: ["IoT", "NestJS"],
  },
];

/* ─── Clientes (Constelaciones Aliadas) ───────────────────────────────────── */

export type Client = {
  name: string;
  /** Razón social o nombre completo (se muestra pequeño) */
  fullName?: string;
  /** Sector para la ficha de catálogo estelar */
  sector: string;
  service: string;
  tags: string[];
};

export const clients: Client[] = [
  {
    name: "Palomino Olivares & Asociados",
    fullName: "Abogados Consultores S. Civil de R.L.",
    sector: "legaltech & geoespacial",
    service:
      "CostaTech, plataforma legal para abogados, y una plataforma geoespacial de minas y predios con datos en GeoJSON.",
    tags: ["Next.js", "NestJS", "Docker"],
  },
  {
    name: "Satelitexa",
    fullName: "Satelital Exabyte E.I.R.L.",
    sector: "telemetría satelital",
    service:
      "Servicios de retransmisión GPS con arquitectura tolerante a caídas hacia OSINERGMIN, SUTRAN, Navitel y CarCool.",
    tags: ["Node.js", "TypeScript"],
  },
  {
    name: "Center GPS Perú",
    fullName: "Center GPS Perú S.A.C.",
    sector: "rastreo vehicular",
    service:
      "Retransmisión de tramas GPS en tiempo real con recuperación ante caídas, integrando OSINERGMIN, SUTRAN, Navitel y CarCool.",
    tags: ["Node.js", "TypeScript"],
  },
  {
    name: "CECOM",
    sector: "vigilancia en tiempo real",
    service:
      "Servicios backend en NestJS para vigilancia y monitoreo en tiempo real, con WebSockets y Apache Kafka sobre PostgreSQL.",
    tags: ["NestJS", "Kafka", "WebSockets"],
  },
];
