import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./Components/Header/Header";
import "./index.css";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Projects } from "./Pages/Projects";
import { Packages } from "./Pages/Packages";

export const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/hakkimda" element={<About />} />
        <Route path="/projelerim" element={<Projects />} />
        <Route path="/modullerim" element={<Packages />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);
