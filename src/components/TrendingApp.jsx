import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function TrendingApp() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/AppsList.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  return (
    <div>
      <div className="text-center py-12 px-6 md:px-12 pb-12">
        <h2>Trending Apps </h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
        <div className="cardss pt-12">
          <div className=" mx-auto py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.slice(0, 8).map((app) => (
              <div>
                <div className="card bg-base-100 shadow-sm">
                  <figure className="px-10 pt-10">
                    <img src={app.image} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <div className="text-center p-2">
                    <h2 className="text-3xl font-bold">{app.title}</h2>

                    <div className="flex justify-between  p-4">
                      <div className="badge badge-soft badge-success">
                        {app.downloads}
                      </div>
                      <div className="badge badge-soft badge-warning">
                        {app.ratingAvg}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <NavLink to="/apps">
          <button className="btn btn-outline btn-primary ">Show All</button>
        </NavLink>
      </div>
    </div>
  );
}

export default TrendingApp;
