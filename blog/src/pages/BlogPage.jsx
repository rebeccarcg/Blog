import { useContext } from "react";
import PageLayout from "../components/PageLayout";
import { BlogContext } from "../context/BlogContext";

const BlogPage = () => {
  const { blog } = useContext(BlogContext); 

  return (
    <PageLayout title="Blog" headline="Blog Page">
      {blog.map((item) => { 
        return <p key={item.id}>{item.name}</p>; 
      })}
    </PageLayout>
  );
};

export default BlogPage;