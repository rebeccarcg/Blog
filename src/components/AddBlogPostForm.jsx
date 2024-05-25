import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";

const AddBlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lägg till nytt inlägg med titel och innehåll
    addBlogPost({ title, content, author: currentUser.email });
    // Återställ formuläret
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="textarea"
        placeholder="Innehåll"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="button" type="submit">
        Lägg till inlägg
      </button>
    </form>
  );
};

export default AddBlogPostForm;
