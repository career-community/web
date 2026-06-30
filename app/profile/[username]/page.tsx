import { CalendarDays, LinkIcon, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { PostCard } from "@/components/post-card";
import { Sidebar } from "@/components/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { posts, users } from "@/lib/data";

type ProfilePageProps = {
  params: Promise<{
    username: string;
  }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;
  const user = users.find((item) => item.username === username);

  if (!user) {
    notFound();
  }

  const profilePosts = posts.filter((post) => post.author.username === user.username);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container grid gap-6 py-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <Sidebar />
        <section className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="h-28 rounded-t-lg bg-[linear-gradient(110deg,hsl(174_64%_28%),hsl(18_85%_58%))]" />
              <div className="px-5 pb-5">
                <div className="-mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <Avatar className="h-20 w-20 border-4 border-card">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.initials}</AvatarFallback>
                  </Avatar>
                  <Button>Follow</Button>
                </div>
                <div className="mt-4">
                  <h1 className="text-2xl font-semibold">{user.name}</h1>
                  <p className="text-sm text-muted-foreground">@{user.username}</p>
                  <p className="mt-4 max-w-2xl leading-7">{user.bio}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {user.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {user.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <LinkIcon className="h-4 w-4" />
                    ngcareer.example/{user.username}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    Joined {user.joined}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {profilePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </main>
    </div>
  );
}
