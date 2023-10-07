import React from "react";
import data from "../data";

const Social = () => {
  const facebook = data.social[0]?.facebook;
  const linkedIn = data.social[1]?.linkedIn;

  return (
    <section className="py-6 font-bold">
      <h2 className="text-2xl font-black">Social Media</h2>
      <p className="text-blue-600">
        <a href="https://www.facebook.com/swapkam">Facebook</a>
      </p>
      <p className="text-blue-600">
        <a href="https://www.linkedin.com/swapkam">linkedIn</a>
      </p>
    </section>
  );
};

export default Social;
