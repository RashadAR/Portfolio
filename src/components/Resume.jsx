import { FaDownload } from 'react-icons/fa';

const Resume = () => {
    const resumeLink = '/Rashad_Resume.pdf';

    return (
        <>
            <a id="resume"
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View and download my resume"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 hover:gap-3
                 text-white rounded-full shadow-lg hover:from-pink-500 hover:to-violet-600 transition-all duration-200
                  gap-1"
            >
                <FaDownload className="mr-2" />
                View Resume
            </a>
        </>
    );
};

export default Resume;
