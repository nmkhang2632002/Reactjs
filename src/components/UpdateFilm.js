import { useFormik } from "formik";
import * as React from "react";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import {
  Alert,
  AlertTitle,
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function UpdateFilm() {
  const [infor, setInfor] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  async function getInfor() {
    const response = await axios.get(
      `https://653a0844e3b530c8d9e8ff7d.mockapi.io/film/${id}`
    );
    setInfor(response.data);
  }
  React.useEffect(() => {
    getInfor();
  }, []);
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: infor,
    onSubmit: async (values) => {
      try {
        const response = await axios.put(
          `https://653a0844e3b530c8d9e8ff7d.mockapi.io/film/${id}`,
          values
        );
        if (response) handleOpen();
      } catch (error) {
        console.log(error.message);
      }
    },
    validationSchema: Yup.object({
      content: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      type: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      kind: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      country: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      img: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      imgLink: Yup.string()
        .required("Required.")
        .min(2, "Must be 10 characters or more"),
      clip: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
  });
  return (
    <Container sx={{ pt: "100px", pb: "40px" }}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ bgcolor: "#fff" }} p={2}>
          <TextField
            InputLabelProps={{ shrink: true }}
            autoFocus
            margin="dense"
            name="content"
            label="Content"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.content}
            onChange={formik.handleChange}
          />
          {formik.errors.content && (
            <Typography variant="caption" color="red">
              {formik.errors.content}
            </Typography>
          )}
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="dense"
            name="type"
            label="Type"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.type}
            onChange={formik.handleChange}
          />
          {formik.errors.type && (
            <Typography variant="caption" color="red">
              {formik.errors.type}
            </Typography>
          )}
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="dense"
            name="kind"
            label="Kind"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.kind}
            onChange={formik.handleChange}
          />
          {formik.errors.kind && (
            <Typography variant="caption" color="red">
              {formik.errors.kind}
            </Typography>
          )}
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="dense"
            name="country"
            label="Country"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.country}
            onChange={formik.handleChange}
          />
          {formik.errors.country && (
            <Typography variant="caption" color="red">
              {formik.errors.country}
            </Typography>
          )}
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="dense"
            name="img"
            label="Image"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.img}
            onChange={formik.handleChange}
          />
          {formik.errors.img && (
            <Typography variant="caption" color="red">
              {formik.errors.img}
            </Typography>
          )}
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="dense"
            name="imgLink"
            label="Image Link"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.imgLink}
            onChange={formik.handleChange}
          />
          {formik.errors.imgLink && (
            <Typography variant="caption" color="red">
              {formik.errors.imgLink}
            </Typography>
          )}
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="dense"
            name="clip"
            label="Intro video"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.clip}
            onChange={formik.handleChange}
          />
          {formik.errors.clip && (
            <Typography variant="caption" color="red">
              {formik.errors.clip}
            </Typography>
          )}
          <br />
          <FormControlLabel
            control={<Switch />}
            label="Agree"
            name="agree"
            value={formik.values.agree}
            onChange={formik.handleChange}
          />
          <Box width="100%">
            {formik.errors.agree && (
              <Typography variant="caption" color="red">
                {formik.errors.agree}
              </Typography>
            )}
          </Box>
          <Button type="submit" variant="contained" size="small">
            Update
          </Button>
        </Box>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Film is update successfull
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Update the film
          </Button>
          <Button variant="contained" onClick={handleClose} autoFocus>
            <Link className="link link-navigation" to="/dashboard">
              Dashboard
            </Link>
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
