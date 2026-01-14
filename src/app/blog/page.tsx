"use client";

import Navigation from "@/components/Navigation/Navigation";
import Blog from "@/components/Blog/Blog";
import Footer from "@/components/Footer/Footer";
import ParticleBackground from "@/components/shared/ParticleBackground";

export default function BlogPage() {
    return (
        <>
            <ParticleBackground />
            <Navigation />
            <main style={{ paddingTop: "80px" }}>
                <Blog />
            </main>
            <Footer />
        </>
    );
}
