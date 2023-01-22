import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'} style={{
        lineHeight: "1.25rem",
        padding: "0 0.75rem 0 0.75rem",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
    }}>
      <p style={{margin:"0"}}>{value}</p>
      <span style={{padding:"5px" ,textTransform: "uppercase",
    fontSize: "0.75rem",
    lineHeight: "1rem"}}>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;