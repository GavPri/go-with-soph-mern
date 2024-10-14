import React from "react";

const Home = () => {
  return (
    <div className="mt-28 min-h-[calc(100dvh-5rem)] w-screen">
      <div className="w-full h-fit flex flex-col items-center">
        {/* ----- Header & arrows div ---- */}
        <h2 className="font-qs text-text uppercase tracking-wide text-3xl text-left">
          Disc<span className="text-brand italic">o</span>ver Popula
          <span className="text-brand italic">r</span>
          <br />
          Destin<span className="text-brand italic">a</span>tions
        </h2>
      </div>
    </div>
  );
};

export default Home;
