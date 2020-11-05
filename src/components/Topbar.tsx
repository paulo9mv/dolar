import React from "react";
import CSS from "csstype";

const TopBar = () => {
  const topBarStyle: CSS.Properties = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "40",
    backgroundColor: `rgba(255, 255, 255, 1)`,
    borderBottom: `1px solid rgba(0, 0, 0, 1)`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
  };

  return (
    <div style={topBarStyle}>
      TopBar
    </div>
  );
};

export default TopBar;
