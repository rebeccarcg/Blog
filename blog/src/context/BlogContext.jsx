import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [blog, setBlog] = useState([
    { id: 1, name: "Blog 1" },
    { id: 2, name: "Blog 2" },
    { id: 3, name: "Blog 3" },
  ]);

  return (
    <BlogContext.Provider value={{ blog }}>
      {props.children}
    </BlogContext.Provider>
  );
};
