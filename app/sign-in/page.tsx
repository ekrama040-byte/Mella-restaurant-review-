"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "@/components/auth/auth-context";

export default function SignInPage() {
  const router = useRouter();
  const { loginAs, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("kidist@demo.mella");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    const ok = loginAs("kidist-tadesse");
    if (!ok) {
      setError("This demo account is not available right now.");
      return;
    }

    router.push("/home");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f2ed] px-4 py-10 text-[#202521]">
      <div className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-[#e5ded6] bg-white shadow-[0_30px_80px_rgba(20,32,28,0.12)]">
        <div className="grid min-h-[720px] lg:grid-cols-[1.1fr_0.9fr]">
          <section className="relative overflow-hidden bg-[#236b4e] p-8 text-white lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_35%)]" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold ring-1 ring-white/20">
                  M
                </div>
                <div>
                  <div className="text-2xl font-black tracking-tight">MELLA</div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#dfe8e2]">Ethiopian discovery</div>
                </div>
              </div>

              <div className="mb-6 max-w-md">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#dfe8e2]">
                  New season
                </p>
                <h1 className="text-4xl font-black leading-tight lg:text-5xl">
                  Discover the tables behind every story.
                </h1>
              </div>

              <p className="max-w-lg text-sm leading-7 text-[#edf5f1]">
                Follow local tastemakers, browse Addis cafés, save dining ideas, and find your next unforgettable meal with a community built around Ethiopian food culture.
              </p>

              <div className="mt-auto flex flex-wrap gap-4 pt-10">
                <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <div className="text-2xl font-black">12k+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#dfe8e2]">active diners</div>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <div className="text-2xl font-black">800+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#dfe8e2]">heritage spots</div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center bg-[#faf9f6] p-6 lg:p-10">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d8795b]">Welcome back</p>
                <h2 className="mt-3 text-3xl font-black text-[#202521]">Sign in to MELLA</h2>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#202521]">Email</span>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full rounded-2xl border border-[#e6ddd5] bg-white py-3 pl-10 pr-4 text-sm text-[#202521] outline-none transition focus:border-[#236b4e]"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#202521]">Password</span>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="w-full rounded-2xl border border-[#e6ddd5] bg-white py-3 pl-10 pr-10 text-sm text-[#202521] outline-none transition focus:border-[#236b4e]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </label>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-[#4f5b56]">
                    <input type="checkbox" className="h-4 w-4 rounded border-[#ccd5d2] accent-[#236b4e]" defaultChecked />
                    Remember me
                  </label>
                  <Link href="/auth/recover" className="font-semibold text-[#236b4e] hover:underline">
                    Forgot password?
                  </Link>
                </div>

                {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#236b4e] px-4 py-3 text-sm font-bold text-white shadow-[0_18px_30px_rgba(35,107,78,0.22)] transition hover:bg-[#1b553f]"
                >
                  Sign in
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    loginAs("kidist-tadesse");
                    router.push("/home");
                  }}
                  className="flex w-full items-center justify-center rounded-2xl border border-[#d5cac3] bg-[#f2efe9] px-4 py-3 text-sm font-semibold text-[#202521] transition hover:bg-[#eee8e3]"
                >
                  Continue as guest
                </button>
              </form>

              <div className="mt-7 border-t border-[#e6ddd5] pt-5 text-center text-sm text-[#4f5b56]">
                New to MELLA? {" "}
                <Link href="/auth/register" className="font-bold text-[#236b4e] hover:underline">
                  Create an account
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
