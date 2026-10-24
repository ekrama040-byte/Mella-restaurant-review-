export type DemoUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  location: string;
  role: string;
  bio: string;
};

export type FeedPost = {
  id: string;
  authorId: string;
  title: string;
  excerpt: string;
  image: string;
  location: string;
  time: string;
  tags: string[];
  likes: number;
  comments: number;
};

export const demoUsers: DemoUser[] = [
  {
    id: "liya-kassa",
    name: "Liya Kassa",
    username: "liya_eats_addis",
    email: "liya.kassa@ethiopia-dining.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
    location: "Addis Ababa",
    role: "Culinary storyteller",
    bio: "Exploring hidden kitchens, coffee ceremonies, and neighborhood tastes across Addis.",
  },
  {
    id: "kidist-tadesse",
    name: "Kidist Tadesse",
    username: "kidist_tastes",
    email: "kidist@demo.mella",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80",
    location: "Bole, Addis",
    role: "Heritage diner",
    bio: "Favorite tables, local legends, and unforgettable injera moments.",
  },
  {
    id: "selam-wolde",
    name: "Selam Wolde",
    username: "selam.sips",
    email: "selam@demo.mella",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80",
    location: "Kazanchis",
    role: "Coffee curator",
    bio: "Chasing the perfect jebena bunna and slow afternoon chats.",
  },
  {
    id: "abebe-tefera",
    name: "Abebe Tefera",
    username: "abebe.tastes",
    email: "abebe@demo.mella",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
    location: "Piassa",
    role: "Food critic",
    bio: "Old-school classics and the stories behind every recipe.",
  },
];

export const demoPosts: FeedPost[] = [
  {
    id: "post-1",
    authorId: "kidist-tadesse",
    title: "Bole Kitfo Society",
    excerpt:
      "Silky kitfo, warm injera, and the kind of evening that keeps people lingering after midnight.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    location: "Bole Atlas",
    time: "2h ago",
    tags: ["Kitfo", "Heritage", "Late Night"],
    likes: 214,
    comments: 28,
  },
  {
    id: "post-2",
    authorId: "selam-wolde",
    title: "Jebena bunna ritual",
    excerpt:
      "A foot-of-the-table pour, slow conversation, and the thoughtfulness behind every cup.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
    location: "Tomoca, Piassa",
    time: "5h ago",
    tags: ["Coffee", "Ritual", "Neighborhood"],
    likes: 182,
    comments: 19,
  },
  {
    id: "post-3",
    authorId: "abebe-tefera",
    title: "Gored gored and ajvar toast",
    excerpt:
      "The best spots don’t rush the service; they let the flavors tell the story.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80",
    location: "Old Piassa",
    time: "1d ago",
    tags: ["Savory", "Review", "Classic"],
    likes: 326,
    comments: 44,
  },
  {
    id: "post-4",
    authorId: "liya-kassa",
    title: "Beyaynetu platter",
    excerpt:
      "A colorful spread of shiro, misir wot, and injera that feels like a weekend table in every home.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80",
    location: "Kategna, Bole",
    time: "8h ago",
    tags: ["Fasting", "Platter", "Community"],
    likes: 412,
    comments: 67,
  },
];

export function getUserById(userId: string) {
  return demoUsers.find((user) => user.id === userId) ?? demoUsers[0];
}
