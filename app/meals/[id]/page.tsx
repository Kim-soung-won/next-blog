import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/shared/db/meals/meals";
import { notFound } from "next/navigation";



// 폴더 명[] 안의 id를 받아올 수 있다.
interface Params {
  id: string;
}

/**
 * 동적 MetaData 생성
 * Nextjs는 모든 page, layout에 지정된 metadata를 수집하여 사용자에게 보여줍니다.
 * 이 metadata는 SEO(Search Engine Optimization)에 사용된다.
 * title: 페이지의 제목
 * description: 페이지의 설명
 * 등등 https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 * 
 */
export async function generateMetadata({ params }: { params: Params }) {
  const meal = await getMeal(parseInt(params.id));

  if(!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.instructions,
  };
};

export default async function MealDetailsPage({ params }: { params: Params }) {
  const meal = await getMeal(parseInt(params.id));

  if (!meal) {
    // 가장 가까운 not found 페이지로 렌더링
    notFound();
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title}/>
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.createor}>
            by <a href={`mailto:${meal.creator_email}`}>NAME</a>
          </p>
          <p className={classes.summary}>SUMMARY</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} 
        dangerouslySetInnerHTML={{
          __html: meal.instructions.replace(/\n/g, "<br>")
        }}></p>
      </main>
    </>
  );
}
