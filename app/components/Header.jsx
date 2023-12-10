'use client'
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from 'next/navigation'

const Header = () => {


  return (
    <header className="flex h-24 w-full items-center justify-center gap-5 border-b border-b-slate-700 p-5">
      <AnchorTag href="/">Home</AnchorTag>
      <AnchorTag href="/calenderPage">Calender</AnchorTag>
    </header>
  );
};

export default Header;

const AnchorTag = ({ children, href }) => {
    const pathname = usePathname()

  return (
    <Link
      href={href}
      className={twMerge(
        "text-white underline-offset-4 hover:text-sky-500 hover:underline",
        (pathname === href) && "pointer-events-none text-sky-400",
      )}
    >
      {children}
    </Link>
  );
};
