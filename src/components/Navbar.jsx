"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import useDarkMode from '@/hooks/useDarkMode';

export default function Navbar(){
    const pathname = usePathname()
    const [isDark, setIsDark] = useDarkMode()
    console.log(pathname);
    
    return(
        <div className="bg-slate-200 p-5 dark:bg-black ">
        <nav className="flex items-center justify-center space-x-7">
          <Link href={"/"} className={`font-semibold hover:text-gray-400 transition-all duration-500  dark:text-white ${pathname === "/" ? "underline" : "no-underline"} `}>
            About
          </Link>
          <Link href={"/projects"} className={`font-semibold hover:text-gray-400 transition-all duration-500 dark:text-white ${pathname === "/projects" ? "underline" : "no-underline"} `}>
            Projects
          </Link>
          <Link href={"/resume"} className={`font-semibold hover:text-gray-400 transition-all duration-500 dark:text-white ${pathname === "/resume" ? "underline" : "no-underline"} `}>
            Resume
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    )
}