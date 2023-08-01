import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { UpdateTodoData, removeUser } from "../Redux/Features/TodoSlicer";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const DataList = () => {
  const [open, setOpen] = useState(false);
  const [UpdateData, setUpdateData] = useState({});
  const [dataId, setdataId] = useState(-1);
  const data = useSelector((state) => state.Task.TodoData);
  const dispatch = useDispatch();
  console.log(data);

  const handleClickOpen = (id) => {
    setOpen(true);
    setdataId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setUpdateData({ ...UpdateData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event, id) => {
    event.preventDefault();
    const obj = { ...UpdateData, userId: 1, id };
    dispatch(UpdateTodoData(obj));
    setOpen(false);
  };
  const DeleteClick = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((item, id) => {
        return (
          <>
            <Box sx={{ padding: "10px" }}>
              <Card sx={{ width: "260px", height: "220px" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Todo
                  </Typography>
                  <Typography variant="body2" sx={{ padding: "5px" }}>
                    Title : {item.title}
                    <br />
                  </Typography>
                  <Typography variant="body2" sx={{ padding: "5px" }}>
                    Status : {item.completed === true ? "🟢" : "🔴"}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Box sx={{ display: "flex" }}>
                      <Fab color="secondary" size="small" aria-label="edit">
                        <EditIcon onClick={() => handleClickOpen(item.id)} />
                      </Fab>
                      &nbsp;&nbsp;
                      <Fab color="error" size="small" aria-label="edit">
                        <DeleteIcon onClick={() => DeleteClick(item.id)} />
                      </Fab>
                    </Box>
                  </Button>
                </CardActions>
              </Card>
            </Box>
            {dataId === item.id && (
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Update Task"}
                </DialogTitle>
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
                    defaultValue={item.title}
                  />
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      label="Status"
                      name="completed"
                      onChange={(event) => handleChange(event)}
                      defaultValue={item.completed}
                    >
                      <MenuItem value={true}>completed</MenuItem>
                      <MenuItem value={false}>pending</MenuItem>
                    </Select>
                  </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button
                    onClick={(event) => handleSubmit(event, item.id)}
                    autoFocus
                  >
                    Update
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </>
        );
      })}
    </div>
  );
};

export default DataList;
