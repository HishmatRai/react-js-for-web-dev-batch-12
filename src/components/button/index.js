import React from "react";
import "./index.css";
import CircularProgress from "@mui/material/CircularProgress";

const Button = ({ outline, borderRadius, onClick, title, loading }) => {
  //   console.log("button props------->>>>>>>", props);
  //   let {outline,borderRadius,onClick,title} = props;
  return (
    // <button
    //   className={props.outline ? "outlin-button-component" : "button-component"}
    //   //   style={{borderRadius:"5px"}}
    //   style={{ borderRadius: `${props.borderRadius}px` }}
    //   //   onClick={()=>alert(props.title)}
    //   onClick={props.onClick}
    // >
    //   {props.title}
    // </button>
    <button
      // data-aos="fade-right"
      className={outline ? "outlin-button-component" : "button-component"}
      //   style={{borderRadius:"5px"}}
      style={{ borderRadius: `${borderRadius}px`, cursor: "pointer" }}
      //   onClick={()=>alert(title)}
      onClick={onClick}
    >
      {loading ? <CircularProgress  size={10} color="white"/> : title}
    </button>
  );
};
export default Button;
