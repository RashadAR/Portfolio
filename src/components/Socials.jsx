import { memo } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
    {
        id: 1,
        link: 'https://www.linkedin.com/in/rashad-ar/',
        Icon: FaLinkedin,
        hoverColor: '#0e76a8'
    },
    {
        id: 2,
        link: 'https://github.com/RashadAR',
        Icon: FaGithub,
        hoverColor: '#171515'
    },
    {
        id: 3,
        link: 'https://x.com/Rashad_rar',
        Icon: FaXTwitter,
        hoverColor: '#ffffff'
    },
];

const SocialIcon = memo(({ link, Icon, hoverColor }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 transition-all duration-300"
    >
        <Icon
            className="w-6 h-6 text-gray-400 transition-colors duration-300 hover:text-[var(--hover-color)]"
            style={{ '--hover-color': hoverColor }}
        />
    </a>
));

SocialIcon.displayName = 'SocialIcon';

const Socials = memo(() => (
    <div id="socials" className="flex py-8 space-x-4">
        {socials.map(({ id, ...props }) => (
            <SocialIcon key={id} {...props} />
        ))}
    </div>
));

Socials.displayName = 'Socials';

export default Socials;
