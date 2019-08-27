import React from "react";
import useResizeRect from "./hooks/useResizeRect";

const PoliteFooter = ({ children }) => {
  const footerRef = React.useRef(null);
  const rect = useResizeRect(footerRef);
  const style = {
    background: "red",
    width: "100%",
    position: "fixed",
    bottom: 0
  };
  const footerSpacerStyle = {
    minHeight: rect.height + "px",
    width: "100%"
    // background: "rgba(0,192,255, 0.2)"
  };
  return (
    <React.Fragment>
      <div style={footerSpacerStyle} />
      <div style={style} ref={footerRef}>
        {children}
      </div>
    </React.Fragment>
  );
};

export default PoliteFooter;
