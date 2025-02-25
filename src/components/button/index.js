import React from "react";
import "./index.css";
const Button = ({outline,borderRadius,onClick,title}) => {
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
    className={outline ? "outlin-button-component" : "button-component"}
    //   style={{borderRadius:"5px"}}
    style={{ borderRadius: `${borderRadius}px` }}
    //   onClick={()=>alert(title)}
    onClick={onClick}
  >
    {title}
  </button>
  );
};
export default Button;

