import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
const UpdateData = () => {
  const [open, setOpen] = useState(false);
  const [status, setstatus] = useState("");
  const Data = useSelector((state) => state.Task.TodoData);
  // console.log(Data);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setstatus(event.target.value);
    setData({
      ...Data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {};
  return (
    <div>
      <Fab color="secondary" size="small" aria-label="edit">
        <EditIcon onClick={handleClickOpen} />
      </Fab>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Update Task"}</DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextField
              type="string"
              name="title"
              onChange={(event) => handleChange(event)}
              label="Title"
              variant="standard"
              value={Data.title}
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" autoFocus>
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
};

export default UpdateData;
