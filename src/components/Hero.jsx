import { memo, useMemo } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import { LazyLottie } from './LazyLottie';
import animationData from '../aniamtedSvg/Animation.json';
import Socials from './Socials';
import { AnimateInView } from './AnimateInView';

const Hero = memo(() => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const typewriterWords = useMemo(() => [
        'MERN Stack Developer.',
        'Software Developer.',
        'Idea Builder.',
        'Challenge Seeker.',
    ], []);

    const lottiePlayer = useMemo(() => (
        <LazyLottie
            loop
            animationData={animationData}
            play={inView}
            style={{ width: 400, height: 400 }}
        />
    ), [inView]);

    return (
    <header id='hero' className="container mx-auto px-4 lg:px-12 py-20 my-20 lg:py-20" role="banner">
            <div className="flex flex-col lg:flex-row justify-center items-center md:min-h-[400px] min-h-0">
                <AnimateInView className="w-full lg:w-1/2 text-white text-3xl lg:text-5xl lg:pr-8">
            <h1 className="pb-10 text-5xl lg:text-6xl font-bold">Hey There!</h1>
                    <div className="pt-4">
                        <span>I am a</span>
                        <div className="h-12 lg:h-20 overflow-hidden">
                            <Typewriter
                                words={typewriterWords}
                                autoStart={true}
                                loop
                                cursor
                                cursorColor={'pink'}
                            />
                        </div>
                    </div>
                    <div className="lg:pt-0">
                        <Socials />
                    </div>
                </AnimateInView>
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0" ref={ref} aria-hidden={!inView}>
                    {inView && lottiePlayer}
                </div>
            </div>
    </header>
    );
});

Hero.displayName = 'Hero';

export default Hero;
