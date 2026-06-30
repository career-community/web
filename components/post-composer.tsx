import { Image, SendHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export function PostComposer() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="/avatars/avery.svg" alt="Avery Stone" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <Textarea placeholder="Share something useful..." />
            <div className="mt-3 flex items-center justify-between">
              <Button size="icon" variant="ghost" aria-label="Add image">
                <Image className="h-4 w-4" />
              </Button>
              <Button>
                Post
                <SendHorizontal className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
