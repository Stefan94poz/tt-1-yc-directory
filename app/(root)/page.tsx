import SearchForm from "../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ides, VOte on Pitches, and get Noticed in Virtual Competitors
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
