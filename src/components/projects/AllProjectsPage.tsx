import { useState } from "react";
import ProjectModal from "./ProjectModal";

const AllProjectsPage = ({ onBack, projects }: any) => {
    const [selectedProject, setSelectedProject] = useState(null);
    
    return (
        <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
            <header className="flex justify-between items-center mb-8">
                <button onClick={onBack} className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700 transition-colors">
                    &larr; Back to Home
                </button>
                <h1 className="text-3xl font-bold text-yellow-400">All Projects</h1>
            </header>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project: any) => (
                    <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden card-hover-effect cursor-pointer" onClick={() => setSelectedProject(project)}>
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-white">{project.title}</h3>
                            <div className="mt-2 flex flex-wrap gap-1">
                               {project.tags.slice(0,3).map((tag: any) => <span key={tag} className="text-xs font-semibold bg-gray-700 text-gray-300 px-2 py-1 rounded-full">{tag}</span>)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    );
};

export default AllProjectsPage;