/* eslint-disable no-unused-vars */
import Accordion from "../Ui/Accordion";
import { motion } from "motion/react";

const FAQs = () => {
  return (
    <section
      id="faqs"
      className="max-w-[86rem] justify-self-center py-20"
    >
      <motion.div
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently
          <span className="text-gradient"> Asked Questions</span>
        </h2>
        <p className="text-lg text-gray-600">
          Find answers to common questions about our services and process.
        </p>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Accordion />
      </motion.div>
    </section>
  );
};

export default FAQs;
