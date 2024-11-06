import { inter } from "@/app/lib/fonts";
import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      <div
        className={`${inter.className} md:max-w-[283px]  md:ml-auto    flex md:justify-between justify-evenly gap-8 md:mr-[70px] font-medium sm:text-xl`}
      >
        <Link
          className={`transition-colors   border-b-2 hover:border-black/50 border-transparent`}
          href="/"
        >
          Works
        </Link>
        <Link
          className={`transition-colors   border-b-2 hover:border-black/50 border-transparent`}
          href="/"
        >
          Blog
        </Link>
        <Link
          className={`transition-colors  border-b-2 hover:border-black/50 border-transparent`}
          href="/"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
