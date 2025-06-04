import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  image: string;
}

const categories = ["All", "Tech", "Lifestyle"] as const;
type Category = typeof categories[number];

interface HomeProps {
  posts: Post[];
  addNewPost: (post: Omit<Post, 'id'>) => void;
}
const blogs: React.FC<HomeProps> = ({posts,addNewPost}) => {
  const [category, setCategory] = useState<Category>("All");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Getting Started with React",
      content: "Learn the basics of React and how to create your first component.",
      category: "Tech",
      image: "https://source.unsplash.com/random/600x300/?react"
    },
    {
      id: 2,
      title: "Healthy Morning Routine",
      content: "Start your day right with these simple morning habits.",
      category: "Lifestyle",
      image: "https://source.unsplash.com/random/600x300/?morning"
    }
  ]);

  const filteredPosts = category === "All" 
    ? posts 
    : posts.filter(post => post.category === category);

  const closeModal = () => setSelectedPost(null);

  const addNewPost = (newPost: Omit<Post, 'id'>) => {
    setPosts([...posts, { ...newPost, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col items-center justify-start p-4">
      <Link to="/create">
        <button className="fixed top-4 right-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 shadow-lg z-50 text-2xl font-bold">
          +
        </button>
      </Link>
      
      {/* Rest of your Home component */}
      <div className="w-full max-w-screen-xl px-4 md:px-12">
        {/* ... existing content ... */}
      </div>
    </div>
  );
};

export default blogs;