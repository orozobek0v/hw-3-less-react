import React from "react";
import "./Render.css";

function Render(props) {
  return (
    <div className="render-items">
       <h1 >{props.id}</h1>
       <img src={props.img} alt="" />
       <p>{props.title}</p>
    </div>
  );
}

export default Render;
