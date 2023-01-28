import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  function getData() {
    axios
      .get("https://data-portfolio.vercel.app")
      .then((res) => {
        setProjects(res.data.projects);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getData();
    console.log(projects);
  }, [projects]);
  return (
    <>
      <div className="w-full text-slate-200 overflow-x-hidden">
        <Header nama={"Projects"} />
        <section className="w-full py-24 flex flex-col items-center gap-10 relative">
          <img
            src="img/character-2.svg"
            alt=""
            className="absolute -z-10 bottom-36 right-16 -rotate-45 animate-a-disko"
          />
          <img
            src="img/character-4.svg"
            alt=""
            className="absolute -z-10 top-36 left-16 rotate-45 animate-a-disko "
          />
          <div className="w-4/5">
            <p className="text-4xl font-extrabold font-press-start">
              MY PROJECTS
            </p>
          </div>
          <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-x-4 gap-y-8">
            {projects.map((project, idx) => {
              return (
                <ProjectCard
                  idx={idx}
                  nama={project.nama}
                  img={project.image}
                  desc={project.deskripsi}
                  link={project.link}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
