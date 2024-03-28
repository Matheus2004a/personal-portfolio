import Image from "next/image"

export function AboutMe() {
  return (
    <section className="max-w-5xl w-full flex gap-12 py-16 md:py-20 2xl:py-24">
      <div className="grid gap-12">
        <h1 className="text-2xl font-bold">I am Matheus</h1>
        <p>
          I am a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
        </p>

        <figure className="flex items-center gap-2">
          <Image
            src="/location.svg"
            alt="location-icon"
            width={20}
            height={20}
          />
          <figcaption>São José dos Campos, Brazil</figcaption>
        </figure>
      </div>

      <Image
        src="https://github.com/Matheus2004a.png"
        alt="user-icon"
        width={280}
        height={320}
        className="rounded-lg"
      />
    </section>
  )
}
