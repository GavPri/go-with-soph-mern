import React from "react";

const Home = () => {
  return (
    <div className="mt-20 min-h-[calc(100dvh-5rem)] bg-bg w-screen">
      {/* Image wrapper */}
      <div className="w-full">
        <img
          className="bg-[url('./images/nevadaFalls.JPG')] h-[calc(100dvh-5rem)] w-full object-cover"
          src="./images/nevadaFalls.JPG"
        />
      </div>
    </div>
  );
};

export default Home;
