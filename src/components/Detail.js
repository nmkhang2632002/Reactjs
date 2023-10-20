import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { films } from "../share/ListOfFilms";
import AddToQueueRoundedIcon from "@mui/icons-material/AddToQueueRounded";
import "./Detail.css";
import ModalCase from "./ModalCase";
export default function Detail() {
  const currentFilm = useParams();
  const film = films.find((filmElement) => {
    return filmElement.id == currentFilm.id;
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const style = {
    mx: "auto",
    maxWidth: 600,
    borderRadius: 1,
  };
  return (
    <Container sx={{ py: "100px"}}>
      <Box sx={style}>
        <Card sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            sx={{ objectFit: "cover", objectPosition: "center" }}
            image={`../${film.imgLink}`}
          ></CardMedia>
          <div className="detail__button">
            <IconButton onClick={handleOpen}>
              <AddToQueueRoundedIcon fontSize="small" color="error" />
            </IconButton>
          </div>
          <CardContent sx={{ bgcolor: "#4dabf5" }}>
            <Typography sx={{ fontSize: "medium", color: "white" }}>
              {film.content}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      {isOpen && <ModalCase isOpen={isOpen} handleClose={handleClose} film={film}/>}
    </Container>
  );
}
