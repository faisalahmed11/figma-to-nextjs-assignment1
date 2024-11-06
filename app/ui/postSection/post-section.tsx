import { heebo } from "@/app/lib/fonts";
import { Post } from "./post";

export function PostSection() {
  return (
    <section className="bg-[#F4E2E2] ">
      <div className=" md:max-w-[1030px]  max-w-[483px] mx-auto p-4">
        <div
          className={`${heebo.className} flex justify-between md:text-[22px]   font-medium py-2`}
        >
          <h2 className="">Recent Post</h2>
          <button className="text-[#F98585] hover:underline ">View all</button>
        </div>
        <div
          className=" grid gap-8
        justify-center md:grid-cols-2  items-center"
        >
          <Post
            title="Making a design system from scratch"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            tags="Design , Pattern"
            date="12 Feb 2020"
          />
          <Post
            title="Making a design system from scratch"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            tags="Design , Pattern"
            date="12 Feb 2020"
          />
        </div>
      </div>
    </section>
  );
}
