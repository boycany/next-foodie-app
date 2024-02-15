"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";

export default function NavLink({ children, href }) {
    const path = usePathname();
    // console.log("path :>> ", path);
    // console.log("path.startsWith('m') :>> ", path.startsWith("/m"));

    return (
        <>
            <Link
                href={href}
                className={
                    path.startsWith(href)
                        ? `${styles.link} ${styles.active}`
                        : styles.link
                }
            >
                {children}
            </Link>
        </>
    );
}
