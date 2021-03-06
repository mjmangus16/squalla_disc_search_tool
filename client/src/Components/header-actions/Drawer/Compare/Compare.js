import React from "react";

import Disc from "../../../Discs/Disc";
import CompareInfo from "./CompareInfo";

const Compare = ({ discs, removeCompare, toggleRatingsStatus }) => {
  return (
    <div style={{ width: "100%", height: "auto", paddingBottom: 25 }}>
      {discs.length > 0 ? (
        discs.map((disc, i) => (
          <Disc
            data={disc}
            removeCompare={removeCompare}
            compareStatus={false}
            key={`compareDisc-${i}`}
            status={toggleRatingsStatus}
          />
        ))
      ) : (
        <CompareInfo />
      )}
    </div>
  );
};

export default Compare;
