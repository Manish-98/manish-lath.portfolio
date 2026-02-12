import React from 'react';
import Link from 'next/link';
import { getIcon, portfolioData } from '@/data/portfolio';

const SocialIcon = ({ href, ariaLabel, icon: Icon }) => (
  <Link
    href={href}
    className="p-2 md:p-3 rounded-lg bg-section text-secondary transition-all duration-200 hover:bg-accent hover:text-primary hover:scale-105"
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={20} />
  </Link>
);

const Footer = () => {
  const { footer, site } = portfolioData;

  return (
    <footer
      className="w-full px-6 py-6 border-t bg-background border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            <blockquote
              className="text-sm md:text-base italic font-light mb-4 text-primary"
            >
              {footer.quote}
            </blockquote>
            <p
              className="text-sm md:text-base text-secondary"
            >
              {footer.tagline}
            </p>
          </div>

          <div className="flex flex-col ml-8 gap-1 sm:gap-2 sm:flex-row">
            {footer.socialLinks.map((link) => (
              <SocialIcon key={link.ariaLabel} href={link.href} ariaLabel={link.ariaLabel} icon={getIcon(link.icon)} />
            ))}
          </div>
        </div>
        <hr className="my-4 border-t-2 border-border" />

        <div className="text-center">
          <p
            className="text-sm text-secondary"
          >
            {site.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
