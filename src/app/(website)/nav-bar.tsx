import { getCollections, getDocumentSlugs, load } from "outstatic/server";
import NavBarDesktop from "./nav-bar-desktop";
import Image from "next/image";
import MobileNavBar from "./nav-bar-mobile";
import Link from 'next/link'

export default async function NavBar({
  className,
}: Readonly<{ className?: string }>) {
  const navBarElements = await buildNavBarElements();
  return (
    <div
      className={`absolute z-30 flex right-0 left-0 flex-row items-center justify-between bg-slate-300 bg-opacity-80 pb-4 pt-4 text-slate-700 md:p-0 ${className}`}
    >
      <SiteTitle />
      <div className={`right-0 z-20 hidden text-center text-slate-700 md:flex`}>
        <NavBarDesktop elements={navBarElements} className="text-slate-700" />
      </div>
      <div className="md:hidden">
        <MobileNavBar elements={navBarElements} />
      </div>
    </div>
  );
}

function SiteTitle() {
  return (
    <Link href={"/"}>
      <div className="flex flex-row items-center md:left-8 md:top-8">
        <Image
          src={"/logo_color.png"}
          width={30}
          height={30}
          alt="logo"
          className="ml-4 mr-2"
        />
        <div className="font-sans font-medium md:text-2xl md:font-extralight">
          Dallas/Fort Worth Kendo & Iaido Kyokai
        </div>
      </div>
    </Link>
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
