import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const pattaya = localFont({
  src: "./fonts/Pattaya-Regular.ttf",
  weight: "700",
  style: "italic",
});

export default function Home() {
  return (
    <main className="h-full w-full bg-brand_2 overflow-y-auto">
      <div className="h-full mx-3 flex flex-wrap items-center justify-center p-6">
        <div className="my-2 flex items-center justify-center w-full rounded-2xl md:mr-4 md:w-2/5">
          <Image
            src="/logo.png"
            alt="Souly Logo"
            width={100}
            height={100}
            className="w-5/6 rounded-2xl"
          />
        </div>
  
        <div className="mx-3 flex flex-col items-center gap-2 md:w-1/2">
          <h1 className="mb-5 text-center text-4xl lg:text-5xl font-bold text-txt">
            Welcome to Souly !
          </h1>
          <p
            className={`${pattaya.className} mb-2 text-center text-3xl lg:text-4xl text-txt`}
          >
            Find Your Heart
          </p>
          <p
            className={`${pattaya.className} mb-4 text-center text-3xl lg:text-4xl text-txt`}
          >
            Create Your Soul
          </p>
          <Link
            href="/auth/signup"
            className="m-2 rounded-2xl border-4 border-bdr bg-btn px-4 py-2 text-center text-3xl text-txt hover:bg-btn/60"
          >
            Start Painting
          </Link>
        </div>
      </div>
    </main>
  );
}
