import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const PostTodoData = createAsyncThunk(
  "Todo/PostTodoData",
  async (values) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/1/todos`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: values.id,
          title: values.title,
          completed: values.completed,
        }),
      }
    );
    const data = await response.json();
    return data;
  }
);

export const UpdateTodoData = createAsyncThunk(
  "Todo/UpdateTodoData",
  async (UpdatedData) => {
    console.log(UpdatedData);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${UpdatedData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(UpdatedData),
      }
    );
    const data = await response.json();
    return data;
  }
);

export const GetTodoData = createAsyncThunk("Todo/GetTodoData", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
  const Todo = await res.json();
  return Todo;
});

const initialState = {
  TodoData: [],
  loading: false,
  error: "",
};
const TodoSlicer = createSlice({
  name: "Todo",
  initialState,
  extraReducers: {
    [PostTodoData.pending]: (state, action) => {
      state.loading = true;
    },
    [PostTodoData.fulfilled]: (state, action) => {
      state.loading = false;
      state.TodoData.unshift(action.payload);
    },

    [PostTodoData.rejected]: (state, action) => {
      state.loading = false;
    },
    [GetTodoData.pending]: (state, action) => {
      state.loading = true;
    },
    [GetTodoData.fulfilled]: (state, action) => {
      state.loading = false;
      state.TodoData = action.payload;
    },
    [GetTodoData.rejected]: (state, action) => {
      state.loading = false;
    },
    [UpdateTodoData.pending]: (state, action) => {
      state.loading = true;
    },
    [UpdateTodoData.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload.id);
      let NewData = state.TodoData.findIndex((i) => {
        i.id === action.payload.id;
      });
      state.TodoData[NewData] = action.payload;
    },
    [UpdateTodoData.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    removeUser(state, action) {
      state.TodoData = state.TodoData.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export const { removeUser } = TodoSlicer.actions;
export default TodoSlicer.reducer;
