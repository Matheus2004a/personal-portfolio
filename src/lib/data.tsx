import { Cable, Code, Workflow } from "lucide-react";

export const NAV_LINKS = [
  {
    label: 'Sobre',
    href: '#about',
  },
  {
    label: 'Metodologias',
    href: '#metodologies',
  },
  {
    label: 'Trabalhos',
    href: '#work',
  },
  {
    label: 'Contato',
    href: '#contact',
  },
];

export const METODOLOGIES = [
  {
    title: "Desenvolvimento Front-End",
    description: "Interfaces",
    content: "Realizo a implementação de interfaces visuais levando em consideração a experiência do usuário.",
    icon: <Code />
  },
  {
    title: "Scrum/Kanban",
    description: "Fluxo de trabalho",
    content: "Consiste em fazer divisões de entregas de pequenas funcionalidades do sistema ao cliente acompanhadas de sua validação.",
    icon: <Workflow />
  },
  {
    title: "Integração entre softwares",
    description: "Integração",
    content: "Crio integrações entre diferentes plataformas para entregar interações robustas à sua aplicação",
    icon: <Cable />
  },
]
