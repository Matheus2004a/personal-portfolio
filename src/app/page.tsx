import { AboutMe } from "@/app/about-me";
import { Expirences } from "@/app/expirences";
import { Projects } from "@/app/projects";
import { Skills } from "@/app/skills";
import { ButtonBackTop } from "@/components/button-back-top";
import Header from "@/components/header";
import { Suspense } from "react";
import { Toaster } from 'react-hot-toast';
import { Contact } from "./contact";
import { Footer } from "./footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center pt-10">
        <AboutMe />
        <Suspense fallback={<h3>Loading...</h3>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Expirences />
        </Suspense>

        <Projects />
        <Contact />

        <ButtonBackTop />

        <Toaster />
      </main>
      <Footer />
    </>
  );
}
