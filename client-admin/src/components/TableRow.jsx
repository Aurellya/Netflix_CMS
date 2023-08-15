import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import formatDate from "../utils/formatDate";

export default function TableRow({ label, attributes, deleteData }) {
  return (
    <tr className="border-b border-gray-200 text-white text-center">
      {Object.keys(attributes).map((item, idx) => (
        <td
          key={idx}
          className={`px-6 py-4 ${
            item === "title" || item === "genre" || item === "name"
              ? "text-left"
              : "text-center"
          }`}
        >
          {item === "createdAt" || item === "updatedAt"
            ? formatDate(attributes[item])
            : attributes[item]}
        </td>
      ))}

      {label?.name === "movies" && (
        <td className="px-6">
          <Link
            to={`/movies/${label.id}`}
            className="bg-secondary-color px-3 py-1.5 rounded-md hover:opacity-80 transition-all duration-100"
          >
            View details
          </Link>
        </td>
      )}

      <td className="px-6 py-4">
        <div className="flex items-center justify-center space-x-2 max-w-[140px] mx-auto">
          <Link
            to={`/${label.name === "movies" ? "movies" : "genres"}/${
              label.id
            }/edit`}
            className="text-neutral-color cursor-pointer font-semibold hover:underline w-1/2 text-center"
          >
            Edit
          </Link>
          <span>|</span>
          <button
            className="px-1 text-secondary-color cursor-pointer font-semibold hover:underline w-1/2 text-center"
            onClick={() =>
              deleteData(
                label.id,
                label.name === "movies" ? attributes.title : attributes.name
              )
            }
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  label: PropTypes.object,
  attributes: PropTypes.object,
  deleteData: PropTypes.func,
};
