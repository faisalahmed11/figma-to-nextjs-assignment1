import { heebo } from "@/app/lib/fonts";

type PostPropsType = {
  title: string;
  date: string;
  tags: string;
  content: string;
};
export function Post({ title, date, tags, content }: PostPropsType) {
  return (
    <div
      className={`${heebo.className} bg-white flex flex-col gap-y-5 px-8 py-10  max-w-[483px] `}
    >
      <h3 className="font-bold sm:text-[26px] text-xl ">{title}</h3>
      <p className="text-black/70 sm:text-lg">
        <span>
          {date} {" | "}
        </span>
        <span>{tags}</span>
      </p>
      <p className="py-4 sm:text-base text-sm text-[#21243D]">{content}</p>
    </div>
  );
}
