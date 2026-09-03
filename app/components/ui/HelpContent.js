export default async function HelpContent({ slug }) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  
    return (
      <div className="mt-6 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">
          Documentation Content
        </h2>
  
        <p className="mt-3 text-slate-500">
          You are reading:
        </p>
  
        <p className="mt-2 font-medium">
          {slug.join(" → ")}
        </p>
      </div>
    );
  }