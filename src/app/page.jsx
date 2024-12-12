"use client"
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Anton ,DM_Sans} from 'next/font/google'
import Particles from "@/components/ui/particles";
import useDarkMode from "@/hooks/useDarkMode";
import { use, useEffect, useState } from "react";
import BlurFade from "@/components/ui/blur-fade";
import WordRotate from "@/components/ui/word-rotate";
import HyperText from "@/components/ui/hyper-text";
import GradualSpacing from "@/components/ui/gradual-spacing";
import BoxReveal from "@/components/ui/box-reveal";
import { BorderBeam } from "@/components/ui/border-beam";
const anton = Anton({
  weight: "400",
  subsets: ["latin"]
})
const sans = DM_Sans({
  weight: ["800"],
  subsets: ["latin"]
})

export default function Home() {
  const [isDark] = useDarkMode();

  return (
    <div className="bg-black h-[100vh] flex items-center justify-center">
        <Particles
          className="absolute inset-0  text-white "
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />
      <div className="flex flex-col items-center max-w-92 px-2">
        <div className="relative rounded-full p-1">
        <img
          src="/profile/profilepic.png"
          alt=""
          width={"200px"}
          height={"200px"}
          className="rounded-full"
        />
        <BorderBeam size={250} duration={12} delay={9} >
          
        </BorderBeam>
        </div>
        
        
         <GradualSpacing
         className={`${anton.className} md:text-7xl lg:text-7xl mt-8 text-4xl  text-white`}
         text={"Ayush Sharma"}
         animateOnLoad
         />
        {/* <h1 className={`${anton.className} md:text-7xl lg:text-7xl mt-8 text-4xl  text-white`}>Ayush Sharma</h1> */}
        
        {/* <h2 className={`${sans.className} text-sm md:text-xl lg:md:text-xl mb-4  text-white`}> */}
        <WordRotate
        className="text-sm md:text-xl lg:text-xl font-bold text-white dark:text-white"
        words={["Full Stack Web Developer", "Shtiposter on X", "Software Engineer", "UI/UX Designer", "Blog Writer"]}
        />
          
        {/* </h2> */}
        <h2 className="mt-10 text-lg text-center  text-white text-centery">Hi, I am <font className={`${sans.className}  text-white`}>Ayush Sharma</font> , I&apos;m a <font className={sans.className}>Full Stack Web Developer</font></h2>
        <h2 className="font-sans  text-white text-center">
          I have experience in working with<font className={`${sans.className}  text-white`}> JavaScript/TypeScript, React.js,
          Next.js, Node.js, TailwindCSS</font> and numerous other tools.{" "}
        </h2>
        <div className="flex space-x-7 mt-5">
          <Link href={"https://x.com/ayusssshhhhhhh"} target="_blank">
              <FaXTwitter size={32} className="hover:scale-110 transition-all duration-300  text-white"/>
          </Link>
          <Link href={"https://github.com/ayushsharma74"} target="_blank">
            <FaGithub size={32}  className="hover:scale-110 transition-all duration-300  text-white" />
          </Link>
          <Link href={"https://www.linkedin.com/in/ayushtriedcode/"} target="_blank">
            <FaLinkedin size={32} className="hover:scale-110 transition-all duration-300  text-white"/>
          </Link>
        </div>
      </div>
    </div>
      
      
  );
}
