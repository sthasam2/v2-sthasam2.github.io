import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LanguageSwitcher } from "./languageSwitcher";
import { ThemeSwitcher } from "./themeSwitcher";

import { SITE_DATA } from "@/data/siteMetadata";

type NavbarProps = {
  lng: string;
};

const Navbar: React.FC<NavbarProps> = ({ lng }) => {
  return (
    <nav className="sticky top-0 z-40 flex flex-row w-full col-start-1 row-start-1 py-3 space-x-2 overflow-x-hidden border-b justify-evenly h-fit backdrop-blur">
      <section id="branding">
        <Avatar>
          {SITE_DATA.avatar ? (
            <AvatarImage src={SITE_DATA.avatar} alt="logo" />
          ) : (
            <AvatarFallback>{SITE_DATA.titleInitials}</AvatarFallback>
          )}
        </Avatar>
      </section>
      <section id="links"></section>
      <section
        id="actions"
        className="flex flex-row justify-end w-full space-x-2"
      >
        <ThemeSwitcher />
        <LanguageSwitcher lng={lng} />
      </section>
    </nav>
  );
};

export { Navbar };
