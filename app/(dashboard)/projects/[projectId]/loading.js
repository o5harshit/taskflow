export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">

      <div className="h-4 w-32 rounded bg-gray-200" />

      <div>
        <div className="h-9 w-72 rounded bg-gray-200" />

        <div className="mt-3 h-4 w-96 rounded bg-gray-200" />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-28 rounded-xl bg-gray-200"
          />
        ))}

      </div>

      <div className="h-24 rounded-xl bg-gray-200" />

    </div>
  );
}