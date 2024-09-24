import React from "react";
import InputField from "../components/InputField";
import { inputs } from "../utils/constants";
import api from "./../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputlardaki veriyi al
    const formData = new FormData(e.target);
    const movieData = Object.fromEntries(formData.entries());

    // kategori ve cast diziye çevir
    movieData.genre = movieData.genre.split(",");
    movieData.cast = movieData.cast.split(",");

    // api'a film oluşturmak için http isteği at
    api
      .post("/api/movies", movieData)
      .then((res) => {
        // bildirim
        toast.success("Film Listeye Eklendi");
        // yönlendirme
        navigate(`/movie/${res.data.id}`);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Üzgünüz :( işlem başarısız.");
      });
  };
  return (
    <div className="bg-yellow-600 flex-1 grid place-items-center px-5 py-8">
      <div className="bg-white max-w-[800px] w-full p-10 rounded shadow-lg  gap-10">
        <h1 className="text-3xl font-semibold ">Yeni Film Oluştur</h1>
        <form
          onSubmit={handleSubmit}
          className="gap-4 mt-4 grid grid-cols-1 md:grid-cols-2"
        >
          {inputs.map((input, i) => (
            <InputField {...input} key={i} />
          ))}

          <button className="shadow border py-3 rounded-lg hover:shadow-lg hover:bg-gray-200 transition">
            Oluştur
          </button>
        </form>

        {/* <div className="mt-4 md:mt-10">
          <img
            src="/movie-bg.jpg"
            className="rounded-full max-h-[200px] m-auto"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Create;
