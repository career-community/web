export type User = {
  name: string;
  username: string;
  initials: string;
  avatarUrl: string;
  bio: string;
  tags: string[];
  location: string;
  joined: string;
};

export type Post = {
  id: string;
  author: User;
  body: string;
  tags: string[];
  createdAt: string;
  comments: number;
  reposts: number;
  likes: number;
};

export type Comment = {
  id: string;
  author: User;
  body: string;
  createdAt: string;
};

export const users: User[] = [
  {
    name: "Avery Stone",
    username: "avery",
    initials: "AS",
    avatarUrl: "/avatars/avery.svg",
    bio: "Building practical communities for operators, founders, and curious specialists.",
    tags: ["Product", "Community", "Research"],
    location: "Austin, TX",
    joined: "June 2026",
  },
  {
    name: "Mina Patel",
    username: "mina",
    initials: "MP",
    avatarUrl: "/avatars/mina.svg",
    bio: "Design systems, calmer workflows, and better product rituals.",
    tags: ["Design", "Systems"],
    location: "Chicago, IL",
    joined: "June 2026",
  },
  {
    name: "Jon Bell",
    username: "jon",
    initials: "JB",
    avatarUrl: "/avatars/jon.svg",
    bio: "Engineering lead writing about durable software habits.",
    tags: ["Engineering", "Ops"],
    location: "Denver, CO",
    joined: "June 2026",
  },
];

export const posts: Post[] = [
  {
    id: "launch-notes",
    author: users[0],
    body: "The best early career communities feel less like a broadcast channel and more like a shared notebook. The first NG Career pass keeps the loop simple: post, discuss, follow the people who consistently make the room smarter.",
    tags: ["MVP", "Community"],
    createdAt: "12m",
    comments: 8,
    reposts: 4,
    likes: 42,
  },
  {
    id: "interface-density",
    author: users[1],
    body: "Useful feeds need rhythm: enough density to scan, enough whitespace to think, and no decorative furniture fighting the content.",
    tags: ["Design", "Feed"],
    createdAt: "34m",
    comments: 5,
    reposts: 2,
    likes: 29,
  },
  {
    id: "ship-small",
    author: users[2],
    body: "For web MVPs, deployability is a feature. A small typed app with obvious routes and boring infrastructure beats an ambitious prototype nobody can run twice.",
    tags: ["Engineering", "Vercel"],
    createdAt: "1h",
    comments: 11,
    reposts: 7,
    likes: 64,
  },
];

export const comments: Record<string, Comment[]> = {
  "launch-notes": [
    {
      id: "c1",
      author: users[1],
      body: "The shared notebook framing is strong. It implies curation without making the product feel heavy.",
      createdAt: "8m",
    },
    {
      id: "c2",
      author: users[2],
      body: "This also keeps the backend path sane: posts, profiles, comments, follows, then notifications.",
      createdAt: "5m",
    },
  ],
  "interface-density": [
    {
      id: "c3",
      author: users[0],
      body: "Exactly. The interface should get out of the way once the user knows where they are.",
      createdAt: "20m",
    },
  ],
  "ship-small": [
    {
      id: "c4",
      author: users[1],
      body: "A deployable prototype is also easier to critique because people can react to the real surface.",
      createdAt: "44m",
    },
  ],
};

export const trendingTopics = [
  { slug: "community", label: "Community design", count: 128 },
  { slug: "mvp", label: "MVP launch notes", count: 94 },
  { slug: "vercel", label: "Vercel-ready apps", count: 67 },
];
