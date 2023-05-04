import { IPost, Posts } from "./components/Posts";
import { ProfileCard } from "./components/ProfileCard";

interface ApiPosts {
  total_count: number;
  items: IPost[];
}

async function getApiPosts(): Promise<ApiPosts> {
  const res = await fetch(`https://api.github.com/search/issues?q=repo:hortigas/github-blog`);
  return res.json();
}

export default async function Home() {
  const apiPosts = await getApiPosts();
  return (
    <main className="w-full max-w-4xl mx-4 z-10 mb-48">
      {/* @ts-expect-error Server Component */}
      <ProfileCard />
      <Posts totalCount={apiPosts.total_count} posts={apiPosts.items} />
    </main>
  );
}