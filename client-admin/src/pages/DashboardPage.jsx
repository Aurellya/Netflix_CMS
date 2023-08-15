import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa6";
import { fetchMovies, deleteMovie } from "../stores/actions/actionCreator";
import Search from "../components/Search";
import PreLoader from "../components/PreLoader";
import Table from "../components/Table";
import movieColumns from "../stores/constants/movieColumns";
import toastOptions from "../stores/constants/toastOptions";

export default function DashboardPage() {
  const { movies, moviesLoading } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleDeleteMovie = (movieId, movieTitle) => {
    Swal.fire({
      title: "<h2>Are you sure?</h2>",
      icon: "warning",
      html: "you want to delete this movie",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "<span>Yes, delete now!</span>",
      confirmButtonColor: "#007EFF",
      cancelButtonText: "<span>Cancel</span>",
      cancelButtonColor: "#FF5564",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMovie(+movieId));
        toast.success(
          `Movie with title '${movieTitle}' is Deleted Successfully!`,
          toastOptions
        );
      }
    });
  };

  const handleSearch = (query) => {
    dispatch(fetchMovies(query));
  };

  if (moviesLoading) {
    return <PreLoader />;
  }

  return (
    <>
      <div className="py-[60px] sm:ml-64 px-[50px]">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">Movie List</h1>
          <Link
            to="/movies/add"
            className="bg-secondary-color hover:opacity-80 transition-all duration-100 text-white py-2 px-4 text-sm font-semibold rounded inline-flex items-center"
          >
            <FaPlus />
            &nbsp;<span>Add Movie</span>
          </Link>
        </div>

        <Search onSearch={handleSearch} />
        <Table
          label={{ name: "movies" }}
          data={movies}
          columns={movieColumns}
          deleteData={handleDeleteMovie}
        />
      </div>

      <Outlet />
    </>
  );
}
