import { ArrowRight, Clock } from "lucide-react";

// Post Card Component
function PostCard({ post }) {
  return (
    <article className="bg-section rounded-2xl border border-border p-8 hover:border-accent-primary transition-colors duration-200 cursor-pointer group flex flex-col gap-4">
        {/* add post header - title and date */}
        <div className="flex flex-col-reverse sm:flex-row gap-2 justify-between items-start sm:items-center">
          <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
            {post.title}
          </h3>
          <span className="text-text-secondary text-sm font-medium">
            {post.date}
          </span>
        </div>

        {/* Post Content */}
        <p className="text-text-secondary leading-relaxed text-left sm:text-justify">
          {post.description}
        </p>


      {/* Read Time and Read More */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-accent-primary text-sm">
          <Clock className="w-4 h-4" />
          <span>{post.readTime}</span>
        </div>

        {/* Read More Button */}
        <button className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-hover transform translate-x-2 group-hover:translate-x-0 transition-all duration-200">
          <span className="text-sm font-medium">Read More</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </article>
  );
}

export default function LatestWriting() {
  const posts = [
    {
      title: "Database Indexing Strategies: Lessons from Ancient Libraries",
      description: "Exploring how ancient cataloging systems inform modern database optimization. From Alexandria's scrolls to B-tree indexes...",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      url: "#"
    },
    {
      title: "Microservices Communication: Byzantine Fault Tolerance",
      description: "How Byzantine generals' coordination problems mirror distributed system challenges. Practical consensus algorithms for reliable service communication...",
      readTime: "8 min read",
      date: "Nov 28, 2024",
      url: "#"
    }
  ];

  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-text-primary">Latest Writing</h2>
        <button className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-hover transition-colors duration-200 group">
          <span className="text-base font-medium">Read All</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Posts List */}
      <div className="flex flex-col gap-6">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
}