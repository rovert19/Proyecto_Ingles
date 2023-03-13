import "./CircleBar.css";
import { useState, useEffect } from "react";

export const CircleBar = ({end=0,title="Default",info="Default" , color="#1caf9a"}) => {
    // const [start, setStart] = useState(0);
    // const [stylex, setStylex] = useState({background: "conic-gradient(red 180deg, #e9ecef 0deg)"})
    const stylex={background: `conic-gradient(${color} ${3.6*end}deg, #e9ecef 0deg)`}
  return (
    <div className="circle-bar">
      <div className="circle-container">
        <div style={stylex} className="circle-out">
          <div className="circle-inner">
            <span className="value">{end + "%"}</span>
          </div>
        </div>
      </div>
      <div className="bar-description">
            <p>{title}</p>
            <p>{info}</p>
    </div>
    </div>
  );
};
