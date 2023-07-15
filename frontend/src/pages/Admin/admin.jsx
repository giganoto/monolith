import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useCreateBlogMutation } from "../../state/api";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const [createBlog, data] = useCreateBlogMutation();


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

    await createBlog(formData)
      .unwrap()
      .then(() => {
        // Reset the form
        setTitle("");
        setContent("");
        setImage(null);
      })
      .catch((error) => {
        // Handle any error during the mutation
        console.error(error);
      });
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
