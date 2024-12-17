import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DoctorsPage from "./pages/DoctorsPage";
import NursesPage from "./pages/NursesPage";
import NotFoundPage from "./pages/NoFound";

const App: React.FC = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<DoctorsPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/nurses" element={<NursesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
