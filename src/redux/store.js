import { configureStore } from "@reduxjs/toolkit";
import { todoReducers } from "./reducers";

const store = configureStore({
  reducer: todoReducers,
});

export default store;