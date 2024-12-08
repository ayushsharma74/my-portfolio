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
    <div className="bg-slate-200 dark:bg-black h-[180vh] md:h-[150vh] lg:h-[130vh] py-6 px-10 sm:px-32 md:px-32">
      <div className="flex flex-col gap-3 items-center">
        <h1 className={`${anton.className} text-7xl dark:text-white `}>Projects</h1>
        <p className={`${sans.className} text-lg dark:text-white`}>Check out my work!</p>
      </div>
      <div className=" px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3 dark:text-white`}>RetailRadar</h1>
        <div>
          <p className="bg-slate-200 border border-solid border-slate-500 dark:bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2 dark:text-white">Next.js</p>
          <p className="bg-slate-200 border border-solid border-slate-500 dark:bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2 dark:text-white">Node.js</p>
          <p className="bg-slate-200 border border-solid border-slate-500 dark:bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2 dark:text-white">TailwindCSS</p>
          <p className="bg-slate-200 border border-solid border-slate-500 dark:bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2 dark:text-white">Typescript</p>
          <p className="bg-slate-200 border border-solid border-slate-500 dark:bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2 dark:text-white">MongoDB</p>
        </div>
        <p className={`${sans.className} dark:text-white`}>
          RetailRadar is a powerful Next.js application designed to help
          businesses streamline their operations through advanced data analytics
          and efficient product management.
        </p>
        <div className="flex justify-end gap-4 mt-3">
          <Link href={"https://retail-radar-bice.vercel.app/"} target="_blank">
            <FaExternalLinkAlt
              size={23}
              className={`hover:scale-110 transition-all duration-200 dark:text-white`}
            />
          </Link>
        </div>
      </div>
      <div className="px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3 dark:text-white`}>
          Vizack Enterprises
        </h1>
        <div>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">Next.js</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2">TailwindCSS</p>
        </div>
        <p className={`${sans.className} dark:text-white`}>
          A Business Portfolio For ViZack Enterprises Bootstrapped From NextJS
          and Styled With TailwindCSS.
        </p>
        <div className="flex justify-end gap-4 mt-3">
          <Link href={"https://www.vizackenterprises.com/"} target="_blank">
            <FaExternalLinkAlt
              size={23}
              className="hover:scale-110 transition-all duration-200 dark:text-white"
            />
          </Link>
          <Link
            href={"https://github.com/ayushsharma74/vizack.com"}
            target="_blank"
          >
            <FaGithub
              size={23}
              className="hover:scale-110 transition-all duration-200 dark:text-white"
            />
          </Link>
        </div>
      </div>
      <div className="px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3 dark:text-white`}>Stream Pulse</h1>
        <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2 dark:text-white dark:bg-black">React.js</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2 dark:text-white dark:bg-black">Node.js</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2 dark:text-white dark:bg-black">TailwindCSS</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2 dark:text-white dark:bg-black">Typescript</p>
          <p className="bg-slate-200 border border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-black mb-2 dark:text-white dark:bg-black">MongoDB</p>
        <p className={`${sans.className} dark:text-white`}>
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
              className="hover:scale-110 transition-all duration-200 dark:text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
