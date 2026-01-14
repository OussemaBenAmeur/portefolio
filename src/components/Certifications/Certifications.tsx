"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./Certifications.module.css";

export default function Certifications() {
    return (
        <section className={styles.section} id="certifications">
            <SectionTitle title="Certifications" subtitle="Professional credentials" />

            <div className={styles.container}>
                {certifications.map((cert, index) => (
                    <motion.a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className={styles.name}>{cert.name}</h3>
                        <span className={styles.issuer}>{cert.issuer}</span>
                        <div className={styles.badge}>
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className={styles.badgeIcon}
                            >
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                            Verified
                        </div>
                        <span className={styles.linkIndicator}>
                            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.linkIcon}>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
