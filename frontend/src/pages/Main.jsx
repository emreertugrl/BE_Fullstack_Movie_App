import api from "./../utils/api";
import { useQuery } from "@tanstack/react-query";
import Loader from "./../components/Loader";
import Error from "../components/Error";

const Main = () => {
  //
  // sayfaya girildiğinde filmleri almak için api isteği at
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["movies"],
    queryFn: () => api.get("/api/movies").then((res) => res.data.movies),
  });
  console.log(data);

  return (
    <div className="px-5 md:px-10">
      <h2>Hero</h2>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error.message} refetch={refetch} />
      ) : (
        data.map((movie) => <div key={movie.id}>kart</div>)
      )}
    </div>
  );
};

export default Main;
