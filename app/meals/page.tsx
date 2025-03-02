import Link from "next/link";
import classes from "./page.module.css";
import { getMeals } from "@/shared/db/meals/meals";
import MealsGrid from "@/features/meals/meals-gird";

export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share Your Favorit Recipe
          </Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
