import Link from "next/link";
import { Bell, Compass, Search, Sparkles, Star } from "lucide-react";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Explore", href: "/explore" },
  { label: "Videos", href: "/videos" },
  { label: "Channels", href: "/channels" },
  { label: "Chats", href: "/chats" },
];

const profileCards = [
  {
    name: "Yasmin G",
    title: "Food Curator",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    accent: "bg-[#d8795b]",
  },
  {
    name: "Dawit M",
    title: "Coffee Guide",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    accent: "bg-[#236b4e]",
  },
  {
    name: "Selam W",
    title: "Street Food",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    accent: "bg-[#7ba57a]",
  },
  {
    name: "Abebe T",
    title: "Chef Stories",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    accent: "bg-[#d8795b]",
  },
];

const peopleYouMayKnow = [
  {
    name: "Maya Belay",
    title: "Addis brunch fan",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Brook Tessema",
    title: "Coffee ritual lover",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Hanna Zewdu",
    title: "Home cook",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Almaz Bekele",
    title: "Traditional flavor hunter",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80",
  },
];

const discoveryCards = [
  {
    title: "Popular Recipes",
    subtitle: "Healthy, hearty, and deeply comforting",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Local Favorite Spots",
    subtitle: "Neighborhood gems that guests love",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cultural Dining",
    subtitle: "Stories, rituals, and unforgettable menus",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#eef1f3] text-[#1d2a2a]">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D3022] text-sm font-black text-white">
              M
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-[#0D3022]">MELLA</div>
            </div>
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-[11px] font-semibold transition ${
                  item.href === "/explore"
                    ? "bg-[#0D3022] text-white"
                    : "text-slate-600 hover:bg-slate-100"
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
            <button className="rounded-full bg-[#0D3022] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-white">
              Explore
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1280px] px-4 py-6 sm:px-6">
        <section className="rounded-[26px] border border-slate-200 bg-white p-4 shadow-[0_15px_35px_rgba(15,23,42,0.04)] sm:p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B4532A]">Explore</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-[#0D3022]">
                Find your next favorite table
              </h1>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
              <Compass className="h-3.5 w-3.5 text-[#B4532A]" />
              Addis & beyond
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-[#dfe7e3] bg-[#F5F8F7] p-3 sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                placeholder="Search dishes, creators, neighborhoods..."
                className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <button className="rounded-xl bg-[#0D3022] px-4 py-2.5 text-[11px] font-bold text-white">
              Search
            </button>
          </div>
        </section>

        <section className="mt-6 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-black text-[#0D3022]">Personal Creator Profiles</h2>
              <button className="text-[11px] font-bold text-[#B4532A]">See all</button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {profileCards.map((person) => (
                <article
                  key={person.name}
                  className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_12px_22px_rgba(15,23,42,0.03)]"
                >
                  <div className={`h-24 ${person.accent}`} />
                  <div className="p-3 text-center">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="mx-auto -mt-8 h-14 w-14 rounded-full border-4 border-white object-cover"
                    />
                    <div className="mt-2 text-sm font-bold text-slate-900">{person.name}</div>
                    <div className="text-[11px] text-slate-500">{person.title}</div>
                    <button className="mt-3 w-full rounded-full bg-[#0D3022] px-3 py-2 text-[10px] font-bold text-white">
                      Follow
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_12px_22px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-[#0D3022]">Featured</h3>
              <span className="rounded-full bg-[#FBF0EB] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#B4532A]">
                Trend
              </span>
            </div>

            <div className="mt-4 overflow-hidden rounded-[20px]">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                alt="Featured food"
                className="h-44 w-full object-cover"
              />
            </div>

            <div className="mt-4">
              <div className="text-lg font-black text-slate-900">Traditional Dining Collection</div>
              <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-500">
                <Star className="h-3.5 w-3.5 fill-[#B4532A] text-[#B4532A]" />
                4.9 rating • 1.8k saves
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-black text-[#0D3022]">People You May Know</h2>
            <button className="text-[11px] font-bold text-[#B4532A]">View all</button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {peopleYouMayKnow.map((person) => (
              <div key={person.name} className="rounded-[22px] border border-slate-200 bg-white p-3 shadow-[0_8px_18px_rgba(15,23,42,0.02)]">
                <div className="flex items-center gap-3">
                  <img src={person.image} alt={person.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{person.name}</div>
                    <div className="text-[11px] text-slate-500">{person.title}</div>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-bold text-slate-700">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-black text-[#0D3022]">Popular Stories & Spots</h2>
            <button className="text-[11px] font-bold text-[#B4532A]">More</button>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {discoveryCards.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_10px_18px_rgba(15,23,42,0.03)]">
                <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
                <div className="p-4">
                  <div className="text-lg font-black text-slate-900">{item.title}</div>
                  <div className="mt-2 text-[12px] leading-relaxed text-slate-600">{item.subtitle}</div>
                  <button className="mt-4 rounded-full bg-[#0D3022] px-3 py-2 text-[10px] font-bold text-white">
                    Visit collection
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10 mt-8 rounded-[24px] border border-slate-200 bg-[#0D3022] p-5 text-white shadow-[0_18px_45px_rgba(13,48,34,0.16)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FDE68A]">MELLA Highlight</div>
              <h2 className="mt-2 text-2xl font-black">Discover Addis through the table</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#FDE68A]">
              <Sparkles className="h-3.5 w-3.5" />
              Weekly picks
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
