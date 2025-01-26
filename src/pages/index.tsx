// pages/index.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import BlogCard from '../components/BlogCard';
import { deleteBlog } from '../store/blogSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state: RootState) => state.blog.blogs);

  const handleDelete = (id: string) => {
    dispatch(deleteBlog(id));
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Blog Posts</h1>
        <p className="text-gray-600">Manage and organize your blog content</p>
      </div>
      
      {blogs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-600">No blog posts yet. Start creating your first post!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;