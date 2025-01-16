import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { stringify } from "qs-esm";
import type { Where } from "payload";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

export function queryStartups(query: string | null) {
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

  return stringify(
    {
      where: querySearch, // ensure that `qs-esm` adds the `where` property, too!
    },
    { addQueryPrefix: true }
  );
}

export const fetcher = (url: string) =>
  fetch(url).then((r) => r.json().then((data) => data.docs));
