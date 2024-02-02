import Link from "next/link";

export default function Meals() {
    return (
        <main>
            <h1>Meals</h1>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                <li>
                    <Link
                        style={{ color: "white", textDecoration: "none" }}
                        href="/meals/m1"
                    >
                        m1
                    </Link>
                </li>
                <li>
                    <Link
                        style={{ color: "white", textDecoration: "none" }}
                        href="/meals/m2"
                    >
                        m2
                    </Link>
                </li>
            </ul>
        </main>
    );
}
