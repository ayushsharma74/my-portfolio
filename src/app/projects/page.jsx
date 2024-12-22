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
    <div className="bg-black h-fit  py-6 px-10 sm:px-32 md:px-32">
      <div className="flex flex-col gap-3 items-center">
        <h1 className={`${anton.className} text-7xl  text-white `}>Projects</h1>
        <p className={`${sans.className} text-lg  text-white`}>Check out my work!</p>
      </div>
      <div className=" px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3  text-white`}>Codehub</h1>
        <div>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Next.js</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Node.js</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">TailwindCSS</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Typescript</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Shadcn</p>
        </div>
        <p className={`${sans.className}  text-white`}>
          Built with Next.js, Codehub is a platform with 1000+ leetcode problems with video solutions and company wise, topic wise and difficulty wise categorization. Helping hundreds of students to prepare for their interviews.
        </p>
        <div className="flex justify-end gap-4 mt-3">
          <Link href={"https://thecodehub.vercel.app/"} target="_blank">
            <FaExternalLinkAlt
              size={23}
              className={`hover:scale-110 transition-all duration-200  text-white`}
            />
          </Link>
          <Link
            href={"https://github.com/ayushsharma74/codehub"}
            target="_blank"
          >
            <FaGithub
              size={23}
              className="hover:scale-110 transition-all duration-200  text-white"
            />
          </Link>
          
        </div>
      </div>
      <div className=" px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3  text-white`}>URL Shortener</h1>
        <div>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Express.js</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Node.js</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">TailwindCSS</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Javascript</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">MongoDB</p>
        </div>
        <p className={`${sans.className}  text-white`}>
        A RESTful API for URL shortening and management, implemented using Node.js, Express.js, and MongoDB. It features endpoints for creating, retrieving, updating, and deleting URLs, with unique short code generation via nanoid and real-time access count tracking.


        </p>
        <div className="flex justify-end gap-4 mt-3">
          <Link
            href={"https://github.com/ayushsharma74/Url-Shortener"}
            target="_blank"
          >
            <FaGithub
              size={23}
              className="hover:scale-110 transition-all duration-200  text-white"
            />
          </Link>
          
        </div>
      </div>
      <div className=" px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3  text-white`}>RetailRadar</h1>
        <div>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2  text-white">Next.js</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2  text-white">Node.js</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2  text-white">TailwindCSS</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2  text-white">Typescript</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2  text-white">MongoDB</p>
        </div>
        <p className={`${sans.className}  text-white`}>
          RetailRadar is a powerful Next.js application designed to help
          businesses streamline their operations through advanced data analytics
          and efficient product management.
        </p>
        <div className="flex justify-end gap-4 mt-3">
          <Link href={"https://retail-radar-bice.vercel.app/"} target="_blank">
            <FaExternalLinkAlt
              size={23}
              className={`hover:scale-110 transition-all duration-200  text-white`}
            />
          </Link>
        </div>
      </div>
      <div className="px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3  text-white`}>
          Caching Proxy Server
        </h1>
        <div>
          <p className="bg-blackborder border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2">Express.js</p>
          <p className="bg-blackborder border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2">Redis</p>
        </div>
        <p className={`${sans.className}  text-white`}>
The Caching Proxy Server is a lightweight middleware tool that forwards client requests to an origin server, caches responses, and serves subsequent requests from the cache. It reduces latency, minimizes server load, and is configurable via simple command-line arguments, offering an efficient solution for caching in web applications.
        </p>
        <div className="flex justify-end gap-4 mt-3">
          <Link
            href={"https://github.com/ayushsharma74/Caching-Proxy-Server"}
            target="_blank"
          >
            <FaGithub
              size={23}
              className="hover:scale-110 transition-all duration-200  text-white"
            />
          </Link>
        </div>
      </div>
      <div className="px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3  text-white`}>
          Vizack Enterprises
        </h1>
        <div>
          <p className="bg-blackborder border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2">Next.js</p>
          <p className="bg-blackborder border-solid border-slate-500 font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2">TailwindCSS</p>
        </div>
        <p className={`${sans.className}  text-white`}>
          A Business Portfolio For ViZack Enterprises Bootstrapped From NextJS
          and Styled With TailwindCSS.
        </p>
        <div className="flex justify-end gap-4 mt-3">
          <Link href={"https://www.vizackenterprises.com/"} target="_blank">
            <FaExternalLinkAlt
              size={23}
              className="hover:scale-110 transition-all duration-200  text-white"
            />
          </Link>
          <Link
            href={"https://github.com/ayushsharma74/vizack.com"}
            target="_blank"
          >
            <FaGithub
              size={23}
              className="hover:scale-110 transition-all duration-200  text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
