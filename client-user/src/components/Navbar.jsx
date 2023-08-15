import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import netflixLogo from "../assets/images/netflix-logo.svg";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarBg = scrolling
    ? "bg-black shadow transition-all duration-300 h-20 border-b"
    : "h-16";
  const navLink = scrolling ? "text-lg" : "text-normal";
  const searchBtn = scrolling ? "text-[24px]" : "text-[20px]";

  return (
    <>
      <nav className={`fixed w-full ${navbarBg} z-[99]`}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full">
          {/* Navbar */}
          <div className="relative flex h-full items-center justify-between">
            {/* left */}
            <div className="flex flex-shrink-0 items-center justify-center w-[150px] sm:w-[200px]">
              <img
                src={netflixLogo}
                alt="netflix icon"
                className="h-8 w-auto"
              />
            </div>
            {/* center */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center justify-center">
                <Link
                  to="/"
                  className={`${navLink} hover:bg-secondary-color hover:bg-opacity-30 hover:text-white rounded-md px-3 py-2 font-medium transition-all duration-300`}
                >
                  Home
                </Link>
                <Link
                  to="/soon"
                  className={`${navLink} hover:bg-secondary-color hover:bg-opacity-30 hover:text-white rounded-md px-3 py-2 font-medium transition-all duration-300`}
                >
                  TV Shows
                </Link>
                <Link
                  to="soon"
                  className={`${navLink} hover:bg-secondary-color hover:bg-opacity-30 hover:text-white rounded-md px-3 py-2 font-medium transition-all duration-300`}
                >
                  Popular
                </Link>
                <Link
                  to="soon"
                  className={`${navLink} hover:bg-secondary-color hover:bg-opacity-30 hover:text-white rounded-md px-3 py-2 font-medium transition-all duration-300`}
                >
                  Top IMDB
                </Link>
              </div>
            </div>
            {/* right */}
            <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 w-[200px]">
              <Link
                to="/"
                className="relative rounded-full p-1 text-gray-400 hover:text-white hover:scale-110"
                onClick={scrollToTop}
              >
                <HiSearch className={searchBtn} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
