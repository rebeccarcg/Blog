import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [blog, setBlog] = useState([
    {
      id: 1,
      title: "Blog 1",
      author: "Jane Doe",
      authorId: 1,
      content: "Lorem Ipsum",
    },
    {
      id: 2,
      title: "Blog 2",
      author: "James Doe",
      authorId: 2,
      content: "Lorem Ipsum",
    },
    {
      id: 3,
      title: "Blog 3",
      author: "Jean Doe",
      authorId: 1,
      content: "Lorem Ipsum",
    },
  ]);

  const addBlogPost = (newPost) => {
    setBlog([...blog, newPost]);
  };

  const editBlogPost = (postId, newData) => {
    setBlog((prevBlog) =>
      prevBlog.map((post) =>
        post.id === postId && post.authorId === newData.authorId
          ? { ...post, ...newData }
          : post
      )
    );
  };

  const deleteBlogPost = (postId, userId) => {
    setBlog((prevBlog) =>
      prevBlog.filter((post) => post.id !== postId || post.authorId !== userId)
    );
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
