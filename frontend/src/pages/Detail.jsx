import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import { FaTrash } from "react-icons/fa";

const Detail = () => {
  const { id } = useParams();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["movie", id], // id benzersiz olması için ekleniyor.
    queryFn: () => api.get(`/api/movies/${id}`).then((res) => res.data),
  });
  console.log(data);
  if (isLoading) return <Loader />;
  if (error) return <Error info={error} refetch={refetch} />;
  return (
    <div className="p-10">
      <div className="flex justify-end">
        <button className="bg-red-600 text-white p-2 rounded-md hover:bg-red-400">
          <FaTrash />
        </button>
      </div>

      <div className="flex flex-col gap-10 items-center md:flex-row">
        <div>
          <img
            src={`https://picsum.photos/seed/${data.id}/250/400`}
            alt="poster"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-10">
          {/* Başlık */}
          <h1 className=" text-3xl font-semibold">{data.title}</h1>
          {/* todo renk skor */}
          <p>
            <span className="font-semibold me-3">İzleyici Skoru:</span>
            <span className="p-2 rounded-full font-semibold bg-gray-200">
              {Number(data.rating).toFixed(1)}
            </span>
          </p>
          {/* Dil */}
          <Field label="Dil" value={data.language} />
          {/* Süre */}
          <Field label="Süre" value={data.duration} />
          {/* Yapımcı */}
          <Field label="Yapımcı" value={data.director} />
          {/* Yıl */}
          <Field label="Yıl" value={data.year} />
        </div>
      </div>
    </div>
  );
};

export default Detail;

const Field = ({ label, value }) => {
  return (
    <p>
      <span className="font-semibold me-3">{label}:</span>
      <span className="p-2 rounded-full font-semibold bg-gray-200">
        {value}
      </span>
    </p>
  );
};
