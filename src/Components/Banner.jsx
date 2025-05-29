/* eslint-disable no-unused-vars */
import { FaArrowRight } from "react-icons/fa6";
import ButtonComponent from "../Ui/ButtonComponent";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <motion.section
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className=" py-5 md:py-20 px-4 md:px-6"
    >
      <div className="max-w-[86rem] justify-self-center w-full text-center border rounded-2xl overflow-hidden bg-gradient-color text-white flex flex-col justify-center items-center gap-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold  ">
          Ready to Transform Your Digital Presence?
        </h1>
        <p>
          Let's discuss how we can help you achieve your business goals with our
          tailored digital solutions.
        </p>
        <ButtonComponent href="#contact" className="btn__secondary-color">
          Get Started Today
          <FaArrowRight />
        </ButtonComponent>
      </div>
    </motion.section>
  );
};

export default Banner;
