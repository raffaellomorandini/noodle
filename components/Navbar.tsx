"use client";

import { navLinks } from "@/lib/costants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { SignOutButton } from "@clerk/nextjs";

export const Navbar = () => {
  const path = usePathname();
  return(
    <aside className="flex flex-col gap-5 bg-slate-200 w-1/5 h-screen p-4">
      {navLinks.map((link, i) => (
        <Link
          href={link.path}
          key={i}
        >
          <Button 
            className={cn(
              "w-full",
              path === link.path && "bg-red-500 hover:bg-red-500"
            )}
          >
            {link.name}
          </Button>
        </Link>
      ))}
      <SignOutButton>
        <Button className="bg-green-500">Sign Out nigga</Button>
      </SignOutButton>
      <Link href="/">Home</Link>
    </aside>
  )
}