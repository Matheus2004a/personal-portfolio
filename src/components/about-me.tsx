import { MapPin } from "lucide-react"
import Image from "next/image"

export function AboutMe() {
  return (
    <section id="about" className="max-w-5xl w-full flex gap-12 py-16 md:py-20 2xl:py-24">
      <div className="grid gap-12">
        <h1 className="text-2xl font-bold">Apresentação</h1>
        <p>
          Sou um desenvolvedor frontend (React.js/Next.js) com foco na criação de experiências digitais que sejam rápidas, acessíveis, visualmente atraentes e responsivas. Dependendo da sua demanda posso atuar como fullstack também, pois já realizei alguns trabalhos (freelas) como um.
        </p>

        <div className="flex flex-col gap-2">
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
        </div>
      </div>

      <Image
        src="https://github.com/Matheus2004a.png"
        alt="user-icon"
        width={280}
        height={280}
        className="rounded-lg w-[280px] h-[280px] object-cover"
      />
    </section >
  )
}
