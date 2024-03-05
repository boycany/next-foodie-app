import Link from "next/link";
import Image from "next/image";

import styles from "./meal-item.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
    if (!image) {
        return;
    }

    const imgUrl =
        "https://yhc-nextjs-demo-image.s3.ap-northeast-2.amazonaws.com/" +
        image;

    return (
        <article className={styles.meal}>
            <header>
                <div className={styles.image}>
                    {/* Add 'fill' attribute when we don't know the image size */}
                    <Image src={imgUrl} alt={title} fill />
                </div>
                <div className={styles.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={styles.content}>
                <p className={styles.summary}>{summary}</p>
                <div className={styles.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
}
