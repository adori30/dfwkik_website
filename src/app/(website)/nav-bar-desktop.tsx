"use client";

import Link from "next/link";
import { useState } from "react";

const timeoutLength = 300;

export default function NavBarDesktop({
  elements,
  className,
}: Readonly<{
  elements: {
    menuTitle: string;
    menuItems: { title: string; slug: string }[];
  }[];
  className?: string;
}>) {
  return (
    <div className={`flex flex-row ${className}`}>
      {elements.map(({ menuTitle, menuItems }) => {
        return (
          <div
            key={menuTitle}
            className={`
            group
            relative
            flex
            w-28
            cursor-pointer
            items-center
            justify-center
            p-4
            last:border-r-0
            hover:bg-slate-700
            hover:bg-opacity-10
             `}
          >
            {menuTitle}
            {menuItems.length > 0 ? (
              <div className="invisible absolute left-0 top-10 z-20 flex  pt-8 transition-all group-hover:visible group-hover:top-12">
                <div
                  className={`w-28 flex-col rounded bg-slate-300 text-slate-900 shadow-lg`}
                >
                  {menuItems.map(({ title, slug }) => (
                    <Link key={slug} href={`/${slug}`}>
                      <div
                        className="p-2 first:rounded-t last:rounded-b hover:bg-slate-700 hover:bg-opacity-10"
                      >
                        {title}
                      </div>
                    </Link>
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
