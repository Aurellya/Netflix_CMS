import { useState } from "react";
import PropTypes from "prop-types";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search({ onSearch }) {
  const [form, setForm] = useState({
    search: "",
  });

  const onChange = (e) => {
    const { name, value } = e?.target || {};
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(form.search);
  };

  return (
    <form
      className="px-6 sm:px-0 pt-2 text-gray-600 mt-[20px] mb-[20px] flex justify-center gap-[10px] max-w-full w-full"
      onSubmit={handleSearch}
    >
      <input
        className="border-2 bg-white h-14 px-6 pr-16 rounded-full text-lg text-black focus:outline-none w-full sm:w-[700px]"
        type="search"
        name="search"
        value={form.search}
        onChange={onChange}
        placeholder="Search"
      />
      <button
        type="submit"
        className="bg-white px-3 h-14 w-14 rounded-full hover:opacity-80 transition-all duration-100 flex items-center justify-center"
      >
        <FaMagnifyingGlass className="fa-solid fa-magnifying-glass text-primary-color text-lg" />
      </button>
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
};
