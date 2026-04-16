"use client";
import { nav } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = ({ lang }: { lang: string }) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col lg:flex-row items-end lg:items-center font-display text-xs justify-between transition-all duration-400 gap-y-2 gap-x-24">
      {nav.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`uppercase font-bold hover:text-primary ${pathname === item.href ? "text-primary" : ""}`}
        >
          {lang === "es" ? item.name : item.name_en}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
