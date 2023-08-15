import PropTypes from "prop-types";
import { AiOutlineFileSearch } from "react-icons/ai";
import Card from "./Card";

export default function CardContainer({ data }) {
  return (
    <div className="w-full grid grid-cols-1 mx-auto sm:grid-cols-3 lg:grid-cols-5 gap-6 container my-[60px] max-w-[300px] sm:max-w-7xl">
      {data?.length > 0 ? (
        data.map((item) => <Card key={item.id} item={item} />)
      ) : (
        <div className="flex flex-col justify-center items-center col-span-full">
          <div className="h-[160px] w-[160px] mb-6">
            <AiOutlineFileSearch className="h-full w-full" />
          </div>
          <h3 className="text-2xl font-semibold">No Movie Found</h3>
        </div>
      )}
    </div>
  );
}

CardContainer.propTypes = {
  data: PropTypes.array,
};
