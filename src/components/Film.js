import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import { films } from "../share/ListOfFilms";
import { useEffect, useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Film() {
  // const [open, setOpen] = useState(false);
  // const [currentFilm, setCurrentFilm] = useState([]);
  // const handleOpen = (film) => {
  //   setOpen(true);
  //   setCurrentFilm(film);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 600,
  //   bgcolor: "background.paper",
  //   boxShadow: 24,
  //   borderRadius: 1,
  // };
  const [films, setFilms] = useState([]);
  const baseURL = "https://653a0844e3b530c8d9e8ff7d.mockapi.io/film";
  useEffect(() => {
    const getFilm = async () => {
      const data = await axios.get(baseURL);
      setFilms(data.data);
      console.log(films);
    };
    getFilm();
  }, []);
  const styleHover = {
    "&:hover": {
      opacity: 0.4,
    },
  };
  return (
    <Container sx={{ pt: "100px", pb: "40px" }}>
      <Grid container spacing={2}>
        {films.map((film) => (
          <Grid sx={styleHover} item sm={6} md={4} lg={3} key={film.id}>
            <Button
            // onClick={() => {
            //   handleOpen(film);
            // }}
            >
              <Link className="link" to={`/detail/${film.id}`}>
                <Card variant="outlined" sx={{ minWidth: "200px" }}>
                  <CardMedia
                    component="img"
                    sx={{ objectFit: "cover", objectPosition: "center" }}
                    image={film.img}
                  />
                  <CardContent>
                    <Typography
                      sx={{ textTransform: "capitalize" }}
                      variant="body1"
                    >
                      {film.type}{" "}
                      <FiberManualRecordIcon
                        fontSize="small"
                        color="disabled"
                      />{" "}
                      {film.kind}{" "}
                      <FiberManualRecordIcon
                        fontSize="small"
                        color="disabled"
                      />{" "}
                      {film.country}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Button>
          </Grid>
        ))}
      </Grid>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ backgroundColor: "GrayText" }}>
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: "10px", right: "10px" }}
            >
              <CloseIcon fontSize="small" color="error" />
            </IconButton>
            <CardMedia
              component="img"
              sx={{ objectFit: "cover", objectPosition: "center" }}
              image={currentFilm.imgLink}
            ></CardMedia>
            <CardContent>
              <Typography>{currentFilm.content}</Typography>
            </CardContent>
          </Card>
        </Box>
      </Modal> */}
    </Container>
  );
}
