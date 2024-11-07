"use client";
import { inter } from "@/app/lib/fonts";
import { cn } from "@/app/lib/utility";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav>
      <div
        className={cn(
          inter.className,
          "md:max-w-[283px]  md:ml-auto    flex md:justify-between justify-evenly gap-8 md:mr-[70px] font-medium sm:text-xl"
        )}
      >
        <Link
          className={cn(
            "transition-colors   border-b-2  hover:border-black/50 border-transparent",
            pathname.includes("/works") && "border-black/50"
          )}
          href="/works"
        >
          Works
        </Link>
        <Link
          className={cn(
            "transition-colors   border-b-2  hover:border-black/50 border-transparent",
            pathname.includes("/blog") && "border-black/50"
          )}
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className={cn(
            "transition-colors border-b-2 hover:border-black/50 border-transparent",
            pathname.includes("/contact") && "border-black/50"
          )}
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
