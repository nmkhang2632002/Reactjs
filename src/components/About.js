import { Container, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Container sx={{py:'100px'}} maxWidth='sm'>
      <Typography align="justify" color='white'>
        At Film, we want to entertain the world. Whatever your taste, and no
        matter where you live, we give you access to best-in-class TV series,
        documentaries, feature films and mobile games. Our members control what
        they want to watch, when they want it, in one simple subscription. We’re
        streaming in more than 30 languages and 190 countries, because great
        stories can come from anywhere and be loved everywhere. We are the
        world’s biggest fans of entertainment, and we’re always looking to help
        you find your next favorite story.
      </Typography>
    </Container>
  );
}
