import React from "react";
import data from "../data";

const SideHeader = () => {
  return (
    <div className="font-bold">
      <p>{data.addess}</p>
      <p>{data.dob}</p>
      <p>{data.phone}</p>
      <p className="text-blue-500">
        <a href="mailto:mail@swapkam.com">{data.email}</a>
      </p>
    </div>
  );
};

export default SideHeader;
