import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function StartupCard({ post }: { post: StartupTypeCard }) {
  const {
    createdAt,
    views,
    author: { _id: authorId, name },
    id,
    title,
    image: { url },
    description,
    category,
  } = post;
  console.log("ASD,", post);
  return (
    <li className="startup-card group">
      <div className="flex justify-between">
        <p className="startup_card_date">{formatDate(new Date(createdAt))}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${id}`}>
            <h3 className="text-36-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="/globe.svg"
            alt="placeholder"
            width={28}
            height={28}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${id}`}>
        <p className="startup_desc">{description}</p>
        <Image
          src={url}
          alt="placeholder"
          className="startup_card_img"
          width={500}
          height={500}
          style={{
            maxHeight: "150px",
            objectFit: "cover",
          }}
        />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
}

export default StartupCard;
