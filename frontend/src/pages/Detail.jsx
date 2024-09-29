import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import ListField from "../components/ListField";
import DeleteButton from "../components/DeleteButton";

const Detail = () => {
  const { id } = useParams();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["movie", id], // id benzersiz olması için ekleniyor.
    queryFn: () => api.get(`/api/movies/${id}`).then((res) => res.data),
  });

  if (isLoading) return <Loader />;

  if (error) return <Error info={error} refetch={refetch} />;
  console.log(data);
  return (
    <div className="p-10">
      <div className="flex justify-end">
        <DeleteButton id={data.id} />
      </div>
      <div className="flex flex-col gap-10 items-center md:flex-row">
        <div className="md:w-[500px] max-h-[500px]">
          <img
            src={`https://picsum.photos/seed/${data.id}/250/400`}
            alt="poster"
            className="rounded-md md:w-[500px] h-[400px] object-contain "
          />
        </div>
        <div className="flex flex-col gap-10">
          {/* Başlık */}
          <div>
            <h1 className=" text-3xl font-semibold mb-3">{data.title}</h1>
            <p>{data.description}</p>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {/* Yapımcı */}
            <Field label="Yapımcı" value={data.director} />
            {/* Süre */}
            <Field label="Süre" value={data.duration} />
            {/* todo renk skor */}
            <Field
              label="İzleyici Skoru:"
              value={Number(data.rating).toFixed(1)}
            />
            {/* Dil */}
            <Field label="Dil" value={data.language} />
            {/* Yıl */}
            <Field label="Yıl" value={data.year} />
          </div>
          {/* Ekip */}
          <ListField label="Ekip" arr={data.cast} />
          {/* Türler */}
          <ListField label="Türler" arr={data.genre} />
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
