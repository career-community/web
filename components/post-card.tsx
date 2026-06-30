import Link from "next/link";
import { Heart, MessageCircle, Repeat2, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Post } from "@/lib/data";

type PostCardProps = {
  post: Post;
  compact?: boolean;
};

export function PostCard({ post, compact = false }: PostCardProps) {
  return (
    <Card>
      <CardHeader className="flex-row items-start gap-3 space-y-0 p-4">
        <Link href={`/profile/${post.author.username}`}>
          <Avatar>
            <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
            <AvatarFallback>{post.author.initials}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link className="font-semibold hover:text-primary" href={`/profile/${post.author.username}`}>
              {post.author.name}
            </Link>
            <span className="text-sm text-muted-foreground">@{post.author.username}</span>
            <span className="text-sm text-muted-foreground">{post.createdAt}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-3 pt-0">
        <Link href={`/post/${post.id}`} className="block">
          <p className="whitespace-pre-line leading-7">{post.body}</p>
        </Link>
      </CardContent>
      {!compact && (
        <CardFooter className="grid grid-cols-4 border-t p-1">
          <Button variant="ghost" size="sm">
            <MessageCircle className="mr-2 h-4 w-4" />
            {post.comments}
          </Button>
          <Button variant="ghost" size="sm">
            <Repeat2 className="mr-2 h-4 w-4" />
            {post.reposts}
          </Button>
          <Button variant="ghost" size="sm">
            <Heart className="mr-2 h-4 w-4" />
            {post.likes}
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
