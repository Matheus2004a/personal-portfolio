"use client"

import { StackLabels, useGitHubAutomatedRepos } from "github-automated-repos";
import Image from "next/image";
import Link from "next/link";
import { BadgeDemo } from "./badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

export function Projects() {
  const projects = useGitHubAutomatedRepos("Matheus2004a", "deploy");

  return (
    <section className="max-w-5xl w-full grid gap-12 py-16 md:py-20 2xl:py-24">
      <div className="grid place-items-center gap-4">
        <BadgeDemo className="w-fit">
          <h2>Work</h2>
        </BadgeDemo>
        <p>Some of the noteworthy projects I have built:</p>
      </div>

      <div className="flex flex-wrap justify-center items-center max-w-screen-xl gap-12">
        {projects.map((project) => (
          <Card className="w-3/4" key={project.id}>
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
                  {project.topics.map((icon, index) => (
                    <StackLabels
                      key={index}
                      itemTopics={icon}
                      className="bg-gray-200 rounded-xl px-5 py-1"
                    />
                  ))}
                </div>
              )}
            </CardContent>

            <CardFooter>
              <Link href={project.homepage} target="_blank">
                <Image
                  src="/icon-homepage.svg"
                  alt="icon-homepage"
                  width={36}
                  height={36}
                />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
