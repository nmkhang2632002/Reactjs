import { Box, IconButton, Modal } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./ModalCase.css";

export default function ModalCase({ isOpen, handleClose, film }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
  };
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <iframe
          className="modal__video"
          width='560'
          height="315"
          src={film.clip}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <IconButton
          className="close__button"
          onClick={handleClose}
          sx={{ position: "absolute", top: "1%", right: "1%", p: "1px" }}
          color="warning"
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
}
