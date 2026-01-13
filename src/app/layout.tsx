import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oussema Ben Ameur | Software Engineer & ML Enthusiast",
  description:
    "Portfolio of Oussema Ben Ameur - Software Engineering student specializing in Machine Learning, MLOps, and Full-Stack Development. Based in Sousse, Tunisia.",
  keywords: [
    "Software Engineer",
    "Machine Learning",
    "MLOps",
    "Python",
    "React",
    "PyTorch",
    "Tunisia",
    "ENISo",
  ],
  authors: [{ name: "Oussema Ben Ameur" }],
  openGraph: {
    title: "Oussema Ben Ameur | Software Engineer & ML Enthusiast",
    description:
      "Portfolio of Oussema Ben Ameur - Software Engineering student specializing in Machine Learning, MLOps, and Full-Stack Development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
