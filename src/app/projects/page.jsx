import { Anton, DM_Sans } from "next/font/google";

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
    <div className="bg-slate-200 h-[91.2vh] py-6 px-20">
      <div className="flex flex-col gap-3 items-center">
        <h1 className={`${anton.className} text-7xl `}>Projects</h1>
        <p className={`${sans.className} text-lg `}>
          You can see projects that i worked on here!
        </p>
      </div>
      <div></div>
    </div>
  );
}
