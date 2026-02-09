import React from "react";
import PageNotFoundimg from "../assets/error-404.png";

function PageNotFound() {
  return (
    <div className="p-12 flex flex-1 flex-col justify-center items-center gap-3 max-h-screen">
      <img src={PageNotFoundimg} alt="" />
      <h2>Oops, page not found!</h2>
      <p>The page you are looking for is not available.</p>
      <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
        Go Back
      </a>
    </div>
  );
}

export default PageNotFound;
