import { AboutMe } from "@/components/about-me";
import { Expirences } from "@/components/expirences";
import Header from "@/components/header";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { ThemeProvider } from 'next-themes';
import { Suspense } from "react";
import { Toaster } from 'react-hot-toast';
import { Contact } from "./contact";
import { Footer } from "./footer";

export default function Home() {
  return (
    <ThemeProvider enableSystem attribute='class'>
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

        <Toaster />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
