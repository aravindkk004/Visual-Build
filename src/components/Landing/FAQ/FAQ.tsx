"use client";
import Gradient from "@/components/Gradient";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I create a new project?",
      answer:
        "After logging in, click on the 'New Project' button in the dashboard. You can name your project, select a template if desired, and start designing using the drag-and-drop canvas.",
    },
    {
      question: "Can I save my projects and continue later?",
      answer:
        "Yes! All your projects are saved securely in the cloud using MongoDB. You can load them anytime from your dashboard and continue editing without losing progress.",
    },
    {
      question: "How do I export my website code?",
      answer:
        "Once your design is ready, click the 'Export Code' button. Visual Build will generate production-ready Next.js code, including all components, pages, and styles, which you can download as a zip file.",
    },
    {
      question: "Can I use third-party libraries like carousels or charts?",
      answer:
        "Currently, you can design UI components visually. Support for third-party library installation will be added in future updates to extend functionality.",
    },
    {
      question: "Do I need coding knowledge to use Visual Build?",
      answer:
        "No coding knowledge is required. Visual Build is a no-code platform designed for designers, developers, and beginners to create fully functional Next.js websites visually.",
    },
    {
      question: "Can I customize project folder structure?",
      answer:
        "Yes! Visual Build allows you to organize folders and files in your preferred structure within the sidebar, making your project easy to manage.",
    },
    {
      question: "Is Visual Build free to use?",
      answer:
        "Visual Build offers a free tier with basic features. Advanced functionalities, like exporting production-ready code or cloud saving, may require a paid subscription in the future.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative bg-[#070a1a] py-[60px] md:px-[40px] px-[20px]">
      <Gradient />
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-center max-w-4xl mx-auto text-2xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-5xl lg:leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-300 rounded-xl overflow-hidden transition-all ${
                  activeIndex === index
                    ? "bg-[#171a34] border-indigo-600"
                    : "bg-[#171a34] border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full px-6 py-4 text-left sm:text-lg text-sm font-medium text-white hover:text-indigo-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  {activeIndex === index ? (
                    <FaMinus className="text-indigo-600 w-4 h-4" />
                  ) : (
                    <FaPlus className="w-4 h-4" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-4 text-white sm:text-base text-sm leading-6 bg-[#171a34]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
