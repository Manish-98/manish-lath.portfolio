import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { Home, Briefcase, Book } from 'lucide-react';

// Navigation configuration
const navigationItems = [
  { href: '/', label: 'Home', icon: <Home size={20} /> },
  { href: '/experience', label: 'Experience', icon: <Briefcase size={20} /> },
  { href: '/work', label: 'Work', icon: <Book size={20} /> }
];

// Navigation Link Component
const NavLink = ({ href, icon, label }) => (
  <Link 
    href={href} 
    className="text-base font-bold transition-colors hover:opacity-80 text-text-primary"
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
  return (
    <header 
      className="w-full px-6 py-4 border-b bg-background border-border"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center space-x-2 gap-1">
          <Image src="/avatar-thumbnail.png" alt="Logo" width={32} height={32} className="object-contain" />
          <h1 
            className="text-lg font-medium tracking-wide hidden sm:block text-accent-secondary"
          >
            Manish Lath
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          {navigationItems.map((item) => (
            <NavLink key={item.href} href={item.href} icon={item.icon} label={item.label} />
          ))}
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;