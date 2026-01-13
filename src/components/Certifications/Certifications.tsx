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
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className={styles.icon}>{cert.icon}</span>
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
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
