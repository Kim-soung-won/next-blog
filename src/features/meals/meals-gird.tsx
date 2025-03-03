import { Meal } from "@/entities/meals/meals.types";
import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

interface MealsGridProps {
  meals: Meal[];
}

export default function MealsGrid({meals}: MealsGridProps) {
  return <ul className={classes.meals}>
    {meals.map(meal => (
      <li key={meal.id}>
        <MealItem meal={meal} />
      </li>
    ))}
  </ul>
}