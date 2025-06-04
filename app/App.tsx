import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/blogs';
import CreatePost from '../components/CreatePost';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  image: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addNewPost = (newPost: Omit<Post, 'id'>) => {
    setPosts([...posts, { ...newPost, id: Date.now() }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home posts={posts} addNewPost={addNewPost} />} />
        <Route path="/create" element={<CreatePost addNewPost={addNewPost} />} />
      </Routes>
    </Router>
  );
};

export default App;