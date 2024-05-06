"use client"

import { MotionDiv, MotionH2, MotionImg, MotionP } from "@/components/motions"
import { containerDelay } from "@/components/motions/variants"
import useWindow from "@/hooks/useWindow"
import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"
import { Github, Linkedin, MapPin } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const isDesktop = useWindow()

  return (
    <section id="about" ref={ref} className={cn(
      "max-w-5xl w-full md:grid md:grid-cols-2 gap-12 py-16 md:py-20 2xl:py-24",
      "px-8 flex flex-col-reverse place-items-center"
    )}>
      <div className="grid gap-12 sm:gap-8">
        <MotionH2
          variants={containerDelay({
            time: 0.3,
            axisHidden: isDesktop ? { x: -100 } : { y: -100 },
            axisVisible: isDesktop ? { x: 0 } : { y: 0 }
          })}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-2xl font-bold"
        >
          Apresentação
        </MotionH2>
        <MotionP
          variants={containerDelay({
            time: 0.5,
            axisHidden: isDesktop ? { x: -100 } : { y: -100 },
            axisVisible: isDesktop ? { x: 0 } : { y: 0 }
          })}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Sou um desenvolvedor frontend (React.js/Next.js) com foco na criação de experiências digitais que sejam rápidas, acessíveis, visualmente atraentes e responsivas. Dependendo da sua demanda posso atuar como fullstack também, pois já realizei alguns trabalhos (freelas) como um.
        </MotionP>

        <MotionDiv
          variants={containerDelay({
            time: 0.7,
            axisHidden: isDesktop ? { x: -100 } : { y: -100 },
            axisVisible: isDesktop ? { x: 0 } : { y: 0 }
          })}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-2"
        >
          <figure className="flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            <figcaption>São José dos Campos, Brazil</figcaption>
          </figure>

          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
            </div>
            <p>Disponível para novos projetos</p>
          </div>
        </MotionDiv>

        <MotionDiv
          variants={containerDelay({
            time: 1,
            axisHidden: isDesktop ? { x: -100 } : { y: -100 },
            axisVisible: isDesktop ? { x: 0 } : { y: 0 }
          })}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center gap-2"
        >
          <Link href="https://github.com/Matheus2004a" target="_blank">
            <Github
              className={cn(
                "w-9 h-9 hover:bg-gray-200 active:bg-gray-300 rounded-lg p-1.5 transition-colors duration-300",
                "dark:hover:bg-gray-700 dark:active:bg-gray-800"
              )}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/matheus-aur%C3%A9lio/" target="_blank">
            <Linkedin
              className={cn(
                "w-9 h-9 hover:bg-gray-200 active:bg-gray-300 rounded-lg p-1.5 transition-colors duration-300",
                "dark:hover:bg-gray-700 dark:active:bg-gray-800"
              )}
            />
          </Link>
        </MotionDiv>
      </div>

      <MotionImg
        variants={containerDelay({
          time: 1,
          axisHidden: isDesktop ? { x: 100 } : { y: 100 },
          axisVisible: isDesktop ? { x: 0 } : { y: 0 }
        })}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        src="https://github.com/Matheus2004a.png"
        alt="user-icon"
        width={280}
        height={280}
        className="rounded-md w-full sm:max-w-72 h-auto object-cover"
        priority
        quality={100}
      />
    </section>
  )
}
