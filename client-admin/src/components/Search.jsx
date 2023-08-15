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
      className="pt-2 text-gray-600 mt-[20px] mb-[20px] flex gap-[10px]"
      onSubmit={handleSearch}
    >
      <input
        className="border-2 bg-white h-10 px-3 pr-16 rounded-md text-sm text-black focus:outline-none min-w-[400px]"
        type="search"
        name="search"
        value={form.search}
        onChange={onChange}
        placeholder="Search"
      />
      <button
        type="submit"
        className="bg-white px-3 rounded-md hover:opacity-80 transition-all duration-100"
      >
        <FaMagnifyingGlass className="fa-solid fa-magnifying-glass text-primary-color" />
      </button>
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
};
