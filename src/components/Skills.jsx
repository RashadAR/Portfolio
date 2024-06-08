import { skillsData } from "../utils/data/skills";
import { useMemo } from 'react';
import { skillsImage } from "../utils/skill-image";
import Marquee from "react-fast-marquee";

export default function Skills() {

    const memoizedSkillsImages = useMemo(() => {
        return skillsData.map(skill => ({
            skill,
            image: skillsImage(skill)
        }));
    }, [skillsData]);
    return (
        <div id="skills" className="relative z-40 my-4 lg:my-0 lg:pb-0 pb-32 scroll-mt-24">
            <div className="flex justify-center my-5 lg:py-8">
                <span className="w-fit text-white font-bold p-2 px-5 text-4xl rounded-md">Skills</span>
            </div>

            <div className="w-full my-12">
                <Marquee
                    gradient={true}
                    speed={100}
                    pauseOnHover={true}
                    delay={1}
                    play={true}
                    direction="right"
                    gradientColor={'#140F23'}
                    gradientWidth={100}
                >
                    {memoizedSkillsImages.map(({ skill, image }, id) => (
                        <div
                            key={id}
                            className="w-48 min-w-fit h-fit flex flex-col items-center justify-center 
            transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15]"
                        >
                            <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c]
             shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                                <div className="flex justify-center">
                                    <div className="w-3/4">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent
                         via-violet-500 to-transparent" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-4 p-8">
                                    <div className="h-12 sm:h-16">
                                        <img
                                            src={image}
                                            alt={skill}
                                            width={60}
                                            height={60}
                                            className="h-full w-auto rounded-lg"
                                        />
                                    </div>
                                    <p className="text-white text-lg sm:text-xl">
                                        {skill}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};
