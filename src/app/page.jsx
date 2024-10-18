import Image from "next/image";
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
    <div className="bg-slate-200 h-[91.2vh] flex items-center justify-center">
      <div className="flex flex-col items-center max-w-92">
        <img
          src="/profile/profilepic.jpg"
          alt=""
          width={"200px"}
          height={"200px"}
          className="rounded-full"
        />
        <h1 className={`${anton.className} text-8xl mt-8`}>Ayush Sharma</h1>
        <h2 className={`${sans.className} text-xl mb-4`}>Full Stack Web Developer</h2>
        <h2 className="mt-10 text-lg">Hi, I am <font className={sans.className}>Ayush Sharma</font> , I&apos;m a <font className={sans.className}>Full Stack Web Developer</font></h2>
        <h2 className="font-sans">
          I have experience in working with<font className={sans.className}> JavaScript/TypeScript, React.js,
          Next.js, Node.js, TailwindCSS</font> and numerous other tools.{" "}
        </h2>
        <div className="flex space-x-7 mt-5">
          <Link href={"https://x.com/ayusssshhhhhhh"}>
            <FaXTwitter size={32}/>
          </Link>
          <Link href={"https://github.com/ayushsharma74"}>
            <FaGithub size={32} />
          </Link>
          <Link href={"https://www.linkedin.com/in/ayushtriedcode/"}>
            <FaLinkedin size={32}/>
          </Link>
        </div>
      </div>
    </div>
  );
}
