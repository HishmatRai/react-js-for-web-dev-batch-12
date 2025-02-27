import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contact, About, PageNotFound, News ,NewDetails} from "./../../pages";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-details/:id" element={<NewDetails />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
