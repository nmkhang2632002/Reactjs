import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import RoomIcon from "@mui/icons-material/Room";
import WhatshotIcon from "@mui/icons-material/Whatshot";
export default function News() {
  return (
    <Container maxWidth="sm" sx={{py:'100px'}}>
      <Box sx={{border: '1px solid rgba(0, 0, 0, 0.2)', bgcolor:'white', boxShadow:'2px 2px 8px gray'}}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <MovieIcon />
            </ListItemAvatar>
            <ListItemText>The Film</ListItemText>
          </ListItem>
          <Divider variant="fullWidth" component="li" />
          <ListItem>
            <ListItemText>The Film</ListItemText>
          </ListItem>
          <Divider variant="fullWidth" component="li" />
          <ListItem>
            <ListItemAvatar>
              <RoomIcon />
            </ListItemAvatar>
            <ListItemText>Nation</ListItemText>
          </ListItem>
          <Divider variant="fullWidth" component="li" />
          <ListItem>
            <ListItemAvatar>
              <WhatshotIcon />
            </ListItemAvatar>
            <ListItemText>Daily News</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}
