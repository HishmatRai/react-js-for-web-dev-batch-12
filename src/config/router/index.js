import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contact, About ,PageNotFound} from "./../../pages";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
