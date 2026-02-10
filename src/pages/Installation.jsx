import React, { useEffect, useState } from "react";
import appNotFoundImg from "../assets/App-Error.png";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function Installation() {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installed-apps")) || [];
    setInstalledApps(savedApps);
  }, []);

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedData = [...installedApps].sort((a, b) => {
     
      const sizeA = parseFloat(a.size);
      const sizeB = parseFloat(b.size);

      if (order === "lowToHigh") {
        return sizeA - sizeB;
      } else if (order === "HighToLow") {
        return sizeB - sizeA;
      }
      return 0;
    });
    setInstalledApps(sortedData);
  };

  const handleUninstall = (id) => {
    const remainingApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(remainingApps);
    localStorage.setItem("installed-apps", JSON.stringify(remainingApps));
    toast.success("Apps Successfully Uninstalled");
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full px-4">

      <div className="my-12 text-center">
        <h2 className="text-3xl font-bold">Your Installed Apps here...</h2>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center w-full max-w-4xl shadow-lg border rounded-xl py-6 px-8 bg-base-100">
        <div>
          <h3 className="text-xl font-bold">Total: {installedApps.length}</h3>
        </div>
        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => handleSort(e.target.value)}
            value={sortOrder}
          >
            <option value="" disabled>
              Sort By Size
            </option>
            <option value="lowToHigh">Size : Low to High</option>
            <option value="HighToLow">Size : High to Low</option>
          </select>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-8">
        {installedApps.length > 0 ? (
          installedApps.map((app) => (
            <div key={app.id} className="mb-6 w-full">
              <div className="hero bg-base-200 shadow-xl rounded-2xl overflow-hidden">
                <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start p-6 w-full">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="max-h-32 w-32 object-cover rounded-lg shadow-2xl"
                  />
                  <div className="flex-1 text-center lg:text-left px-4">
                    <h1 className="text-3xl font-bold">{app.title}</h1>
                    <p className="text-sm text-gray-400 mt-1">
                      Size: {app.size} MB
                    </p>
                    <p className="py-4 text-gray-600">{app.description}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleUninstall(app.id)}
                      className="btn btn-error text-white px-6"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center gap-6 mt-10">
            <img src={appNotFoundImg} alt="Not Found" className="w-64" />
            <h2 className="text-2xl font-bold">OOPS!! NO APPS INSTALLED</h2>
            <p className="text-center max-w-md">
              The App you are requesting is not found on our system. Please try
              another app.
            </p>
            <NavLink to="/">
              <button className="btn btn-outline btn-primary">
                Go Back Home
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Installation;
