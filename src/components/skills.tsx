import { supabase } from "@/utils/supabase/server"
import Image from "next/image"
import { BadgeDemo } from "./badge"

export async function Skills() {
  const { data: skills } = await supabase
    .from('tbl_skills')
    .select('*')

  return (
    <section className="max-w-5xl w-full grid gap-12 py-16 md:py-20 2xl:py-24">
      <div className="grid place-items-center gap-4">
        <BadgeDemo className="w-fit">
          <h2>Habilidades</h2>
        </BadgeDemo>
        <p>As habilidades, ferramentas e tecnologias nas quais sou realmente bom:</p>
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {skills?.map((skill) => (
          <figure key={skill.id} className="flex flex-col items-center gap-2">
            <Image
              src={skill.url_skill}
              alt={skill.name}
              width={64}
              height={64}
              className="transition-transform duration-300 md:hover:scale-110 cursor-pointer w-16 h-16"
            />
            <figcaption className="text-base md:text-lg">{skill.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
