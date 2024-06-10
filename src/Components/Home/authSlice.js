import { createSlice } from '@reduxjs/toolkit';

const users = [
  { username: 'user1', password: 'pass1', name: 'User 1', id: 1 },
  { username: 'user2', password: 'pass2', name: 'User 2', id: 2 }
];

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const loginUser = (credentials) => (dispatch) => {
  
  const user = users.find(user => user.username === credentials.username && user.password === credentials.password);
  if (user) {
    dispatch(login(user));
    
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    
    console.log('Invalid username or password');
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
  
  localStorage.removeItem('user');
};

export default authSlice.reducer;
