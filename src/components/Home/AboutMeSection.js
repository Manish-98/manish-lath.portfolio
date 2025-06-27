import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section>
      <div className="card">
        <div className="flex items-center gap-6 flex-col sm:flex-row">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden border-accent border-2">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <p className="text-lg leading-relaxed mb-6 text-left sm:text-justify text-secondary">
              I&apos;m a systems-minded developer who finds beauty in efficient algorithms and elegant architectures. When not 
              optimizing database queries, I&apos;m probably reading about ancient civilizations or tinkering with distributed systems.
            </p>
            
            {/* Read More Link */}
            <button className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-200 group">
              <span className="text-base font-medium">Read More About Me</span>
              {/* TODO: Add a link to the about me page */}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}