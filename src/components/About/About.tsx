"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./About.module.css";

export default function About() {
    return (
        <section className={styles.section} id="about">
            <SectionTitle title="About Me" subtitle="Get to know me" />

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.text}>{personalInfo.about}</p>

                    <div className={styles.details}>
                        <div className={styles.detailItem}>
                            <span className={styles.detailIcon}>📍</span>
                            <div>
                                <span className={styles.detailLabel}>Location</span>
                                <span className={styles.detailValue}>{personalInfo.location}</span>
                            </div>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailIcon}>📧</span>
                            <div>
                                <span className={styles.detailLabel}>Email</span>
                                <a href={`mailto:${personalInfo.email}`} className={styles.detailValue}>
                                    {personalInfo.email}
                                </a>
                            </div>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailIcon}>📱</span>
                            <div>
                                <span className={styles.detailLabel}>Phone</span>
                                <span className={styles.detailValue}>{personalInfo.phone}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.highlights}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.highlightCard}>
                        <span className={styles.highlightNumber}>2+</span>
                        <span className={styles.highlightText}>Years of Learning</span>
                    </div>
                    <div className={styles.highlightCard}>
                        <span className={styles.highlightNumber}>5+</span>
                        <span className={styles.highlightText}>Projects Completed</span>
                    </div>
                    <div className={styles.highlightCard}>
                        <span className={styles.highlightNumber}>5</span>
                        <span className={styles.highlightText}>Certifications</span>
                    </div>
                    <div className={styles.highlightCard}>
                        <span className={styles.highlightNumber}>4</span>
                        <span className={styles.highlightText}>Languages Spoken</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
