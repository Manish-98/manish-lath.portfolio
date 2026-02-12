import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';

function BlogPostCard({ post }) {
  const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <article id={slug} className="card flex flex-col gap-4 scroll-mt-24">
      <div className="flex flex-col-reverse sm:flex-row gap-2 justify-between items-start sm:items-center">
        <h2 className="text-xl font-semibold text-primary">{post.title}</h2>
        <span className="text-secondary text-sm font-medium">{post.date}</span>
      </div>

      <p className="text-secondary leading-relaxed text-left sm:text-justify">{post.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-accent text-sm">
          <Clock className="w-4 h-4" />
          <span>{post.readTime}</span>
        </div>

        <Link
          href={post.url}
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transform translate-x-2 group-hover:translate-x-0 transition-all duration-200"
        >
          <span className="text-sm font-medium">Read More</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </article>
  );
}

const BlogsPage = () => {
  const { blogsPage, posts } = portfolioData;

  return (
    <section className="max-w-4xl mx-auto p-8 bg-background">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-2">{blogsPage.title}</h1>
        <p className="text-secondary text-lg">{blogsPage.description}</p>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold text-primary">{blogsPage.sectionTitle}</h2>
        <div className="flex flex-col gap-6">
          {posts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
