// src/redux/slices/postSlice.js
import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    likePost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) {
        post.likes += 1;
      }
    },
    addComment: (state, action) => {
      const { id, comment } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.comments.push(comment);
      }
    },
  },
});

export const { addPost, deletePost, likePost, addComment } = postSlice.actions;

export default postSlice.reducer;
