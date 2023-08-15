import PropTypes from "prop-types";
import Search from "./Search";
import bgImg from "../assets/images/bg-min.jpeg";

export default function Header({ onSearch }) {
  return (
    <div className="pt-[120px] sm:pt-[160px] relative">
      <div
        className="absolute top-0 left-0 w-full h-[270px] z-[-1] bg-cover bg-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImg}) center/cover no-repeat`,
        }}
      ></div>
      <h1 className="font-semibold text-3xl">Find Movies, TV Shows and more</h1>
      <div className="flex justify-center my-4">
        <Search onSearch={onSearch} />
      </div>
    </div>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func,
};
