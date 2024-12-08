import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Anton ,DM_Sans} from 'next/font/google'

const anton = Anton({
  weight: "400",
  subsets: ["latin"]
})
const sans = DM_Sans({
  weight: ["800"],
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className="bg-slate-200 dark:bg-black h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center max-w-92 px-2">
        <img
          src="/profile/profilepic.png"
          alt=""
          width={"200px"}
          height={"200px"}
          className="rounded-full"
        />
        <h1 className={`${anton.className} md:text-7xl lg:text-7xl mt-8 text-4xl dark:text-white`}>Ayush Sharma</h1>
        <h2 className={`${sans.className} text-sm md:text-xl lg:md:text-xl mb-4 dark:text-white`}>Full Stack Web Developer</h2>
        <h2 className="mt-10 text-lg dark:text-white">Hi, I am <font className={`${sans.className} dark:text-white`}>Ayush Sharma</font> , I&apos;m a <font className={sans.className}>Full Stack Web Developer</font></h2>
        <h2 className="font-sans dark:text-white">
          I have experience in working with<font className={`${sans.className} dark:text-white`}> JavaScript/TypeScript, React.js,
          Next.js, Node.js, TailwindCSS</font> and numerous other tools.{" "}
        </h2>
        <div className="flex space-x-7 mt-5">
          <Link href={"https://x.com/ayusssshhhhhhh"} target="_blank">
              <FaXTwitter size={32} className="hover:scale-110 transition-all duration-300 dark:text-white"/>
          </Link>
          <Link href={"https://github.com/ayushsharma74"} target="_blank">
            <FaGithub size={32}  className="hover:scale-110 transition-all duration-300 dark:text-white" />
          </Link>
          <Link href={"https://www.linkedin.com/in/ayushtriedcode/"} target="_blank">
            <FaLinkedin size={32} className="hover:scale-110 transition-all duration-300 dark:text-white"/>
          </Link>
        </div>
      </div>
    </div>
      
      
  );
}
