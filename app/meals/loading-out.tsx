import classes from "./loading.module.css"

// 데이터를 Loading 시에 보여줄 컴포넌트
export default function MealsLoading() {
  return <p className={classes.loading}>Fetching meals...</p>
}