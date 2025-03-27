import Title from "../common/Title";
import { apyfluxImg, fabrixImg, campusCodeImg, influexImg } from "../../assets";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Apyflux"
          des="ApyFlux is an API marketplace project I worked on during my internship, focusing on simplifying API discovery, integration, and management."
          src={apyfluxImg}
          deployedLink={"https://www.apyflux.com/"}
        />
        <ProjectsCard
          title="Fabrix"
          des="Fabrix is a cutting-edge technology company dedicated to providing innovative solutions for modern businesses."
          src={fabrixImg}
          githubLink={"https://github.com/AkshatJain481/fabrix"}
          deployedLink={"https://fabrix-eight.vercel.app/"}
        />
        <ProjectsCard
          title="Campus Code"
          des="A nationwide community committed to igniting the potential of students through engaging events, sessions, and hackathons."
          src={campusCodeImg}
          deployedLink={"https://www.campuscode.in/"}
        />
        <ProjectsCard
          title="Influex"
          des="Instant AI-Powered Replies for Comments & DMs – Boost Engagement, Increase Conversions, and Save Hours of Manual Work."
          src={influexImg}
          deployedLink={"https://influex-ui.vercel.app/"}
        />
      </div>
    </section>
  );
};

export default Projects;
