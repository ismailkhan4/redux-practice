import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Ismail' },
  { id: '1', name: 'Ahmad' },
  { id: '3', name: 'Ali' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
