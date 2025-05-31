/* eslint-disable no-unused-vars */
import ButtonComponent from "../Ui/ButtonComponent";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "motion/react";
import heroImage from "/hero.png";

const Homepage = () => {
  return (
    <section
      id="homepage"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white/90"
      aria-labelledby="homepage-heading"
    >
      <div className="container mx-auto px-4 relative z-10 max-w-[86rem]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.25 }}
            id="homepage-heading"
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            We Create{" "}
            <span className="bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent">
              Digital Experiences
            </span>{" "}
            That Matter
          </motion.h1>
          <motion.p
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.25, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-4xl"
          >
            Transforming ideas into exceptional digital solutions. Our team of
            experts combines creativity and technology to deliver results that
            exceed expectations.
          </motion.p>
          <motion.div
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.25, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <ButtonComponent
              href="#contact"
              className="btn__primary justify-center flex items-center gap-1 hover:-translate-y-1 transition-all ease-linear"
              aria-label="Get Started with Shreeja Digital Agency"
            >
              Get Started <FaArrowRight />
            </ButtonComponent>
            <ButtonComponent
              href="#whyTrustUs"
              className="btn__secondary hover:-translate-y-1 transition-all ease-linear"
              aria-label="Learn Why You Can Trust Shreeja Digital Agency"
            >
              <p className="text-indigo-600">Why Trust Us?</p>
            </ButtonComponent>
          </motion.div>
        </div>
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 25 }}
          transition={{ duration: 0.25, delay: 0.75 }}
          className="mt-16 md:mt-20 relative"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              loading="lazy"
              className="w-full h-auto"
              src={heroImage}
              alt="Hero banner showcasing digital experiences by Shreeja Digital Agency"
              width={200}
              height={200}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 -mt-8 md:-mt-16 relative z-20 mx-4 md:mx-16">
            <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 text-center items-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gradient">
                Led By
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Experienced Professionals
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 text-center items-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gradient">
                Driven By
              </h2>
              <p className="text-sm md:text-base text-gray-600">Innovation</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 text-center items-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gradient">
                Small Team
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Focused On Quality
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 text-center items-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gradient">
                Partnerships
              </h2>
              <p className="text-sm md:text-base text-gray-600">That Last</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Homepage;
