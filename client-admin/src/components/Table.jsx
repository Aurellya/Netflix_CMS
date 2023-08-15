import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import TableRow from "./TableRow";
import { AiOutlineFileSearch } from "react-icons/ai";

export default function Table({ label, data, columns, deleteData }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[50px]">
      {data?.length > 0 ? (
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-white uppercase border-b-white border-b-[1px]">
            <tr>
              {columns?.map((column, idx) => (
                <th
                  scope="col"
                  className={`px-6 py-3 ${
                    column === "Genre" || column === "Movie Title"
                      ? "text-left"
                      : "text-center"
                  }`}
                  key={idx}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item, idx) => (
              <TableRow
                key={idx}
                label={{ ...label, id: item.id }}
                attributes={
                  label.name === "movies"
                    ? {
                        no: idx + 1,
                        title: item.title,
                        genre: item.Genre?.name,
                        rating: item.rating,
                        createdAt: item.createdAt,
                      }
                    : {
                        no: idx + 1,
                        name: item.name,
                        createdAt: item.createdAt,
                        updatedAt: item.updatedAt,
                      }
                }
                deleteData={deleteData}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col justify-center items-center mt-[60px]">
          <div className="h-[160px] w-[160px] mb-6">
            <AiOutlineFileSearch className="h-full w-full" />
          </div>
          <h3 className="text-2xl font-semibold">No Data Found</h3>
        </div>
      )}
    </div>
  );
}

Table.propTypes = {
  label: PropTypes.object,
  data: PropTypes.array,
  columns: PropTypes.array,
  deleteData: PropTypes.func,
};
