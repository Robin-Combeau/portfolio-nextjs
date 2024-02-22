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
    list: ["PHP", "Laravel", "Javascript", "jQuery", "REST", "SQL", "Git"],
  },
  {
    name: "Interméd.",
    value: "intermediate",
    list: ["React", "Tailwind", "UX/UI Design", "Figma", "CI/CD"],
  },
  {
    name: "Novice",
    value: "novice",
    list: ["Svelte", "Next", "Vue"],
  },
  {
    name: "Notions",
    value: "notions",
    list: ["Angular", "Node", "C#", "Unity", "Java"],
  },
] as const;

export const experiences = [
  {
    year: 2023,
    name: "Septeo",
    description: "Développeur web Laravel / PHP natif / VueJS",
  },
  {
    year: 2019,
    name: "Sopra Steria",
    description: "Ingénieur en développement web sur des projets PHP / JS",
  },
  {
    year: 2019,
    name: "Hiphen",
    description: "Design et marketing (Design, Wordpress, Réseaux sociaux...)",
  },
  {
    year: 2018,
    name: "Diplôme d'ingénieur en agronomie",
    description: "Spécialisé en TIC (Technologies de l'Information et de la Communication)",
  },
  {
    year: 2014,
    name: "DUT Génie Biologique",
    description: "Spécialisé en génie de l'environnement",
  }
] as const;

export const codeBlocks = [
  {
    className: "Person",
    name: '"Robin Combeau"',
    languages: '["Javascript", "PHP"]',
    age: '1994'
  },
  {
    className: "About",
    education: '"Ingénieur"',
    hobbies: '["Code", "Volley-ball", "Musique", "Jeux"]'
  },
  {
    className: "Experiences",
    education: '["Montpellier SupAgro", "IUT de la Réunion"]',
    companies: '["Septeo", "Sopra Steria", "Hiphen"]',
    yearsOfExperience: '2019'
  },
  {
    className: "Contact",
    emailInput: '""',
    messageTextArea: '""'
  },
] as const;