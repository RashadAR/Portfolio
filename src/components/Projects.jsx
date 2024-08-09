import { FaGithub } from 'react-icons/fa';
import yelpCampImage from '/projectImages/YelpCamp-min.png';
import comingSoon from '/projectImages/comingSoon.jpg'
import { AnimateInView } from './AnimateInView';

const projects = [
    {
        id: 1,
        title: 'YelpCamp',
        thumbnail: yelpCampImage,
        shortDescription: 'Discover campgrounds, leave reviews, and plan adventures.',
        fullDescription: 'Find campgrounds, leave reviews, and plan trips. Add new locations to the database, enriching the platform for everyone. Built with Node.js, Express, and MongoDB for a powerful backend.',
        repoLink: 'https://github.com/RashadAR/YelpCamp',
        projectLink: 'https://yelpcamp-japz.onrender.com/'
    },
    {
        id: 2,
        title: 'Coming Soon...',
        thumbnail: comingSoon,
        shortDescription: 'Coming Soon....',
        fullDescription: 'Coming Soon...',
        repoLink: '',
        projectLink: ''
    },
    {
        id: 3,
        title: 'Coming Soon...',
        thumbnail: comingSoon,
        shortDescription: 'Coming Soon....',
        fullDescription: 'Coming Soon...',
        repoLink: '',
        projectLink: ''
    }
];

const Projects = () => {

    return (
        <div id='projects' className='px-4 py-16 scroll-mt-24 '>
            <AnimateInView>
                <h2 className="text-4xl font-bold text-white text-center lg:mb-0 mb-16">
                    Projects
                </h2>
            </AnimateInView>
            <div className="flex flex-col items-center justify-center mt-40 lg:mt-20">
                <AnimateInView>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl">
                        {projects.map((project) => (
                            <div key={project.id} className="relative group w-full">
                                <div
                                    className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer
                                 transition-all duration-500 transform hover:scale-105 "
                                    style={{ minHeight: '400px' }}
                                >
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="object-cover w-full h-48 md:h-64"
                                    />
                                    <div
                                        className="absolute inset-0 bg-cover bg-center hidden group-hover:block"
                                        style={{ backgroundImage: `url(${project.thumbnail})` }}
                                    ></div>
                                    <div
                                        className="absolute inset-0  bg-opacity-75 opacity-0
                                     group-hover:opacity-100 group-hover:backdrop-blur-md transition-opacity duration-300 flex items-center
                                      justify-center"
                                    >
                                        <div className="p-4 text-center">
                                            <h3 className="text-white text-xl font-bold mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-white text-sm mb-4">
                                                {project.fullDescription}
                                            </p>
                                            <div className="flex justify-center space-x-4">
                                                <a
                                                    href={project.repoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white bg-black bg-opacity-50 px-3 py-1 rounded-lg flex items-center space-x-2 hover:bg-opacity-75"
                                                >
                                                    <FaGithub />
                                                    <span>Repo</span>
                                                </a>
                                                <a
                                                    href={project.projectLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white bg-black bg-opacity-50 px-3 py-1 rounded-lg flex items-center space-x-2 hover:bg-opacity-75"
                                                >
                                                    <span>View Project</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 relative z-10 group-hover:hidden
                                 bg-violet-950 bg-opacity-50 rounded-b-xl">
                                        <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
                                        <p className="text-gray-400">{project.shortDescription}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimateInView>
            </div>
        </div>
    );
};

export default Projects;
