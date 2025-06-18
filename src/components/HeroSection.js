import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full min-h-[50vh] flex items-center justify-center px-6 py-20 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-primary">
          I build things to understand them
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light text-secondary">
          Backend-first software developer obsessed with systems, performance optimization, and the fascinating patterns that connect code to history.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/work"
            className="btn-primary px-8 py-4 rounded-lg text-base font-medium"
          >
            See My Projects
          </Link>

          <Link 
            href="/"
            className="btn-secondary px-8 py-4 rounded-lg text-base font-medium"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;