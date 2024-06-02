import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const socials = [
    { id: 1, link: 'https://www.linkedin.com/in/rashad-ar/', icon: FaLinkedin, hoverColor: '#0e76a8' },
    { id: 2, link: 'https://github.com/RashadAR', icon: FaGithub, hoverColor: '#171515' },
    // { id: 3, link: 'https://www.instagram.com/yourprofile', icon: FaInstagram, hoverColor: '#C13584' },
];

const Socials = () => {
    return (
        <div id="socials" className="py-8">
            <div className="flex  space-x-4">
                {socials.map((social) => {
                    const IconComponent = social.icon;
                    return (
                        <a
                            key={social.id}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800
                             transition-all duration-300"
                        >
                            <IconComponent
                                className="w-6 h-6 text-gray-400 transition-colors duration-300"
                                style={{
                                    '--hover-color': social.hoverColor,
                                }}
                            />
                            <style jsx>{`
                                a:hover .w-6 {
                                    color: var(--hover-color);
                                }
                            `}</style>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Socials;
