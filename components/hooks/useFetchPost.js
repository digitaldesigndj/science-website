import React from "react";

const useFetchPost = (url, payload) => {
  const [response, setResponse] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const postUrl = async () => {
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify(payload)
    });
    const json = await response.json();
    setResponse(json);
    setLoading(false);
  };
  React.useEffect(() => {
    postUrl();
  }, []);
  return [response, loading];
};

export default useFetchPost;
