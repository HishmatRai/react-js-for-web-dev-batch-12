import React from "react";
import "./index.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page-not-found">
      <div>
        <h1>Page Not Found!</h1>
        <Button
          variant="contained"
          disableElevation
          onClick={() => navigate("/")}
          id="page-not-found-btn"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};
export default PageNotFound;
