// import Image from "next/image";
'use client';
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
  A-SIMPLY-SELLING-MANAGER
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Add your products and start managing!
            {/* <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "} */}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            If you want to start be my guest, just click on that button.
          </p>

        </div>
        <div className="flex w-full justify-center sm:justify-start">
          <button
            className="cursor-pointer flex h-auto w-full max-w-[500px] items-center justify-center rounded-full bg-foreground px-5 py-3 text-center text-[0.68rem] font-medium leading-tight text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:text-sm md:text-base " onClick={() => {router.push("/manager")}}>
            GO TO YOUR TRUSTWORTHY FAVORITE SELLING MANAGER
          </button>
        </div>
      </main>
    </div>
  );
}
