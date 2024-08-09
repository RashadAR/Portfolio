import { memo, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import Lottie from 'react-lottie-player';
import animationData from '../aniamtedSvg/ComputerAnimation.json';
import { AnimateInView } from './AnimateInView';

const About = memo(() => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const lottiePlayer = useMemo(() => (
        <Lottie
            loop
            animationData={animationData}
            play={inView}
            style={{ width: 600, height: 600 }}
        />
    ), [inView]);

    const descriptionParagraphs = useMemo(() => [
        "Ever since I started coding, I've been hooked! 🖥️",
        "I am proficient in JavaScript, Git, Node.js, Express.js, MongoDB, React.js, and Tailwind CSS.",
        "I love making cool stuff on the web that's fun and interesting for people to use.",
        "I thrive on projects that utilize modern JavaScript frameworks like React.js. Additionally, I have a passion for creating visually stunning UI designs with Tailwind CSS, ensuring seamless user experiences."
    ], []);

    return (
        <div className='scroll-mt-24' id='about'>
            <AnimateInView>
                <h2 className="text-4xl font-bold text-white text-center lg:mb-0 mb-16 mx-auto">
                    About Me
                </h2>
            </AnimateInView>
            <AnimateInView>
                <div className="flex flex-col lg:flex-row justify-center items-center md:min-h-[400px] min-h-0 px-12" ref={ref}>
                    <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-1">
                        {inView && lottiePlayer}
                    </div>
                    <div className="w-full lg:w-1/2 text-white text-xl lg:text-xl text-center lg:text-left order-1 lg:order-2">
                        {descriptionParagraphs.map((paragraph, index) => (
                            <p key={index} className={index < descriptionParagraphs.length - 1 ? "pb-4" : ""}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </AnimateInView>
        </div>
    );
});

About.displayName = 'About';

export default About;
