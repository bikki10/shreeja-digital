/* eslint-disable no-unused-vars */
import logo from "/shreeja_logo.png";
import { footerText } from "../constants/footer";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import ButtonComponent from "../Ui/ButtonComponent";
import { motion } from "motion/react";

const date = new Date();
const year = date.getFullYear();

const services = [
  {
    label: "Web Design",
    href: "/",
  },
  {
    label: "Web Development",
    href: "/",
  },
  {
    label: "Mobile Apps",
    href: "/",
  },
  {
    label: "UI/UX Design",
    href: "/",
  },
  {
    label: "Digital Marketing",
    href: "/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 px-4 md:px-6">
      <div className="container max-w-[86rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-gray-200">
        <div>
          <a href="/">
            <img
              className="logo"
              src={logo}
              width={100}
              height={100}
              title="Shreeja Digital Agency"
              alt="Shreeja Digital Agency"
            />
          </a>
          <div className="my-5 flex flex-col justify-center gap-4 md:pr-3">
            <p className="text-gray-600 flex flex-wrap">{footerText}</p>
            <span className="flex gap-3 text-2xl">
              <a
                title="Facebook Page"
                href="https://www.facebook.com/shreejadigitalagency"
                target="_blank"
              >
                <FaFacebook className="text-blue-600" />
              </a>
              <a
                title="Instagram Page"
                href="https://www.facebook.com/shreejadigitalagency"
                target="_blank"
              >
                <FaInstagram className="text-fuchsia-600" />
              </a>
              <a
                title="LinkedIn Page"
                href="https://www.facebook.com/shreejadigitalagency"
                target="_blank"
              >
                <FaLinkedin className="text-blue-600" />
              </a>
            </span>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Services</h2>
          <ul className="text-gray-600 text-md flex flex-wrap gap-4 mt-3 md:pr-4">
            {services.map((item, index) => {
              return (
                <a
                  className="hover:text-indigo-500 transition-all ease-in-out duration-200"
                  href={item.href}
                  key={index}
                >
                  <li>{item.label}</li>
                </a>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <div className="mt-3">
            <span className="flex items-center gap-2">
              <GoMail />
              <p className="text-gray-600">contact@shreejadigital.com</p>
            </span>
            <ButtonComponent className="btn__primary mt-3 w-full md:w-auto">
              Get In Touch
            </ButtonComponent>
          </div>
        </div>
      </div>
      <motion.p
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25, delay: 0.25 }}
        className="text-[#6B7280] text-center pt-4 text-sm"
      >
        © {year} Shreeja Digital Agency. All Rights Reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
