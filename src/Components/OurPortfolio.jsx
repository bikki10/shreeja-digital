/* eslint-disable no-unused-vars */
import ImageCard from "../Ui/ImageCard";
import { portfolioData } from "../constants/portfolioData";
import { motion } from "motion/react";

const Portfolio = () => {
  return (
    <section className="bg-white py-20" id="portfolio">
      <motion.div
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 25 }}
        transition={{ duration: 0.25, delay: 0.25 }}
        className="text-center max-w-[86rem] mx-auto "
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-gradient">Portfolio</span>
        </h2>
        <p className="text-lg text-gray-600">
          Want to see our work? Our Portfolio is filled with various products.
          Check them out!
        </p>
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 25 }}
          transition={{ duration: 0.25, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 px-4 md:px-6"
        >
          {portfolioData.map((item, index) => {
            return (
              <ImageCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
