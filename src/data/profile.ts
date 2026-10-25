// Conteúdo profissional centralizado. Edite aqui para atualizar o site.

export const SITE = {
  // Atualize após adquirir o domínio definitivo (sem barra final).
  url: "",
  title: "Vítor Batista | Analista de Qualidade de Software e QA",
  description:
    "Conheça a trajetória profissional de Vítor Batista, Analista de Qualidade de Software com experiência em testes Web e Mobile, APIs REST, SQL e garantia da qualidade.",
  // Coloque o PDF em public/curriculo-vitor-batista.pdf e defina o caminho abaixo.
  // Enquanto for null, o botão de download não é exibido.
  resumePdf: null as string | null,
};

export const PROFILE = {
  name: "Vítor de Paula Batista",
  shortName: "Vítor Batista",
  title: "Analista de Qualidade de Software | Quality Assurance | QA",
  location: "São Vicente de Minas, Minas Gerais, Brasil",
  email: "vitor.batista.svm@gmail.com",
  linkedin: "https://linkedin.com/in/vitordepaulabatista",
  github: "https://github.com/vitorbatista2",
};

export type Role = { title: string; period: string };
export type Experience = {
  company: string;
  roles: Role[];
  description: string;
  activities: string[];
  highlight?: string;
  tools?: string[];
  progression?: boolean;
  overlapping?: boolean;
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Squadra Digital",
    roles: [{ title: "Quality Assurance", period: "Dez 2025 — Abr 2026" }],
    description:
      "Atuação em atividades de garantia da qualidade, com foco no planejamento e execução de testes, validação de APIs e homologação de funcionalidades com clientes.",
    activities: [
      "Planejamento e execução de testes funcionais, exploratórios e de integração.",
      "Elaboração e execução de cenários de teste.",
      "Validação de APIs REST utilizando Postman.",
      "Registro, acompanhamento e validação de defeitos.",
      "Condução de homologações com clientes, apresentando funcionalidades e apoiando a validação das entregas.",
    ],
    tools: ["Postman"],
  },
  {
    company: "Fundação de Desenvolvimento Científico e Cultural (FUNDECC)",
    roles: [{ title: "Analista de QA", period: "Fev 2023 — Nov 2025" }],
    description:
      "Atuação na qualidade de aplicações Web e Mobile, participando do planejamento, execução e documentação de testes, além da validação de APIs, dados e funcionalidades junto aos clientes.",
    activities: [
      "Planejamento e execução de testes funcionais, exploratórios, regressivos e de integração.",
      "Elaboração de cenários e casos de teste.",
      "Documentação funcional e registro de evidências.",
      "Validação de APIs REST com Postman e Insomnia.",
      "Consultas SQL para validação da persistência e integridade dos dados.",
      "Condução de homologações com clientes.",
      "Apoio à continuidade das entregas e à organização do trabalho da equipe.",
    ],
    highlight:
      "Responsabilidade adicional: durante o período de férias da Product Owner/Scrum Master, conduzi Daily, Sprint Planning, Refinamento, Sprint Review e Retrospectiva, além de apoiar a gestão do backlog.",
    tools: ["Postman", "Insomnia", "SQL", "Testes Web e Mobile", "Scrum", "Kanban"],
  },
  {
    company: "Squadra Digital",
    roles: [
      { title: "Analista de QA Júnior", period: "Jun 2021 — Fev 2023" },
      { title: "Analista de QA Trainee", period: "Mar 2021 — Jul 2021" },
      { title: "Analista de QA Estágio", period: "Mar 2020 — Mar 2021" },
    ],
    progression: true,
    description:
      "Início e desenvolvimento da minha trajetória em Qualidade de Software, evoluindo de atividades de apoio à execução de testes para responsabilidades como Analista de QA.",
    activities: [
      "Planejamento e execução de testes funcionais, exploratórios e de integração.",
      "Elaboração de cenários e casos de teste.",
      "Documentação de funcionalidades e registro de evidências.",
      "Acompanhamento de defeitos.",
      "Validação de APIs REST.",
      "Consultas SQL para validação de dados.",
      "Participação em equipes ágeis utilizando Scrum.",
      "Condução de homologações com clientes.",
    ],
  },
  {
    company: "Emakers Jr.",
    roles: [
      { title: "Desenvolvedor Front-end", period: "Jul 2019 — Jun 2021" },
      { title: "Diretor de Negócios", period: "Set 2020 — Jun 2021" },
    ],
    overlapping: true,
    description:
      "Experiência inicial com desenvolvimento de software e gestão de projetos, contribuindo para a construção de interfaces e o acompanhamento das entregas.",
    activities: [
      "Desenvolvimento de interfaces com HTML, CSS, JavaScript e React.",
      "Correção de bugs e evolução de funcionalidades.",
      "Gestão de projetos e planejamento das entregas.",
      "Levantamento de requisitos.",
      "Acompanhamento das demandas dos projetos.",
      "Relacionamento com clientes.",
      "Colaboração com equipes multidisciplinares.",
    ],
    tools: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export const SKILLS: { category: string; icon: "test" | "api" | "code" | "agile"; note?: string; items: string[] }[] = [
  {
    category: "Testes de software",
    icon: "test",
    items: [
      "Testes funcionais", "Testes exploratórios", "Testes regressivos", "Testes de integração",
      "Testes Web", "Testes Mobile", "Homologação", "Cenários e casos de teste", "Gestão de defeitos",
    ],
  },
  {
    category: "APIs e dados",
    icon: "api",
    items: ["Testes de APIs REST", "Postman", "Insomnia", "SQL", "Persistência e integridade dos dados"],
  },
  {
    category: "Automação e desenvolvimento",
    icon: "code",
    note: "Cypress e Selenium: conhecimentos desenvolvidos em cursos e estudos.",
    items: ["Cypress", "Selenium WebDriver", "JavaScript", "Git", "React", "HTML", "CSS"],
  },
  {
    category: "Metodologias e práticas",
    icon: "agile",
    items: [
      "Scrum", "Kanban", "Equipes multidisciplinares", "Levantamento de requisitos",
      "Validação de regras de negócio", "GIS (geolocalização)",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  goal?: string;
  tech: string[];
  url: string;
  study?: boolean;
  image?: string;
};

// Adicione projetos reais do GitHub aqui. Lista vazia exibe o convite ao GitHub.
export const PROJECTS: Project[] = [];

export const EDUCATION = [
  {
    level: "Pós-graduação",
    course: "Engenharia de Qualidade e Teste de Software",
    institution: "PUC Minas",
    // Defina como "Concluída" ou "Em andamento" após confirmação.
    status: null as string | null,
    year: "2025",
  },
  {
    level: "Graduação",
    course: "Bacharelado em Ciência da Computação",
    institution: "Universidade Federal de Lavras (UFLA)",
    status: "Concluída",
    year: "2022",
  },
];

export const COURSES = [
  { name: "Requisitos, Testes, Automação e Certificação", org: "EXSEED", hours: "5 horas" },
  { name: "Cypress Discovery", org: "QA Ninja", hours: "20 horas" },
  { name: "Testes Automatizados com Cypress — Básico", org: "Udemy · Walmyr Filho", hours: "4,5 horas" },
  { name: "Testes Automatizados com Cypress — Intermediário", org: "Udemy · Walmyr Filho", hours: "3,5 horas" },
  { name: "Testes Automatizados com Cypress — Avançado", org: "Udemy · Walmyr Filho", hours: "3 horas" },
];

export const LANGUAGES = [{ name: "Inglês", level: "Básico" }];
