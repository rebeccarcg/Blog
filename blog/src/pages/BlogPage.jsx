import { useContext } from "react";
import PageLayout from "../components/PageLayout";
import { BlogContext } from "../context/BlogContext";

const BlogPage = () => {
  const { blog } = useContext(BlogContext); // Change Blog to blog

  return (
    <PageLayout title="Blog" headline="Blog Page">
      {blog.map((item) => { // Change products to blog
        return <p key={item.id}>{item.name}</p>; // Change Blog.id to item.id and Blog.name to item.name
      })}
    </PageLayout>
  );
};

export default BlogPage;