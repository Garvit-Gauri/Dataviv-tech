import React from 'react';
import { Blog } from '../store/blogSlice';
import Link from 'next/link';

interface BlogCardProps {
  blog: Blog;
  onDelete: (id: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {blog.coverImage && (
        <div className="h-48 w-full rounded-t-lg overflow-hidden">
          <img 
            src={blog.coverImage} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">{blog.category}</span>
          <span className="text-sm text-gray-500">{blog.publishedStatus}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Link href={`/blog/${blog.id}`}>
            <button className="text-blue-600 hover:text-blue-800 font-medium transition">
              Read More
            </button>
          </Link>
          <button 
            className="text-red-600 hover:text-red-800 font-medium transition"
            onClick={() => onDelete(blog.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;