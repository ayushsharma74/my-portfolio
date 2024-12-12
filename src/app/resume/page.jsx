import Particles from "@/components/ui/particles";
import { Anton, DM_Sans } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});
const sans = DM_Sans({
  weight: ["300"],
  subsets: ["latin"],
});
export default function Resume() {
  return (
    <div className="bg-black h-[100vh] py-16 px-20">
      <div className="flex flex-col gap-3 items-center">
        <h1 className={`${anton.className} text-5xl md:text-7xl lg:text-7xl mb-5  text-white`}>Resume</h1>
        <p className={`${sans.className} text-lg  text-white `}>
          Interested in working with me? Feel free to reach out
        </p>
        <div className="mt-3">
            <Link href={"https://coral-leona-29.tiiny.site"} className="  bg-gray-800 transition-all delay-100 duration-300 hover:bg-white p-3 rounded hover:text-black  text-white">
            View/Download Resume
            </Link>
        </div>
        <Particles
          className="absolute inset-0  text-white "
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />
        <h1 className={`${anton.className} text-2xl mt-20  text-white`}>Get in touch</h1>
        <h1 className="mt-1  text-white">Email : <Link href={"mailto:ayushsharma.code@outlook.com"} className="hover:text-slate-500 transition-all duration-300 underline hover:no-underline" >ayushsharma.code@outlook.com</Link></h1>
        <div className="flex gap-4">

        <Link href={"https://x.com/ayusssshhhhhhh"} target="_blank">
            <FaXTwitter size={30} className=" text-white"/>
          </Link>
          <Link href={"https://github.com/ayushsharma74"} target="_blank">
            <FaGithub size={30} className=" text-white" />
          </Link>
          <Link href={"https://www.linkedin.com/in/ayushtriedcode/"} target="_blank">
            <FaLinkedin size={30} className=" text-white"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
