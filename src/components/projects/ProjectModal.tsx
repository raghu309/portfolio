
const ProjectModal = ({ project, onClose }: any) => {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg max-w-2xl w-full mx-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-60 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-900 rounded-full p-2 text-white hover:bg-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <div className="my-4 flex flex-wrap gap-2">
            {project.tags.map((tag: any) => (
              <span
                key={tag}
                className="text-xs font-semibold bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-300">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition-colors"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;