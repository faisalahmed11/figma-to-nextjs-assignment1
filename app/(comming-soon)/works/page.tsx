import Link from "next/link";

export default function Page() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <h1 className="sm:text-3xl text-xl font-bold">Works comming soon...</h1>
      <Link className="hover:underline hover:text-blue-900" href={"/"}>
        Go back to home
      </Link>
    </div>
  );
}
