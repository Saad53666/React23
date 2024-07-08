import React from "react";

const ResponsiveBoxes = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-500">
      <div className="flex flex-col items-center justify-center w-full max-w-7xl min-h-screen p-5 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Add to your listing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-center justify-center h-32 bg-gray-200 border rounded-lg shadow-xl hover:bg-violet-400 hover:text-white border-gray-300 p-4">
            <h2 className="text-lg font-semibold mb-2 text-center">People</h2>
            <p className="text-sm text-center">
              an individual or organisation, teacher, coach, or online <br></br>{" "}
              seller company, business, or association
            </p>
          </div>
          <div className="flex flex-col items-center justify-center h-32 bg-gray-200 border rounded-lg shadow-xl  hover:bg-green-900 hover:text-white border-gray-300 p-4">
            <h2 className="text-lg font-semibold mb-2 text-center">Place</h2>
            <p className="text-sm text-center">
              An address classroom,Shop,perfomance,or event <br></br> venue sports 
              arena,Playarea school or campus
            </p>
          </div>
          <div className="flex flex-col items-center justify-center h-32 bg-gray-200 border rounded-lg shadow-xl  hover:bg-red-900 hover:text-white border-gray-300 p-4">
            <h2 className="text-lg font-semibold mb-2 text-center">Product</h2>
            <p className="text-sm text-center">
              An item that you can book buy or rent apointment <br></br> equipment instrument 
              or activity kit
            </p>
          </div>
          <div className="flex flex-col items-center justify-center h-32 bg-gray-200 border rounded-lg shadow-xl  hover:bg-blue-400 hover:text-white border-gray-300 p-4">
            <h2 className="text-lg font-semibold mb-2 text-center">Program</h2>
            <p className="text-sm text-center">
              An event with menu and date meetup workshop <br></br> or webinar Exhibition,
              perfomance or competition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveBoxes;
