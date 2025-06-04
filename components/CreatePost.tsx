import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CreatePostProps {
  addNewPost: (post: Omit<Post, 'id'>) => void;
}

interface Post {
  title: string;
  content: string;
  category: string;
  image: string;
}

const categories = ["Tech", "Lifestyle"] as const;
type Category = typeof categories[number];

const CreatePost: React.FC<CreatePostProps> = ({ addNewPost }) => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.title.value || !form.content.value || !form.category.value || !imagePreview) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    const newPost = {
      title: form.title.value,
      content: form.content.value,
      category: form.category.value as Category,
      image: imagePreview
    };

    addNewPost(newPost);
    setSuccessMessage("Blog post created successfully!");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex justify-center items-center px-4 relative">
      {/* ... rest of your CreatePost component ... */}
    </div>
  );
};

export default CreatePost;