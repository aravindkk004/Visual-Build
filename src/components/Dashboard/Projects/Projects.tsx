"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { Plus } from "lucide-react";
import AddProjectModal from "./AddProjectModal";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="p-5">
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <Image
            src="/images/project-banner.png"
            alt="Projects banner image"
            fill
            className="object-contain"
          />
        </div>

        <div className="mb-3">
          <h2 className="font-bold text-2xl">Bring Your Ideas to Life</h2>
          <div
            className="bg-light-gray h-[150px] w-[350px] flex flex-col items-center justify-center my-3 rounded-md cursor-pointer 
             hover:bg-gray-200 hover:scale-105 transition transform duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="h-8 w-8 text-gray-600" />
            <p className="mt-2 font-medium text-gray-600">
              Start a New Masterpiece
            </p>
          </div>
        </div>

        <div className="my-3">
          <h2 className="font-bold text-2xl">Your Creative Hub</h2>
          <ProjectsCard />
        </div>
      </div>

      {isModalOpen && (
        <AddProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default Projects;
