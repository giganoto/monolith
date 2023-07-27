import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handlePublish = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "blogData",
      JSON.stringify({
        title: title,
        content: content,
      })
    );

    formData.append("blogImage", image);

    await fetch(`${import.meta.env.VITE_APP_BASE_URL}/blog/create-post`, {
      method: "POST",
      body: formData,
    });
    setTitle("");
    setContent("");
    setImage(null);
  };
  function handleImage(e) {
    setImage(e.target.files[0]);
  }

  return (
    <div>
      <form onSubmit={handlePublish}>
        <input
          type="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input type="file" onChange={handleImage} />
        <ReactQuill
          theme="snow"
          value={content}
          onChange={(newVal) => setContent(newVal)}
        />
        <button> Create Blog </button>
      </form>
    </div>
  );
};

export default Admin;
