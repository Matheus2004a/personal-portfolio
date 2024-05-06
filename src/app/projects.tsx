"use client"

import { MotionCard, MotionDiv } from "@/components/motions";
import { containerDelay } from "@/components/motions/variants";
import { useInView } from "framer-motion";
import { StackLabels, useGitHubAutomatedRepos } from "github-automated-repos";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { BadgeDemo } from "../components/badge";
import { CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

export function Projects() {
  const projects = useGitHubAutomatedRepos("Matheus2004a", "deploy");

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section id="work" className="max-w-5xl w-full grid gap-12 py-16 md:py-20 2xl:py-24">
      <MotionDiv
        variants={containerDelay({ time: 1, axisHidden: { y: 20 }, axisVisible: { y: 0 } })}
        initial="hidden"
        animate="visible"
        className="grid place-items-center gap-4"
      >
        <BadgeDemo className="w-fit">
          <h2>Projetos</h2>
        </BadgeDemo>
        <p className="max-w-xs md:max-w-screen-sm text-center">Alguns dos projetos notáveis ​​que construí:</p>
      </MotionDiv>

      <div className="flex flex-wrap justify-center items-center gap-12" ref={ref}>
        {projects.map((project, index) => (
          <MotionCard
            key={project.id}
            className="w-4/5 dark:bg-slate-800"
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: { y: 0, opacity: 1 },
            }}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <CardHeader>
              <CardTitle>
                <Link href={project.html_url} target="_blank">
                  {project.name}
                </Link>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p>{project.description}</p>

              {project.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.topics.map((icon) => (
                    <StackLabels
                      key={icon}
                      itemTopics={icon}
                      className="bg-gray-200 rounded-xl px-5 py-1 dark:bg-slate-700"
                    />
                  ))}
                </div>
              )}
            </CardContent>

            <CardFooter>
              {project.homepage && (
                <Link href={project.homepage} target="_blank">
                  <ExternalLink
                    className="rounded-lg hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-900 transition-colors duration-300 w-9 h-9 p-1.5"
                  />
                </Link>
              )}
            </CardFooter>
          </MotionCard>
        ))}
      </div>
    </section >
  )
}
