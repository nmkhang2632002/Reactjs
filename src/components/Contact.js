import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./Contact.css";
import { useFormik } from "formik";
export default function Contact() {
  const nation = ["Viet Nam", "US", "UK", "China", "Australia"];
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      country: 0,
      content: "",
      agree: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(formik.values));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(2, "Must be 2 characters or more"),
      phone: Yup.number().integer().typeError("Please enter a valid phone"),
      email: Yup.string().required("Required").email("Invalid email"),
      country: Yup.number().integer().typeError("Please select a country"),
      content: Yup.string()
        .required("Required")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
  });
  return (
    <Container sx={{ py: "100px" }} maxWidth="sm">
      <form onSubmit={formik.handleSubmit} className="container-contact">
        <FormControl fullWidth>
          <TextField
            id="standard-basic"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            label="Your Name"
            variant="standard"
          />
          {formik.errors.name && (
            <Typography variant="caption" color="red">
              {formik.errors.name}
            </Typography>
          )}
        </FormControl>
        <FormControl fullWidth>
          <TextField
            sid="standard-basic"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            label="Your Phone"
            variant="standard"
          />
          {formik.errors.phone && (
            <Typography variant="caption" color="red">
              {formik.errors.phone}
            </Typography>
          )}
        </FormControl>
        <FormControl fullWidth>
          <TextField
            sid="standard-basic"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            label="Email"
            variant="standard"
          />
          {formik.errors.email && (
            <Typography variant="caption" color="red">
              {formik.errors.email}
            </Typography>
          )}
        </FormControl>
        <FormControl>
          <TextField
            sx={{ mt: "20px" }}
            fullWidth
            id="outlined-select-currency"
            select
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            label="Select"
            defaultValue="Viet Nam"
            helperText="Please select your currency"
          >
            {nation.map((option, index) => (
              <MenuItem key={option} value={index}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          {formik.errors.country && (
            <Typography variant="caption" color="red">
              {formik.errors.country}
            </Typography>
          )}
        </FormControl>
        <FormControl fullWidth>
          <Box sx={{ display: "flex", alignItems: "baseline", mb: "10px" }}>
            <CreateIcon sx={{ mx: "10px" }} />
            <TextField
              fullWidth
              multiline
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              row={4}
              sid="input-content"
              label="Content"
              variant="standard"
            />
          </Box>
          {formik.errors.content && (
            <Typography variant="caption" color="red">
              {formik.errors.content}
            </Typography>
          )}
        </FormControl>
        <FormControlLabel
          control={<Switch />}
          name="agree"
          value={formik.values.agree}
          onClick={formik.handleChange}
          sx={{ width: "100%", mb: "10px" }}
          label="Agree to terms and conditions"
        />
        <Box width="100%">
          {formik.errors.agree && (
            <Typography variant="caption" color="red">
              {formik.errors.agree}
            </Typography>
          )}
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{ p: "2", bgcolor: "#10161D" }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
