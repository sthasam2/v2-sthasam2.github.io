"use client";

import Link from "next/link";
import React, { useMemo } from "react";

import { Button } from "@/components/ui/button";
import { useClientTranslation } from "@/i18n/client";
import { languages } from "@/i18n/settings";
import { cn } from "@/utils/tailwind.utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Icon } from "../ui/icon";

type LanguageSwitcherProps = {
  lng: string;
};

type LanguageIconLabelHref = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lng }) => {
  const { t, i18n } = useClientTranslation(lng, "switcher");
  const currentLang = i18n.language;

  const langIconLabelHref = useMemo(
    () =>
      languages.reduce(
        (acc, lang, index) => {
          acc[lang] = {
            icon: t(`${lang}-icon`),
            label: t(`${lang}-label`),
            href: `/${lang}`,
          };
          return acc;
        },
        {} as Record<string, LanguageIconLabelHref>,
      ),
    [t],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500">
            {langIconLabelHref[currentLang]?.icon ?? (
              <Icon name="Languages" strokeWidth={1} />
            )}
          </span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(langIconLabelHref).map(([lang, value]) => (
          <DropdownMenuItem
            key={lang}
            className={cn(
              lang === currentLang ? "bg-accent/70 font-bold" : "",
            )}
          >
            <Link href={value.href}>
              {value.icon} {value.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
