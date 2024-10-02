import React from "react";
import { useEffect, useRef, useState } from "react";

const useClickOutSideToggle = () => {
  const [expanded, setExpanded] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [ref]);
  
  return {expanded, setExpanded, ref};
};

export default useClickOutSideToggle;
