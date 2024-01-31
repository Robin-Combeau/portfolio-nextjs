export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "À propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Expériences",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skills = [
  {
    name: "Confirmé",
    value: "confirmed",
    list: ["PHP", "Laravel", "Javascript", "Git"],
  },
  {
    name: "Interméd.",
    value: "intermediate",
    list: ["React.js", "Next.js", "Tailwind", "jQuery", "Zend", "UI Design", "Figma"],
  },
  {
    name: "Novice",
    value: "novice",
    list: ["Node.js", "CI/CD", "Framer Motion"],
  }
] as const;

export const experiences = [
  {
    year: 2014,
    name: "DUT Génie Biologique",
    description: "Spécialisé en génie de l'environnement",
  },
  {
    year: 2018,
    name: "Diplôme d'ingénieur en agronomie",
    description: "Spécialisé en TIC (Technologies de l'Information et de la Communication)",
  },
  {
    year: 2019,
    name: "Hiphen",
    description: "Design et marketing (Print / UI design, Wordpress, Réseaux sociaux...)",
  },
  {
    year: 2020,
    name: "Sopra Steria",
    description: "Ingénieur en développement web sur des projets PHP et/ou Javascript",
  },
  {
    year: 2023,
    name: "Septeo",
    description: "Développeur web Laravel / VueJS / PHP natif",
  },

] as const;