import { Suspense } from "react";
import HelpContent from "../../components/ui/HelpContent";
import Loading from "../loading";

export default async function HelpArticle({ params }) {
  const { slug } = await params;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main className="p-8">

      <p className="text-sm font-medium text-indigo-600">
        TaskFlow Help
      </p>

      <h1 className="mt-3 text-3xl font-bold">
        {slug.join(" / ")}
      </h1>

      <Suspense
        fallback={
          <Loading/>
        }
      >
        <HelpContent slug={slug} />
      </Suspense>

    </main>
  );
}