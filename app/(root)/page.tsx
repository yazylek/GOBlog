import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="px-11">
      <div className=" grid justify-center md:grid-cols-3 grid-cols-1 gap-10 w-full ">
        <div className="md:col-span-2 flex flex-col gap-4">
          <h1 className="md:text-7xl text-5xl font-bold">
            Welcome to <span className="text-primary underline">GoBlog</span>
          </h1>
          <h2 className="md:text-3xl text-2xl font-bold">
            Share Your Thoughts, Inspire Others.
          </h2>
          <p className="md:text-2xl text-lg text-primaryGrey max-w-[40rem]">
            {`GoBlog is a platform where you can express yourself, share your
            ideas, and connect with a community of like-minded individuals.
            Whether you're passionate about technology, lifestyle, business, or
            personal development, your voice matters here.`}
          </p>

          <Link href="/sign-up" className="w-full">
            <Button
              size="lg"
              className="w-full md:max-w-60 text-xl font-medium"
            >
              Get Started
            </Button>
          </Link>
        </div>
        <div className="self-center md:justify-self-end justify-self-center">
          <Image
            src="/gopher-dance.gif"
            alt="dancing gopher"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}
