import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Film from "./components/Film";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import News from "./components/News";
import Detail from "./components/Detail";
import About from "./components/About";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import User from "./components/User";
import AddFilm from "./components/AddFilm";
import Dashboard from "./components/Dashboard";
import UpdateFilm from "./components/UpdateFilm";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto", // Use your custom font followed by fallback fonts
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Film />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/add" element={<AddFilm />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/udpateFilm/:id" element={<UpdateFilm />}></Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
