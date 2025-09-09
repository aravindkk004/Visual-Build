"use client";
import Gradient from "@/components/Gradient";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "🎨",
    title: "Drag & Drop Canvas",
    description:
      "Easily design your website by dragging and dropping components. Arrange layouts quickly without writing code, and see your changes in real-time.",
  },
  {
    icon: "🧩",
    title: "Component Library",
    description:
      "Access ready-to-use components like buttons, cards, and navbars. Customize them to match your brand and quickly assemble pages.",
  },
  {
    icon: "🎛️",
    title: "Styling & Properties",
    description:
      "Edit padding, margins, fonts, colors, and add simple animations. All changes are instantly reflected on the canvas for accurate previews.",
  },
  {
    icon: "📂",
    title: "Project Structure",
    description:
      "Visualize your Next.js project folder and file hierarchy. Create and organize components as you would in a real codebase.",
  },
  {
    icon: "💾",
    title: "Save & Load Projects",
    description:
      "Save projects in MongoDB and continue editing anytime. Manage multiple projects efficiently and securely in your account.",
  },
  {
    icon: "⬇️",
    title: "Export Code",
    description:
      "Download production-ready Next.js code with a single click. All components and styles are exported exactly as designed.",
  },
];



export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-[#070a1a]">
      <Gradient />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
          Build Faster. Code Smarter.
        </h2>
        <p className="max-w-2xl mx-auto px-6 text-lg text-white font-inter mb-16">
          Visual Build comes packed with all the tools you need to design, save,
          and export Next.js websites effortlessly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
