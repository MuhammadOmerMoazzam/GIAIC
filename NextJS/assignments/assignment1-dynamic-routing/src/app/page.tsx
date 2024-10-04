import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Omer's Explorer</h1>
      <p>Below are some topics to explore.</p>
      <Link className="topic-link" href="/country">Countries</Link>

    </div>
  );
}
