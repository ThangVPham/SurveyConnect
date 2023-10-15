import React from "react";
import WorkInProgress from "../assets/WorkInProgress";

function About() {
  return (
    <div className="w-full flex flex-col items-center justify-center my-40 gap-10">
      <h1 className="text-6xl">Ooops!</h1>
      <WorkInProgress></WorkInProgress>
      <h3 className="text-xl">Please try again later!</h3>
    </div>
  );
}

export default About;
