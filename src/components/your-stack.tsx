import type { Technology } from "../types/technology";

type Props = {
    stack: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
};

function YourStack({ stack, onRemove, onRemoveAll }: Props) {
    return (
        <aside className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                    Your Stack
                </h2>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                    {stack.length}
                </span>
            </div>

            <div className="mt-6">
                {stack.length === 0 ? (
                    <p className="text-sm text-gray-500">
                        No technologies selected yet.
                    </p>
                ) : (
                    <div className="space-y-3">
                        {stack.map((technology) => (
                            <div
                                key={technology.id}
                                className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 p-3"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={technology.icon}
                                        alt={technology.name}
                                        className="h-8 w-8 object-contain"
                                    />

                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-900">
                                            {technology.name}
                                        </h3>

                                        <p className="text-xs text-gray-500">
                                            {technology.category}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => onRemove(technology.id)}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {stack.length > 0 && (
                <button
                    onClick={onRemoveAll}
                    className="mt-6 w-full rounded-lg border border-gray-300 py-2 text-sm font-semibold text-gray-700">
                    Remove All
                </button>
            )}
        </aside>
    );
}

export default YourStack;