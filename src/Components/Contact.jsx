/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import ButtonComponent from "../Ui/ButtonComponent";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";

const contactData = [
  {
    icon: <IoLocationOutline size={25} />,
    title: "Our Location",
    details: {
      text_1: "Sydney, NSW, Australia",
      text_2: "Hetauda, Nepal",
    },
  },
  {
    icon: <FiPhone size={25} />,
    title: "Phone",
    details: {
      text_1: "+61 404 672 891",
    },
  },
  {
    icon: <MdOutlineEmail size={25} />,
    title: "Email Address",
    details: {
      text_1: "contact@shreejadigital.com",
    },
  },
  {
    icon: <LuClock4 size={25} />,
    title: "Working Hours",
    details: {
      text_1: "Monday - Friday: 8:00 AM - 6:00 PM",
      text_2: "Saturday: 10:00 AM - 4:00 PM",
      text_3: "Sunday: 10:00 AM - 4:00 PM",
    },
  },
];

const Contact = () => {
  return (
    <main id="contact" className="bg-gray-50" aria-labelledby="contact-heading">
      <div className="pt-20 pb-10 md:py-20 container max-w-[86rem] px-4 md:px-6 justify-self-center">
        <motion.div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.25, delay: 0.25 }}
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.25, delay: 0.5 }}
            className="text-lg text-gray-600"
          >
            Having a question or want to discuss a project? We'd love to hear
            from you. Fill out the form below or use our contact information.
          </motion.p>
        </motion.div>
        <section className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.form
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 25 }}
              transition={{ duration: 0.25, delay: 0.55 }}
              className="rounded-xl shadow-lg p-8"
              action="submit"
              aria-label="Contact Form"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="name"
                  >
                    Your Name <span className="text-gradient">*</span>
                  </label>
                  <input
                    autoComplete="name"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f39f6] focus:border-transparent"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="email"
                  >
                    Your Email <span className="text-gradient">*</span>
                  </label>
                  <input
                    autoComplete="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f39f6] focus:border-transparent"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    autoComplete="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f39f6] focus:border-transparent"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="subject"
                  >
                    Subject <span className="text-gradient">*</span>
                  </label>
                  <input
                    autoComplete="off"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f39f6] focus:border-transparent"
                    type="text"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 mb-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="message"
                  >
                    Your Message <span className="text-gradient">*</span>
                  </label>
                  <textarea
                    id="message"
                    className="resize-none w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f39f6] focus:border-transparent"
                    rows={6}
                    placeholder="Your Message"
                    required
                  />
                </div>
              </div>
              <ButtonComponent type="submit" className="btn__primary w-full">
                Send Message
              </ButtonComponent>
            </motion.form>

            <motion.div
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.25, delay: 0.55 }}
              className="rounded-xl shadow-lg p-8 h-full"
              aria-label="Contact Information"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              {contactData.map((item, index) => (
                <div key={index} className="flex items-start mt-6">
                  <div className="mr-4 rounded-full p-2 bg-[#6F5AF61A] text-indigo-500">
                    {item.icon}
                  </div>
                  <span>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    {Object.values(item.details).map((detail, idx) => (
                      <p className="text-gray-600" key={idx}>
                        {detail}
                      </p>
                    ))}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
