"use client"

import { supabase } from "@/utils/supabase/server";
import Image from "next/image";
import { useEffect, useState } from "react";

type Skill = {
  created_at: string;
  id: string;
  name: string;
  url_skill: string;
};

export function SkillsList({ skills }: { skills: Skill[] }) {
  const [newSkills, setNewSkills] = useState<Skill[]>(skills)

  useEffect(() => {
    const channel = supabase
      .channel("realtime skills")
      .on("postgres_changes", {
        event: "*", schema: "public", table: "tbl_skills",
      }, (payload) => {
        if (payload.eventType === 'DELETE') {
          setNewSkills((prevState) => prevState.filter((skill) => skill.id !== payload.old.id))
        } else {
          setNewSkills((prevState) => [...prevState, payload.new as Skill])
        }
      }).subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return newSkills.map((skill) => (
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
  ))
}
