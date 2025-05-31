/* eslint-disable no-unused-vars */
import bannerImage from "/why_trust_us.png";
import { motion } from "motion/react";

const WhyTrustUs = () => {
  return (
    <motion.section
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.25, delay: 0.25 }}
      id="whyTrustUs"
      className="py-5 md:py-20 bg-gray-50"
    >
      <div className="max-w-[86rem] mx-auto px-4 md:px-6">
        <div className="relative">
          <div
            className="rounded-xl overflow-hidden shadow-2xl"
            style={{ transform: "none" }}
          >
            <img
              className="h-auto w-full"
              src={bannerImage}
              alt="Why Trust Us"
              title="Trust Me Bro"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyTrustUs;
