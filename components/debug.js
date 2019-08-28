import React from "react";
import { useRouter } from "next/router";

const Debug = props => {
  const router = useRouter();
  return <pre style={{ margin: 0 }}>{JSON.stringify(router, null, 2)}</pre>;
};

export default Debug;
