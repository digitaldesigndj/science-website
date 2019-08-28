import React from "react";
import Link from "next/link";
import Head from "next/head";
import Wrapper from "../components/layouts/wrapper";
// import Grid from '@material-ui/core/Grid';

const Hero = ({ children }) => {
  return (
    <React.Fragment>
      <div className="hero">{children}</div>
      <style jsx>{`
        .hero {
          text-align: center;
          color: white;
          background-image: url(static/home-hero-bg.jpg);
          padding: 2rem 0;
        }
      `}</style>
    </React.Fragment>
  );
};

const Card = ({ href, h3text, children }) => (
  <React.Fragment>
    <Link href={href}>
      <a className="card">
        <h3>{h3text}</h3>
        {children}
      </a>
    </Link>
    <style jsx>{`
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </React.Fragment>
);

const Home = () => (
  <Wrapper>
    <Head>
      <title>Cruz Science 🌳 420 Processing 🌳</title>
    </Head>
    <Hero>
      <h1 className="title">Cruz Science Toll Processing</h1>
      <h3 className="description">
        Pharmaceutical Grade Cannabis Production and Toll-Processing Services
      </h3>
      <p>Good enough for the FDA (if they were into that sort of thing)</p>
      <div className="row">
        <Card href="/taylor" h3text="Taylor Page" />
        <Card href="/calculator" h3text="Calculator" />
        <Card href="/long" h3text="A Very Long Page" />
      </div>
    </Hero>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    `}</style>
  </Wrapper>
);

export default Home;
