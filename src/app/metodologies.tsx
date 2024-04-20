import { BadgeDemo } from "@/components/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { METODOLOGIES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Metodologies() {
  return (
    <section id="metodologies" className="max-w-5xl w-full grid gap-12 py-16 md:py-20 2xl:py-24">
      <div className="grid place-items-center gap-4">
        <BadgeDemo className="w-fit">
          <h2>Metodologias</h2>
        </BadgeDemo>
        <p className="max-w-xs md:max-w-screen-sm text-center">Conheça um pouco dos serviços e metodologias usadas por mim abaixo:</p>
      </div>

      <div className="flex flex-col flex-wrap justify-center items-center md:grid grid-cols-3 max-w-screen-xl gap-12">
        {METODOLOGIES.map((metodologie) => (
          <Card
            key={metodologie.description}
            className={cn(
              "max-w-[75%] w-full md:max-w-full cursor-pointer",
              "transition transform ease-in-out duration-500 hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none"
            )}
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
          </Card>
        ))}
      </div>
    </section>
  )
}
