import ImagePicker from '@/features/meals/meal-share/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/shared/db/meals/actions';
import { Meal } from '@/entities/meals/meals.types';
import MealsFormSubmit from '@/features/meals/meal-share/meals-form-submit';

export default function ShareMealPage() {
  
  const handleSubmit = (formData) => {
    const meal: Meal = {
      creator: formData.get('name'),
      creator_email: formData.get('email'),
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image').name,
    };

    const image = formData.get('image');

    shareMeal(meal, image);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={handleSubmit}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label="Meal Image" name="image"/>
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}