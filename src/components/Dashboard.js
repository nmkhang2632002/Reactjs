import {
  Alert,
  AlertTitle,
  Avatar,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [notice, setNotice] = useState(false);
  const [message, setMessage] = useState("");
  async function handleDelete() {
    const response = axios.delete(
      `https://653a0844e3b530c8d9e8ff7d.mockapi.io/film/${currentId}`
    );
    if (response) {
      setMessage("Delete success!");
    } else {
      setMessage("Delete fail!");
    }
    handleClose();
    handleNoticeOpen();
  }
  function loadPage() {
    getList();
  }
  function handleNoticeOpen() {
    setNotice(true);
  }
  function handleNoticeClose() {
    setNotice(false);
    getList();
  }
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  async function getList() {
    const response = await axios.get(
      "https://653a0844e3b530c8d9e8ff7d.mockapi.io/film"
    );
    const data = response.data;
    setRows(data);
  }
  useEffect(() => {
    getList();
  }, []);
  return (
    <Container sx={{ pt: "100px", pb: "40px" }}>
      <TableContainer component={Paper} sx={{ margin: "20px", boxShadow: "4" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Content</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Kind</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Image Detail</TableCell>
              <TableCell>Modifier</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.content}
                </TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{row.kind}</TableCell>
                <TableCell align="center">{row.country}</TableCell>
                <TableCell align="center">
                  <Avatar alt={row.kind} src={row.img} />
                </TableCell>
                <TableCell align="center">
                  <Avatar alt={row.kind} src={row.imgLink} />
                </TableCell>
                <TableCell align="center">
                  <Stack direction="row">
                    <IconButton>
                      <Link to="/add">
                        <AddCircleOutlineIcon color="primary" />
                      </Link>
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setCurrentId(row.id);
                        handleOpen();
                      }}
                    >
                      <DeleteIcon color="primary" />
                    </IconButton>
                    <IconButton>
                      <Link to={`/udpateFilm/${row.id}`}>
                        <UpdateIcon color="primary" />
                      </Link>
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Film</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete the film ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={notice}
        onClose={handleNoticeClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message.includes("success") && (
              <Alert severity="success">
                <AlertTitle>{message}</AlertTitle>
              </Alert>
            )}
            {message.includes("fail") && (
              <Alert severity="error">
                <AlertTitle>{message}</AlertTitle>
              </Alert>
            )}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Container>
  );
}
