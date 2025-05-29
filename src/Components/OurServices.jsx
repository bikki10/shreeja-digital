/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import ServiceCard from "../Ui/ServiceCard";
import { ServiceCardData } from "../constants/ServicesData";

const OurServices = () => {
  return (
    <section id="services" className="pt-20 pb-10 md:py-20 bg-gray-50">
      <div className="container max-w-[86rem] px-4 md:px-6 justify-self-center">
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay:0.25 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our
            <span className="text-gradient"> Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of digital services to help your
            business thrive in the digital world.
          </p>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ServiceCardData.map((item, index) => {
            return (
              <ServiceCard
                key={index}
                icon={item.icon}
                title={item.title}
                details={item.details}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
