import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineExpand } from "react-icons/ai";

export default function Card({ item }) {
  return (
    <Link
      to={`/movies/${item?.slug}`}
      className="relative rounded-lg overflow-hidden shadow-md mb-2 cursor-pointer hover:opacity-60 transition-all duration-100"
    >
      <img src={item?.imgUrl} alt="item?.title" className="w-full h-[340px]" />

      <div className="absolute mb-[60px] inset-0 flex items-center justify-center opacity-0 transition-all duration-500 hover:opacity-100 hover:text-[80px]">
        <AiOutlineExpand className="text-secondary-color" />
      </div>

      <div className="text-left px-1 mb-2 py-2">
        <h2 className="text-xl font-semibold text-white">{item?.title}</h2>
        <div>
          <span>{item?.Genre?.name}</span>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  item: PropTypes.object,
};
