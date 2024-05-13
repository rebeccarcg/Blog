import { useContext } from "react";
import PageLayout from "../components/PageLayout";
import { BlogContext } from "../context/BlogContext";
import "./BlogPage.css";

const BlogPage = () => {
  const { blog } = useContext(BlogContext);

  return (
    <PageLayout title="Blog" headline="Blog Page">
      {blog.map((item) => {
        return (
          <div id={item.id} className="blog-post">
            <h2>{item.name}</h2>
            <strong>{item.author}</strong>
            <p>{item.content}</p>
          </div>
        );
      })}
    </PageLayout>
  );
};

export default BlogPage;
