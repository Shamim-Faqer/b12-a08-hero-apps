import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import downloadsIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";

function AppDetails() {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetch("/AppsList.json")
      .then((res) => res.json())
      .then((data) => {
        const singleApp = data.find((item) => item.id === parseInt(id));
        setApp(singleApp);
      });
  }, [id]);

  if (!app) return <div className="text-center py-20">Loading...</div>;

  return (
    <div>
      <div>
        <img src="" alt="" />
        <div className="flex justify-between">
          <h2>{app.title}</h2>
          <p>{app.companyName}</p>
          <hr />
          <div className="flex flex-1 items-center p-4 justify-evenly">
            <div>
              <img src={downloadsIcon} alt="" />
              <p>downlods</p>
              <h2>8m</h2>
            </div>
            <div>
              <img src={ratingsIcon} alt="" />
              <p>downlods</p>
              <h2>8m</h2>
            </div>
            <div>
              <img src={reviewIcon} alt="" />
              <p>downlods</p>
              <h2>8m</h2>
            </div>
          </div>
          <hr />
          <h3>{app.reviews}</h3>
          <hr />
          <h3>{app.description}</h3>
        </div>
      </div>
    </div>
  );
}

export default AppDetails;
