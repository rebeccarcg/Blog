import { useContext } from "react";
import PageLayout from "../components/PageLayout";
import { BlogContext } from "../context/BlogContext";
import AddBlogPostForm from "../components/AddBlogPostForm";
import "./BlogPage.css";
import BlogPost from "../components/BlogPost";

const BlogPage = () => {
  const { blog, editBlogPost } = useContext(BlogContext);

  return (
    <PageLayout title="Blog" headline="Blog Page">
      <AddBlogPostForm />

      {blog.map((item) => (
        <BlogPost key={item.id} blogPost={item} onEdit={editBlogPost} />
      ))}

      
    </PageLayout>
  );
};

export default BlogPage;
