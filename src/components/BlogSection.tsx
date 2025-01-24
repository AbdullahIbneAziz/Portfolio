import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogSectionProps {
  isDarkMode: boolean;
}

const blogs = [
  {
    title: "Introduction to Neural Networks",
    excerpt: "A beginner-friendly guide to understanding neural networks and their applications in machine learning.",
    date: "March 15, 2024",
    readTime: "5 min read",
    link: "#"
  },
  {
    title: "Data Preprocessing Techniques",
    excerpt: "Essential techniques for preparing your data for machine learning models.",
    date: "March 10, 2024",
    readTime: "7 min read",
    link: "#"
  },
  {
    title: "Machine Learning in Production",
    excerpt: "Best practices for deploying and maintaining machine learning models in production environments.",
    date: "March 5, 2024",
    readTime: "8 min read",
    link: "#"
  }
];

const BlogSection: React.FC<BlogSectionProps> = ({ isDarkMode }) => {
  return (
    <div id="blog" className={`py-20 md:py-32 scroll-mt-20 ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-50'}`}>
      <div className="container px-4 mx-auto">
        <div className="mb-4 tracking-wider text-red-500 text-center md:text-left">INSIGHTS</div>
        <h2 className={`mb-16 text-4xl md:text-5xl font-bold text-center md:text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Latest Articles
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <article 
              key={index}
              className={`p-6 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-zinc-900 hover:bg-zinc-800' 
                  : 'bg-white hover:bg-gray-50 shadow-lg'
              }`}
            >
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
              <h3 className={`mb-3 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {blog.title}
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {blog.excerpt}
              </p>
              <a
                href={blog.link}
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors duration-300"
              >
                Read More <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;