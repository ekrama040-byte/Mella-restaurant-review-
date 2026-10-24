"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Bell, Heart, MessageCircle, Send, Share2, Sparkles, ChevronUp, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Explore", href: "/explore" },
  { label: "Videos", href: "/videos" },
  { label: "Channels", href: "/channels" },
  { label: "Chats", href: "/chats" },
];

const videos = [
  {
    id: 1,
    author: "Chef Selam",
    handle: "@selam.kitchen",
    title: "Classic Addis brunch platter",
    description: "Soft injera, slow-cooked lentils, fresh greens, and a warm coffee finish.",
    location: "Bole, Addis",
    likes: 18240,
    comments: 941,
    shares: 602,
    videoUrl: "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    poster:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    author: "Abyssinia Table",
    handle: "@abyssinia.table",
    title: "Heritage coffee ceremony",
    description: "A traditional jebena bunna pour with roasted notes and a slow community ritual.",
    location: "Piassa, Addis",
    likes: 22641,
    comments: 1280,
    shares: 754,
    videoUrl: "https://videos.pexels.com/video-files/4972905/4972905-hd_1920_1080_25fps.mp4",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    poster:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    author: "Maedot Eats",
    handle: "@maedot.eats",
    title: "Your next favorite kitfo stop",
    description: "Warm platters, fresh herbs, and a simple evening made for sharing.",
    location: "Kazanchis, Addis",
    likes: 14580,
    comments: 742,
    shares: 410,
    videoUrl: "https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    poster:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function VideosPage() {
  const [activeVideoId, setActiveVideoId] = useState(1);
  const [likedMap, setLikedMap] = useState<Record<number, boolean>>({});
  const [commentDrafts, setCommentDrafts] = useState<Record<number, string>>({});
  const [commentList, setCommentList] = useState<Record<number, string[]>>({
    1: ["This feels like a perfect weekend plan."],
    2: ["The coffee ritual is beautiful."],
    3: ["This is exactly my dinner mood."],
  });

  const activeVideo = useMemo(
    () => videos.find((video) => video.id === activeVideoId) ?? videos[0],
    [activeVideoId],
  );

  const toggleLike = (id: number) => {
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const submitComment = (id: number) => {
    const value = (commentDrafts[id] ?? "").trim();
    if (!value) return;

    setCommentList((prev) => ({
      ...prev,
      [id]: [...(prev[id] ?? []), value],
    }));
    setCommentDrafts((prev) => ({ ...prev, [id]: "" }));
  };

  const shareVideo = async (id: number) => {
    const url = `${window.location.origin}/videos#video-${id}`;
    try {
      await navigator.clipboard.writeText(url);
      alert("Video link copied to clipboard.");
    } catch {
      window.alert("Unable to copy link automatically, but the page is ready to share.");
    }
  };

  return (
    <main className="min-h-screen bg-[#eef1f3] px-3 py-5 text-slate-800 sm:px-5">
      <header className="mx-auto max-w-[1280px] rounded-full border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
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
                  item.href === "/videos"
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
            <button className="rounded-full bg-[#0D3022] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
              Reels
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto mt-8 w-full max-w-[1500px] px-2 sm:px-4">
        <div className="w-full max-w-[760px] rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_45px_rgba(15,23,42,0.08)] lg:max-w-[820px] xl:max-w-[880px]">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B4532A]">Trending videos</div>
            <div className="flex gap-2 text-slate-400">
              <button className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100">
                <ChevronUp className="h-4 w-4" />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100">
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            className="scrollbar-hidden h-[760px] overflow-y-auto bg-[#F7F8F8]"
            style={{ scrollSnapType: "y mandatory" }}
          >
            {videos.map((video) => (
              <article
                key={video.id}
                id={`video-${video.id}`}
                className="relative h-[760px] scroll-mt-2 scroll-snap-align-start bg-black"
                onMouseEnter={() => setActiveVideoId(video.id)}
              >
                <video
                  className="h-full w-full object-cover"
                  src={video.videoUrl}
                  poster={video.poster}
                  muted
                  loop
                  autoPlay
                  playsInline
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-2 rounded-full bg-black/25 px-2.5 py-1.5 backdrop-blur-sm">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B4532A] text-xs font-bold text-white">
                      {video.author.slice(0, 1)}
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white">{video.author}</div>
                      <div className="text-[9px] text-slate-200">{video.handle}</div>
                    </div>
                  </div>

                  <div className="rounded-full bg-black/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    Live
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-5">
                  <div className="mb-3 flex items-end justify-between gap-4">
                    <div className="max-w-[75%]">
                      <div className="mb-2 inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[9px] font-bold tracking-[0.12em] text-[#FDE68A] backdrop-blur-sm">
                        <Sparkles className="h-3 w-3" />
                        MELLA pick
                      </div>
                      <h2 className="text-xl font-black text-white">{video.title}</h2>
                      <p className="mt-1 text-[12px] leading-relaxed text-slate-200">{video.description}</p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                      <button
                        type="button"
                        onClick={() => toggleLike(video.id)}
                        className="flex flex-col items-center gap-1 text-white"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 backdrop-blur-sm">
                          <Heart className={`h-5 w-5 ${likedMap[video.id] ? "fill-[#FF5A5F] text-[#FF5A5F]" : "text-white"}`} />
                        </span>
                        <span className="text-[10px] font-bold">{video.likes.toLocaleString()}</span>
                      </button>

                      <button
                        type="button"
                        className="flex flex-col items-center gap-1 text-white"
                        onClick={() => setActiveVideoId(video.id)}
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 backdrop-blur-sm">
                          <MessageCircle className="h-5 w-5" />
                        </span>
                        <span className="text-[10px] font-bold">{video.comments.toLocaleString()}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => shareVideo(video.id)}
                        className="flex flex-col items-center gap-1 text-white"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 backdrop-blur-sm">
                          <Share2 className="h-5 w-5" />
                        </span>
                        <span className="text-[10px] font-bold">{video.shares.toLocaleString()}</span>
                      </button>
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-white/15 bg-black/20 p-3 backdrop-blur-sm">
                    <div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.12em] text-slate-200">
                      <span>{video.location}</span>
                      <span>Comments</span>
                    </div>

                    <div className="space-y-2 text-[11px] text-slate-100">
                      {(commentList[video.id] ?? []).slice(-2).map((comment, index) => (
                        <div key={`${video.id}-${index}`} className="rounded-xl bg-white/5 px-2.5 py-1.5">
                          {comment}
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <input
                        value={commentDrafts[video.id] ?? ""}
                        onChange={(event) =>
                          setCommentDrafts((prev) => ({
                            ...prev,
                            [video.id]: event.target.value,
                          }))
                        }
                        placeholder="Add a comment..."
                        className="h-10 flex-1 rounded-full border border-white/15 bg-white/10 px-3 text-[11px] text-white placeholder:text-slate-300 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => submitComment(video.id)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B4532A] text-white"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
