'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { getIcon, portfolioData } from '@/data/portfolio';

const NavLink = ({ href, icon: Icon, label, isActive }) => (
  <Link
    href={href}
    className={`text-base font-bold transition-colors ${
      isActive
        ? 'text-accent'
        : 'text-primary hover:text-accent'
    }`}
    title={label}
  >
    <div className="block sm:hidden">
      <Icon size={20} color="var(--accent)" />
    </div>
    <div className="hidden sm:block">{label}</div>
  </Link>
);

const Header = () => {
  const pathname = usePathname();
  const { navigation, site } = portfolioData;

  return (
    <header
      className="w-full px-6 py-4 border-b bg-background border-border shadow-sm shadow-accent/80 z-10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center space-x-2 gap-1">
          <Image src={site.avatar} alt="Logo" width={32} height={32} className="object-contain" />
          <h1 className="text-lg font-bold tracking-wide hidden sm:block text-primary">
            {site.name}
          </h1>
        </div>

        <nav className="flex items-center space-x-8">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              icon={getIcon(item.icon)}
              label={item.label}
              isActive={pathname === item.href}
            />
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
