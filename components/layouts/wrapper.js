import React from "react";
import Head from "next/head";
import Nav from "../nav";
import StickyFooter from "../sticky-footer";
import Debug from "../debug";
import Container from "@material-ui/core/Container";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <Container>
          Regular Footer Here
          {
            //<Debug />
          }
        </Container>
      </div>
      <style jsx>{`
        .footer {
          width: 100%;
          background: #c0f;
          margin: 15px 0;
          padding: 15px 0;
        }
      `}</style>
    </React.Fragment>
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
