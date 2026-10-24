import Link from "next/link";
import { Bell, ChefHat, Clock3, MapPin, MessageCircle, Sparkles, Star } from "lucide-react";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Explore", href: "/explore" },
  { label: "Videos", href: "/videos" },
  { label: "Channels", href: "/channels" },
  { label: "Chats", href: "/chats" },
];

const restaurantPosts = [
  {
    id: 1,
    restaurant: "Yod Abyssinia",
    area: "Bole Medhanialem",
    badge: "New menu",
    time: "Updated 2h ago",
    title: "New heritage platter now available",
    teaser: "Kitfo, misir wot, gomen and house-made injera are back for the weekend with a fresh spice profile.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    tags: ["Kitfo", "Weekend special", "Heritage"],
  },
  {
    id: 2,
    restaurant: "Tomoca Coffee",
    area: "Piassa",
    badge: "Seasonal",
    time: "Updated today",
    title: "Jebena bunna tasting flight is live",
    teaser: "Try our light roast, medium roast, and signature spiced coffee served with fresh teff-based treats.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    tags: ["Coffee", "Tasting", "Morning"],
  },
  {
    id: 3,
    restaurant: "Kategna",
    area: "Kazanchis",
    badge: "Chef note",
    time: "Updated 4h ago",
    title: "New fasting menu for the week",
    teaser: "Fresh shiro, beets, lentils, and vibrant greens are featured in our new balanced fasting table.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    tags: ["Fasting", "Vegetarian", "Chef pick"],
  },
];

export default function ChannelsPage() {
  return (
    <main className="min-h-screen bg-[#F4F6F9] text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D3022] text-sm font-black text-white">
              M
            </div>
            <div className="text-xl font-black tracking-tight text-[#0D3022]">MELLA</div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-[11px] font-semibold ${
                  item.href === "/channels" ? "bg-[#0D3022] text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FBF0EB] text-[#B4532A]">
              <Bell className="h-4 w-4" />
            </button>
            <button className="rounded-full bg-[#0D3022] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
              Channels
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6">
        <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_35px_rgba(15,23,42,0.04)] sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B4532A]">Restaurant channels</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-[#0D3022]">
                Restaurant updates & menu changes
              </h1>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#F8FAFC] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
              <Sparkles className="h-3.5 w-3.5 text-[#B4532A]" />
              Fresh updates today
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-5">
            <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_12px_22px_rgba(15,23,42,0.03)]">
              <div className="text-sm font-black text-[#0D3022]">Featured restaurants</div>
              <div className="mt-4 space-y-3">
                {[
                  { name: "Yod Abyssinia", status: "Updating tonight" },
                  { name: "Tomoca Coffee", status: "Coffee tasting" },
                  { name: "Kategna", status: "Fasting menu" },
                  { name: "Mamma B", status: "Chef specials" },
                ].map((entry) => (
                  <div key={entry.name} className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] p-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F4EA] text-[#0D3022]">
                        <ChefHat className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[12px] font-bold text-slate-900">{entry.name}</div>
                        <div className="text-[10px] text-slate-500">{entry.status}</div>
                      </div>
                    </div>
                    <button className="rounded-full bg-[#0D3022] px-2.5 py-1 text-[10px] font-bold text-white">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-[#0D3022] p-4 text-white shadow-[0_12px_22px_rgba(13,48,34,0.18)]">
              <div className="flex items-center gap-2 text-[#FDE68A]">
                <Sparkles className="h-4 w-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Restaurant insight</span>
              </div>
              <div className="mt-4 text-xl font-black">Menu updates are driving repeat visits this week.</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-200">
                Dining rooms are highlighting chef specials and seasonal tasting menus to draw local guests back in.
              </div>
            </div>
          </aside>

          <div className="space-y-5">
            {restaurantPosts.map((post) => (
              <article key={post.id} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_15px_28px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBF0EB] text-sm font-black text-[#B4532A]">
                      {post.restaurant.slice(0, 1)}
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-slate-900">{post.restaurant}</div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <MapPin className="h-3.5 w-3.5 text-[#B4532A]" /> {post.area}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#ECFDF5] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#0D3022]">
                      {post.badge}
                    </span>
                    <span className="text-[10px] text-slate-400">{post.time}</span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-xl font-black text-slate-900">{post.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.teaser}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[10px] font-semibold text-slate-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <img src={post.image} alt={post.title} className="h-64 w-full object-cover" />

                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-4 text-slate-500">
                    <button className="flex items-center gap-1.5 text-[11px] font-semibold">
                      <Star className="h-4 w-4 text-[#B4532A] fill-[#B4532A]" />
                      1.2k
                    </button>
                    <button className="flex items-center gap-1.5 text-[11px] font-semibold">
                      <MessageCircle className="h-4 w-4" />
                      94
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    <Clock3 className="h-3.5 w-3.5" />
                    Updates
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
