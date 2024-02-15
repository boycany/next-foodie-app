import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

/** We can do the async function in the server component. */
async function Meals() {
    //We use the server component as default, so we won't need to use useEffect to fetch data
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
    return (
        <>
            <header className={styles.header}>
                <h1>
                    Delicious meals, created{" "}
                    <span className={styles.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy
                    and fun!
                </p>
                <p className={styles.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                {/* next.js 預設的 loading.js 也是使用 Suspense Component */}
                <Suspense fallback={<Loading />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}

function Loading() {
    return <p className={styles.loading}>Fetching meals...</p>;
}
