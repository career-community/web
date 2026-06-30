import { Navbar } from "@/components/navbar";
import { PostCard } from "@/components/post-card";
import { PostComposer } from "@/components/post-composer";
import { Sidebar } from "@/components/sidebar";
import { posts } from "@/lib/data";

export default function FeedPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container grid gap-6 py-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <Sidebar />
        <section className="space-y-4">
          <PostComposer />
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </main>
    </div>
  );
}
