import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Project {
  _id: string;
  projectName: string;
  projectDescription: string;
  createdAt: string; // ISO string from backend
}

const RecentWorks = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/get-projects");
        const fetchedProjects: Project[] = res.data.projects || [];

        // Sort by createdAt descending (most recent first)
        fetchedProjects.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setProjects(fetchedProjects);
      } catch (err) {
        console.error(err);
        setError("Failed to load projects");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className="h-[100px] w-full bg-gray-200 animate-pulse rounded-lg"
              ></div>
            ))}
        </div>
      ) : projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-10 text-center">
          <div className="w-full flex flex-col items-center mb-4">
            <Image src={"/images/nothing-found.svg"} height={200} width={200} alt="Nothing Found image" />
          </div>
          <p className="text-gray-500 font-medium">No projects found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
          {projects.slice(0, 5).map((project) => (
            <div
              key={project._id}
              className="p-4 bg-[#101425] text-white rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition cursor-default"
            >
              <h3 className="text-lg font-semibold">{project.projectName}</h3>
              <p className="text-sm text-gray-400 mt-2">
                {truncateText(project.projectDescription, 100)}
              </p>
              <button
                className="mt-3 px-3 py-1 bg-[#4845d2] hover:bg-[#3a37b3] cursor-pointer rounded-md text-white text-sm transition"
                onClick={() => router.push("./editor")}
              >
                Open
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentWorks;
