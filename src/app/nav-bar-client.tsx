"use client";

import { useState } from "react";

const timeoutLength = 300;

export default function NavBarClient({
  elements,
}: Readonly<{
  elements: {
    menuTitle: string;
    menuItems: { title: string }[];
  }[];
}>) {
  const [openMenu, setOpenMenu] = useState<string | undefined>();

  return (
    <div className="flex flex-row text-slate-100">
      {elements.map(({ menuTitle, menuItems }) => {
        return (
          <div
            key={menuTitle}
            className={`
            bg-dfwkikBlue
            hover:bg-dfwkikYellow
            cursor-pointer
            first:rounded-tl-lg
            first:rounded-bl-lg
            last:rounded-tr-lg
            last:rounded-br-lg
            hover:first:rounded-bl-none
            hover:last:rounded-br-none
            border-r-2
            border-r-dfwkikYellow
            last:border-r-0
            group
            relative
            h-12
            flex
            justify-center
            w-28
            items-center
            hover:text-slate-700 
             `}
          >
            {menuTitle}
            {menuItems.length > 0 ? (
              <div
                className={`
              invisible
              bg-dfwkikBlue 
              absolute
              left-0
              top-10 
              z-20 
              flex
              w-28 
              flex-col 
              text-slate-100 
              transition-all
              group-hover:visible 
              group-hover:top-12`}
              >
                {[
                  ...menuItems,
                  { title: "foo" },
                  { title: "bar" },
                  { title: "baz" },
                ].map(({ title }) => (
                  <div
                    key="document"
                    className="cursor-pointer hover:bg-dfwkikYellow hover:text-slate-700 p-2"
                  >
                    {title}
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
