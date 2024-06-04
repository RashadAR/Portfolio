import Lottie from 'react-lottie';
import animationData from '../../public/aniamtedSvg/ComputerAnimation.json';

export default function About() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className='scroll-mt-24' id='about'>
            <h2 className="text-4xl font-bold text-white text-center lg:mb-0 mb-16
             mx-auto ">
                About Me
            </h2>

            <div className="flex flex-col lg:flex-row justify-center items-center md:min-h-[400px] min-h-0
            px-12 ">

                {/* SVG Illustration Side */}
                <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-1">
                    <Lottie options={defaultOptions} height={600} width={600} />
                </div>

                {/* Description Side */}
                <div className="w-full lg:w-1/2 text-white text-xl lg:text-xl text-center lg:text-left
             order-1 lg:order-2">
                    <p className="pb-4">Ever since I started coding, I've been hooked! 🖥️</p>
                    <p className="pb-4">I am proficient in JavaScript, Git, Node.js, Express.js, MongoDB, React.js, and Tailwind CSS.</p>
                    <p className="pb-4">I love making cool stuff on the web that's fun and interesting for people to use.</p>
                    <p>I thrive on projects that utilize modern JavaScript frameworks like React.js. Additionally, I have a passion for creating visually stunning UI designs with Tailwind CSS, ensuring seamless user experiences.</p>
                </div>
            </div>
        </div>
    );
}
