import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { FiAlignCenter } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function NavBar() {
  const [name, setName] = useState("");
  const { fetchNameData } = useContext(AppContext);
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  function clickHandler() {
    const trimmedName = name.trim();
    if (trimmedName === "") {
      setSearchBar(!searchBar);
      return;
    }
    navigate(`/Name/${trimmedName}`);
    setName("");
    setSearchBar(false);
  }

  return (
    <header className="w-full shadow-xl rounded-2xl px-3 py-1 relative z-50 bg-white">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2022/12/19/knife-and-spoon-logo-illustration-restau-Graphics-53344747-1.jpg"
            alt="Logo"
            className="w-[100px] md:w-[150px] object-contain"
          />
        </NavLink>

        <nav className="hidden lg:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:bg-[#e9c5ac] px-3 py-2 rounded-xl transition ${
                isActive ? "underline" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/category"
            className={({ isActive }) =>
              `hover:bg-[#e9c5ac] px-3 py-2 rounded-xl transition ${
                isActive ? "underline" : ""
              }`
            }
          >
            Category
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="Enter Dish Name"
              className={`transition-all duration-200 bg-[#905228] text-white placeholder-white px-3 py-2 rounded-xl shadow-md focus:outline-none hover:bg-[#e29c6c] ${
                searchBar ? "opacity-100 scale-100 w-40" : "opacity-0 scale-0 w-0"
              } lg:opacity-100 lg:scale-100 lg:w-40`}
            />
            <button
              onClick={clickHandler}
              className="p-2 rounded-full bg-white shadow hover:shadow-lg active:scale-95 transition text-gray-700 hover:text-black"
            >
              <CiSearch className="w-6 h-6" />
            </button>
          </div>

          <button
            onClick={() => setSideBar(!sideBar)}
            className="lg:hidden border p-1 rounded text-xl"
          >
            {sideBar ? <RxCross2 /> : <FiAlignCenter />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute right-4 top-[100%] mt-2 bg-[#905228] rounded-md flex flex-col items-center gap-2 px-4 py-3 text-white shadow-xl transition-all duration-300 ${
          sideBar ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <NavLink to="/" onClick={() => setSideBar(false)}>
          Home
        </NavLink>
        <NavLink to="/category" onClick={() => setSideBar(false)}>
          Category
        </NavLink>
      </div>
    </header>
  );
}

export default NavBar;
