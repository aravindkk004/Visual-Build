"use client";
import React, { useState } from "react";
import Modal from "../Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/projects/create-project", {
        projectName,
        projectDescription,
      });

      if (response.status === 201 || response.status === 200) {
        toast.success("Your Project Created Successfully!")
        setProjectName("");
        setProjectDescription("");
        onClose();
        router.push(`/editor/${response.data.project._id}`);
      }
    } catch (error) {
      toast.error("Something went wrong while creating the project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        className="w-[450px] p-2"
      >
        <h2 className="font-bold mb-3 text-xl">Create New Project</h2>
        <div className="flex flex-col mb-3">
          <label htmlFor="title" className="text-sm font-medium">
            Project Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter Project Title"
            required
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
            className="h-[40px] border border-gray-400 rounded-md px-3 outline-none focus:border-primary my-1"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="description" className="text-sm font-medium">
            Project Description
          </label>
          <textarea
            id="description"
            placeholder="Enter Project Description"
            required
            onChange={(e) => setProjectDescription(e.target.value)}
            value={projectDescription}
            className="h-[150px] resize-none p-2 border border-gray-400 rounded-md outline-none focus:border-primary my-1"
          ></textarea>
        </div>
        <div className="flex justify-end gap-4 items-center">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-700 px-5 py-2 mt-3 cursor-pointer hover:text-primary"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-gray-400" : "bg-primary hover:bg-[#3a37b3]"
            } text-white py-2 px-5 rounded-lg mt-3 cursor-pointer transition`}
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddProjectModal;
