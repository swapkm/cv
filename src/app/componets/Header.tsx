import React from "react";
import data from "../data";

const Header = () => {
  return (
    <header className="py-4 text-center">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      <h1 className="my-8 p-4 text-5xl font-black">{data.name}</h1>
      <p className="mt-4 p-6 font-light">{data.about}</p>
      <br />
      <p className="mt-4 p-6 font-bold">{data.description}</p>
    </header>
  );
};

export default Header;
