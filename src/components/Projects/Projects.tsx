"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./Projects.module.css";

export default function Projects() {
    return (
        <section className={styles.section} id="projects">
            <SectionTitle title="Projects" subtitle="What I've built" />

            <div className={styles.container}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className={styles.cardHeader}>
                            <span className={styles.icon}>{project.icon}</span>
                            <span className={styles.date}>{project.date}</span>
                        </div>

                        <h3 className={styles.title}>{project.title}</h3>
                        <p className={styles.description}>{project.description}</p>

                        <ul className={styles.highlights}>
                            {project.highlights.map((highlight, i) => (
                                <li key={i}>{highlight}</li>
                            ))}
                        </ul>

                        <div className={styles.technologies}>
                            {project.technologies.map((tech, i) => (
                                <span key={i} className={styles.tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className={styles.cardGlow} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
