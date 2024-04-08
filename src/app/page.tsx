import { AboutMe } from "@/components/about-me";
import { Expirences } from "@/components/expirences";
import Header from "@/components/header";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-12 pt-10">
        <AboutMe />
        <Suspense fallback={<h3>Loading...</h3>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Expirences />
        </Suspense>

        <Projects />
      </main>
    </>
  );
}
