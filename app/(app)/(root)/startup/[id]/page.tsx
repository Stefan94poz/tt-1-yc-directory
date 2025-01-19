import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import {
  defaultJSXConverters,
  RichText,
} from "@payloadcms/richtext-lexical/react";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";

export const experimental_ppr = true;

const Page = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const data = await fetch(
    `http://localhost:3000/api/startups/${id}`,
  ).then((res) => res.json());

  const {
    title,
    author,
    description,
    content,
    category,
    image,
    createdAt,
  } = data;

  if (!data) return notFound();

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(createdAt)}</p>
        <h1 className="heading">{title}</h1>
        <p className="sub-heading !max-w-5xl">
          {description}
        </p>
      </section>
      <section className="section_container">
        <Image
          src={image?.url || "/"}
          width={500}
          height={250}
          className="w-full h-auto rounded-xl"
          alt="thumbnail"
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link href={`/startup/${author?.id}`}>
              <Image
                src={author?.avatar?.url || "/"}
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
                alt="thumbnail"
              />
              <div>
                <p className="text-20-medium">
                  {author?.fullName}
                </p>
                <p className="text-16-medium !text-black-300">
                  email: {author?.email}
                </p>
              </div>
            </Link>
            <p className="category-tag">{category}</p>
          </div>
          <h3 className="text-30-bold">Pitch Details</h3>
          <article className="prose max-w-4xl font-work-sans break-all">
            <RichText
              data={content}
              converters={defaultJSXConverters}
            />
          </article>
        </div>
        <hr className="divider" />
        <Suspense
          fallback={<Skeleton className="view_skeleton" />}
        >
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default Page;
