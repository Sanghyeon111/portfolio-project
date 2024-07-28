import Image from "next/image";
import React from "react";

const ProjectCard = ({ src, title, description, href }) => {
  return (
    <a a href={href} target="_blank">
      <div className="h-full overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image
          src={src}
          alt={title}
          width={400}
          height={400}
          className="w-full h-52 object-contain"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
