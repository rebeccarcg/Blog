import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [blog, setBlog] = useState([
    { id: 1, title: "Blog 1", author: "Jane Doe", content: "Lorem Ipsum" },
    { id: 2, title: "Blog 2", author: "James Doe", content: "Lorem Ipsum" },
    { id: 3, title: "Blog 3", author: "Jean Doe", content: "Lorem Ipsum" },
  ]);

  const addBlogPost = (newPost) => {
    setBlog([...blog, newPost]); // Assuming newPost is an object with title, content, and author properties
  };

  const editBlogPost = (postId, newData) => {
    setBlog((prevBlog) =>
      prevBlog.map((post) =>
        post.id === postId ? { ...post, ...newData } : post
      )
    );
  };

  const deleteBlogPost = (postId) => {
    setBlog((prevBlog) => prevBlog.filter((post) => post.id !== postId));
  };

  const userBlogs = (userId) => {
    return blog.filter((post) => post.authorId === userId);
  };

  return (
    <BlogContext.Provider
      value={{ blog, addBlogPost, editBlogPost, deleteBlogPost, userBlogs }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
