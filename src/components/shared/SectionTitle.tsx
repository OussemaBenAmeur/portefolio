"use client";

import { motion } from "framer-motion";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className={styles.ornamentContainer}>
                <span className={styles.ornament}>◆</span>
                <div className={styles.line} />
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.line} />
                <span className={styles.ornament}>◆</span>
            </div>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </motion.div>
    );
}
