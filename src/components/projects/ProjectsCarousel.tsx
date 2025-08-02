import Section from "../Section";
import projectData from "../../data/projectData";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectsCarousel = ({ onSeeAll }: any) => {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    return (
        <Section id="projects" title="Featured Projects" className="bg-gray-800">
            <div className="relative">
                <div className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory">
                    {projectData.slice(0, 6).map((project) => (
                        <div key={project.id} className="snap-center flex-shrink-0 w-80 bg-gray-900 rounded-lg shadow-lg overflow-hidden card-hover-effect" onClick={() => setSelectedProject(project)}>
                            <img src={project.image} alt={project.title} className="w-full h-40 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {project.tags.map(tag => <span key={tag} className="text-xs font-semibold bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full">{tag}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                </div>
            </div>
            <div className="text-center mt-12">
                <button onClick={onSeeAll} className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
                    See All Projects
                </button>
            </div>
        </Section>
    );
};

export default ProjectsCarousel;