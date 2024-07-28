import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-3 h-full w-full gap-10 px-10">
        <ProjectCard
          src="/ParkEaseMain.png"
          title="Parking Application"
          description="Collaboratively developed a cross-platform application allowing managers to draw/edit parking maps and users to view real-time parking availability, enhancing overall user experience."
          href="https://github.com/TimLinCa/ParkEase"
        />
        <ProjectCard
          src="/RecipeSharing.png"
          title="Recipe Sharing Website"
          description="Collaboratively implemented a dynamic web application with GitHub authentication, enabling users to share their culinary creations and explore others' recipes"
          href="https://recipe-sharing-three.vercel.app/"
        />
        <ProjectCard
          src="/PortfolioMain.png"
          title="Space Themed Website"
          description="Implement a space-themed website with a responsive design, showcasing my skills and projects."
        />
      </div>
    </div>
  );
};

export default Projects;
