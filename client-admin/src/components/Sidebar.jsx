import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaHouseChimney,
  FaHashtag,
  FaUserPlus,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import netflixLogo from "../assets/images/netflix-logo.svg";

export default function Sidebar() {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    navigate("/login");
    toast.success("Logout Successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-tertiary-color"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-primary-color text-neutral-color">
          <div className="mt-[44px] mb-[40px] px-[34px] pb-2">
            <img src={netflixLogo} alt="netflix icon" />
          </div>

          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "hover:bg-tertiary-color bg-tertiary-color flex items-center p-2 rounded-lg"
                    : "hover:bg-[#2C2C2C] flex items-center p-2 rounded-lg"
                }
              >
                <span className="w-10 h-6 flex items-center justify-center">
                  <FaHouseChimney className="text-[18px]" />
                </span>

                <span className="ml-2">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/genres"
                className={({ isActive }) =>
                  isActive
                    ? "hover:bg-tertiary-color bg-tertiary-color flex items-center p-2 rounded-lg"
                    : "hover:bg-[#2C2C2C] flex items-center p-2 rounded-lg"
                }
              >
                <span className="w-10 h-6 flex items-center justify-center">
                  <FaHashtag className="text-[18px]" />
                </span>

                <span className="ml-2">Genres</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register-admin"
                className={({ isActive }) =>
                  isActive
                    ? "hover:bg-tertiary-color bg-tertiary-color flex items-center p-2 rounded-lg"
                    : "hover:bg-[#2C2C2C] flex items-center p-2 rounded-lg"
                }
              >
                <span className="w-10 h-6 flex items-center justify-center">
                  <FaUserPlus className="text-[18px]" />
                </span>

                <span className="ml-2">Register Admin</span>
              </NavLink>
            </li>

            <li>
              <button
                className="hover:bg-[#2C2C2C] flex items-center p-2 rounded-lg w-full"
                onClick={() => signOut()}
              >
                <span className="w-10 h-6 flex items-center justify-center">
                  <FaArrowRightFromBracket className="text-[18px]" />
                </span>

                <span className="ml-2">Sign Out</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
