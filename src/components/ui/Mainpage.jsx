import React from "react";

export default function Mainpage() {
  return (
    <div className="min-h-screen bg-slate-500 flex items-center justify-center px-4">
      <div className="mt-20 lg:mt-40 text-center max-w-3xl w-full">
        <h1 className="text-3xl lg:text-4xl font-semibold font-tilt">
          Explore your <span className="text-blue-400">hobby</span> or <span className="text-purple-400">passion</span>
        </h1>
        <div className="mt-8 text-lg lg:text-2xl font-sans">
          Sign in to interact with the community of fellow hobbyists and an ecosystem of experts, teachers, suppliers,
          classes, and workshops, and places to practice and participate to perform. Your hobby may be about visual or
          performing arts, sports, games, gardening, cooking, model making, indoor or outdoor activities.
        </div>
      </div>
    </div>
  );
}
