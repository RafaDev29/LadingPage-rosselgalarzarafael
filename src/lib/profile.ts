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
      "Plataforma de monitoreo vehicular en tiempo real: posiciones, eventos y alertas en vivo.",
    tags: ["NestJS", "WebSockets", "AWS"],
    tracking: true,
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
    name: "Reportes PDLL",
    description: "Motor de reportes operativos con generación programada y exportación.",
    tags: ["NestJS", "PostgreSQL"],
  },
  {
    name: "Plataforma Fox",
    description: "Gestión integral de flotas: unidades, conductores y telemetría.",
    tags: ["Node.js", "AWS", "Docker"],
    tracking: true,
  },
  {
    name: "Ebeacons",
    description: "Telemetría de activos con beacons BLE y geocercas.",
    tags: ["IoT", "NestJS"],
  },
  {
    name: "Edriver",
    description: "Aplicación móvil para conductores: rutas, checklists y eventos en línea.",
    tags: ["React Native", "WebSockets"],
    tracking: true,
  },
  {
    name: "Logistics",
    description: "Orquestación logística de extremo a extremo con trazabilidad total.",
    tags: ["Microservicios", "DDD"],
  },
  {
    name: "Inspección Técnica",
    description:
      "Aplicación de inspección técnica vehicular con evidencia fotográfica y flujos offline.",
    tags: ["React Native", "NestJS"],
  },
];

/* ─── Clientes (Constelaciones Aliadas) ───────────────────────────────────── */

// TODO: reemplaza los placeholders por los nombres reales de tus 5 clientes.
export const clients = ["Cliente Orión", "Cliente Lyra", "Cliente Vega", "Cliente Sirius", "Cliente Andrómeda"];
