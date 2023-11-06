import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./Users";

export default function AddUser() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  return (
    <Box
      px={2}
      borderColor="#10161D"
      border={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        maxHeight: "250px",
        justifyContent: "center",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Name"
        name="name"
        value={name}
        variant="outlined"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Username"
        username="username"
        value={username}
        variant="outlined"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <Button
        onClick={() => {
          dispatch(addUser({ id: 0, name: name, username: username }));
        }}
        variant="contained"
      >
        Add User
      </Button>
    </Box>
  );
}
