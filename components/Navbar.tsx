import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/next.svg" alt="vercel" width={100} height={24} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">Create</Link>
              {/* <button onClick={() => signOut()}>signOut</button> */}
              <form
                action={async () => {
                  "use server";

                  await signOut();
                }}
              >
                <button type="submit">sign out</button>
              </form>
              <Link href={`/user/${session.user.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
