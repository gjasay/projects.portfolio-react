import React from "react";
import Button from "./Button";

interface ProjectProps {
  title: string;
  description: string;
  images: string[];
  types: ("unity" | "csharp" | "javascript")[];
  projectLink: string;
  sourceLink: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  images,
  projectLink,
  sourceLink,
}) => {
  return (
    <div className="bg-gray-800 shadow-md rounded-lg p-6 m-4 flex flex-col items-center text-white">
      <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
      {images.length > 0 &&
        images.map((image, index) => (
          <img
            key={index}
            className="w-full h-64 object-contain mb-4 rounded"
            src={image}
            alt={`${title} ${index}`}
          />
        ))}
      <p className="mb-4 text-center">{description}</p>
      <div className="flex gap-2">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.open(projectLink, "_blank")}
        >
          View Project
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.open(sourceLink, "_blank")}
        >
          View Source
        </Button>
      </div>
    </div>
  );
};

export default Project;
