import { getCollections, getDocumentSlugs, load } from "outstatic/server";
import NavBarClient from "./nav-bar-client";
import Image from "next/image";

export default async function NavBar({
  className,
}: Readonly<{ className?: string }>) {
  const navBarElements = await buildNavBarElements();
  return (
    <div className={`flex bg-sky-800 z-30 relative flex-row justify-between items-center ${className}`}>
      <SiteTitle />
      <div
        className={`right-0 z-20 hidden text-center text-slate-700 md:flex`}
      >
        <NavBarClient elements={navBarElements} className="" />
      </div>
      {/* <div className="visible md:invisible">
        <HamburgerIcon />
      </div> */}
    </div>
  );
}

function SiteTitle() {
  return (
    <div className="flex flex-row items-center md:left-8 md:top-8">
      <Image
        src={"/logo_color.png"}
        width={30}
        height={30}
        alt="logo"
        className="mr-2 ml-4"
      />
      <div className="font-sans font-extralight md:text-2xl">
        Dallas/Fort Worth Kendo & Iaido Kyokai
      </div>
    </div>
  );
}

function HamburgerIcon() {
  return (
    <div>
      <button className="group relative">
        <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-slate-700 shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 group-focus:ring-4">
          <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
            <div className="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 group-focus:translate-x-10"></div>
            <div className="h-[2px] w-7 transform rounded bg-white transition-all delay-75 duration-300 group-focus:translate-x-10"></div>
            <div className="h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300 group-focus:translate-x-10"></div>

            <div className="absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-focus:w-12 group-focus:translate-x-0">
              <div className="absolute h-[2px] w-5 rotate-0 transform bg-white transition-all delay-300 duration-500 group-focus:rotate-45"></div>
              <div className="absolute h-[2px] w-5 -rotate-0 transform bg-white transition-all delay-300 duration-500 group-focus:-rotate-45"></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

async function buildNavBarElements() {
  const collections = getCollections();
  const menus = getDocumentSlugs("menus");
  const db = await load();

  return await Promise.all(
    menus.map(async (menu) => {
      const allCollectionsQuery = collections.map((collection) => ({
        collection,
      }));
      const items = await db
        .find(
          {
            $or: allCollectionsQuery,
            $and: [{ inMenu: menu }],
          },
          ["title"],
        )
        .toArray();
      const menuCapitalized = menu.charAt(0).toUpperCase() + menu.slice(1);
      return { menuTitle: menuCapitalized, menuItems: items };
    }),
  );
}
