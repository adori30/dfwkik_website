import { getCollections, getDocumentSlugs, load } from "outstatic/server";
import NavBarClient from "./nav-bar-client";
import Image from "next/image";
import MobileNavBar from "./mobile-nav-bar";

export default async function NavBar({
  className,
}: Readonly<{ className?: string }>) {
  const navBarElements = await buildNavBarElements();
  return (
    <div className={`flex bg-sky-800 pt-4 pb-4 md:p-0 z-30 relative flex-row justify-between items-center ${className}`}>
      <SiteTitle />
      <div
        className={`right-0 z-20 hidden text-center text-slate-700 md:flex`}
      >
        <NavBarClient elements={navBarElements} className="" />
      </div>
      <div className="md:hidden">
        <MobileNavBar elements={navBarElements} />
      </div>
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
