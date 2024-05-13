import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { UserContext } from "../context/UserContext";

const BlogPost = ({ blogPost }) => {
  const { deleteBlogPost } = useContext(BlogContext);
  const { userName } = useContext(UserContext);

  return (
    <div id={blogPost.id} className="blog-post">
      <h2>{blogPost.title}</h2>
      <strong>{blogPost.author}</strong>
      <p>{blogPost.content}</p>
      {userName == blogPost.author && (
        <button onClick={() => deleteBlogPost(blogPost.id)}>Remove</button>
      )}
    </div>
  );
};
export default BlogPost;
