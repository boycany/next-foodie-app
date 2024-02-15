"use client";

export default function error({ error }) {
    return (
        <main className="error">
            <h1>Oops, something went wrong!</h1>
            <p>Failed to fetch data. Please try again later.</p>
        </main>
    );
}
