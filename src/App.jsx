import React from "react";
import Home from './pages/home';
import View from "./pages/view";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  return <>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/images/:id" element={<View />} />

      </Routes>

    </BrowserRouter>

  </>

}

