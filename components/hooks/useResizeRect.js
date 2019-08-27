import React from "react";

const useResizeRect = ref => {
  const [rect, setRect] = React.useState({});
  React.useEffect(() => {
    const { current } = ref;
    const handleResize = () => {
      setRect(current.getBoundingClientRect());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);
  return rect;
};

export default useResizeRect;
