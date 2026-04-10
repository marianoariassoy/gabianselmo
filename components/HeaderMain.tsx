"use client";
import { usePathname } from "next/navigation";
import HeaderHome from "./HeaderHome";
import Header from "./Header";

const HeaderMain = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return <HeaderHome />;
  } else {
    return <Header />;
  }
};

export default HeaderMain;
