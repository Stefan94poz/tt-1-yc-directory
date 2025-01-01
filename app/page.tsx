import Hello from "./components/hello";

export default function Home() {
  console.log("what am i doing --- server/client");
  return (
    <>
      <h1 className="text-3xl">HELLO</h1>
      <Hello />
    </>
  );
}
