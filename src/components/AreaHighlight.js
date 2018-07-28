import React from 'react';

function AreaHighlight(props) {

  const color = props.color ? props.color : "#8cc8ff";

  return (
    <div style={{
        borderLeft: `5px solid ${color}`,
        padding: "1em",
        marginBottom: "1em"
      }}>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
}

export default AreaHighlight;