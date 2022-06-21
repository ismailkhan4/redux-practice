import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
  },
  {
    id: '2',
    title: 'Slices....',
    content: 'The more i say slice, The more i want Pizza Slice :) .',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;
