import React, { useEffect, useState } from "react";

function Apps() {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/AppsList.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  const searchApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className="text-center pb-12 mx-12">
        <div className="py-3 md:py-6 lg:py-12 my-3 md:my-6 lg:my-12">
          <h2>Our All Application</h2>
          <p className="pb-6">
            Explore All Apps on the Market developed by us.We code for millions
          </p>
        </div>
        <hr />
        <div className="search md:flex justify-between items-center p-4">
          <h3 className="searchresults text-3xl font-bold p-4">
            {searchApps.length} Apps founded...
          </h3>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search here..."
            className="input"
          />
        </div>
        <hr />
        <div className="cardss py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchApps.map((app, index) => (
              <div key={index}>
                <div className="card bg-base-100 shadow-sm">
                  <figure className="px-10 pt-10">
                    <img src={app.image} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <div className="text-center p-2">
                    <h2>{app.title}</h2>

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
      </div>
    </div>
  );
}

export default Apps;
