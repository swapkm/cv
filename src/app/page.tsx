import Image from "next/image";
import data from "./data";

import Header from "./componets/Header";
import SideHeader from "./componets/SideHeader";
import Education from "./componets/Education";
import Experience from "./componets/Experience";
import Skills from "./componets/Skills";
import Social from "./componets/Social";
import Project from "./componets/Project";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between">
      <Header />
      <div className="container mx-auto flex flex-col p-4 lg:flex-row lg:justify-center lg:space-x-4">
        {/* Left Side Content */}
        <div className="lg:w-2/3">
          <Experience />
          <Project />
          <Education />
        </div>
        {/* Right Side Content (Skills) */}
        <div className="mt-6 lg:mt-0 lg:w-1/3 p-4 rounded-lg bg-neutral-100 font-bold">
          <SideHeader />
          <Social />
          <h2 className="text-2xl font-black ">Language</h2>
          <p>English</p>
          <p>Hindi</p>
          <p>Marathi</p>
          <Skills />
          <div className="mt-10 text-center">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
