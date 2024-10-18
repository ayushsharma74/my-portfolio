"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){
    const pathname = usePathname()
    console.log(pathname);
    
    return(
        <div className="bg-slate-200 p-5  ">
        <nav className="flex items-center justify-center space-x-7">
          <Link href={"/"} className={`font-semibold hover:text-gray-400 transition-all duration-500 ${pathname === "/" ? "underline" : "no-underline"} `}>
            About
          </Link>
          <Link href={"/projects"} className={`font-semibold hover:text-gray-400 transition-all duration-500 ${pathname === "/projects" ? "underline" : "no-underline"} `}>
            Projects
          </Link>
          <Link href={"/resume"} className={`font-semibold hover:text-gray-400 transition-all duration-500 ${pathname === "/resume" ? "underline" : "no-underline"} `}>
            Resume
          </Link>
        </nav>
      </div>
    )
}