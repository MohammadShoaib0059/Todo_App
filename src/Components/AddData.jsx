import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { PostTodoData } from "../Redux/Features/TodoSlicer";
const AddData = () => {
  const [status, setstatus] = useState("");

  const dispatch = useDispatch();
  const [NewTask, setNewTask] = useState({});
  const handleChange = (event) => {
    setstatus(event.target.value);
    setNewTask({ ...NewTask, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(PostTodoData(NewTask));
  };
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "30rem",
          }}
        >
          <TextField
            id="standard-basic"
            type="string"
            name="title"
            onChange={(event) => handleChange(event)}
            label="Title"
            variant="standard"
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              name="completed"
              value={status}
              label="Status"
              onChange={(event) => handleChange(event)}
            >
              <MenuItem value={true}>completed</MenuItem>
              <MenuItem value={false}>pending</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" type="submit">
            Add Todo
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddData;
