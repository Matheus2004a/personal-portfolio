import { AboutMe } from "@/components/about-me";
import Header from "@/components/header";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-12 pt-10">
        <AboutMe />
        <Skills />
      </main>
    </>
  );
}
