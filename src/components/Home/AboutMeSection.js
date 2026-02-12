import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';

export default function AboutMe() {
  const { about } = portfolioData;

  return (
    <section>
      <div className="card">
        <div className="flex items-center gap-6 flex-col sm:flex-row">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden border-accent border-2">
              <Image
                src={about.image}
                alt={about.imageAlt}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-lg leading-relaxed mb-6 text-left sm:text-justify text-secondary">
              {about.description}
            </p>

            <Link
              href={about.cta.href}
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-200 group"
            >
              <span className="text-base font-medium">{about.cta.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
