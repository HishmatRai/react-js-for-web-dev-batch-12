import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Contact,
  Profile,
  PageNotFound,
  News,
  NewDetails,
  Login,
  SignUp,
  CreateBlog,
  BlogDetails,
} from "./../../pages";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<News />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/news-details/:id" element={<NewDetails />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
