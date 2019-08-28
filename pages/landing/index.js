import React from "react";
import Head from "next/head";
import Link from "next/link";
import Wrapper from "../../components/layouts/wrapper";
import TextField from "@material-ui/core/TextField";
import useFetch from "../../components/hooks/useFetch";

// import fs from 'fs';
// go into next js and get file info. To do an ls thing here.

const AutoIndex = () => {
  const [data, loading] = useFetch("/autoindex");
  const renderLoading = () => <p>Loading&hellip;</p>;
  const renderWithData = () => {
    return (
      <ul>
        {data.map(href => {
          return (
            <li>
              <Link href={href}>{href}</Link>
            </li>
          );
        })}
      </ul>
    );
    // return <pre>{JSON.stringify(data, null, 2)}</pre>;
  };
  return loading ? renderLoading() : renderWithData();
};

const Taylor = () => {
  const [] = useFetch("");
  return (
    <Wrapper>
      <Head>
        <title>AutoIndex</title>
      </Head>
      hey
      <AutoIndex />
      <TextField margin="dense" variant="outlined" />
    </Wrapper>
  );
};

export default Taylor;
