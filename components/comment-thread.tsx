import { MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Comment } from "@/lib/data";

type CommentThreadProps = {
  comments: Comment[];
};

export function CommentThread({ comments }: CommentThreadProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <MessageCircle className="h-5 w-5 text-primary" />
          Conversation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {comments.map((comment, index) => (
          <div key={comment.id}>
            <article className="flex gap-3">
              <Avatar>
                <AvatarImage src={comment.author.avatarUrl} alt={comment.author.name} />
                <AvatarFallback>{comment.author.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium">{comment.author.name}</p>
                  <p className="text-sm text-muted-foreground">@{comment.author.username}</p>
                  <p className="text-sm text-muted-foreground">{comment.createdAt}</p>
                </div>
                <p className="mt-1 leading-7 text-muted-foreground">{comment.body}</p>
              </div>
            </article>
            {index < comments.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
