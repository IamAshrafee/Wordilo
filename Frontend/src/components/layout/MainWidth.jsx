import React from "react";

const MainWidth = ({ children, className }) => {
  return <div className={`max-w-[1580px] px-5 mx-auto ${className || ""}`}>{children}</div>;
};

export default MainWidth;