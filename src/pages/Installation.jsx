import React, { useEffect, useState } from "react";

function Installation() {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installed-apps")) || [];

    setInstalledApps(savedApps);
  }, []);

  return (
    <div>
      <h2>Your Installed Apps</h2>
      <p>Explore All Trending Apps on the Market developed by us</p>

      <div>
        <h3>{installedApps.length}</h3>
        <div className="sortBySize">sort by size</div>
      </div>
      <div className="show all installed card here">
        {installedApps.length > 0 ? (
          installedApps.map((app) => (
            <div key={app.id}>
              <h2>{app.title}</h2>
              <p>{app.companyName}</p>
            </div>
          ))
        ) : (
          <p>no apps installed yet</p>
        )}
      </div>
    </div>
  );
}

export default Installation;
