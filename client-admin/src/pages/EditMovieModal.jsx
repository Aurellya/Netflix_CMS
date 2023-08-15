import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editMovie, fetchMovieDetails } from "../stores/actions/actionCreator";
import toastOptions from "../stores/constants/toastOptions";
import MovieForm from "../components/MovieForm";
import PreLoader from "../components/PreLoader";

export default function EditMovieModal() {
  const { movie, movieLoading } = useSelector((state) => state.movie);
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(+id));
  }, [dispatch, id]);

  if (movieLoading) {
    return <PreLoader />;
  }

  const handleEditMovie = async (form, cb) => {
    try {
      await dispatch(editMovie(id, form));
      cb();
      navigate("/");
      toast.success(
        `Movie with id ${id} is Edited Successfully!`,
        toastOptions
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message ? error.message : error, toastOptions);
    }
  };

  return (
    <>
      <MovieForm movie={movie} handleSubmit={handleEditMovie} />
    </>
  );
}
