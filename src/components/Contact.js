import {
  Box,
  Button,
  ButtonBase,
  Container,
  FormControl,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import './Contact.css';
export default function Contact() {
  const nation = ["Viet Nam", "US", "UK", "China", "Australia"];
  function stopSubmit(event) {
    event.preventDefault();
  }
  return (
    <Container sx={{ py: "100px"}} maxWidth="sm">
      <form onSubmit={stopSubmit} className="container-contact">
        <FormControl fullWidth>
          <TextField id="standard-basic" label="Your Name" variant="standard" />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            sid="standard-basic"
            label="Your Phone"
            variant="standard"
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField sid="standard-basic" label="Email" variant="standard" />
        </FormControl>
        <FormControl>
          <TextField
            sx={{ mt: "20px" }}
            fullWidth
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="Viet Nam"
            helperText="Please select your currency"
          >
            {nation.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <FormControl fullWidth>
          <Box sx={{ display: "flex", alignItems: "baseline", mb: "10px" }}>
            <CreateIcon sx={{ mx: "10px" }} />
            <TextField
              fullWidth
              sid="input-content"
              label="Content"
              variant="standard"
            />
          </Box>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          sx={{ p: "2", bgcolor: "#1976D2" }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
