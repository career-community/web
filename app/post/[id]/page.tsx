import { notFound } from "next/navigation";
import { CommentThread } from "@/components/comment-thread";
import { Navbar } from "@/components/navbar";
import { PostCard } from "@/components/post-card";
import { Sidebar } from "@/components/sidebar";
import { comments, posts } from "@/lib/data";

type PostPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = posts.find((item) => item.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container grid gap-6 py-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <Sidebar />
        <section className="space-y-4">
          <PostCard post={post} />
          <CommentThread comments={comments[id] ?? []} />
        </section>
      </main>
    </div>
  );
}
