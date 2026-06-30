import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navItems = [
  { href: "/feed", label: "Feed" },
  { href: "/profile/avery", label: "Profile" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center gap-4">
        <Link href="/" className="text-xl font-semibold text-primary">
          NG Career
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
        <div className="ml-auto hidden w-full max-w-sm items-center gap-2 rounded-md border bg-card px-3 md:flex">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            className="h-10 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
            placeholder="Search posts and people"
          />
        </div>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Button asChild variant="ghost">
            <Link href="/auth/login">Log in</Link>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/auth/signup">Sign up</Link>
          </Button>
          <Button className="md:hidden" size="icon" variant="outline" aria-label="Open menu">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
