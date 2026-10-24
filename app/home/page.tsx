"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import {
  Search,
  Bell,
  Bookmark,
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  MapPin,
  Plus,
  Image as ImageIcon,
  Video,
  Utensils,
  Award,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Play,
  ArrowLeft,
  Flame,
  Coffee,
  Compass,
  Quote,
} from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function MellaHomePage() {
  const [feedTab, setFeedTab] = useState<"curated" | "following">("curated");
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({
    post1: true,
    post2: false,
    post3: false,
    post4: true,
  });
  const [followedUsers, setFollowedUsers] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFollow = (id: string) => {
    setFollowedUsers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const tasteMoments = [
    {
      id: "addis",
      label: "Your Story",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80",
      isUser: true,
    },
    {
      id: "1",
      label: "Bole Kitfo",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=240&q=80",
    },
    {
      id: "2",
      label: "Tomoca",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=240&q=80",
    },
    {
      id: "3",
      label: "Yod Abyssinia",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=240&q=80",
    },
    {
      id: "4",
      label: "Piassa Tej",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=240&q=80",
    },
    {
      id: "5",
      label: "Kategna",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=240&q=80",
    },
    {
      id: "6",
      label: "2000 Habesha",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=240&q=80",
    },
  ];

  return (
    <div
      className={`${jakarta.className} min-h-screen bg-[#F4F6F9] text-[#111827] antialiased`}
    >
      {/* STICKY TOP NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1260px] items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          {/* Left Brand + Back to Sign-In */}
          <div className="flex items-center gap-4">
          

            <div>
              <div
                className={`${playfair.className} flex items-center text-xl font-bold tracking-tight text-[#0D3022]`}
              >
                MELLA<span className="text-[#B4532A]">.</span>
              </div>
              <p className="text-[8.5px] font-bold uppercase tracking-[0.14em] text-[#B4532A]">
                Ethiopian Culinary Network
              </p>
            </div>
          </div>

          {/* Center Search Bar */}
          <div className="hidden max-w-md flex-1 md:block">
            <div className="relative flex items-center rounded-full border border-slate-200/80 bg-[#F1F5F9] px-4 py-1.5 focus-within:border-[#0D3022]/40 focus-within:bg-white">
              <Search className="mr-2.5 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search dishes, Bole spots, chefs, or curators..."
                className="w-full bg-transparent text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Right Navigation Links & Profile */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <nav className="hidden items-center gap-1 lg:flex">
              <Link
                href="/home"
                className="rounded-full bg-[#0D3022] px-3.5 py-1.5 text-[11px] font-bold text-white"
              >
                Home
              </Link>
              <Link
                href="/explore"
                className="rounded-full px-3 py-1.5 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-100"
              >
                Explore
              </Link>
              <Link
                href="/videos"
                className="rounded-full px-3 py-1.5 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-100"
              >
                Videos
              </Link>
              <Link
                href="/channels"
                className="rounded-full px-3 py-1.5 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-100"
              >
                Channels
              </Link>
              <Link
                href="/chats"
                className="rounded-full px-3 py-1.5 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-100"
              >
                Chats
              </Link>
            </nav>

            <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#FBF0EB] text-[#B4532A] hover:bg-[#f5dfd5]">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#B4532A]" />
            </button>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D3022] text-xs font-bold text-white ring-2 ring-[#0D3022]/15">
              KT
            </div>
          </div>
        </div>
      </header>

      {/* MAIN 3-COLUMN FEED GRID */}
      <main className="mx-auto grid max-w-[1260px] grid-cols-1 gap-5 px-4 py-6 sm:px-6 lg:grid-cols-12">
        {/* ================= LEFT SIDEBAR (3 COLS) ================= */}
        <aside className="space-y-4 lg:col-span-3">
          {/* User Profile Card */}
          <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Kidist Tadesse"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-[#B4532A]/30"
                />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-600" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h2 className="text-sm font-bold text-slate-900">
                    Kidist Tadesse
                  </h2>
                  <CheckCircle2 className="h-3.5 w-3.5 fill-[#B4532A] text-white" />
                </div>
                <p className="text-[11px] text-slate-500">
                  @kidist_tastes • Addis Ababa
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="mt-4 grid grid-cols-3 divide-x divide-slate-200/70 rounded-xl bg-[#F8FAFC] py-2.5 text-center">
              <div>
                <div className="text-xs font-bold text-[#0D3022]">142</div>
                <div className="text-[9.5px] font-medium text-slate-400">
                  Reviews
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-[#0D3022]">3.8k</div>
                <div className="text-[9.5px] font-medium text-slate-400">
                  Followers
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-[#0D3022]">64</div>
                <div className="text-[9.5px] font-medium text-slate-400">
                  Spots
                </div>
              </div>
            </div>

            <button className="mt-3.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#0D3022] py-2.5 text-[11.5px] font-bold text-white shadow-xs transition hover:bg-[#144330]">
              <Plus className="h-3.5 w-3.5" />
              <span>Share Dish or Table</span>
            </button>
          </div>

          {/* Curated Food Circles */}
          <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-xs">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
              Curated Food Circles
            </h3>

            <div className="mt-3 space-y-1">
              {[
                {
                  name: "Bole Kitfo Society",
                  badge: "14 new",
                  icon: Flame,
                  color: "text-[#B4532A] bg-[#FBF0EB]",
                },
                {
                  name: "Traditional Jebena Bunna",
                  icon: Coffee,
                  color: "text-[#0D3022] bg-[#E6F4EA]",
                },
                {
                  name: "Piassa Heritage Bakers",
                  icon: Award,
                  color: "text-amber-700 bg-amber-50",
                },
                {
                  name: "Fasting (Tsom) Gems",
                  icon: Compass,
                  color: "text-sky-700 bg-sky-50",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    className="flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-left transition hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-lg ${item.color}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[11.5px] font-semibold text-slate-700">
                        {item.name}
                      </span>
                    </div>
                    {item.badge ? (
                      <span className="rounded-full bg-[#FBF0EB] px-2 py-0.5 text-[9.5px] font-bold text-[#B4532A]">
                        {item.badge}
                      </span>
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Seasonal Highlight Card */}
          <div className="rounded-2xl border border-[#B4532A]/20 bg-[#FBF0EB]/60 p-4">
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#B4532A]">
              <Sparkles className="h-3 w-3" />
              <span>Seasonal Highlight</span>
            </div>
            <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-700">
              Addis Culinary Week is live! Share your favorite{" "}
              <strong className="text-[#0D3022]">#MeskelFeast</strong> platters
              and tag local chefs to get featured.
            </p>
          </div>
        </aside>

        {/* ================= CENTER FEED COLUMN (6 COLS) ================= */}
        <section className="space-y-4 lg:col-span-6">
          {/* Addis Taste Moments (Stories Bar) */}
          <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-xs">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-800">
                Addis Taste Moments
              </h3>
              <button className="text-[11px] font-semibold text-[#B4532A] hover:underline">
                View All
              </button>
            </div>

            <div className="flex items-center gap-3.5 overflow-x-auto pb-1">
              {tasteMoments.map((story) => (
                <div
                  key={story.id}
                  className="flex shrink-0 cursor-pointer flex-col items-center"
                >
                  <div
                    className={`relative rounded-full p-0.5 ${
                      story.isUser
                        ? "border-2 border-dashed border-[#0D3022]"
                        : "bg-gradient-to-tr from-[#B4532A] to-[#0D3022]"
                    }`}
                  >
                    <img
                      src={story.img}
                      alt={story.label}
                      className="h-12 w-12 rounded-full border-2 border-white object-cover"
                    />
                    {story.isUser && (
                      <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0D3022] text-[10px] font-bold text-white">
                        +
                      </span>
                    )}
                  </div>
                  <span className="mt-1.5 max-w-[60px] truncate text-[10px] font-semibold text-slate-600">
                    {story.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Post Composer Card */}
          <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-xs">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-2.5 text-xs font-bold">
              <button
                onClick={() => setFeedTab("curated")}
                className={`pb-1 transition ${
                  feedTab === "curated"
                    ? "border-b-2 border-[#0D3022] text-[#0D3022]"
                    : "text-slate-400"
                }`}
              >
                Curated Feed
              </button>
              <button
                onClick={() => setFeedTab("following")}
                className={`flex items-center gap-1.5 pb-1 transition ${
                  feedTab === "following"
                    ? "border-b-2 border-[#0D3022] text-[#0D3022]"
                    : "text-slate-400"
                }`}
              >
                <span>Following</span>
                <span className="rounded-full bg-[#FBF0EB] px-1.5 py-0.2 text-[9px] text-[#B4532A]">
                  New
                </span>
              </button>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Avatar"
                className="h-9 w-9 rounded-full object-cover"
              />
              <input
                type="text"
                placeholder="Share a culinary discovery, dish note, or story..."
                className="w-full rounded-full bg-[#F1F5F9] px-4 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0D3022]/30"
              />
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 text-[11px] font-semibold text-slate-500">
              <button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 hover:bg-slate-50">
                <ImageIcon className="h-3.5 w-3.5 text-emerald-700" />
                <span>Photo</span>
              </button>
              <button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 hover:bg-slate-50">
                <Video className="h-3.5 w-3.5 text-[#B4532A]" />
                <span>Video</span>
              </button>
              <button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 hover:bg-slate-50">
                <Utensils className="h-3.5 w-3.5 text-amber-600" />
                <span>Dish Review</span>
              </button>
              <button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 hover:bg-slate-50">
                <MapPin className="h-3.5 w-3.5 text-sky-600" />
                <span>Tag Spot</span>
              </button>
            </div>
          </div>

          {/* ================= POST 1: KITFO PLATTER ================= */}
          <article className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-xs">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Chef Yonas"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-slate-900">
                        Chef Yonas Tsegaye
                      </span>
                      <CheckCircle2 className="h-3.5 w-3.5 fill-[#B4532A] text-white" />
                    </div>
                    <p className="text-[10.5px] text-slate-400">
                      Head Curator • 2 hours ago
                    </p>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[10px] font-semibold text-slate-600">
                <MapPin className="h-3 w-3 text-[#B4532A]" />
                <span>Yod Abyssinia Traditional • Bole Medhanialem • ★ 4.9</span>
              </div>

              <p className="mt-2.5 text-xs leading-relaxed text-slate-700">
                Nothing compares to hand-minced{" "}
                <strong>Special Kitfo</strong> seasoned with warm niter kibbeh
                and fiery mitmita, served alongside house-churned ayib and
                gomen. Pure Gurage culinary artistry on a single mesob! 🇪🇹✨
              </p>
              <p className="mt-1 text-[11px] font-semibold text-[#B4532A]">
                #AddisDining #KitfoCraft #HeritageTable #EthiopianCuisine
              </p>
            </div>

            <div className="relative h-[300px] w-full bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85"
                alt="Special Kitfo Platter"
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-[#0D3022]/90 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-xs">
                ✓ Verified Heritage Dish
              </span>
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleLike("post1")}
                  className={`flex items-center gap-1.5 font-semibold ${
                    likedPosts.post1 ? "text-[#B4532A]" : "hover:text-slate-800"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      likedPosts.post1 ? "fill-[#B4532A]" : ""
                    }`}
                  />
                  <span>{likedPosts.post1 ? "249" : "248"}</span>
                </button>
                <button className="flex items-center gap-1.5 font-semibold hover:text-slate-800">
                  <MessageCircle className="h-4 w-4" />
                  <span>42</span>
                </button>
                <button className="flex items-center gap-1.5 font-semibold hover:text-slate-800">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
              <button className="hover:text-slate-800">
                <Bookmark className="h-4 w-4" />
              </button>
            </div>
          </article>

          {/* ================= POST 2: FEATURED HERITAGE TABLE (VIDEO) ================= */}
          <article className="overflow-hidden rounded-2xl border border-[#0D3022]/20 bg-white shadow-xs">
            <div className="flex items-center justify-between bg-[#0D3022] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white">
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-[#FDE68A]" />
                Featured Heritage Table • Live Tasting
              </span>
              <span className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] text-[#FDE68A]">
                12 Seats Left
              </span>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="Kategna"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-slate-900">
                        Abyssinia Cultural Kitchen
                      </span>
                      <CheckCircle2 className="h-3.5 w-3.5 fill-[#0D3022] text-white" />
                    </div>
                    <p className="text-[10.5px] text-slate-400">
                      @abyssinia_table • 4 hours ago • Sponsored
                    </p>
                  </div>
                </div>
                <MoreHorizontal className="h-4 w-4 text-slate-400" />
              </div>

              <p className="mt-2.5 text-xs leading-relaxed text-slate-700">
                Join our Thursday evening <strong>Mahberawi Mesob</strong> &
                clay-pot tej pairing with Master Chef Almaz. Watch how we slow-simmer
                our 12-hour Doro Wot!
              </p>
            </div>

            {/* Video Preview Container */}
            <div className="relative h-[270px] w-full bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85"
                alt="Traditional Mesob Table"
                className="h-full w-full object-cover brightness-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#0D3022] shadow-lg transition hover:scale-105">
                  <Play className="ml-0.5 h-5 w-5 fill-current" />
                </button>
              </div>
              <span className="absolute right-3 top-3 rounded-full bg-[#B4532A] px-2.5 py-0.5 text-[10px] font-bold text-white">
                ● 02:45 Preview
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-100 bg-[#F8FAFC] px-4 py-2.5">
              <div>
                <div className="text-xs font-bold text-slate-800">
                  Thursday Heritage Mesob Night
                </div>
                <div className="text-[10.5px] text-slate-500">
                  Bole Atlas • Starts 7:30 PM EAT
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-700 hover:bg-slate-50">
                  View Menu
                </button>
                <button className="rounded-lg bg-[#B4532A] px-3 py-1.5 text-[11px] font-bold text-white hover:bg-[#9A3B1E]">
                  Reserve Seat
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-4 py-2.5 text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleLike("post2")}
                  className="flex items-center gap-1.5 font-semibold hover:text-slate-800"
                >
                  <Heart className="h-4 w-4" />
                  <span>189</span>
                </button>
                <button className="flex items-center gap-1.5 font-semibold hover:text-slate-800">
                  <MessageCircle className="h-4 w-4" />
                  <span>29</span>
                </button>
              </div>
              <Bookmark className="h-4 w-4" />
            </div>
          </article>

          {/* ================= POST 3: EDITORIAL QUOTE CARD ================= */}
          <article className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Dawit"
                  className="h-9 w-9 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-slate-900">
                      Dawit Mekonnen
                    </span>
                    <CheckCircle2 className="h-3.5 w-3.5 fill-[#B4532A] text-white" />
                  </div>
                  <p className="text-[10.5px] text-slate-400">
                    Coffee Historian • Piassa • 6h
                  </p>
                </div>
              </div>
              <MoreHorizontal className="h-4 w-4 text-slate-400" />
            </div>

            <div className="mt-3 rounded-xl border border-slate-200/70 bg-[#F8FAFC] p-4">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#B4532A]">
                <span>Culinary Journal Excerpt</span>
                <Quote className="h-4 w-4 text-slate-300" />
              </div>
              <blockquote
                className={`${playfair.className} mt-2 text-base font-bold italic leading-relaxed text-[#0D3022]`}
              >
                &ldquo;To pour jebena bunna from a foot above the finjal in
                Addis is never rushing; it is an invitation to slow time. The
                first cup (Abol) awakens the tongue, Tona sparks conversation,
                and Bereka leaves the blessing at the table.&rdquo;
              </blockquote>
            </div>
          </article>

          {/* ================= POST 4: BEYAYNETU FASTING PLATTER ================= */}
          <article className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-xs">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                    alt="Hanna"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-slate-900">
                        Hanna Girma
                      </span>
                      <CheckCircle2 className="h-3.5 w-3.5 fill-[#B4532A] text-white" />
                    </div>
                    <p className="text-[10.5px] text-slate-400">
                      @hanna_bakes • Kazanchis • 8h
                    </p>
                  </div>
                </div>
                <MoreHorizontal className="h-4 w-4 text-slate-400" />
              </div>

              <p className="mt-2.5 text-xs leading-relaxed text-slate-700">
                Wednesday <strong>Beyaynetu</strong> colors at Kategna! Silky
                shiro tegamino, misir wot, beetroot key sir, and fermented
                100% teff injera. Fastest way to my heart. 🌱🍽️
              </p>
            </div>

            <div className="relative h-[280px] w-full bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85"
                alt="Beyaynetu Platter"
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-[#0D3022]/90 px-3 py-1 text-[10px] font-bold text-white">
                ★ 4.95 Community Top Fasting Spot
              </span>
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleLike("post4")}
                  className="flex items-center gap-1.5 font-semibold text-[#B4532A]"
                >
                  <Heart className="h-4 w-4 fill-[#B4532A]" />
                  <span>412</span>
                </button>
                <button className="flex items-center gap-1.5 font-semibold">
                  <MessageCircle className="h-4 w-4" />
                  <span>67</span>
                </button>
              </div>
              <Bookmark className="h-4 w-4" />
            </div>
          </article>
        </section>

        {/* ================= RIGHT SIDEBAR (3 COLS) ================= */}
        <aside className="space-y-4 lg:col-span-3">
          {/* Addis Tastemakers to Follow */}
          <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-900">
                Addis Tastemakers
              </h3>
              <button className="text-[10.5px] font-semibold text-[#B4532A]">
                See All
              </button>
            </div>

            <div className="mt-3.5 space-y-3">
              {[
                {
                  id: "u1",
                  name: "Chef Marcus S.",
                  role: "Modern Ethio-Fusion",
                  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
                },
                {
                  id: "u2",
                  name: "Selamawit Bekele",
                  role: "Wine & Tej Sommelier",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
                },
                {
                  id: "u3",
                  name: "Elias Hailemariam",
                  role: "Old Piassa Food Critic",
                  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
                },
              ].map((person) => (
                <div
                  key={person.id}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-[11.5px] font-bold text-slate-800">
                        {person.name}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {person.role}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFollow(person.id)}
                    className={`rounded-full px-3 py-1 text-[10px] font-bold transition ${
                      followedUsers[person.id]
                        ? "border border-slate-200 bg-slate-100 text-slate-700"
                        : "bg-[#0D3022] text-white hover:bg-[#144330]"
                    }`}
                  >
                    {followedUsers[person.id] ? "Following" : "Follow"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Addis Spots */}
          <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-900">
                Trending Addis Spots
              </h3>
              <span className="text-[10px] font-semibold text-slate-400">
                This Week
              </span>
            </div>

            <div className="mt-3 space-y-2.5">
              {[
                {
                  name: "Kategna Restaurant",
                  area: "Bole Atlas • ★ 4.9",
                  img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=120&q=80",
                },
                {
                  name: "Tomoca Coffee Heritage",
                  area: "Wavel St, Piassa • ★ 4.95",
                  img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=120&q=80",
                },
                {
                  name: "Fendika Cultural Azmari",
                  area: "Kazanchis • ★ 4.85",
                  img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=120&q=80",
                },
              ].map((spot, i) => (
                <div
                  key={i}
                  className="flex cursor-pointer items-center justify-between rounded-xl bg-[#F8FAFC] p-2 transition hover:bg-slate-100"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src={spot.img}
                      alt={spot.name}
                      className="h-9 w-9 rounded-lg object-cover"
                    />
                    <div>
                      <div className="text-[11.5px] font-bold text-slate-800">
                        {spot.name}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {spot.area}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Mini Info Card */}
          <div className="rounded-2xl border border-slate-200/70 bg-white p-4 text-[11px] leading-relaxed text-slate-500 shadow-xs">
            <div className="font-bold text-slate-800">
              🛡 MELLA Curator Promise
            </div>
            <p className="mt-1">
              Every review on MELLA comes from verified diners and heritage
              kitchens across Ethiopia.
            </p>
          </div>
        </aside>
      </main>

      {/* FOOTER */}
      <footer className="mt-10 border-t border-slate-200/80 bg-white py-10">
        <div className="mx-auto grid max-w-[1260px] grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          <div>
            <div
              className={`${playfair.className} text-xl font-bold text-[#0D3022]`}
            >
              MELLA<span className="text-[#B4532A]">.</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Celebrating Ethiopian culinary heritage, regional dishes, and the
              people who gather around the mesob.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Discover
            </h4>
            <ul className="mt-2.5 space-y-1.5 text-xs text-slate-500">
              <li>Addis Ababa Dining Guide</li>
              <li>Regional Specialties</li>
              <li>Traditional Coffee Houses</li>
              <li>Heritage Chefs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Community
            </h4>
            <ul className="mt-2.5 space-y-1.5 text-xs text-slate-500">
              <li>Curator Portal</li>
              <li>Host a Heritage Table</li>
              <li>Taste Moments</li>
              <li>Curator Guidelines</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Editorial Digest
            </h4>
            <p className="mt-2 text-xs text-slate-500">
              Weekly stories on Ethiopian kitchens and hidden spots.
            </p>
            <div className="mt-3 flex gap-1.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs focus:outline-none"
              />
              <button className="rounded-lg bg-[#0D3022] px-3.5 py-1.5 text-xs font-bold text-white">
                Join
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}