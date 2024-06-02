import React from 'react';
import useAnimateScroll from '../hooks/useAnimateScroll';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from 'react-lottie';
import animationData from '/public/aniamtedSvg/Animation.json';
import Socials from './Socials';
const Hero = () => {
    useAnimateScroll('.hide');

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div id='hero' className="flex flex-col lg:flex-row justify-center items-center md:min-h-[400px] 
        min-h-0 px-4 lg:px-60 py-20 my-20 lg:py-20 hide">
            <div className="w-full lg:w-1/2 text-white text-3xl lg:text-5xl">
                <p className="pb-10">Hey There!</p>
                <div className="pt-4">
                    <span>I am a </span>
                    <div className="inline-block h-12 lg:h-auto">
                        <Typewriter
                            words={[
                                'MERN Stack Developer.',
                                'Software Developer.',
                                'Idea Builder.',
                                'Challenge Seeker.',
                            ]}
                            autoStart={true}
                            loop
                            cursor={true}
                            cursorColor={'pink'}
                        />
                    </div>
                </div>
                <div className="lg:pt-0">
                    <Socials />
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
                <Lottie options={defaultOptions} height={400} width={400} />
            </div>
        </div>
    );
};

export default Hero;
