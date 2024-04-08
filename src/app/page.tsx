import Image from "next/image";
import { ReactNode } from "react";

export default function HomePage() {
  return (
    // <div className="flex min-h- bg-cover bg-center bg-[url('../../public/kamae.jpg')] items-center justify-center">hello there</div>
    <TextureBackground>
      <div className="flex flex-col ">
        <Header />
        <div className="bg-slate-300 p-12 text-center text-4xl font-thin text-gray-950">
          Our disciplines
        </div>
        <Disciplines />
        <div className="p-12 text-center text-4xl font-thin">
          Where to find us
        </div>
        <WhereToFindUs />
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

function WhereToFindUs() {
  return (
    <div className="flex min-h-96 flex-col md:flex-row">
      <div>You can find us here</div>
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
      className="relative m-4 flex-1 cursor-pointer bg-cover bg-center text-5xl  transition-all hover:pb-28"
      style={{ backgroundImage: `url('/${backgroundImg}')` }}
    >
      <div className="absolute z-10 flex h-full w-full flex-col content-center items-center justify-center text-center transition-all hover:bg-black hover:bg-opacity-50 hover:pb-28">
        {name}
        <div className="absolute mt-28 flex h-full w-full items-center justify-center text-xl opacity-0 transition-all hover:opacity-100">
          {description}
        </div>
      </div>
    </div>
  );
}

function HeaderButton({ children, className }: Readonly<{ children: ReactNode, className?: string | undefined }>) {
  return (
    <div className={`cursor-pointer border bg-slate-700 p-3 text-xl font-light uppercase transition-all hover:bg-slate-300 hover:text-slate-700 ${className}`}>
      {children}
    </div>
  );
}

function Header() {
  return (
    <header>
      {/* <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3 ">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold text-gray-700">
                <a
                  href="#"
                  className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl"
                >
                  Dallas/Forth Worth Kendo & Iaido Kyokai
                </a>
              </div>

              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fill-rule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="hidden -mx-4 md:flex md:items-center">
              <a
                href="#"
                className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
              >
                Web developers
              </a>
              <a
                href="#"
                className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
              >
                Web Designers
              </a>
              <a
                href="#"
                className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
              >
                UI/UX Designers
              </a>
              <a
                href="#"
                className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="relative flex h-96 items-center justify-center ">
        {/* <div className="pattern-cross pattern-indigo-500 pattern-bg-white pattern-size-8 pattern-opacity-10 absolute h-full w-full"></div> */}
        <Image
          src={"/kamae_clipped.png"}
          width={1500}
          height={500}
          alt="picture of a kendoka"
          style={{
            objectFit: "none",
            position: "absolute",
            top: -300,
            right: 0,
          }}
        />
        <div className="container absolute left-8 top-8 flex flex-row items-center">
          <Image
            src={"/logo_color.png"}
            width={30}
            height={30}
            alt="logo"
            className="mr-2"
          />
          <div className="font-sans text-2xl font-extralight">
            Dallas/Fort Worth Kendo & Iaido Kyokai
          </div>
        </div>

        <div className="relative z-10 mr-28 flex flex-col items-center">
          <div className="text-3xl font-light">
            Learn the arts of Japanese swordsmanship at the oldest dojo in DFW
          </div>
          <div className="text-xl font-thin">Established 1976</div>
          <HeaderButton className="mt-4">Join us now</HeaderButton>
        </div>
      </div>

      {/* <div className="w-full bg-right bg-cover bg-no-repeat bg-[url('../../public/kamae_clipped.png')] h-96 pr-48">
        <div className="flex items-center justify-center h-full w-full">
          <div className="text-center">
            <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
              Dallas/Fort Worth Kendo & Iaido Kyokai
            </h1>
          </div>
        </div>
      </div> */}
    </header>
  );
}
