"use client";

import { motion } from "framer-motion";
import { interests } from "@/data/portfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./Interests.module.css";

export default function Interests() {
    return (
        <section className={styles.section} id="interests">
            <SectionTitle title="Interests" subtitle="What drives me outside of work" />

            <div className={styles.container}>
                {interests.map((interest, index) => (
                    <motion.div
                        key={interest.name}
                        className={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "rgba(10, 205, 255, 0.5)"
                        }}
                    >
                        <h3 className={styles.name}>{interest.name}</h3>
                        <p className={styles.description}>{interest.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
