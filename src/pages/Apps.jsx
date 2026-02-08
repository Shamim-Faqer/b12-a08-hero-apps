import React, { useEffect, useState } from "react";

function Apps() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/AppsList.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  return (
    <div>
      <div className="text-center py-12 mx-12">
        <h2>Our All Application</h2>
        <p>
          Explore All Apps on the Market developed by us.We code for millions
        </p>
        <div className="search flex justify-between p-6">
          <h3 className="search results">132 apps founded</h3>
          <input type="text" placeholder="Search here..." className="input" />
        </div>
        <div className="cardss py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app) => (
              <div>
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
