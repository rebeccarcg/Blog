import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [blog, setBlog] = useState([
    {
      id: 1,
      title: "Blog 1",
      author: "Jane.Doe@example.com",
      content: "Lorem Ipsum",
    },
    {
      id: 2,
      title: "Blog 2",
      author: "James.Doe@example.com",
      content: "Lorem Ipsum",
    },
    {
      id: 3,
      title: "Blog 3",
      author: "Jean.Doe@example.com",
      content: "Lorem Ipsum",
    },
  ]);

  const addBlogPost = (newPost) => {
    setBlog([...blog, newPost]);
  };

  const editBlogPost = (postId, newData) => {
    setBlog((prevBlog) =>
      prevBlog.map((post) =>
        post.id === postId && post.author === newData.author
          ? { ...post, ...newData }
          : post
      )
    );
  };

  const deleteBlogPost = (postId, author) => {
    setBlog((prevBlog) =>
      prevBlog.filter((post) => post.id !== postId || post.author !== author)
    );
  };

  const userBlogs = (author) => {
    return blog.filter((post) => post.author === author);
  };

  return (
    <BlogContext.Provider
      value={{ blog, addBlogPost, editBlogPost, deleteBlogPost, userBlogs }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
