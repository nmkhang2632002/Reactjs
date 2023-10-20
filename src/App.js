import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Film from "./components/Film";
import Footer from "./components/Footer";
import Contact from './components/Contact';
import News from './components/News';
import Detail from './components/Detail';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {Route, Routes } from "react-router-dom";
import About from "./components/About";
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
          <Route path='/' element={<Film/>}></Route>
          <Route path='/detail/:id' element={<Detail/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
