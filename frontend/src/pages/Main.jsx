import api from "./../utils/api";
import { useQuery } from "@tanstack/react-query";
import Loader from "./../components/Loader";
import Error from "../components/Error";
import Card from "./../components/Card";
import Hero from "../components/Hero";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [params, setParams] = useSearchParams();

  const options = {
    params: {
      query: params.get("query"),
    },
  };
  //
  // sayfaya girildiğinde filmleri almak için api isteği at
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["movies", options],
    queryFn: () =>
      api.get("/api/movies", options).then((res) => {
        console.log(res.data[0]);
        return res.data;
      }),
  });

  return (
    <div className="">
      <Hero />
      <div className="lg:px-7 p-3">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error.message} refetch={refetch} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  md:p-4">
            {data.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
