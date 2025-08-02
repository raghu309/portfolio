import { useEffect, useMemo, useState } from "react";

const Introduction = () => {
    const roles = useMemo(() => ['Web Developer', 'Competitive Programmer', 'Data Science Enthusiast'], []);
    const [currentRoleIndex, setCurrentRoleIndex] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
        }, 3000); // Change role every 3 seconds

        return () => clearInterval(timer);
    }, [roles]);

    return (
        <section id="home" className="h-screen flex items-center justify-center text-center bg-gray-900 -mt-16">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                    I'm Raghavendra
                </h1>
                <div className="mt-4 text-lg sm:text-xl text-yellow-400 h-8 relative overflow-hidden flex items-center justify-center">
                    <span
                        key={currentRoleIndex}
                        className="animated-role absolute inset-0 flex items-center justify-center"
                    >
                        {roles[currentRoleIndex]}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Introduction;