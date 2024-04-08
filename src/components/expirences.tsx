import { formatDate } from "@/utils/formatDate";
import { supabase } from "@/utils/supabase/server";
import Image from "next/image";
import { BadgeDemo } from "./badge";

export async function Expirences() {
  const { data: expirences } = await supabase
    .from('tbl_expirences')
    .select('*')

  return (
    <section className="max-w-5xl w-full grid gap-12 py-16 md:py-20 2xl:py-24">
      <div className="grid place-items-center gap-4">
        <BadgeDemo className="w-fit">
          <h2>Expirence</h2>
        </BadgeDemo>
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>

      <div className="flex flex-col flex-wrap justify-center items-center max-w-screen-xl gap-12">
        {expirences?.map((expirence) => (
          <div key={expirence.id} className="max-w-[900px] w-full grid gap-4 bg-white shadow-lg p-8">
            <figure className="flex items-center gap-2">
              <Image
                src={expirence.company_url}
                alt={expirence.company_name}
                width={40}
                height={40}
              />
              <figcaption>
                <span>{expirence.company_name}</span>
                <br />
                <small>{formatDate(expirence.started_at)} - {formatDate(expirence.ended_at)}</small>
              </figcaption>
            </figure>

            <ul>
              {expirence.description.split("\n").map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
