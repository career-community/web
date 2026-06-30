import Link from "next/link";
import { Bell, Compass, Home, MessageCircle, UserRound } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trendingTopics } from "@/lib/data";

const links = [
  { href: "/feed", label: "Home", icon: Home },
  { href: "/feed", label: "Explore", icon: Compass },
  { href: "/feed", label: "Messages", icon: MessageCircle },
  { href: "/feed", label: "Alerts", icon: Bell },
  { href: "/profile/avery", label: "Profile", icon: UserRound },
];

export function Sidebar() {
  return (
    <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
      <Card className="hidden lg:block">
        <CardContent className="p-2">
          {links.map((item) => (
            <Button key={item.label} asChild className="w-full justify-start" variant="ghost">
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Trending</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic) => (
            <Link key={topic.slug} href="/feed" className="block rounded-md p-2 hover:bg-muted">
              <p className="text-sm font-medium">{topic.label}</p>
              <p className="text-xs text-muted-foreground">{topic.count} posts</p>
            </Link>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
}
