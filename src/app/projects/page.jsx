import { Anton, DM_Sans } from "next/font/google";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});
const sans = DM_Sans({
  weight: ["300"],
  subsets: ["latin"],
});
export default function Projects() {
  return (
    <div className="bg-slate-200 h-[115vh] py-6 px-10 sm:px-32 md:px-32">
      <div className="flex flex-col gap-3 items-center">
        <h1 className={`${anton.className} text-7xl `}>Projects</h1>
        <p className={`${sans.className} text-lg `}>Check out my work!</p>
      </div>
      <div className=" px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3`}>RetailRadar</h1>
        <div>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">Next.js</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">Node.js</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">TailwindCSS</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">Typescript</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">MongoDB</p>
        </div>
        <p className={`${sans.className}`}>
          RetailRadar is a powerful Next.js application designed to help
          businesses streamline their operations through advanced data analytics
          and efficient product management.
        </p>
        <div className="flex justify-end gap-4 mt-3">
          <Link href={"https://retail-radar-bice.vercel.app/"} target="_blank">
            <FaExternalLinkAlt
              size={23}
              className="hover:scale-110 transition-all duration-200"
            />
          </Link>
        </div>
      </div>
      <div className="px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3`}>
          Vizack Enterprises
        </h1>
        <div>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">Next.js</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">TailwindCSS</p>
        </div>
        <p className={`${sans.className}`}>
          A Business Portfolio For ViZack Enterprises Bootstrapped From NextJS
          and Styled With TailwindCSS.
        </p>
        <div className="flex justify-end gap-4 mt-3">
          <Link href={"https://www.vizackenterprises.com/"} target="_blank">
            <FaExternalLinkAlt
              size={23}
              className="hover:scale-110 transition-all duration-200"
            />
          </Link>
          <Link
            href={"https://github.com/ayushsharma74/vizack.com"}
            target="_blank"
          >
            <FaGithub
              size={23}
              className="hover:scale-110 transition-all duration-200"
            />
          </Link>
        </div>
      </div>
      <div className="px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3`}>Stream Pulse</h1>
        <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">React.js</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">Node.js</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">TailwindCSS</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">Typescript</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">MongoDB</p>
        <p className={`${sans.className}`}>
          Stream Pulse is a modern YouTube clone application built using the
          powerful React ecosystem. This project aims to provide a feature-rich
          and user-friendly platform for streaming and discovering videos,
          leveraging the latest technologies and best practices in web
          development.
        </p>
        <div className="flex justify-end gap-4 mt-3">
          <Link
            href={"https://github.com/ayushsharma74/stream-pulse"}
            target="_blank"
          >
            <FaGithub
              size={23}
              className="hover:scale-110 transition-all duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
