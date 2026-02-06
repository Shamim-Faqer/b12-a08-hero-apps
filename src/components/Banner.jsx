import heroimg from "../assets/hero.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FcAndroidOs } from "react-icons/fc";
import { FaAppStoreIos } from "react-icons/fa";

function Banner() {
  return (
    <div className="container bg-base-200 mx-auto px-4 py-10">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          We Build{" "}
          <span className="font-b bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="max-w-2xl mx-auto mb-6 text-gray-600">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <button className="btn btn-outline btn-primary">
            <IoLogoGooglePlaystore />
            Google Play
          </button>
          <button className="btn btn btn-outline btn-primary">
            <FaAppStoreIos />
            App store
          </button>
        </div>

        <img
          className="mx-auto block w-full md:max-w-4xl"
          src={heroimg}
          alt="banner image"
        />

        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-primary-content p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-8">
            Trusted by Millions, Built for You
          </h2>

          <div className="flex flex-col md:flex-row justify-around gap-8">
            <div className="space-y-2">
              <p className="opacity-80">Total Downloads</p>
              <h2 className="text-4xl font-bold">29.6M</h2>
              <p className="text-sm">21% more than last month</p>
            </div>
            <div className="space-y-2">
              <p className="opacity-80">Total Reviews</p>
              <h2 className="text-4xl font-bold">906K</h2>
              <p className="text-sm">46% more than last month</p>
            </div>
            <div className="space-y-2">
              <p className="opacity-80">Active Apps</p>
              <h2 className="text-4xl font-bold">132+</h2>
              <p className="text-sm">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
