import React from "react";
import AddData from "./AddData";
import UpdateData from "./UpdateData";
import DeleteData from "./DeleteData";
import DataList from "./DataList";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#adebeb", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <AddData />
      </Box>
      <DataList />
    </div>
  );
};

export default Home;
