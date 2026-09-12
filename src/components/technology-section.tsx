import type { Technology } from "../types/technology";
import TechnologyCard from "./technology-card";

type Props = {
    technologies: Technology[];
};

function TechnologySection({ technologies }: Props) {
    return (
        <section id="technologies" className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4">

                {/* Section Heading */}
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Explore the <span className="text-fuchsia-600">Technologies</span>
                    </h2>

                    <p className="mt-3 max-w-2xl text-gray-600">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                {/* Technology Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {technologies.map((technology) => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default TechnologySection;