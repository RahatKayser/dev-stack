import type { Technology } from "../types/technology";

type Props = {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
};

function TechnologyCard({ technology, onAdd, isAdded }: Props) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition">

      {/* Icon and Badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-gray-900">
          {technology.badge}
        </span>
      </div>

      {/* Technology Info */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-900">
          {technology.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-pink-400">
          {technology.category}
        </p>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {technology.description}
        </p>
      </div>

      {/* Rating and Difficulty */}
      <div className="mt-5 flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700">
          ⭐ {technology.rating}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>
      </div>

      {/* Add Button */}
      {/* <button
        onClick={() => onAdd(technology)}
        className="mt-5 w-full rounded-lg bg-gray-900 py-2.5 text-sm font-semibold text-white">
        Add to Stack
      </button> */}
      <button
  onClick={() => onAdd(technology)}
  disabled={isAdded}
  className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
    isAdded
      ? "cursor-not-allowed bg-gray-200 text-gray-500"
      : "bg-gray-900 text-white hover:bg-gray-800"
  }`}
>
  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
</button>

    </div>
  );
}

export default TechnologyCard;