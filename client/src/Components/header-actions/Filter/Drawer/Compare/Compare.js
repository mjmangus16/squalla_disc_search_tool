import React from "react";

import Disc from "../../../../Discs/Disc/Disc";

const Compare = ({ discs, removeCompare }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {discs.length > 0
        ? discs.map((disc, i) => (
            <Disc
              data={disc}
              removeCompare={removeCompare}
              compareStatus={false}
              key={`compareDisc-${i}`}
            />
          ))
        : null}
    </div>
  );
};

export default Compare;
