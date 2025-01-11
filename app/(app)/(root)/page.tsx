import StartupCard from "@/components/StartupCard";
import SearchForm from "../../../components/SearchForm";
import { Startup } from "@/payload-types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const startups = await fetch("http://localhost:3000/api/startups").then(
    (res) => res.json()
  );
  console.log(startups);

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ides, VOte on Pitches, and get Noticed in Virtual Competitors
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {startups?.docs?.length > 0 ? (
            startups.docs.map((startup: Startup, index: number) => (
              <StartupCard key={index} post={startup} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
