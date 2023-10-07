import React from "react";
import data from "../data"; // Import your data object

const Project = () => {
  return (
    <section className="mt-6 p-4 lg:p-20 rounded-lg bg-purple-100">
      <h2 className="text-2xl font-black">Projects</h2>
      {data.projects.map((exp, index) => (
        <div key={index} className="mt-14">
          <h3 className="mt-4 text-lg font-bold">
            {exp.name} - {exp.title}
          </h3>
          <p className="mt-4">{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Project;
