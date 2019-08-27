import { useRouter } from "next/router";

const Debug = props => {
  const router = useRouter();
  return <pre>{JSON.stringify(router, null, 2)}</pre>;
};

export default Debug;
