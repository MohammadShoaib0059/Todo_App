import React from "react";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeUser } from "../Redux/Features/TodoSlicer";

const DeleteData = () => {
  const dispatch = useDispatch();
  const DeleteClick = (e) => {
    dispatch(removeUser);
  };
  return (
    <div>
      <Fab color="error" size="small" aria-label="edit">
        <DeleteIcon onClick={(e) => DeleteClick(e)} />
      </Fab>
    </div>
  );
};

export default DeleteData;
