import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/profile";
import { Header } from "@/components/site/Header";
import {
  AboutSection, ContactSection, EducationSection, ExperienceTimeline, Footer, HeroSection, ProjectsSection, SkillsSection,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE.title },
      { name: "description", content: SITE.description },
      { property: "og:title", content: SITE.title },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(SITE.url ? [{ property: "og:url", content: SITE.url }] : []),
    ],
    links: SITE.url ? [{ rel: "canonical", href: `${SITE.url}/` }] : [],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
