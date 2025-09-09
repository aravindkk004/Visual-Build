"use client";
import TestimonialCard from "./TestimonialCard";
import Gradient from "@/components/Gradient";

export const testimonials = [
  {
    name: "Aravind K K",
    role: "Frontend Developer",
    initials: "A",
    feedback:
      "Visual Build made designing Next.js websites incredibly fast. The drag-and-drop canvas is intuitive and easy to use.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    initials: "P",
    feedback:
      "I can quickly prototype complex pages without writing code. The pre-built component library saves so much time.",
    rating: 4,
  },
  {
    name: "Rahul Verma",
    role: "Full Stack Engineer",
    initials: "R",
    feedback:
      "Organizing project structure visually is a game changer. Exporting production-ready code directly is super convenient.",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    role: "Frontend Developer",
    initials: "S",
    feedback:
      "Saving projects in the cloud and loading them later is seamless. It makes working on multiple projects stress-free.",
    rating: 5,
  },
  {
    name: "Karan Mehta",
    role: "Backend Developer",
    initials: "K",
    feedback:
      "The properties panel lets me style components exactly how I want. Visual Build really speeds up front-end development.",
    rating: 4,
  },
  {
    name: "Vikram Nair",
    role: "Mobile App Developer",
    initials: "V",
    feedback:
      "I love how easy it is to create responsive layouts. Exported Next.js code works perfectly, saving tons of setup time.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="relative bg-[#070a1a] md:py-[120px] py-[60px] md:px-[40px] px-[20px]">
      <Gradient />
      <h1 className="md:text-[44px] text-[32px] text-center font-extrabold text-white">
        What Our <span className="text-[#51baff]">Users</span> Say
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start mt-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
