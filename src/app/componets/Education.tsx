import React from "react";
import data from "../data";

const Education = () => {
  return (
    <section className="mt-6 p-4 lg:p-20 rounded-lg bg-blue-100">
      <h2 className="text-2xl font-black">Education</h2>
      {data.education.map((exp, index) => (
        <div key={index} className="mt-14">
          <h3 className="mt-4 text-lg font-bold">{exp.degree}</h3>
          <p className="mt-4">
            {exp.university} - {exp.passOutYear}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Education;
