import LogoIcon from "@/app/component/LogoIcon";
import React from "react";

export default function Header() {
  return (
    <header className="fixed mx-48 w-full bg-background py-16">
      <div className="flex w-fit items-center gap-4">
        <LogoIcon />
        <span className="font-sen text-28 font-bold text-primary">
          Mandalart
        </span>
      </div>
    </header>
  );
}
