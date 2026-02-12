import BlogsClient from './BlogsClient';
import { portfolioData } from '@/data/portfolio';

const BlogsPage = () => {
  const { blogsPage, posts } = portfolioData;

  return (
    <section className="max-w-4xl mx-auto p-8 bg-background">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-2">{blogsPage.title}</h1>
        <p className="text-secondary text-lg">{blogsPage.description}</p>
      </div>

      <BlogsClient
        posts={posts}
        searchConfig={blogsPage.search}
        sectionTitle={blogsPage.sectionTitle}
      />
    </section>
  );
};

export default BlogsPage;
