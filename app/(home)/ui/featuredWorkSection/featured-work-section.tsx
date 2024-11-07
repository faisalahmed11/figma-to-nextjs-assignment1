import { heebo } from "@/app/lib/fonts";
import { FeaturedWork } from "./featured-work";

export function FeaturedWorkSection() {
  return (
    <section>
      <div className="max-w-[1030px] mx-auto p-4 py-8">
        <h2 className={`${heebo.className} sm:text-[22px] font-medium`}>
          Featured Works
        </h2>
        <div className="space-y-8 py-4">
          <FeaturedWork
            title="Designing Dashboards"
            type="Dashboard"
            imgSrc="/images/feature-work1.png"
            year="2020"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <FeaturedWork
            title="Designing Dashboards"
            type="Dashboard"
            imgSrc="/images/feature-work3.png"
            year="2020"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <FeaturedWork
            title="Designing Dashboards"
            type="Dashboard"
            imgSrc="/images/feature-work3.png"
            year="2020"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>
      </div>
    </section>
  );
}
