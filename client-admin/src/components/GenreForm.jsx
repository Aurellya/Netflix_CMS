import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { FaXmark } from "react-icons/fa6";

export default function GenreForm({ genre, handleSubmit }) {
  const initialFormState = {
    name: genre?.name || "",
  };

  const [form, setForm] = useState({ ...initialFormState });

  const onChange = (e) => {
    const { name, value } = e?.target || {};
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmitGenre = (e) => {
    e.preventDefault();
    handleSubmit(form, () => setForm(initialFormState));
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex justify-center items-center min-h-screen h-full w-full flex-col bg-tertiary-color backdrop-blur bg-opacity-90 p-6">
      <div className="max-h-[98%] overflow-y-auto">
        <form
          onSubmit={handleSubmitGenre}
          className="border-t-2 border-t-secondary-color mt-24 space-y-8 rounded bg-primary-color pt-10 pb-14 px-6 md:mt-0 md:max-w-md md:px-14 min-w-[600px]"
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-semibold">
              {genre ? "Edit" : "Add"}&nbsp;Genre
            </h1>
            <Link to="/genres" className="flex items-center justify-center">
              <FaXmark className="fa-solid fa-xmark text-[24px] " />
            </Link>
          </div>

          {/* TITLE */}
          <div className="space-y-4">
            <label htmlFor="name" className="inline-block w-full">
              Genre Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Genre Name"
              className="w-full rounded bg-tertiary-color px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
            />
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

GenreForm.propTypes = {
  genre: PropTypes.object,
  handleSubmit: PropTypes.func,
};
