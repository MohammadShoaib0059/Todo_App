import { configureStore } from "@reduxjs/toolkit";
import TodoSlicer from "./Features/TodoSlicer";

const Store = configureStore({
    reducer: {
      Task:TodoSlicer
    },
  });
  
  export default Store;