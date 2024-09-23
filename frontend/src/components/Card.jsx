import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const r = Number(movie.rating);
  // rating'e göre renk belirle
  const color =
    r > 9
      ? "#0073ff"
      : r > 7.5
      ? "#04de04"
      : r > 5
      ? "orange"
      : r > 3
      ? "#d6c918"
      : "red";

  return (
    <Link
      to={`/movie/${movie.id}`}
      className=" border shadow p-3 rounded-md hover:shadow-lg cursor-pointer transition flex  flex-col max-sm:flex-row max-sm:gap-5"
    >
      <div className="relative ">
        <img
          className="rounded w-full object-cover min-w-[100px] max-h-[250px]  max-sm:max-h-[150px]"
          src={`https://picsum.photos/seed/${movie.id}/200/300`}
          alt="poster"
        />
        <span
          style={{ background: color }}
          className="absolute rounded-full p-1 sm:p-2 text-white font-semibold bg-blue-300 right-[-10px] top-[-10px]"
        >
          {Number(movie.rating).toFixed(1)}
        </span>
      </div>
      <div className="flex flex-col justify-between md:gap-2 h-full">
        <h3 className=" line-clamp-2 font-semibold text-xl  md:mt-4">
          {movie.title}
        </h3>
        <div className="flex flex-col gap-1 md:gap-3">
          <p>{movie.year}</p>
          <p className="flex gap-1">
            {movie.genre.map((genre, i) => (
              <span
                key={i}
                className="bg-gray-300 hover:bg-gray-400 rounded-md py-1 px-2"
              >
                {genre}
              </span>
            ))}
          </p>
          <p className="bg-red-500 hover:bg-red-400 rounded-md py-1 px-2  w-fit text-white">
            {movie.language}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
