import StartupCard from "@/components/StartupCard";
import SearchForm from "../../../components/SearchForm";

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
  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: "Stefan Grom" },
  //     _id: 1,
  //     description: "This is a description of the startup",
  //     title: "Make Stefa great again",
  //     image:
  //       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //     category: "Robots",
  //   },
  // ];

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
            startups.docs.map((startup: StartUpCardType, index: number) => (
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
