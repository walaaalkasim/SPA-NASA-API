import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Map from "../components/Map/Map";
import Header from "../components/pages/Header";
import AstroPic from "../components/astronomy/AstroPic";
import TestApi from "../components/test/TestApi";

import Alan from "../components/alan-reader/Alan";

import GetData from "../components/Map/GetData";

const Routings = () => (
  <Router>
    <Alan />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/getData" element={<GetData />} />
      <Route path="/map" element={<Map />} />
      <Route path="/astroPic" element={<AstroPic />} />

      <Route path="testApi" element={<TestApi />} />
    </Routes>
  </Router>
);

export default Routings;
