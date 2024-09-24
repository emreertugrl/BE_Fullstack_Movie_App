import React from "react";

const Error = ({ info, refetch }) => {
  return (
    <div className="my-10 px-20 text-center bg-red-500  p-5 rounded-md max-w-[500px] mx-auto text-white">
      <h1>Üzgünüz bir sorun oluştu :(</h1>
      <h1>{info}</h1>

      <button
        onClick={refetch}
        className=" rounded border roun-md px-3 mt-5 hover:bg-white hover:text-black transition"
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
