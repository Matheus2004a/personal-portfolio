"use client"

import { BadgeDemo } from "@/components/badge";
import { MotionCard, MotionDiv } from "@/components/motions";
import { containerSections } from "@/components/motions/variants";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import useWindow from "@/hooks/useWindow";
import { METODOLOGIES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Metodologies() {
  const isDesktop = useWindow();

  return (
    <section id="metodologies" className="max-w-5xl w-full grid gap-12 py-16 md:py-20 2xl:py-24">
      <MotionDiv
        variants={containerSections(1)}
        initial="hidden"
        animate="visible"
        className="grid place-items-center gap-4"
      >
        <BadgeDemo className="w-fit">
          <h2>Metodologias</h2>
        </BadgeDemo>
        <p className="max-w-xs md:max-w-screen-sm text-center">Conheça um pouco dos serviços e metodologias usadas por mim abaixo:</p>
      </MotionDiv>

      <div className="flex flex-col flex-wrap justify-center items-center md:grid grid-cols-3 max-w-screen-xl gap-12">
        {METODOLOGIES.map((metodologie) => (
          <MotionCard
            key={metodologie.description}
            className={cn(
              "max-w-[75%] w-full md:max-w-full cursor-pointer",
            )}
            whileHover={isDesktop ? { y: -16 } : {}}
            transition={{ ease: "easeInOut" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            initial="hidden"
            animate="visible"
          >
            <CardHeader>
              <CardTitle>{metodologie.title}</CardTitle>
              <CardDescription>{metodologie.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{metodologie.content}</p>
            </CardContent>
            <CardFooter>
              {metodologie.icon}
            </CardFooter>
          </MotionCard>
        ))}
      </div>
    </section>
  )
}
