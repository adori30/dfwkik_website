"use client";

import { useState } from "react";
import Socials from "./socials";
import Link from "next/link";

export default function MobileNavBar({
  className,
  elements,
}: Readonly<{
  className?: string;
  elements: {
    menuTitle: string;
    menuItems: { title: string, slug: string }[];
  }[];
}>) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className={`${className}`}>
      <div
        className={`w-screen bg-slate-300 ${menuOpen ? "visible h-full" : "invisible h-0"} fixed left-0 top-0 flex items-center justify-center transition-all`}
      >
        <Menu elements={elements} onItemClick={() => setMenuOpen(false)} />
      </div>
      <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />
    </div>
  );
}

function Menu({
  elements,
  onItemClick
}: Readonly<{
  elements: {
    menuTitle: string;
    menuItems: { title: string, slug: string }[];
  }[];
  onItemClick: () => void;
}>) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const handleOnItemClick = () => {
    setOpenMenu(null);
    onItemClick();
  }
  return (
    <div className="text-slate-700">
      {elements.map((element) => (
        <MenuSection
          key={element.menuTitle}
          section={element}
          onItemClick={handleOnItemClick}
          onSectionClick={() =>
            openMenu === element.menuTitle
              ? setOpenMenu(null)
              : setOpenMenu(element.menuTitle)
          }
          isOpen={openMenu === element.menuTitle}
        />
      ))}
      <Socials className="mt-8" />
    </div>
  );
}

function MenuSection({
  section,
  isOpen,
  onSectionClick,
  onItemClick,
}: Readonly<{
  section: {
    menuTitle: string;
    menuItems: { title: string; slug: string }[];
  };
  isOpen: boolean;
  onSectionClick: () => void;
  onItemClick: () => void;
}>) {
  const hasChildren = section.menuItems.length > 0;
  const ifOpen = (className: string) => (isOpen ? className : "");

  return (
    <div className="flex flex-col font-extralight">
      <div
        className="flex cursor-pointer flex-row items-center p-2 text-2xl"
        onClick={onSectionClick}
      >
        {section.menuTitle}
        <span
          className={`material-icons transition-all ${!hasChildren && "hidden"} ${ifOpen("rotate-180")}`}
        >
          expand_more
        </span>
      </div>
      {hasChildren && (
        <div
          className={`text-xl transition-all ${isOpen ? "max-h-40" : "invisible max-h-0 text-transparent"}`}
        >
          {section.menuItems.map(({ title, slug }) => (
            <Link key={title} href={`/${slug}`} onClick={onItemClick}>
              <div key={title} className="cursor-pointer p-2">
                {title}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function HamburgerIcon({
  onClick,
  isOpen,
  className,
}: {
  onClick: () => void;
  className?: string;
  isOpen: boolean
}) {
  const handleClick = () => {
    onClick();
  };

  const ifOpen = (className: string) => (isOpen ? className : "");

  return (
    <div className={`${ifOpen("fixed right-0 top-4")} ${className}`}>
      <button className="group relative" onClick={handleClick}>
        <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full transition-all duration-200">
          <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
            <div
              className={`h-[2px] w-7 origin-left transform bg-slate-700 transition-all duration-300 ${ifOpen("translate-x-10")}`}
            ></div>
            <div
              className={`h-[2px] w-7 transform rounded bg-slate-700 transition-all delay-75 duration-300 ${ifOpen("translate-x-10")}`}
            ></div>
            <div
              className={`h-[2px] w-7 origin-left transform bg-slate-700 transition-all delay-150 duration-300 ${ifOpen("translate-x-10")}`}
            ></div>

            <div
              className={`absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 ${ifOpen("w-12")} ${ifOpen("translate-x-0")}`}
            >
              <div
                className={`absolute h-[2px] w-5 rotate-0 transform bg-slate-700 transition-all delay-300 duration-500 ${ifOpen("rotate-45")}`}
              ></div>
              <div
                className={`absolute h-[2px] w-5 -rotate-0 transform bg-slate-700 transition-all delay-300 duration-500 ${ifOpen("-rotate-45")}`}
              ></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
