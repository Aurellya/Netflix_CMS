import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editGenre, fetchGenreDetails } from "../stores/actions/actionCreator";
import toastOptions from "../stores/constants/toastOptions";
import PreLoader from "../components/PreLoader";
import GenreForm from "../components/GenreForm";

export default function EditGenreModal() {
  const { genre, genreLoading } = useSelector((state) => state.genre);
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenreDetails(+id));
  }, [dispatch, id]);

  if (genreLoading) {
    return <PreLoader />;
  }

  const handleEditGenre = async (form, cb) => {
    try {
      await dispatch(editGenre(+id, form));
      cb();
      navigate("/genres");
      toast.success(
        `Genre with id ${id} renamed to '${form.name}' Successfully!`,
        toastOptions
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message ? error.message : error, toastOptions);
    }
  };

  return (
    <>
      <GenreForm genre={genre} handleSubmit={handleEditGenre} />
    </>
  );
}
