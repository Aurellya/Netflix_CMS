import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addGenre } from "../stores/actions/actionCreator";
import toastOptions from "../stores/constants/toastOptions";
import GenreForm from "../components/GenreForm";

export default function AddGenreModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddGenre = async (form, cb) => {
    try {
      await dispatch(addGenre(form));
      cb();
      navigate("/genres");
      toast.success(
        `Genre with title '${form.name}' is Added Successfully!`,
        toastOptions
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message ? error.message : error, toastOptions);
    }
  };

  return (
    <>
      <GenreForm handleSubmit={handleAddGenre} />
    </>
  );
}
