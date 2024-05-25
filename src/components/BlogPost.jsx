import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";

const BlogPost = ({ blogPost }) => {
  const { deleteBlogPost } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div id={blogPost.id} className="blog-post">
      <h2>{blogPost.title}</h2>
      <strong>{blogPost.author}</strong>
      <p>{blogPost.content}</p>
      {currentUser.email == blogPost.author && (
        <button onClick={() => deleteBlogPost(blogPost.id, currentUser.email)}>Remove</button>
      )}
    </div>
  );
};
export default BlogPost;
