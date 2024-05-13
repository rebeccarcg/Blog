import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [blog, setBlog] = useState([
    { id: 1, name: "Blog 1", author: "Jane Doe", content: "Lorem Ipsum" },
    { id: 2, name: "Blog 2", author: "James Doe", content: "Lorem Ipsum"  },
    { id: 3, name: "Blog 3", author: "Jean Doe", content: "Lorem Ipsum" },
  ]);

  return (
    <BlogContext.Provider value={{ blog }}>
      {props.children}
    </BlogContext.Provider>
  );
};
