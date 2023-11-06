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
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToQueueRoundedIcon from "@mui/icons-material/AddToQueueRounded";
import "./Detail.css";
import ModalCase from "./ModalCase";
import axios from "axios";
export default function Detail() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [film, setFilm] = useState({});
  async function getDetail() {
    const response = await axios.get(
      `https://653a0844e3b530c8d9e8ff7d.mockapi.io/film/${id}`
    );
    if (response) setFilm(response.data);
    console.log(film);
  }
  useEffect(() => {
    getDetail();
  }, []);
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
    <Container sx={{ py: "100px" }}>
      <Box sx={style}>
        <Card sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={film.imgLink}
            sx={{ objectFit: "cover", objectPosition: "center" }}
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
      {isOpen && (
        <ModalCase isOpen={isOpen} handleClose={handleClose} film={film} />
      )}
    </Container>
  );
}
