import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { Button } from "@/components/ui/button";
import LeadVideo from "./_components/leadvideo";
import CustomerStories from "./_components/customerstories";
import ProductInfo from "./_components/productinfo";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <>
      {/* Lead Section */}
      <section className="flex w-full flex-col items-center justify-center gap-10 text-center">
        <h1 className="mt-36 text-5xl font-semibold tracking-tight">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere rem
          natus ex provident! Aspernatur iusto incidunt, eius molestiae
          temporibus culpa?
        </div>
        <div className="flex gap-10">
          {/* TODO: Pricing page */}
          <Button variant={"default"} className="bg-blue-500 hover:bg-blue-700">
            Start a Free Trail
          </Button>
          {/* TODO: Contact page */}
          <Button variant={"outline"}>Contact us</Button>
        </div>
        {/* Automated video */}
        {/* TODO: Create a lead video. */}
        <LeadVideo />
        {/* TODO: Create Customer Story component */}
        <CustomerStories />
        {/* TODO: Create a sticky animation */}
        <ProductInfo />
        {/* TODO: Use Case Component */}
        {/* TODO: Join us now component */}
      </section>
      {/* TODO: Footer component */}
    </>
  );

  if (false)
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {/* {session && <span>Logged in as {session.user?.name}</span>} */}
              </p>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>
          {session && (
            <Link
              href={"/tableview"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              Check out the table view
            </Link>
          )}
          <CrudShowcase />
        </div>
      </main>
    );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
