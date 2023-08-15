import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa6";
import { deleteGenre, fetchGenres } from "../stores/actions/actionCreator";
import genreColumns from "../stores/constants/genreColumns";
import toastOptions from "../stores/constants/toastOptions";
import PreLoader from "../components/PreLoader";
import Search from "../components/Search";
import Table from "../components/Table";

export default function GenresPage() {
  const { genres, genresLoading } = useSelector((state) => state.genre);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const handleDeleteGenre = (genreId, genreName) => {
    Swal.fire({
      title: "<h2>Are you sure?</h2>",
      icon: "warning",
      html: "you want to delete this genre",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "<span>Yes, delete now!</span>",
      confirmButtonColor: "#007EFF",
      cancelButtonText: "<span>Cancel</span>",
      cancelButtonColor: "#FF5564",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteGenre(+genreId));
        toast.success(
          `Genre '${genreName}' is Deleted Successfully!`,
          toastOptions
        );
      }
    });
  };

  const handleSearch = (query) => {
    dispatch(fetchGenres(query));
  };

  if (genresLoading) {
    return <PreLoader />;
  }

  return (
    <>
      <div className="py-[60px] sm:ml-64 px-[50px]">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">Genre List</h1>
          <Link
            to="/genres/add"
            className="bg-secondary-color hover:opacity-80 transition-all duration-100 text-white py-2 px-4 text-sm font-semibold rounded inline-flex items-center"
          >
            <FaPlus />
            &nbsp;<span>Add Genre</span>
          </Link>
        </div>

        <Search onSearch={handleSearch} />
        <Table
          label={{ name: "genres" }}
          data={genres}
          columns={genreColumns}
          deleteData={handleDeleteGenre}
        />
      </div>

      <Outlet />
    </>
  );
}
