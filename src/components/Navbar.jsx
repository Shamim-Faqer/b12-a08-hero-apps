import React from "react";
import logo from "../assets/logo.png";
import { Github } from 'lucide-react';

function Navbar() {
  const menuLinks = (
    <>
      <li className="mx-2">Home</li>
      <li className="mx-2">Apps</li>
      <li className="mx-2">Installation</li>
    </>
  );

  return (
    <div>
      <div className="reserved">
        <div className="reserved">
          {/* ///////////////////////// */}
          {/* ///////////////////////// */}
          {/* ///////////////////////// */}
          <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
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
              <a className="btn btn-ghost text-xl flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-8 h-8" />
                <span>HERO.IO</span>
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{menuLinks}</ul>
            </div>
            <div className="navbar-end">
              <a className="btn btn-primary"> <Github />
                Contribute</a>
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
