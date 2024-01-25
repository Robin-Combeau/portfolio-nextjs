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