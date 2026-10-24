import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f2ed] px-4 py-10 text-[#202521]">
      <div className="w-full max-w-4xl rounded-[30px] border border-[#eae2db] bg-white shadow-[0_30px_80px_rgba(20,32,28,0.12)]">
        <div className="grid lg:grid-cols-[1fr_1fr]">
          <section className="bg-[#236b4e] p-8 text-white lg:p-12">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold ring-1 ring-white/20">
                M
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight">MELLA</div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#dfe8e2]">join the table</div>
              </div>
            </div>

            <h1 className="mt-10 text-4xl font-black leading-tight">Start discovering Ethiopia one meal at a time.</h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#edf5f1]">
              Save favorite spots, follow local storytellers, and uncover new dishes across Addis Ababa and beyond.
            </p>
          </section>

          <section className="bg-[#faf9f6] p-6 lg:p-10">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d8795b]">Create account</p>
              <h2 className="mt-3 text-3xl font-black text-[#202521]">Join MELLA</h2>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#202521]">First name</span>
                  <input type="text" defaultValue="Kidist" className="w-full rounded-2xl border border-[#e6ddd5] bg-white px-4 py-3 text-sm text-[#202521] outline-none transition focus:border-[#236b4e]" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#202521]">Last name</span>
                  <input type="text" defaultValue="Tadesse" className="w-full rounded-2xl border border-[#e6ddd5] bg-white px-4 py-3 text-sm text-[#202521] outline-none transition focus:border-[#236b4e]" />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#202521]">Email</span>
                <input type="email" defaultValue="kidist@demo.mella" className="w-full rounded-2xl border border-[#e6ddd5] bg-white px-4 py-3 text-sm text-[#202521] outline-none transition focus:border-[#236b4e]" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#202521]">Password</span>
                <input type="password" defaultValue="password123" className="w-full rounded-2xl border border-[#e6ddd5] bg-white px-4 py-3 text-sm text-[#202521] outline-none transition focus:border-[#236b4e]" />
              </label>

              <Link href="/home" className="flex w-full items-center justify-center rounded-2xl bg-[#236b4e] px-4 py-3 text-sm font-bold text-white shadow-[0_18px_30px_rgba(35,107,78,0.22)] transition hover:bg-[#1b553f]">
                Create account
              </Link>
            </form>

            <div className="mt-8 border-t border-[#e6ddd5] pt-5 text-center text-sm text-[#4f5b56]">
              Already have an account? {" "}
              <Link href="/auth/sign-in" className="font-bold text-[#236b4e] hover:underline">Sign in</Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
