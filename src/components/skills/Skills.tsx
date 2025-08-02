import { useMemo } from "react";
import Section from "../Section";
import skillData from "../../data/skillData";

const Skills = () => {
    const duplicatedSkills = useMemo(() => [...skillData, ...skillData], []);
    return (
        <Section id="skills" title="My Tech Stack">
            <div className="relative w-full overflow-hidden bg-gray-800 p-4 rounded-lg">
                <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, #1f2937, transparent 20%, transparent 80%, #1f2937)' }}></div>
                <div className="flex animate-marquee">
                    {duplicatedSkills.map((skill, index) => (
                        <div key={index} className="flex-shrink-0 w-36 flex flex-col items-center justify-center mx-4">
                            <img src={skill.icon} alt={skill.name} className="h-12 w-12 filter invert" />
                            <p className="mt-2 text-sm text-gray-300">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;