import React from "react";
import { useParams } from "react-router-dom";
import Project from "./Project";

const Projects: React.FC = () => {
  const { type } = useParams<{ type?: string }>();

  const allProjects = [
    <Project title="Demonware" description="Demonware Incorporated was my creation for Ludum Dare 55, a competitive game jam where developers race to make games within a tight deadline. As the team lead and programmer, I guided our efforts, utilizing TypeScript and Phaser to build our game. It was an exciting and challenging experience, filled with collaboration, creativity, and the thrill of creating something remarkable within a short timeframe." images={["/demonware.png"]} types={["javascript"]} projectLink="https://demonware.gameswithgabe.com/" sourceLink="https://github.com/gjasay/Demonware-Inc"/>,
    <Project title="Pond Plop" description="Pond Plop is a video game I crafted, inspired by the two-player board game called Boop. Using PixiJS, I brought this concept to life, infusing it with digital excitement. Currently, I'm in the process of adding online multiplayer functionality, leveraging .NET and WebSocket technologies. It's an exciting journey, blending traditional gameplay with modern online connectivity for a whole new gaming experience." images={["/Pond-Plop.png"]} types={["javascript", "csharp"]} projectLink="https://pond-plop.vercel.app/" sourceLink="https://github.com/gjasay/Pond-Plop"/>,
    <Project title="Wasteland Wander" description="Wasteland Wander is my ongoing project developed with Unity and C#. It's an adrenaline-fueled top-down shooter set in a desert wasteland. Take control of your vehicle, battle enemy rovers, and dodge menacing drones as you navigate through the unforgiving terrain. Stay tuned for updates as the game continues to evolve!" images={["/wastelandwander.png"]} types={["unity", "csharp"]} projectLink="https://github.com/gjasay/Wasteland-Wander" sourceLink="https://github.com/gjasay/Wasteland-Wander"/>,
    <Project title="Murphy's Madness" description="Murphy's Madness is a thrilling 3D game with a mad libs twist, developed during Global Game Jam 2024. As one of the programmers on the team, we utilized React, ThreeJS, and TypeScript to bring this creative vision to life. It was an exciting collaboration, merging storytelling with interactive gameplay in the dynamic atmosphere of a game jam." images={["/Murphys-Madness.png"]} types={["javascript"]} projectLink="https://ggj-2024.vercel.app/" sourceLink="https://github.com/casualWaist/ggj-2024" />,
    <Project title="Portfolio" description="My portfolio is a showcase of my skills and projects, designed to highlight my work and experience. I built it using ThreeJS, React, Tailwind CSS, and Vite, creating a responsive and visually appealing site that reflects my personality and style. It's a dynamic platform that evolves with my journey, showcasing my latest projects and accomplishments." images={[]} types={["javascript"]} projectLink="https://gabeasay.dev" sourceLink="https://github.com/gjasay/portfolio"/>,
    <Project title="Snake" description="Snake is a faithful clone of the beloved classic game, recreated using vanilla JavaScript and HTML canvas. Dive in and experience the nostalgia firsthand!" images={["/Snake.png"]} types={["javascript"]} projectLink="https://snake-five-psi.vercel.app/" sourceLink="https://github.com/gjasay/Snake"/>
  ];

  const projectsArray = React.Children.toArray(allProjects) as React.ReactElement[];

  const projects = type ? projectsArray.filter(project => project.props.types.includes(type)) : projectsArray;

  return (
    <div className="flex flex-wrap justify-center items-start p-4">
      {projects}
    </div>
  );
};

export default Projects;