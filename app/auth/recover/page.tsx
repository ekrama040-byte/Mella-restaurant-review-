import Link from "next/link";

export default function RecoverPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f2ed] px-4 py-10 text-[#202521]">
      <div className="w-full max-w-lg rounded-[30px] border border-[#eae2db] bg-white p-8 shadow-[0_30px_80px_rgba(20,32,28,0.12)]">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d8795b]">Account recovery</p>
        <h1 className="mt-3 text-3xl font-black text-[#202521]">Reset your password</h1>
        <p className="mt-3 text-sm leading-7 text-[#4f5b56]">
          Enter the email address linked to your MELLA account and we’ll send recovery instructions.
        </p>

        <form className="mt-8 space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#202521]">Email</span>
            <input type="email" defaultValue="kidist@demo.mella" className="w-full rounded-2xl border border-[#e6ddd5] bg-white px-4 py-3 text-sm text-[#202521] outline-none transition focus:border-[#236b4e]" />
          </label>

          <Link href="/auth/sign-in" className="flex w-full items-center justify-center rounded-2xl bg-[#236b4e] px-4 py-3 text-sm font-bold text-white shadow-[0_18px_30px_rgba(35,107,78,0.22)] transition hover:bg-[#1b553f]">
            Send reset link
          </Link>
        </form>

        <div className="mt-7 text-center text-sm text-[#4f5b56]">
          Back to {" "}
          <Link href="/auth/sign-in" className="font-bold text-[#236b4e] hover:underline">sign in</Link>
        </div>
      </div>
    </main>
  );
}
