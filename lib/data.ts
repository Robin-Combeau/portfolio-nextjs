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
    list: ["PHP", "Laravel", "Javascript", "jQuery", "SQL", "Git"],
  },
  {
    name: "Interméd.",
    value: "intermediate",
    list: ["React", "Vue", "Typescript", "Symfony", "Tailwind", "UX/UI", "Figma", "PHPUnit"],
  },
  {
    name: "Novice",
    value: "novice",
    list: ["Svelte", "Next", "Node", "CI/CD", "Docker"],
  },
  {
    name: "Notions",
    value: "notions",
    list: ["Angular", "Java", "C#", ".NET", "GDscript"],
  },
] as const;

export const experiences = [
  {
    year: 2024,
    category: "work",
    name: "Guarani - Simpliciti",
    description: "Ingénieur logiciel | VueJS - Symfony",
  },
  {
    year: 2023,
    category: "work",
    name: "Septeo",
    description: "Développeur web | Laravel - PHP natif - VueJS",
  },
  {
    year: 2019,
    category: "work",
    name: "Sopra Steria",
    description: "Ingénieur logiciel | PHP - JS",
  },
  {
    year: 2019,
    category: "work",
    name: "Hiphen",
    description: "Ingénieur junior | Design - Wordpress - Marketing ...",
  },
  {
    year: 2018,
    category: "school",
    name: "Ingénieur en agronomie",
    description: "TIC (Technologies de l'Information et de la Communication)",
  },
  {
    year: 2014,
    category: "school",
    name: "DUT Génie Biologique",
    description: "Génie de l'environnement",
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
    education: '["Ingénieur agronome", "DUT Génie Biologique"]',
    companies: '["Guarani", "Septeo", "Sopra Steria", "Hiphen"]',
    yearsOfExperience: '2019'
  },
  {
    className: "Contact",
    emailInput: '""',
    messageTextArea: '""'
  },
] as const;