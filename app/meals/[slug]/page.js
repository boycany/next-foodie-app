export default function MealDetailsPage({ params }) {
    return (
        <main>
            <h1>Meal Deatils</h1>
            <p>{params.slug}</p>
        </main>
    );
}
