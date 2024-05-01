import { MotionDiv } from "@/components/motions"
import { containerSections } from "@/components/motions/variants"
import { supabase } from "@/utils/supabase/server"
import { BadgeDemo } from "../components/badge"
import { SkillsList } from "./skills-list"

export async function Skills() {
  const { data: skills } = await supabase
    .from('tbl_skills')
    .select('*')

  return (
    <section className="max-w-5xl w-full grid gap-12 py-16 md:py-20 2xl:py-24">
      <MotionDiv
        variants={containerSections(1)}
        initial="hidden"
        animate="visible"
        className="grid place-items-center gap-4"
      >
        <BadgeDemo className="w-fit">
          <h2>Habilidades</h2>
        </BadgeDemo>
        <p className="max-w-xs md:max-w-screen-sm text-center">
          As habilidades, ferramentas e tecnologias nas quais sou realmente bom:
        </p>
      </MotionDiv>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        <SkillsList skills={skills ?? []} />
      </div>
    </section>
  )
}
