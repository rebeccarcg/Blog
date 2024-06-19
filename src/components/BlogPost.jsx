import { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";
import "./BlogPost.css"; // Import your CSS file here

const BlogPost = ({ blogPost, onEdit }) => {
  const { deleteBlogPost } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newData, setNewData] = useState({ title: blogPost.title, content: blogPost.content });

  const handleEdit = () => {
    onEdit(blogPost.id, { ...newData, author: blogPost.author });
    setIsEditing(false);
  };

  return (
    <div id={blogPost.id} className="blog-post">
      {isEditing ? (
        <div className="edit-form"> {/* Apply 'edit-form' class */}
          <input
            type="text"
            value={newData.title}
            onChange={(e) => setNewData({ ...newData, title: e.target.value })}
            className="input" // Apply 'input' class for consistent styling
          />
          <textarea
            value={newData.content}
            onChange={(e) => setNewData({ ...newData, content: e.target.value })}
            className="textarea" // Apply 'textarea' class for consistent styling
          />
          <button onClick={handleEdit} className="button">Save</button> {/* Apply 'button' class */}
          <button onClick={() => setIsEditing(false)} className="button">Cancel</button> {/* Apply 'button' class */}
        </div>
      ) : (
        <div>
          <h2>{blogPost.title}</h2>
          <strong>{blogPost.author}</strong>
          <p>{blogPost.content}</p>
          {currentUser.email === blogPost.author && (
            <>
              <button onClick={() => setIsEditing(true)} className="button">Edit</button> {/* Apply 'button' class */}
              <button onClick={() => deleteBlogPost(blogPost.id, currentUser.email)} className="button secondary-button">Remove</button> {/* Apply 'secondary-button' class */}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogPost;