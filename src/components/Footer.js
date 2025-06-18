import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com',
    ariaLabel: 'GitHub',
    icon: <Github size={20} />,
  },
  {
    href: 'https://linkedin.com',
    ariaLabel: 'LinkedIn',
    icon: <Linkedin size={20} />,
  },
  {
    href: 'mailto:your@email.com',
    ariaLabel: 'Email',
    icon: <Mail size={20} />,
  },
];

const SocialIcon = ({ href, ariaLabel, children }) => (
  <Link
    href={href}
    className="p-2 md:p-3 rounded-lg bg-[#18191c] text-[#a0a0a0] transition-all duration-200 hover:bg-[#5e7ba5] hover:text-[#eaeaea] hover:scale-105"
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer 
      className="w-full px-6 py-6 border-t bg-background border-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Quote, Tagline and Social Icons Section */}
        <div className="flex items-center justify-between mb-8">
          {/* Quote and Tagline */}
          <div className="flex-1">
            <blockquote 
              className="text-sm md:text-base italic font-light mb-4 text-text-primary"
            >
              "The best way to understand a system is to try to change it." — Kurt Lewin
            </blockquote>
            <p 
              className="text-sm md:text-base text-text-secondary"
            >
              Always building, always learning.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col ml-8 gap-1 sm:gap-2 sm:flex-row">
            {socialLinks.map((link) => (
              <SocialIcon key={link.ariaLabel} href={link.href} ariaLabel={link.ariaLabel}>
                {link.icon}
              </SocialIcon>
            ))}
          </div>
        </div>
        <hr className="my-4 border-t-2 border-border" />

        {/* Copyright */}
        <div className="text-center">
          <p 
            className="text-sm text-text-secondary"
          >
            © 2025 Manish Lath. Crafted with systems thinking and historical curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;