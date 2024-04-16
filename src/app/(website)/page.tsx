import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import DojoMap from "./dojo-map";
import NavBar from "./nav-bar";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col">
        <HeaderPicture />
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
    </>
  );
}

function HeaderPicture() {
  return (
    <div className="absolute z-0 h-96 w-full md:-right-28 md:-top-24 md:h-[50rem] md:w-[82rem]">
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
      <div className="relative z-10 flex h-full flex-col items-center justify-center md:mr-28">
        <div className="mt-auto p-4 text-xl font-light md:mt-0 md:text-3xl">
          Learn the arts of Japanese swordsmanship in DFW
        </div>
        <div className="mb-auto self-start pl-4 font-thin md:mb-0 md:text-xl">
          Established 1976
        </div>
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
        href="kendo"
      />
      <DisciplineTile
        name="Iaido"
        description="Discipline focusing on the art of drawing the sword."
        backgroundImg="iaido_pic.jpg"
        href="iaido"
      />
      <DisciplineTile
        name={"Jodo"}
        description="Traditional Japanese staff fighting technique."
        backgroundImg="jodo_pic.jpg"
        href="jodo"
      />
    </div>
  );
}

function DisciplineTile({
  name,
  description,
  backgroundImg,
  href,
}: Readonly<{
  name: string;
  description: string;
  backgroundImg: string;
  href: string;
}>) {
  return (
    <div
      className="relative m-4 h-72 cursor-pointer bg-cover bg-center text-5xl transition-all md:flex-1 group"
      style={{ backgroundImage: `url('/${backgroundImg}')` }}
    >
      <Link href={href}>
        <div className="absolute z-10 flex h-full w-full flex-col content-center items-center justify-center text-center transition-all md:hover:bg-black md:group-hover:bg-opacity-50 md:group-hover:pb-28">
          {name}
          <div className="absolute mt-28 flex md:group-hover:flex h-full w-full items-center justify-center text-xl opacity-100 md:hidden transition-all md:group-hover:opacity-100">
            {description}
          </div>
        </div>
      </Link>
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

function WhereToFindUs() {
  return (
    <div className="m-4 flex flex-col justify-between md:mb-12 md:h-96 md:flex-row">
      <div className="content-center text-xl font-extralight md:w-1/2 md:pl-16 md:pr-16 md:text-2xl">
        <div>
          We practice at Greenhill School. It is located on the North West
          corner of of Midway and Spring Valley. Practice is held in the Main
          Gymnasium (Indicated by H), best accessed from the Hornet Drive
          entrance off of Midway (Indicated by O).
        </div>
        <div className="mt-12 underline">
          <Link href={"https://maps.app.goo.gl/D13em6GkePDxQCyT7"}>
            4141 Spring Valley Rd. Addison, Texas 75001
          </Link>
        </div>
      </div>
      <div className="flex flex-row content-end justify-center md:h-96 md:w-1/2 md:justify-end">
        <DojoMap />
      </div>
    </div>
  );
}

function ClassSchedule() {
  return (
    <div className="flex flex-col items-center bg-slate-300 pb-8 pt-8 text-center text-2xl font-thin text-gray-950 md:p-12 md:text-4xl">
      <div>Class schedule</div>
      <div className="mt-4 min-w-fit text-lg md:m-8 md:w-1/2 md:text-2xl">
        <table className="w-full font-extralight">
          <tbody>
            <tr>
              <td className="text-left font-semibold">Tuesday</td>
              <td className="text-right text-sm md:text-xl">
                7:15 PM - 9:30 PM
              </td>
              <td className="pl-8 text-left text-sm md:text-xl">Iaido</td>
            </tr>
            <tr className="border-b-2 border-slate-700">
              <td
                colSpan={2}
                className="text-right align-top text-sm md:text-xl"
              >
                1st Tuesday of the month
              </td>
              <td className="pb-4 pl-8 text-left text-sm md:text-xl">Jodo</td>
            </tr>
            <tr className="border-b-2 border-slate-700">
              <td className="pb-4 pt-4 text-left font-semibold">Thursday</td>
              <td className="text-right text-sm md:text-xl">
                7:15 PM - 9:30 PM
              </td>
              <td className="pl-8 text-left text-sm md:text-xl">Kendo</td>
            </tr>
            <tr>
              <td className="pt-4 text-left font-semibold">Sunday</td>
              <td className="pt-4 text-right text-sm md:text-xl">
                9:15 AM - 10:30 AM
              </td>
              <td className="pl-8 pt-4 text-left text-sm md:text-xl">Iaido</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-right text-sm md:text-xl">
                10:40 AM - 11:10 AM
              </td>
              <td className="pl-8 text-left text-sm md:text-xl">Kendo Kata</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-right text-sm md:text-xl">
                11:15 AM - 12:30 PM
              </td>
              <td className="pl-8 text-left text-sm md:text-xl">Kendo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
