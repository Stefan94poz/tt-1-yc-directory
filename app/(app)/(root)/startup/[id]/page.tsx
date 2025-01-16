import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const data = await fetch(`http://localhost:3000/api/startups/${id}`).then(
    (res) => res.json()
  );
  const { title, author, views, description, category, image } = data;
  console.log("image", image);
  return (
    <>
      <ul>
        <li>{title}</li>
        <li>{author?.fullName}</li>
        <li>{views}</li>
        <li>{description}</li>
        <li>{image?.url}</li>
        <li>{category}</li>
      </ul>
    </>
  );
};

export default Page;
