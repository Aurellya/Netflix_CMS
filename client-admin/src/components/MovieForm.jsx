import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiArrowDropDownLine, RiDeleteBin5Fill } from "react-icons/ri";
import { HiOutlinePlus } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { fetchGenres } from "../stores/actions/actionCreator";
import toastOptions from "../stores/constants/toastOptions";

export default function MovieForm({ movie, handleSubmit }) {
  const { genres } = useSelector((state) => state?.genre);

  const initialFormState = {
    title: movie?.title || "",
    synopsis: movie?.synopsis || "",
    trailerUrl: movie?.trailerUrl || "",
    imgUrl: movie?.imgUrl || "",
    rating: movie?.rating || 0,
    genreId: movie?.genreId || null,
    Casts: movie?.Casts || [
      { name: "", profilePict: "" },
      { name: "", profilePict: "" },
      { name: "", profilePict: "" },
    ],
  };

  const [form, setForm] = useState({ ...initialFormState });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const onChange = (e) => {
    const { name, value } = e?.target || {};
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmitMovie = (e) => {
    e.preventDefault();
    handleSubmit(form, () => setForm(initialFormState));
  };

  const handleCastChange = (index, event) => {
    const dataCast = [...form.Casts];
    dataCast[index][event.target.name] = event.target.value;
    setForm({ ...form, Casts: dataCast });
  };

  const handleAddCast = () => {
    const newfield = { name: "", profilePict: "" };
    setForm({ ...form, Casts: [...form.Casts, newfield] });
  };

  const handleDeleteCast = (index) => {
    try {
      if (form?.Casts.length <= 3) {
        throw { name: "Total Casts should be 3 or more" };
      }

      const dataCast = [...form.Casts];
      dataCast.splice(index, 1);
      setForm({ ...form, Casts: dataCast });
    } catch (error) {
      console.log(error);
      toast.error(error.name, toastOptions);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex justify-center items-center min-h-screen h-full w-full flex-col bg-tertiary-color backdrop-blur bg-opacity-90 p-6">
      <div className="max-h-[98%] overflow-y-auto">
        <form
          onSubmit={handleSubmitMovie}
          className="border-t-2 border-t-secondary-color mt-24 space-y-8 rounded bg-primary-color pt-10 pb-14 px-6 md:mt-0 md:max-w-md md:px-14 min-w-[800px]"
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-semibold">
              {movie ? "Edit" : "Add"}&nbsp;Movie
            </h1>
            <Link to="/" className="flex items-center justify-center">
              <FaXmark className="fa-solid fa-xmark text-[24px] " />
            </Link>
          </div>

          {/* TITLE */}
          <div className="space-y-4">
            <label htmlFor="name" className="inline-block w-full">
              Movie Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={onChange}
              placeholder="Movie Name"
              className="w-full rounded bg-tertiary-color px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
            />
          </div>

          {/* SYNOPSIS */}
          <div className="space-y-4">
            <label htmlFor="synopsis" className="inline-block w-full">
              Synopsis
            </label>
            <textarea
              id="synopsis"
              name="synopsis"
              value={form.synopsis}
              onChange={onChange}
              cols="30"
              rows="5"
              placeholder="Synopsis"
              className="w-full rounded bg-tertiary-color px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
            ></textarea>
          </div>

          {/* TRAILER URL */}
          <div className="space-y-4">
            <label htmlFor="trailerUrl" className="inline-block w-full">
              Trailer Url
            </label>
            <input
              type="text"
              id="trailerUrl"
              name="trailerUrl"
              value={form.trailerUrl}
              onChange={onChange}
              placeholder="Trailer Url"
              className="w-full rounded bg-tertiary-color px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
            />
          </div>

          {/* IMAGE URL */}
          <div className="space-y-4">
            <label htmlFor="imageUrl" className="inline-block w-full">
              Image Url
            </label>
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              value={form.imgUrl}
              onChange={onChange}
              placeholder="Image Url"
              className="w-full rounded bg-tertiary-color px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
            />
          </div>

          {/* RATING */}
          <div className="space-y-4">
            <label htmlFor="rating" className="inline-block w-full">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={form.rating}
              onChange={onChange}
              placeholder="Rating"
              className="w-full rounded bg-tertiary-color px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
            />
          </div>

          {/* GENRE */}
          <div className="space-y-4 relative">
            <label htmlFor="countries" className="inline-block w-full">
              Genre
            </label>
            <select
              id="genreId"
              name="genreId"
              value={form?.genreId}
              onChange={onChange}
              className={`${
                form?.genreId ? "text-white" : "text-[#808080]"
              } w-full rounded bg-tertiary-color px-5 py-3.5 placeholder-[gray]  outline-none focus:bg-[#3b3b3b]`}
            >
              <option value="" disabled>
                Choose a genre
              </option>
              {genres?.map((genre) => (
                <option value={genre?.id} key={genre?.id}>
                  {genre?.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-8 top-[30px] flex items-center px-2 pointer-events-none">
              <span className="text-white select-custom-icon">
                <RiArrowDropDownLine className="absolute top-0 left-0 text-white text-[40px]" />
              </span>
            </div>
          </div>

          {/* CASTS */}
          <div className="space-y-4 relative" id="cast">
            <label htmlFor="castName" className="inline-block w-full">
              Casts
            </label>
            {form.Casts.map((cast, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex-grow">
                  <input
                    type="text"
                    id="castName"
                    name="name"
                    value={cast?.name}
                    onChange={(event) => handleCastChange(idx, event)}
                    placeholder="Cast Name"
                    className="w-full rounded bg-tertiary-color px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
                  />
                  <hr />
                  <input
                    type="text"
                    name="profilePict"
                    value={cast?.profilePict}
                    onChange={(event) => handleCastChange(idx, event)}
                    placeholder="Profile Picture URL"
                    className="w-full rounded bg-tertiary-color px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
                  />
                </div>
                <button
                  className="h-full text-[22px] text-white hover:opacity-60 transition-all duration-100"
                  onClick={() => handleDeleteCast(idx)}
                  type="button"
                >
                  <RiDeleteBin5Fill />
                </button>
              </div>
            ))}
          </div>

          {/* ADD CAST BTN */}
          <div className="space-y-4 relative" id="castsDiv">
            <button
              className="flex items-center justify-center gap-1 border-b border-primary-color hover:border-b hover:border-white pb-1"
              onClick={() => handleAddCast()}
              type="button"
            >
              <span>
                <HiOutlinePlus />
              </span>
              <span>Add Cast</span>
            </button>
          </div>

          {/* SUBMIT BTN */}
          <button
            className="w-full rounded bg-secondary-color py-3 font-semibold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

MovieForm.propTypes = {
  movie: PropTypes.object,
  handleSubmit: PropTypes.func,
};
