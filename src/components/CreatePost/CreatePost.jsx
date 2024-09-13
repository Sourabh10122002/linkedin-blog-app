import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/slices/postSlice";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImage(file);
      setPreview(previewUrl);
    }
  };

  const handleSubmit = () => {
    dispatch(
      addPost({
        content,
        image: preview,
        likes: 0,
        comments: [],
      })
    );
    setContent("");
    setImage(null);
      setPreview("");
      navigate('/feed')
  };

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
      )}
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
};
