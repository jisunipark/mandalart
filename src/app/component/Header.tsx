import LogoIcon from "@/app/component/LogoIcon";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="mx-48 flex items-center gap-4 py-16">
        <LogoIcon />
        <span className="font-sen text-28 font-bold text-primary">
          Mandalart
        </span>
      </div>
    </header>
  );
}
