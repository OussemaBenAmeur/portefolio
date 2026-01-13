"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./Education.module.css";

export default function Education() {
    return (
        <section className={styles.section} id="education">
            <SectionTitle title="Education" subtitle="My academic background" />

            <div className={styles.container}>
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={styles.iconContainer}>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className={styles.icon}
                            >
                                <path d="M22 9L12 2 2 9l10 7 10-7z" />
                                <path d="M6 11.5V17c0 1.1 2.7 3 6 3s6-1.9 6-3v-5.5" />
                            </svg>
                        </div>

                        <div className={styles.content}>
                            <span className={styles.period}>{edu.period}</span>
                            <h3 className={styles.degree}>{edu.degree}</h3>
                            <div className={styles.school}>
                                <span className={styles.schoolName}>{edu.school}</span>
                                <span className={styles.location}>{edu.location}</span>
                            </div>
                            <p className={styles.description}>{edu.description}</p>

                            {edu.highlights && (
                                <ul className={styles.highlights}>
                                    {edu.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
