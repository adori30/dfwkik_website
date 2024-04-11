import { getCollections, getDocumentSlugs, load } from "outstatic/server";
import NavBarClient from "./nav-bar-client";

export default async function NavBar({
  className,
}: Readonly<{ className?: string }>) {
  const navBarElements = await buildNavBarElements();
  return (
    <div
      className={`z-20 flex justify-center text-center text-slate-700 ${className}`}
    >
      <div className="flex w-fit flex-row">
        <NavBarClient elements={navBarElements} />
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
