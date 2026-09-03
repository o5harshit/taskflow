"use client";

export default function ProjectsError({
  error,
  reset,
}) {
  return (
    <div>
      <h2>Something went wrong.</h2>

      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}