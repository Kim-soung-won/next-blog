import Link from "next/link";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/shared/db/meals/meals";
import { notFound } from "next/navigation";

// 폴더 명[] 안의 id를 받아올 수 있다.
interface Params {
  id: string;
}

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
