import React from "react";

const Error = ({ info, refetch }) => {
  return (
    <div>
      <h1>{info}</h1>

      <button onClick={refetch}>Tekrar Dene</button>
    </div>
  );
};

export default Error;
