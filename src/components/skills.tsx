import { BadgeDemo } from "./badge"

export async function Skills() {
  return (
    <section className="max-w-5xl w-full grid gap-12 py-16 md:py-20 2xl:py-24">
      <div className="grid place-items-center gap-4">
        <BadgeDemo className="w-fit">
          <h2>Skills</h2>
        </BadgeDemo>
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
    </section>
  )
}
