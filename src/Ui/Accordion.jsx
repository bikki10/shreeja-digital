import { useState } from "react";
import { accordionData } from "../constants/accordion";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative px-5">
      <div className="mx-auto max-w-3xl divide-y divide-gray-200">
        {accordionData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between text-left font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-200"
              >
                <span className="hover:underline underline-offset-2 font-semibold">{item.question}</span>
                <span
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    fill="none"
                    height={24}
                    width={24}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
                } overflow-hidden`}
              >
                <div className="text-base text-gray-600 overflow-hidden">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
