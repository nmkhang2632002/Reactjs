import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import AddUser from "./AddUser";
import UsersData from "../share/ListOfUsers";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUsername } from "./Users";
export default function User() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [newUsername, setNewUsername] = useState("");
  return (
    <Container sx={{ pt: "100px", pb: "40px" }}>
      <Stack p={2} bgcolor="#fff" direction="row" columnGap={2}>
        <AddUser />
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)",
          }}
        >
          {userList.map((user) => (
            <Box>
              <ListItem
                secondaryAction={
                  <IconButton
                    aria-label="comment"
                    onClick={() => {
                      dispatch(deleteUser({ id: user.id }));
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={user.username}
                  sx={{ maxWidth: "100px" }}
                />
                <ListItemText sx={{ maxWidth: "100%" }}>
                  <TextField
                    id="standard-basic"
                    placeholder="Type name of username..."
                    variant="standard"
                    fullWidth
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                </ListItemText>
                <Button
                  variant="contained"
                  sx={{ mx: "10px" }}
                  onClick={() => {
                    dispatch(
                      updateUsername({ id: user.id, username: newUsername })
                    );
                  }}
                >
                  Update
                </Button>
              </ListItem>
              <Divider component="li" />
            </Box>
          ))}
        </List>
      </Stack>
    </Container>
  );
}
