import React from "react";
import logo from "../assets/logo.png";
import { Github } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const menuLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mx-2 hover:bg-primary-content p-1 ${isActive ? "text-primary border rounded" : "text-base-content"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/apps"
        className={({ isActive }) =>
          `mx-2 hover:bg-primary-content p-1 ${isActive ? "text-primary border rounded" : "text-base-content"}`
        }
      >
        Apps
      </NavLink>
      <NavLink
        to="/installation"
        className={({ isActive }) =>
          `mx-2 hover:bg-primary-content p-1 ${isActive ? "text-primary border rounded" : "text-base-content"}`
        }
      >
        Installation
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="reserved">
        <div className="reserved">
          {/* ///////////////////////// */}
          {/* ///////////////////////// */}
          {/* ///////////////////////// */}
          <div className="navbar px-4 md:px-12  shadow-sm">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost hover:bg-primary-content lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {menuLinks}
                </ul>
              </div>
              <NavLink
                to="/"
                className="hover:bg-primary-content flex items-center gap-1 p-1"
              >
                <img src={logo} alt="Logo" className="w-8 h-8" />
                <span className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                  HERO.IO
                </span>
              </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{menuLinks}</ul>
            </div>
            <div className="navbar-end">
              <a
                href="https://github.com/Shamim-Faqer"
                target="_blank"
                className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
              >
                {" "}
                <Github />
                Contribute
              </a>
            </div>
          </div>

          {/* ///////////////////////// */}
          {/* ///////////////////////// */}
          {/* ///////////////////////// */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
