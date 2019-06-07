import React from "react";

const styles = {
  p: {
    color: "rgba(255, 255, 255, 0.7)",
    padding: 20
  }
};

const CompareInfo = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <p style={styles.p}>
        Use the + and - buttons on the cards to add or remove it from this
        section
      </p>
    </div>
  );
};

export default CompareInfo;
