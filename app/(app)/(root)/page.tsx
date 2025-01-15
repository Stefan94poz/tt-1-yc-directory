import SearchForm from "../../../components/SearchForm";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import type { Where } from "payload";
import GetStartups from "@/components/GetStartups";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query || null;

  const payload = await getPayload({
    config: configPromise,
  });

  const querySearch: Where = {
    or: [
      {
        title: {
          contains: query || "",
        },
      },
      {
        "author.fullName": {
          contains: query || "",
        },
      },
    ],
  };

  const startups = await payload
    .find({
      collection: "startups",
      where: querySearch,
    })
    .then((res) => res.docs);

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ides, VOte on Pitches, and get Noticed in Virtual Competitors
        </p>
        <SearchForm query={query || ""} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for ${query}` : "All Startups"}
        </p>
        <GetStartups searchParams={searchParams} />
      </section>
    </>
  );
}
