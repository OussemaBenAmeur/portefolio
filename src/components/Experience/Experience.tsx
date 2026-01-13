"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./Experience.module.css";

export default function Experience() {
    return (
        <section className={styles.section} id="experience">
            <SectionTitle title="Experience" subtitle="My professional journey" />

            <div className={styles.container}>
                <div className={styles.timeline}>
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            className={styles.timelineItem}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className={styles.timelineDot}>
                                <div className={styles.dotInner} />
                            </div>
                            <div className={styles.timelineContent}>
                                <div className={styles.period}>{job.period}</div>
                                <h3 className={styles.title}>{job.title}</h3>
                                <div className={styles.company}>
                                    <span className={styles.companyName}>{job.company}</span>
                                    <span className={styles.location}>{job.location}</span>
                                </div>
                                <ul className={styles.highlights}>
                                    {job.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
