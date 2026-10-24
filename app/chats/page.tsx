import Link from "next/link";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Explore", href: "/explore" },
  { label: "Videos", href: "/videos" },
  { label: "Channels", href: "/channels" },
  { label: "Chats", href: "/chats" },
];

export default function ChatsPage() {
  return (
    <main className="min-h-screen bg-[#F4F6F9] p-6 text-slate-800">
      <header className="mx-auto mb-6 max-w-[1200px] rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <nav className="flex flex-wrap items-center justify-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-[11px] font-semibold ${
                item.href === "/chats" ? "bg-[#0D3022] text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <div className="mx-auto max-w-[1200px] rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B4532A]">Chats</p>
        <h1 className="mt-3 text-3xl font-black text-[#0D3022]">Messages and conversations</h1>
        <p className="mt-3 text-sm text-slate-600">This is the chats area for MELLA. You can add direct messages and group conversations here.</p>
      </div>
    </main>
  );
}
