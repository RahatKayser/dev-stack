import type { Technology } from "../types/technology";
import TechnologyCard from "./technology-card";
import YourStack from "./your-stack";

type Props = {
    technologies: Technology[];
    onAdd: (technology: Technology) => void;
    stack: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
};

function TechnologySection({ technologies, onAdd, stack, onRemove, onRemoveAll }: Props) {
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

                {/* Main Content */}
                <div className="grid gap-8 lg:grid-cols-4">

                    {/* Technology Cards */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                onAdd={onAdd}
                                isAdded={stack.some((item) => item.id === technology.id)}
                            />
                        ))}
                    </div>

                    {/* Your Stack */}
                    <div className="self-start">
                        <YourStack stack={stack}
                        onRemove={onRemove}
                        onRemoveAll={onRemoveAll} />
                    </div>

                </div>

            </div>
        </section>
    );
}

export default TechnologySection;