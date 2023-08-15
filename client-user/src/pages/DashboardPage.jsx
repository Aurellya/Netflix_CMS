import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../stores/actions/actionCreator";
import PreLoader from "../components/PreLoader";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";

export default function DashboardPage() {
  const { movies, moviesLoading } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleSearch = (query) => {
    dispatch(fetchMovies(query));
  };

  if (moviesLoading) {
    return <PreLoader />;
  }

  return (
    <div className=" w-full text-center min-h-screen">
      <Header onSearch={handleSearch} />
      <CardContainer data={movies} />
    </div>
  );
}
