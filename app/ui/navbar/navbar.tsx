"use client";
import { inter } from "@/app/lib/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div
        className={`${inter.className} md:max-w-[283px]  md:ml-auto    flex md:justify-between justify-evenly gap-8 md:mr-[70px] font-medium sm:text-xl`}
      >
        <Link
          className={`transition-colors   border-b-2 ${
            pathname === "/works" ? "border-black/50" : ""
          }  hover:border-black/50 border-transparent`}
          href="/works"
        >
          Works
        </Link>
        <Link
          className={`${
            pathname === "/blog" ? "border-black/50" : ""
          } transition-colors   border-b-2 hover:border-black/50 border-transparent`}
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className={`${
            pathname === "/contact" ? "border-black/50" : ""
          } transition-colors  border-b-2 hover:border-black/50 border-transparent`}
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
