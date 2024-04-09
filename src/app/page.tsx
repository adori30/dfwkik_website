import Image from "next/image";
import Link from "next/link";
import WhereToFindUs from "./where-to-find-us";
import { ReactNode } from "react";

export default function HomePage() {
  return (
    <TextureBackground>
      <HeaderPicture />
      <div className="flex flex-col">
        <Header />
        <div className="bg-slate-300 p-12 text-center text-2xl font-thin text-gray-950 md:text-4xl">
          Our disciplines
        </div>
        <Disciplines />
        <div className="p-12 text-center text-2xl font-thin md:text-4xl">
          Where to find us
        </div>
        <WhereToFindUs />
        <ClassSchedule />
      </div>
    </TextureBackground>
  );
}

function TextureBackground({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="pattern-cross pattern-slate-600 pattern-bg-slate-700 pattern-size-8 pattern-opacity-100 bg-slate-700">
      {children}
    </div>
  );
}

function HeaderPicture() {
  return (
    <div className="absolute right-0 z-0 h-96 w-full md:-top-60 md:h-[60rem] md:w-[82rem]">
      <Image
        src={"/kamae_clipped.png"}
        fill
        objectFit="cover"
        alt="picture of a kendoka"
      />
    </div>
  );
}

function Header() {
  return (
    <div className="flex h-96 items-center justify-center">
      <div className="absolute md:left-8 md:top-8 left-4 top-4 flex flex-row items-center">
        <Image
          src={"/logo_color.png"}
          width={30}
          height={30}
          alt="logo"
          className="mr-2"
        />
        <div className="font-sans font-extralight md:text-2xl">
          Dallas/Fort Worth Kendo & Iaido Kyokai
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center md:mr-28 h-full justify-center">
        <div className="p-4 text-xl font-light md:text-3xl mt-auto md:mt-0">
          Learn the arts of Japanese swordsmanship in DFW
        </div>
        <div className="font-thin md:text-xl self-start pl-4 mb-auto md:mb-0">Established 1976</div>
        <HeaderButton className="mb-8 md:mb-0">
          <Link href="https://www.dfwkik.org/dallas/membership/">
            Join us now
          </Link>
        </HeaderButton>
      </div>
    </div>
  );
}

function Disciplines() {
  return (
    <div className="flex min-h-96 min-w-max flex-col bg-slate-300 md:flex-row">
      <DisciplineTile
        name="Kendo"
        description="Japanese martial art emphasizing swordsmanship."
        backgroundImg="kendo_pic.jpg"
      />
      <DisciplineTile
        name="Iaido"
        description="Discipline focusing on the art of drawing the sword."
        backgroundImg="iaido_pic.jpg"
      />
      <DisciplineTile
        name={"Jodo"}
        description="Traditional Japanese staff fighting technique."
        backgroundImg="jodo_pic.jpg"
      />
    </div>
  );
}

function DisciplineTile({
  name,
  description,
  backgroundImg,
}: Readonly<{
  name: string;
  description: string;
  backgroundImg: string;
}>) {
  return (
    <div
      className="relative m-4 h-72 cursor-pointer bg-cover bg-center text-5xl transition-all  md:flex-1 md:hover:pb-28"
      style={{ backgroundImage: `url('/${backgroundImg}')` }}
    >
      <div className="absolute z-10 flex h-full w-full flex-col content-center items-center justify-center text-center transition-all md:hover:bg-black md:hover:bg-opacity-50 md:hover:pb-28">
        {name}
        <div className="absolute mt-28 flex h-full w-full items-center justify-center text-xl opacity-100 transition-all md:opacity-0 md:hover:opacity-100">
          {description}
        </div>
      </div>
    </div>
  );
}

function HeaderButton({
  children,
  className,
}: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <div
      className={`cursor-pointer border bg-slate-700 p-3 text-xl font-light uppercase transition-all hover:bg-slate-300 hover:text-slate-700 ${className}`}
    >
      {children}
    </div>
  );
}

function ClassSchedule() {
  return (
    <div className="bg-slate-300 md:p-12 pt-8 pb-8 items-center text-center text-2xl font-thin text-gray-950 md:text-4xl flex flex-col">
      <div>Class schedule</div>
      <div className="md:w-1/2 min-w-fit md:text-2xl text-lg md:m-8 mt-4">
        <table className="w-full font-extralight">
          <tr>
            <td className="font-semibold text-left">Tuesday</td>
            <td className="text-right md:text-xl text-sm">7:15 PM - 9:30 PM</td>
            <td className="text-left pl-8 md:text-xl text-sm">Iaido</td>
          </tr>
          <tr className="border-b-2 border-slate-700">
            <td colSpan={2} className="text-right md:text-xl text-sm align-top">1st Tuesday of the month</td>
            <td className="text-left pl-8 pb-4 md:text-xl text-sm">Jodo</td>
          </tr>
          <tr className="border-b-2 border-slate-700">
            <td className="font-semibold pt-4 pb-4 text-left">Thursday</td>
            <td className="text-right md:text-xl text-sm">7:15 PM - 9:30 PM</td>
            <td className="text-left pl-8 md:text-xl text-sm">Kendo</td>
          </tr>
          <tr>
            <td className="font-semibold pt-4 text-left">Sunday</td>
            <td className="text-right pt-4 md:text-xl text-sm">9:15 AM - 10:30 AM</td>
            <td className="text-left pl-8 pt-4 md:text-xl text-sm">Iaido</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-right md:text-xl text-sm">10:40 AM - 11:10 AM</td>
            <td className="text-left pl-8 md:text-xl text-sm">Kendo Kata</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-right md:text-xl text-sm">11:15 AM - 12:30 PM</td>
            <td className="text-left pl-8 md:text-xl text-sm">Kendo</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
