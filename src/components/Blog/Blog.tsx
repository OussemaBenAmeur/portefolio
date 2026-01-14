"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/portfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./Blog.module.css";

export default function Blog() {
    const hasPosts = blogPosts.length > 0;

    return (
        <section className={styles.section} id="blog">
            <SectionTitle title="Blog" subtitle="My thoughts and writings" />

            <div className={styles.container}>
                {hasPosts ? (
                    blogPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            className={styles.postCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <span className={styles.date}>{post.date}</span>
                            <h3 className={styles.postTitle}>{post.title}</h3>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <div className={styles.tags}>
                                {post.tags.map((tag) => (
                                    <span key={tag} className={styles.tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))
                ) : (
                    <motion.div
                        className={styles.emptyState}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.emptyIcon}>✍️</div>
                        <h3 className={styles.emptyTitle}>Coming Soon</h3>
                        <p className={styles.emptyText}>
                            I&apos;m working on some exciting articles about Machine Learning,
                            Software Engineering, and my journey in tech. Stay tuned!
                        </p>
                        <div className={styles.penAnimation}>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
