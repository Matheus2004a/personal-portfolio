import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="grid justify-center items-center bg-gray-100 py-6 gap-10">
      <section>
        <h3 className="text-2xl mb-2">Social Medias</h3>
        <div className="flex items-center gap-2">
          <Link href="https://github.com/Matheus2004a" target="_blank">
            <Image
              src="/icon-github.svg"
              alt="icon-github"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </section>

      <p>
        Copyright &copy; 2024 | Coded by Matheus Aurélio
      </p>
    </footer>
  )
}
