import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
    const randomSlug = `${meal.title}-${Math.floor(Math.random() * 100)}`;

    meal.slug = slugify(randomSlug, { lower: true });
    meal.instructions = xss(meal.instructions);

    //store image in the public folder
    const extension = meal.image.name.split(".").pop();
    const fileName = `${randomSlug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    // console.log("stream :>> ", stream);
    const bufferImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferImage), (error) => {
        if (error) {
            throw new Error("Saving image failed");
        }
    });

    meal.image = `/images/${fileName}`;
    db.prepare(
        `
        INSERT INTO meals
        (slug, title, image, summary, instructions, creator, creator_email)
        VALUES
        (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
    `
    ).run(meal);
}
