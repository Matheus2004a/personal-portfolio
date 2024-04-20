"use client"

import { StackLabels, useGitHubAutomatedRepos } from "github-automated-repos";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { BadgeDemo } from "../components/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

export function Projects() {
  const projects = useGitHubAutomatedRepos("Matheus2004a", "deploy");

  return (
    <section id="work" className="max-w-5xl w-full grid gap-12 py-16 md:py-20 2xl:py-24">
      <div className="grid place-items-center gap-4">
        <BadgeDemo className="w-fit">
          <h2>Projetos</h2>
        </BadgeDemo>
        <p className="max-w-xs md:max-w-screen-sm text-center">Alguns dos projetos notáveis ​​que construí:</p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-12">
        {projects.map((project) => (
          <Card className="w-4/5 dark:bg-slate-800" key={project.id}>
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
          </Card>
        ))}
      </div>
    </section>
  )
}
