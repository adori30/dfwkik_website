"use client";

import { useState } from "react";

const timeoutLength = 300;

export default function NavBarClient({
  elements,
  className,
}: Readonly<{
  elements: {
    menuTitle: string;
    menuItems: { title: string }[];
  }[];
  className?: string;
}>) {
  const [openMenu, setOpenMenu] = useState<string | undefined>();

  return (
    <div className={`flex flex-row text-slate-100 ${className}`}>
      {elements.map(({ menuTitle, menuItems }) => {
        return (
          <div
            key={menuTitle}
            className={`
            hover:bg-dfwkikYellow
            border-r-dfwkikYellow
            group
            relative
            flex
            w-28
            cursor-pointer
            items-center
            justify-center
            border-r-2
            p-4
            last:border-r-0
            hover:text-slate-700 
             `}
          >
            {menuTitle}
            {menuItems.length > 0 ? (
              <div className="invisible absolute left-0 top-10 z-20 flex  pt-8 transition-all group-hover:visible group-hover:top-12">
                <div
                  className={`w-28 rounded shadow-lg flex-col bg-sky-800 text-slate-100`}
                >
                  {[
                    ...menuItems,
                    { title: "foo" },
                    { title: "bar" },
                    { title: "baz" },
                  ].map(({ title }) => (
                    <div
                      key="document"
                      className="hover:bg-dfwkikYellow cursor-pointer p-2 hover:text-slate-700 first:rounded-t last:rounded-b"
                    >
                      {title}
                    </div>
                  ))}
                </div>
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
