"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navItems, personalInfo } from "@/data/portfolio";
import styles from "./Navigation.module.css";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.container}>
                <a href="#home" className={styles.logo}>
                    <span className={styles.logoText}>OBA</span>
                </a>

                {/* Desktop Menu */}
                <ul className={styles.menu}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} className={styles.menuLink}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Resume Button */}
                <a
                    href="/CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resumeBtn}
                >
                    Resume
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ""}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={styles.mobileLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.mobileResumeBtn}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
}
