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
          <h2>Skills</h2>
        </BadgeDemo>
        <p>The skills, tools and technologies I am really good at:</p>
      </div>

      <div className="flex flex-wrap justify-center items-center max-w-screen-xl">
        {skills?.map((skill) => (
          <figure key={skill.id} className="p-4 flex flex-col gap-2 items-center w-1/4 sm:w-1/6">
            <div className="w-full h-20 flex items-center justify-center">
              <Image
                src={skill.url_skill}
                alt={skill.name}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <figcaption>{skill.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
