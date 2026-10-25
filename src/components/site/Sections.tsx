import {
  ArrowRight, BadgeCheck, BookOpen, Briefcase, CheckCircle2, Code2, Database, Download, FolderGit2,
  Github, GraduationCap, Languages, Linkedin, Mail, MapPin, ShieldCheck, Users, Workflow, ListChecks,
} from "lucide-react";
import { COURSES, EDUCATION, EXPERIENCES, LANGUAGES, PROFILE, PROJECTS, SITE, SKILLS, type Experience } from "@/data/profile";
import { Reveal, SectionHeading } from "./Reveal";
import { ext } from "./Header";

const btnPrimary = "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90 active:scale-[0.98]";
const btnGhost = "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium transition hover:border-primary hover:text-primary active:scale-[0.98]";
const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">{children}</span>
);

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Quality Assurance • Qualidade de Software</p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Qualidade de software começa com as perguntas certas.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Sou Vítor Batista, Analista de Qualidade de Software com mais de 5 anos de experiência em testes Web e Mobile, APIs REST, validação de dados e garantia da qualidade durante o ciclo de desenvolvimento.
          </p>
          <p className="mt-4 max-w-xl text-foreground/80">Transformando requisitos em cenários de teste e contribuindo para entregas de software mais confiáveis.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#experiencia" className={btnPrimary}>Conheça minha trajetória <ArrowRight className="h-4 w-4" /></a>
            <a href="#contato" className={btnGhost}>Entre em contato</a>
            {SITE.resumePdf && <a href={SITE.resumePdf} download className={btnGhost}><Download className="h-4 w-4" />Baixar currículo em PDF</a>}
          </div>
          <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground">
            <a href={PROFILE.linkedin} {...ext} className="inline-flex items-center gap-1.5 hover:text-primary"><Linkedin className="h-4 w-4" />LinkedIn</a>
            <a href={PROFILE.github} {...ext} className="inline-flex items-center gap-1.5 hover:text-primary"><Github className="h-4 w-4" />GitHub</a>
            <span className="hidden items-center gap-1.5 sm:inline-flex"><MapPin className="h-4 w-4" />Minas Gerais, Brasil</span>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const checks = ["Analisar requisitos", "Elaborar cenários de teste", "Validar regras de negócio", "Registrar evidências", "Homologar com o cliente"];
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden>
      <div className="card-surface p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" /></div>
          <span className="font-mono text-[11px] text-muted-foreground">caso-de-teste.md</span>
        </div>
        <ul className="space-y-3">
          {checks.map((c) => (
            <li key={c} className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-4 w-4 shrink-0 text-success" />{c}</li>
          ))}
        </ul>
      </div>
      <div className="card-surface relative -mt-4 ml-8 p-4 font-mono text-xs sm:ml-16">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded bg-accent px-1.5 py-0.5 font-semibold text-accent-foreground">GET</span>
          <span className="text-muted-foreground">/api/v1/recursos</span>
        </div>
        <pre className="leading-relaxed text-foreground/80">{`expect(status).toBe(200)\nexpect(body).toHaveProperty("id")`}</pre>
        <div className="mt-2 inline-flex items-center gap-1.5 text-success"><BadgeCheck className="h-3.5 w-3.5" />validado</div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const highlights = [
    { icon: ShieldCheck, title: "Qualidade de Software", text: "Do requisito à homologação: cenários, execução, defeitos e validação das entregas." },
    { icon: Code2, title: "Conhecimentos técnicos", text: "APIs REST, SQL e base em desenvolvimento Front-end para entender o produto por dentro." },
    { icon: Users, title: "Colaboração e metodologias ágeis", text: "Vivência com Scrum e Kanban junto a desenvolvedores, POs e stakeholders." },
  ];
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Sobre mim" title="Além dos testes, uma visão completa do desenvolvimento." />
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Minha trajetória profissional começou no desenvolvimento Front-end, onde tive contato com a construção de interfaces, evolução de funcionalidades e correção de problemas.</p>
              <p>Posteriormente, direcionei minha carreira para Qualidade de Software, atuando em diferentes etapas do processo de desenvolvimento, desde a análise de requisitos e elaboração de cenários de teste até a execução, registro de defeitos e homologação das entregas.</p>
              <p>Ao longo dessa trajetória, desenvolvi experiência com aplicações Web e Mobile, testes de APIs REST, consultas SQL e colaboração com equipes multidisciplinares.</p>
              <p>Também tive a oportunidade de apoiar atividades de organização e condução de cerimônias ágeis, ampliando minha compreensão sobre o fluxo de desenvolvimento e a colaboração entre diferentes papéis de uma equipe.</p>
              <p>Mantenho o foco na evolução contínua dos meus conhecimentos técnicos, especialmente nas ferramentas e práticas relacionadas à automação de testes.</p>
            </div>
            <div className="space-y-4">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="card-surface card-hover flex gap-4 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground"><Icon className="h-5 w-5" /></span>
                  <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article className="card-surface card-hover p-6">
      <div className="flex items-start gap-3">
        <Briefcase className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
        <h3 className="text-lg font-semibold leading-snug">{exp.company}</h3>
      </div>
      <ol className={`mt-4 space-y-2 ${exp.roles.length > 1 ? "border-l-2 border-accent pl-4" : ""}`}>
        {exp.roles.map((r) => (
          <li key={r.title} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <span className="font-medium text-foreground">{r.title}</span>
            <time className="font-mono text-xs text-muted-foreground">{r.period}</time>
          </li>
        ))}
      </ol>
      {exp.progression && <p className="mt-2 text-xs text-primary">Progressão: Estágio → Trainee → Júnior</p>}
      {exp.overlapping && <p className="mt-2 text-xs text-muted-foreground">Atuações com períodos simultâneos.</p>}
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
      <ul className="mt-4 space-y-1.5 text-sm">
        {exp.activities.map((a) => (
          <li key={a} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />{a}</li>
        ))}
      </ul>
      {exp.highlight && <p className="mt-4 rounded-lg bg-accent p-3 text-sm text-accent-foreground">{exp.highlight}</p>}
      {exp.tools && <div className="mt-4 flex flex-wrap gap-1.5">{exp.tools.map((t) => <Tag key={t}>{t}</Tag>)}</div>}
    </article>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experiencia" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><SectionHeading eyebrow="Experiência" title="Trajetória profissional." subtitle="Do desenvolvimento Front-end à Qualidade de Software, em ordem da mais recente para a mais antiga." /></Reveal>
        <ol className="relative">
          <span className="absolute top-0 bottom-0 left-[7px] w-px bg-border md:left-1/2" aria-hidden />
          {EXPERIENCES.map((exp, i) => (
            <li key={exp.company + i} className="relative mb-10 pl-8 last:mb-0 md:grid md:grid-cols-2 md:gap-12 md:pl-0">
              <span className="absolute top-7 left-0 h-[15px] w-[15px] rounded-full border-[3px] border-background bg-primary ring-1 ring-primary md:left-1/2 md:-translate-x-1/2" aria-hidden />
              <Reveal className={i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}><ExperienceCard exp={exp} /></Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const skillIcons = { test: ListChecks, api: Database, code: Code2, agile: Workflow };

export function SkillsSection() {
  return (
    <section id="competencias" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Competências" title="Ferramentas e conhecimentos técnicos." subtitle="Conhecimentos aplicados ao processo de qualidade de software." />
          <div className="grid gap-5 sm:grid-cols-2">
            {SKILLS.map((s) => {
              const Icon = skillIcons[s.icon];
              return (
                <div key={s.category} className="card-surface card-hover p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground"><Icon className="h-4 w-4" /></span>
                    <h3 className="font-semibold">{s.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">{s.items.map((it) => <Tag key={it}>{it}</Tag>)}</div>
                  {s.note && <p className="mt-4 text-xs text-muted-foreground">{s.note}</p>}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projetos" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Projetos" title="Projetos e evolução técnica." subtitle="Projetos pessoais, experimentações e estudos voltados à qualidade de software." />
          {PROJECTS.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <article key={p.name} className="card-surface card-hover flex flex-col overflow-hidden">
                  {p.image && <img src={p.image} alt={`Demonstração do projeto ${p.name}`} loading="lazy" className="aspect-video w-full object-cover" />}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-2"><h3 className="font-semibold">{p.name}</h3>{p.study && <Tag>Projeto de estudo</Tag>}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                    {p.goal && <p className="mt-2 text-sm"><span className="font-medium">Objetivo:</span> {p.goal}</p>}
                    <div className="mt-4 flex flex-wrap gap-1.5">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                    <a href={p.url} {...ext} className={`${btnGhost} mt-6`}><Github className="h-4 w-4" />Ver no GitHub</a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="card-surface flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground"><FolderGit2 className="h-6 w-6" /></span>
                <div>
                  <h3 className="text-lg font-semibold">Estudos e experimentos no GitHub</h3>
                  <p className="mt-1 max-w-lg text-sm text-muted-foreground">Acompanhe meus repositórios e a evolução dos meus estudos em qualidade e automação de testes.</p>
                </div>
              </div>
              <a href={PROFILE.github} {...ext} className={btnPrimary}><Github className="h-4 w-4" />Ver perfil no GitHub</a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="formacao" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Formação" title="Formação acadêmica." />
          <div className="grid gap-5 md:grid-cols-2">
            {EDUCATION.map((e) => (
              <article key={e.course} className="card-surface card-hover p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary"><GraduationCap className="h-4 w-4" />{e.level}</span>
                  <span className="font-mono text-xs text-muted-foreground">{e.status ? `${e.status} · ` : ""}{e.year}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{e.course}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
              </article>
            ))}
          </div>
        </Reveal>
        <Reveal className="mt-20">
          <SectionHeading eyebrow="Cursos" title="Cursos e aperfeiçoamento." />
          <ul className="grid gap-3 md:grid-cols-2">
            {COURSES.map((c) => (
              <li key={c.name} className="card-surface flex items-start gap-3 p-4">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.org}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">{c.hours}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Languages className="h-4 w-4" aria-hidden />
            Idiomas: {LANGUAGES.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(", ")}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contato" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Contato</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Vamos conversar?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Estou aberto a oportunidades na área de Qualidade de Software, QA e Quality Assurance. Se você deseja conhecer melhor minha trajetória profissional ou conversar sobre uma oportunidade, entre em contato.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`mailto:${PROFILE.email}`} className={btnPrimary}><Mail className="h-4 w-4" />Enviar e-mail</a>
            <a href={PROFILE.linkedin} {...ext} className={btnGhost}><Linkedin className="h-4 w-4" />Acessar LinkedIn</a>
            <a href={PROFILE.github} {...ext} className={btnGhost}><Github className="h-4 w-4" />Acessar GitHub</a>
          </div>
          <p className="mt-6 font-mono text-sm text-muted-foreground">{PROFILE.email}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <div className="flex items-center gap-4">
          {SITE.resumePdf && <a href={SITE.resumePdf} download className="hover:text-primary">Baixar currículo em PDF</a>}
          <a href={PROFILE.linkedin} {...ext} aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-4 w-4" /></a>
          <a href={PROFILE.github} {...ext} aria-label="GitHub" className="hover:text-primary"><Github className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
