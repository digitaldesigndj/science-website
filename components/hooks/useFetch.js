import React from "react";

const useFetch = url => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const fetchUrl = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    // setTimeout(() => {
    setLoading(false);
    // }, 3000);
  };
  React.useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
};

export default useFetch;
