"use client";

import { useEffect, useRef } from "react";
import styles from "./ParticleBackground.module.css";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    hue: number;
    baseSpeedX: number;
    baseSpeedY: number;
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        // Create particles - increased count by ~1.5x
        const createParticles = () => {
            const particles: Particle[] = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 10000);

            for (let i = 0; i < particleCount; i++) {
                const speedX = (Math.random() - 0.5) * 0.5;
                const speedY = (Math.random() - 0.5) * 0.5;
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 3 + 1,
                    speedX,
                    speedY,
                    baseSpeedX: speedX,
                    baseSpeedY: speedY,
                    opacity: Math.random() * 0.5 + 0.2,
                    hue: Math.random() > 0.5 ? 180 : 45, // Cyan or Gold
                });
            }
            return particles;
        };

        particlesRef.current = createParticles();

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const mouse = mouseRef.current;
            const interactionRadius = 200; // Increased radius
            const interactionStrength = 0.05; // Increased strength

            particlesRef.current.forEach((particle) => {
                // Mouse interaction - subtle attraction/repulsion
                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < interactionRadius && distance > 0) {
                    const force = (interactionRadius - distance) / interactionRadius;
                    // Gentle push away from cursor
                    particle.speedX = particle.baseSpeedX - (dx / distance) * force * interactionStrength * 10;
                    particle.speedY = particle.baseSpeedY - (dy / distance) * force * interactionStrength * 10;
                } else {
                    // Gradually return to base speed with damping
                    particle.speedX += (particle.baseSpeedX - particle.speedX) * 0.02;
                    particle.speedY += (particle.baseSpeedY - particle.speedY) * 0.02;
                }

                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

                // Color based on hue (cyan or gold)
                if (particle.hue === 180) {
                    ctx.fillStyle = `rgba(10, 205, 255, ${particle.opacity})`;
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = "rgba(10, 205, 255, 0.5)";
                } else {
                    ctx.fillStyle = `rgba(200, 155, 60, ${particle.opacity})`;
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = "rgba(200, 155, 60, 0.5)";
                }

                ctx.fill();
                ctx.shadowBlur = 0;
            });

            // Draw connections
            particlesRef.current.forEach((particle, i) => {
                particlesRef.current.slice(i + 1).forEach((otherParticle) => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(10, 205, 255, ${0.1 * (1 - distance / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}
