import React from "react";
import data from "../data"; // Import your data object

const Experience = () => {
  return (
    <section className="p-4 lg:p-20 rounded-lg bg-yellow-100">
      <h2 className="text-2xl font-black">Work Experience</h2>
      {data.experience.map((exp, index) => (
        <div key={index} className="mt-14">
          <h3 className="mt-4 text-lg font-black">{exp.jobTitle}</h3>
          <p className="mt-4">
            {exp.company}, {exp.duration}
          </p>
          <p className="mt-4 font-bold">{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
