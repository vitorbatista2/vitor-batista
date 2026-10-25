import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { PROFILE } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  ["inicio", "Início"], ["sobre", "Sobre mim"], ["experiencia", "Experiência"],
  ["competencias", "Competências"], ["projetos", "Projetos"], ["formacao", "Formação"], ["contato", "Contato"],
] as const;

export const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-header backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Vítor Batista, ir para o início">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-mono text-xs font-bold text-primary-foreground">VB</span>
          <span className="font-semibold tracking-tight">{PROFILE.shortName}</span>
        </a>
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {LINKS.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={PROFILE.linkedin} {...ext} aria-label="LinkedIn de Vítor Batista" className="hidden rounded-md p-2 text-muted-foreground hover:text-foreground sm:inline-flex"><Linkedin className="h-4 w-4" /></a>
          <a href={PROFILE.github} {...ext} aria-label="GitHub de Vítor Batista" className="hidden rounded-md p-2 text-muted-foreground hover:text-foreground sm:inline-flex"><Github className="h-4 w-4" /></a>
          <ThemeToggle />
          <a href="#contato" className="hidden rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 active:scale-95 md:inline-flex">Contato</a>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Fechar menu" : "Abrir menu"} className="inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Navegação mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {LINKS.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-md px-2 py-3 text-base hover:bg-secondary">{label}</a></li>
            ))}
            <li className="flex gap-2 px-2 pt-3">
              <a href={PROFILE.linkedin} {...ext} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm"><Linkedin className="h-4 w-4" />LinkedIn</a>
              <a href={PROFILE.github} {...ext} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm"><Github className="h-4 w-4" />GitHub</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
