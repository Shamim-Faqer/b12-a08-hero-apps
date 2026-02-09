import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import downloadsIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

  if (!app)
    return (
      <div className="text-center py-20 text-xl font-bold">Loading...</div>
    );

  return (
    <div className="container mx-auto">
      <div className="md:flex justify-between items-start w-full mx-auto my-6 p-4 md:p-6 lg:p-12 gap-8">
        <img className="md:w-1/3" src={app.image} alt={app.title} />

        <div className="flex flex-col flex-1 justify-between mt-6 md:mt-0">
          <h2 className="text-3xl font-bold">{app.title}</h2>
          <p className="pb-3 text-gray-600 font-medium">
            Developed By: {app.companyName}
          </p>
          <hr className="my-2" />

          <div className="flex items-center justify-between px-3 py-4 text-center">
            <div>
              <img src={downloadsIcon} alt="downloads" className="mx-auto" />
              <p className="text-sm text-gray-500 uppercase">Downloads</p>
              <h2 className="text-lg font-bold">8M</h2>
            </div>
            <div>
              <img src={ratingsIcon} alt="ratings" className="mx-auto" />
              <p className="text-sm text-gray-500 uppercase">Ratings</p>
              <h2 className="text-lg font-bold">{app.rating || "4.5"}</h2>
            </div>
            <div>
              <img src={reviewIcon} alt="reviews" className="mx-auto" />
              <p className="text-sm text-gray-500 uppercase">Reviews</p>
              <h2 className="text-lg font-bold">120k</h2>
            </div>
          </div>

          <div className="py-3">
            <button className="btn btn-success text-white px-8">Install</button>
          </div>

          <hr className="my-4" />

          <p className="font-bold mb-2">Ratings & Reviews</p>

          <div style={{ width: "100%", height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={app.ratings ? [...app.ratings].reverse() : []}
              >
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  width={60}
                  tick={{ fontSize: 14, fill: "#4b5563" }}
                />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar
                  dataKey="count"
                  fill="#f97316"
                  radius={[0, 4, 4, 0]}
                  barSize={12}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <hr className="my-4" />

          <div>
            <p className="font-bold mb-1">Description:</p>
            <p className="text-gray-700 leading-relaxed">{app.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDetails;
