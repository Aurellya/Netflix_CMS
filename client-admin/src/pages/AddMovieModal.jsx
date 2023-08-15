import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addMovie } from "../stores/actions/actionCreator";
import toastOptions from "../stores/constants/toastOptions";
import MovieForm from "../components/MovieForm";

export default function AddMovieModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddMovie = async (form, cb) => {
    try {
      await dispatch(addMovie(form));
      cb();
      navigate("/");
      toast.success(
        `Movie with title '${form.title}' is Added Successfully!`,
        toastOptions
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message ? error.message : error, toastOptions);
    }
  };

  return (
    <>
      <MovieForm handleSubmit={handleAddMovie} />
    </>
  );
}
