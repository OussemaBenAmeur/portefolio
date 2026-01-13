"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./Skills.module.css";

export default function Skills() {
    const skillCategories = Object.values(skills);

    return (
        <section className={styles.section} id="skills">
            <SectionTitle title="Skills" subtitle="Technologies I work with" />

            <div className={styles.container}>
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.title}
                        className={styles.category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    >
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                        <div className={styles.skillsList}>
                            {category.items.map((skill, skillIndex) => (
                                <motion.div
                                    key={skill.name}
                                    className={styles.skill}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                    }}
                                >
                                    <div className={styles.skillHeader}>
                                        <span className={styles.skillName}>{skill.name}</span>
                                        <span className={styles.skillLevel}>{skill.level}%</span>
                                    </div>
                                    <div className={styles.progressBar}>
                                        <motion.div
                                            className={styles.progressFill}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: categoryIndex * 0.1 + skillIndex * 0.1,
                                                ease: "easeOut",
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
