import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Wrapper from "../../components/layouts/wrapper";

import useFetch from "../../components/hooks/useFetch";

const SingleClientPage = ({ clientID }) => {
  const [data, loading] = useFetch(`/mysql/clients/read/${clientID}`);
  const renderLoading = () => <p>Loading&hellip;</p>;
  const renderWithData = () => <pre>{JSON.stringify(data, null, 2)}</pre>;
  return (
    <Wrapper>
      <Head>
        <title>Client Page</title>
      </Head>
      This is a client Page
      {loading ? renderLoading() : renderWithData()}
    </Wrapper>
  );
};

SingleClientPage.getInitialProps = async ({ query }) => ({
  clientID: query.id
});

export default SingleClientPage;
