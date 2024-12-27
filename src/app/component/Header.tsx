import LogoIcon from '@/app/component/LogoIcon';
import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="flex gap-4 items-center mx-48 py-16">
        <LogoIcon />
        <span className="font-sen text-28 text-primary font-bold">Mandalart</span>
      </div>
    </header>
  );
}
