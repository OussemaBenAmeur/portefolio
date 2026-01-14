"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./Skills.module.css";

export default function Skills() {
    const skillCategories = Object.values(skills);

    return (
        <section className={styles.section} id="skills">
            <SectionTitle title="Skills" subtitle="Technical Arsenal" />

            <div className={styles.container}>
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.title}
                        className={styles.techPanel}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    >
                        <div className={styles.panelHeader}>
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <div className={styles.headerLine} />
                        </div>

                        <div className={styles.skillsGrid}>
                            {category.items.map((skill, skillIndex) => (
                                <div key={skill} className={styles.skillRow}>
                                    <div className={styles.skillMarker} />
                                    <span className={styles.skillName}>{skill}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.panelCorner} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
