import React from "react";

const Compare = ({ cards }) => {
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      onDropCapture={e => console.log(e.target)}
    >
      {cards}
    </div>
  );
};

export default Compare;
