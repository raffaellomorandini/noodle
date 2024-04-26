import Link from "next/link";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {user ? (
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      ) : (
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      )}
      
    </main>
  );
}
