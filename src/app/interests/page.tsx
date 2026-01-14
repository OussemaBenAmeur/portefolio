"use client";

import Navigation from "@/components/Navigation/Navigation";
import Interests from "@/components/Interests/Interests";
import Footer from "@/components/Footer/Footer";
import ParticleBackground from "@/components/shared/ParticleBackground";

export default function InterestsPage() {
    return (
        <>
            <ParticleBackground />
            <Navigation />
            <main style={{ paddingTop: "80px" }}>
                <Interests />
            </main>
            <Footer />
        </>
    );
}
