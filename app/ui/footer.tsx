import Link from "next/link";
import { heebo } from "../lib/fonts";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="text-center space-y-2 ">
      <nav className="flex gap-8 justify-center">
        <Link href={"/"}>
          <FaFacebookSquare className="sm:text-3xl text-xl" />
        </Link>
        <Link href={"/"}>
          <FaInstagram className="sm:text-3xl text-xl" />
        </Link>
        <Link href={"/"}>
          <FaTwitter className="sm:text-3xl text-xl" />
        </Link>
        <Link href={"/"}>
          <FaLinkedin className="sm:text-3xl text-xl" />
        </Link>
      </nav>
      <p className={`${heebo.className} font-medium sm:text-[22px] text-lg`}>
        Copyright ©2020 All rights reserved{" "}
      </p>
    </footer>
  );
}
