import Link from "next/link";
import { ArrowRight, MessageSquareText, Sparkles, UsersRound } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { posts } from "@/lib/data";

const highlights = [
  {
    icon: MessageSquareText,
    title: "Post-first community",
    copy: "Share crisp updates, questions, and field notes with people following the same work.",
  },
  {
    icon: UsersRound,
    title: "Profiles that travel",
    copy: "Each profile gathers a member's posts, expertise, and lightweight social context.",
  },
  {
    icon: Sparkles,
    title: "Ready for iteration",
    copy: "The MVP is structured for auth, data persistence, and Vercel deployment.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="border-b bg-card">
          <div className="container grid gap-10 py-14 lg:grid-cols-[1fr_420px] lg:items-center lg:py-20">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                Website MVP
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
                NG Career is a focused career web for useful conversation.
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Publish posts, follow discussion threads, browse profiles, and give early users a
                clean responsive place to return to.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/feed">
                    Open feed
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/auth/signup">Create account</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-3 shadow-soft">
              <PostCard post={posts[0]} compact />
            </div>
          </div>
        </section>

        <section className="container py-12">
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-5">
                  <item.icon className="h-5 w-5 text-primary" />
                  <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
