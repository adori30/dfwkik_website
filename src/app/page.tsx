import Image from "next/image";
import Link from "next/link";
import WhereToFindUs from "./where-to-find-us";
import { ReactNode } from "react";

export default function HomePage() {
  return (
    // <div className="flex min-h- bg-cover bg-center bg-[url('../../public/kamae.jpg')] items-center justify-center">hello there</div>
    <TextureBackground>
      <HeaderPicture />
      <div className="flex flex-col ">
        <Header />
        <div className="bg-slate-300 p-12 text-center md:text-4xl text-2xl font-thin text-gray-950">
          Our disciplines
        </div>
        <Disciplines />
        <div className="p-12 text-center md:text-4xl text-2xl font-thin">
          Where to find us
        </div>
        <WhereToFindUs />
      </div>
    </TextureBackground>
  );
}

function TextureBackground({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="pattern-cross pattern-slate-600 pattern-bg-slate-700 pattern-size-8 pattern-opacity-100 bg-slate-700 h-full">
      {children}
    </div>
  );
}

function HeaderPicture() {
  return (
    <div className="absolute md:w-[82rem] md:h-[60rem] right-0 z-0 md:-top-60 w-full h-96">
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
    <div className="flex h-96 items-center justify-center ">
      <div className="container absolute left-8 top-8 flex flex-row items-center">
        <Image
          src={"/logo_color.png"}
          width={30}
          height={30}
          alt="logo"
          className="mr-2"
        />
        <div className="font-sans md:text-2xl font-extralight">
          Dallas/Fort Worth Kendo & Iaido Kyokai
        </div>
      </div>

      <div className="relative z-10 md:mr-28 flex flex-col items-center">
        <div className="md:text-3xl font-light p-4 text-xl">
          Learn the arts of Japanese swordsmanship at the oldest dojo in DFW
        </div>
        <div className="md:text-xl font-thin">Established 1976</div>
        <HeaderButton className="mt-4">
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
      className="relative m-4 md:flex-1 h-72 cursor-pointer bg-cover bg-center text-5xl  transition-all md:hover:pb-28"
      style={{ backgroundImage: `url('/${backgroundImg}')` }}
    >
      <div className="absolute z-10 flex h-full w-full flex-col content-center items-center justify-center text-center transition-all md:hover:bg-black md:hover:bg-opacity-50 md:hover:pb-28">
        {name}
        <div className="absolute mt-28 flex h-full w-full items-center justify-center text-xl md:opacity-0 transition-all md:hover:opacity-100 opacity-100">
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