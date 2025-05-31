/* eslint-disable no-unused-vars */
import { FaArrowRight } from "react-icons/fa6";
import ButtonComponent from "../Ui/ButtonComponent";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <section
      className="py-5 md:py-20 px-4 md:px-6"
      aria-labelledby="banner-heading"
    >
      <motion.div
        className="max-w-[86rem] justify-self-center w-full text-center border rounded-2xl overflow-hidden bg-gradient-color text-white flex flex-col justify-center items-center gap-6 py-20"
        role="banner"
      >
        <motion.h1
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 25 }}
          transition={{ duration: 0.25, delay: 0.25 }}
          id="banner-heading"
          className="text-3xl md:text-4xl font-bold"
        >
          Ready to Transform Your Digital Presence?
        </motion.h1>
        <motion.p
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 25 }}
          transition={{ duration: 0.25, delay: 0.5 }}
          className="text-lg md:text-xl"
        >
          Let's discuss how we can help you achieve your business goals with our
          tailored digital solutions.
        </motion.p>
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 25 }}
          transition={{ duration: 0.25, delay: 0.65 }}
        >
          <ButtonComponent
            href="#contact"
            className="btn__secondary-color"
            aria-label="Get Started Today with Shreeja Digital Agency"
          >
            Get Started Today
            <FaArrowRight />
          </ButtonComponent>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
