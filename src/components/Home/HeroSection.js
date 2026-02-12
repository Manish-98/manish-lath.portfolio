import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';

const Hero = () => {
  const { hero } = portfolioData;

  return (
    <section className="w-full min-h-[50vh] flex items-center justify-center px-6 py-20 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-primary">
          {hero.heading}
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light text-secondary">
          {hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {hero.actions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={`${action.variant === 'primary' ? 'btn-primary' : 'btn-secondary'} px-8 py-4 rounded-lg text-base font-medium`}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
