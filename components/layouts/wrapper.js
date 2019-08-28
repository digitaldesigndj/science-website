import React from "react";
import Head from "next/head";
import Nav from "../nav";
import StickyFooter from "../sticky-footer";
import Debug from "../debug";

const Footer = () => {
  const style = {
    width: "100%",
    background: "#c0f"
  };
  return (
    <div style={style}>
      Regular Footer Here
      <Debug />
    </div>
  );
};

const Wrapper = ({ children }) => (
  <div id="wrapper">
    <Nav />
    {children}
    <Footer></Footer>
    {
      // <Debug />
      // <StickyFooter>This is the Sticky Footer!</StickyFooter>
    }
  </div>
);

export default Wrapper;
