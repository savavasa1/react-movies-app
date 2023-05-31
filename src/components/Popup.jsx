import React from "react";
import { FaStar } from "react-icons/fa";

const Popup = (props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
      <div className="bg-[#0F1626] w-80 rounded-lg p-2 shadow-lg overflow-hidden">
        <div className="relative">
          <img className="w-full h-48 object-cover" src={props.image} />
          <div className="absolute bottom-2 right-2 flex items-center space-x-1 bg-black text-white px-2 py-1 rounded">
            <FaStar className="text-yellow-400" />
            <div>{props.voteAverage}/10</div>
          </div>
        </div>
        <div className="text-xl font-bold mb-2">{props.title}</div>
        <div className=" text-sm text-[#F5F5F5] mb-4">{props.overview}</div>
      </div>
    </div>
  );
};

export default Popup;
