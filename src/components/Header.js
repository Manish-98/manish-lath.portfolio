'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { Home, Briefcase, Book } from 'lucide-react';

// Navigation configuration
const navigationItems = [
  { href: '/', label: 'Home', icon: <Home size={20} color='var(--accent)'/> },
  { href: '/experience', label: 'Experience', icon: <Briefcase size={20} color='var(--accent)' /> },
  { href: '/work', label: 'Work', icon: <Book size={20} color='var(--accent)' /> }
];

// Navigation Link Component
const NavLink = ({ href, icon, label, isActive }) => (
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
      {icon}
    </div>
    <div className="hidden sm:block">
      {label}
    </div>
  </Link>
);

const Header = () => {
  const pathname = usePathname();

  return (
    <header 
      className="w-full px-6 py-4 border-b bg-background border-border shadow-sm shadow-accent/80 z-10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center space-x-2 gap-1">
          <Image src="/avatar-thumbnail.png" alt="Logo" width={32} height={32} className="object-contain" />
          <h1 
            className="text-lg font-bold tracking-wide hidden sm:block text-primary"
          >
            Manish Lath
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          {navigationItems.map((item) => (
            <NavLink 
              key={item.href} 
              href={item.href} 
              icon={item.icon} 
              label={item.label}
              isActive={pathname === item.href}
            />
          ))}
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;